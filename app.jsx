/* =====================================================================
   App — desktop OS shell. Composes:
   - Shortcuts on the teal desktop
   - Browser-style portfolio window (main content host)
   - Floating sticky note + Mini "Now Playing" widget
   - Bottom taskbar w/ Start menu, open windows, system tray clock
   - Mobile branch -> MobileOS()
   ===================================================================== */

const { useState, useEffect, useRef, useCallback } = React;

/* ---------------- Resize handles (used by all custom windows) ---------------- */
const useResizable = (initial, onFocus) => {
  const [pos, setPos]   = useState({ x: initial.x, y: initial.y });
  const [size, setSize] = useState({ w: initial.w, h: initial.h });
  const [max, setMax]   = useState(false);
  const [prev, setPrev] = useState(null);

  const beginDrag = (e) => {
    if (max) return;
    if (e.target.closest(".win-btn") || e.target.closest("button") || e.target.closest(".resize-h")) return;
    onFocus && onFocus();
    const sx = e.clientX, sy = e.clientY, start = { ...pos };
    const m = (ev) => setPos({
      x: Math.max(-60, Math.min(window.innerWidth - 60, start.x + ev.clientX - sx)),
      y: Math.max(0, Math.min(window.innerHeight - 50, start.y + ev.clientY - sy)),
    });
    const u = () => { window.removeEventListener("mousemove", m); window.removeEventListener("mouseup", u); };
    window.addEventListener("mousemove", m);
    window.addEventListener("mouseup", u);
  };

  const beginResize = (dir) => (e) => {
    if (max) return;
    e.stopPropagation();
    onFocus && onFocus();
    const sx = e.clientX, sy = e.clientY;
    const sp = { ...pos }, ss = { ...size };
    const m = (ev) => {
      const dx = ev.clientX - sx, dy = ev.clientY - sy;
      let nx = sp.x, ny = sp.y, nw = ss.w, nh = ss.h;
      if (dir.includes("e")) nw = Math.max(260, ss.w + dx);
      if (dir.includes("s")) nh = Math.max(180, ss.h + dy);
      if (dir.includes("w")) { nw = Math.max(260, ss.w - dx); nx = sp.x + (ss.w - nw); }
      if (dir.includes("n")) { nh = Math.max(180, ss.h - dy); ny = sp.y + (ss.h - nh); }
      setPos({ x: nx, y: ny }); setSize({ w: nw, h: nh });
    };
    const u = () => { window.removeEventListener("mousemove", m); window.removeEventListener("mouseup", u); };
    window.addEventListener("mousemove", m);
    window.addEventListener("mouseup", u);
  };

  const toggleMax = () => {
    if (max) { if (prev) { setPos(prev.pos); setSize(prev.size); } setMax(false); }
    else { setPrev({ pos: { ...pos }, size: { ...size } }); setMax(true); }
  };

  const renderHandles = () => max ? null : (
    <>
      <div className="resize-h" style={{ position:"absolute", left:6, right:6, top:-3, height:6, cursor:"ns-resize" }} onMouseDown={beginResize("n")}/>
      <div className="resize-h" style={{ position:"absolute", left:6, right:6, bottom:-3, height:6, cursor:"ns-resize" }} onMouseDown={beginResize("s")}/>
      <div className="resize-h" style={{ position:"absolute", top:6, bottom:6, left:-3, width:6, cursor:"ew-resize" }} onMouseDown={beginResize("w")}/>
      <div className="resize-h" style={{ position:"absolute", top:6, bottom:6, right:-3, width:6, cursor:"ew-resize" }} onMouseDown={beginResize("e")}/>
      <div className="resize-h" style={{ position:"absolute", top:-3, left:-3, width:10, height:10, cursor:"nwse-resize" }} onMouseDown={beginResize("nw")}/>
      <div className="resize-h" style={{ position:"absolute", top:-3, right:-3, width:10, height:10, cursor:"nesw-resize" }} onMouseDown={beginResize("ne")}/>
      <div className="resize-h" style={{ position:"absolute", bottom:-3, left:-3, width:10, height:10, cursor:"nesw-resize" }} onMouseDown={beginResize("sw")}/>
      <div className="resize-h" style={{ position:"absolute", bottom:-3, right:-3, width:14, height:14, cursor:"nwse-resize", background:"transparent" }} onMouseDown={beginResize("se")}/>
    </>
  );

  const frameStyle = max ? {
    left: 0, top: 0, width: window.innerWidth, height: window.innerHeight - 30,
  } : { left: pos.x, top: pos.y, width: size.w, height: size.h };

  return { pos, size, max, beginDrag, toggleMax, renderHandles, frameStyle };
};

/* ---------------- Draggable Window primitive ---------------- */
const DraggableWindow = ({
  initial, title, onClose, onMin,
  onFocus, z = 10, children, style, noClose,
}) => {
  const R = useResizable(initial, onFocus);
  return (
    <div className="win opening"
      onMouseDown={() => onFocus && onFocus()}
      style={{ position: "absolute", zIndex: z, ...R.frameStyle, ...style }}>
      <div className="win-title" onMouseDown={R.beginDrag} onDoubleClick={R.toggleMax}>
        <div className="ttl-text">{title}</div>
        <div className="win-btns">
          {onMin && (
            <div className="win-btn" onClick={onMin} title="Minimize">
              <svg width="8" height="2"><rect width="8" height="2" fill="#000"/></svg>
            </div>
          )}
          <div className="win-btn" onClick={R.toggleMax} title={R.max ? "Restore" : "Maximize"}>
            {R.max
              ? <svg width="9" height="9"><rect x="0" y="2" width="6" height="6" fill="none" stroke="#000"/><rect x="0" y="2" width="6" height="1.5" fill="#000"/><rect x="3" y="0" width="6" height="6" fill="none" stroke="#000"/></svg>
              : <svg width="8" height="8"><rect x="0" y="0" width="8" height="8" fill="none" stroke="#000"/><rect x="0" y="0" width="8" height="2" fill="#000"/></svg>}
          </div>
          {!noClose && (
            <div className="win-btn" onClick={onClose} title="Close" style={{ background: "#d4c0c0" }}>
              <svg width="8" height="8"><line x1="0" y1="0" x2="8" y2="8" stroke="#000" strokeWidth="1.2"/><line x1="8" y1="0" x2="0" y2="8" stroke="#000" strokeWidth="1.2"/></svg>
            </div>
          )}
        </div>
      </div>
      {children}
      {R.renderHandles()}
    </div>
  );
};

/* ---------------- Browser-style portfolio window ---------------- */
const PortfolioBrowserWindow = ({ pos, size, onFocus, z, onMin, onClose, onNav, onOpenPub, activeSection, scrollTick, setActiveFromScroll }) => {
  const t = useT();
  const { lang } = useLang();
  const bodyRef = useRef(null);
  const lockUntilRef = useRef(0);

  const scrollTo = (id) => {
    const body = bodyRef.current;
    const el = body?.querySelector("#sec-" + id);
    if (el && body) {
      lockUntilRef.current = Date.now() + 700;
      const elTop = el.getBoundingClientRect().top - body.getBoundingClientRect().top + body.scrollTop;
      body.scrollTo({ top: Math.max(0, elTop - 4), behavior: "smooth" });
    }
  };

  /* Only scroll when the user actually clicked a tab / nav action.
     scrollTick bumps on every tab click; activeSection alone (e.g. from
     scrolling) won't re-trigger a programmatic scroll. */
  useEffect(() => {
    if (scrollTick > 0 && activeSection) scrollTo(activeSection);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollTick]);

  /* Update active tab as user scrolls through sections */
  useEffect(() => {
    const body = bodyRef.current;
    if (!body) return;
    const onScroll = () => {
      if (Date.now() < lockUntilRef.current) return;
      const bodyTop = body.getBoundingClientRect().top;
      let current = NAV_SECTIONS[0];
      for (const s of NAV_SECTIONS) {
        const el = body.querySelector("#sec-" + s);
        if (el) {
          const elTop = el.getBoundingClientRect().top - bodyTop;
          if (elTop - 40 <= 0) current = s;
        }
      }
      if (current !== activeSection) setActiveFromScroll(current);
    };
    body.addEventListener("scroll", onScroll, { passive: true });
    return () => body.removeEventListener("scroll", onScroll);
  }, [activeSection, setActiveFromScroll]);

  return (
    <DraggableWindow
      initial={{ x: pos.x, y: pos.y, w: size.w, h: size.h }}
      title={<><IconGlobe size={14}/> {t("win.portfolio.title")}</>}
      z={z}
      onFocus={onFocus}
      onMin={onMin}
      onClose={onClose}
      onMax={() => {}}
    >
      {/* Menu bar */}
      <div className="win-menubar">
        <div>{t("menu.file")}</div>
        <div>{t("menu.edit")}</div>
        <div>{t("menu.view")}</div>
        <div>{t("menu.favorites")}</div>
        <div>{t("menu.tools")}</div>
        <div>{t("menu.help")}</div>
      </div>

      {/* Toolbar */}
      <div style={{
        display: "flex", alignItems: "center", gap: 0,
        padding: "3px 4px", background: "var(--gray)",
        borderBottom: "1px solid var(--shadow-m)",
      }}>
        <ToolbarBtn icon="←" label={t("tb.back")}/>
        <ToolbarBtn icon="→" label={t("tb.forward")}/>
        <span className="taskbar-divider"/>
        <ToolbarBtn icon="✕" label={t("tb.stop")}/>
        <ToolbarBtn icon="↻" label={t("tb.refresh")}/>
        <ToolbarBtn icon="⌂" label={t("tb.home")} onClick={() => onNav("home")}/>
        <span className="taskbar-divider"/>
        <ToolbarBtn iconNode={<IconSearch size={20}/>} label={t("tb.search")}/>
        <ToolbarBtn icon="★" label={t("tb.favs")}/>
        <ToolbarBtn icon="◷" label={t("tb.history")}/>
        <span className="taskbar-divider"/>
        <ToolbarBtn icon="✉" label={t("tb.mail")} onClick={() => onNav("contact")}/>
        <ToolbarBtn icon="⎙" label={t("tb.print")}/>
      </div>

      {/* Address bar */}
      <div style={{
        display: "flex", alignItems: "center", gap: 6,
        padding: "3px 6px 5px", background: "var(--gray)",
        borderBottom: "1px solid var(--shadow-m)",
        fontSize: 12,
      }}>
        <span style={{ color: "var(--text-dim)" }}>{t("tb.address")}</span>
        <div style={{
          flex: 1, background: "#fff", boxShadow: "var(--bevel-thin-in)",
          padding: "2px 6px", fontFamily:'"Courier New", monospace',
          display: "flex", alignItems: "center", gap: 6,
        }}>
          <IconGlobe size={12}/>
          <span>{langMeta(lang).domain}</span>
        </div>
        <button className="btn" style={{ padding: "2px 8px" }}>{t("tb.go")}</button>
      </div>

      {/* Tab strip */}
      <div style={{ background: "var(--gray)", padding: "6px 4px 0", borderBottom: "1px solid var(--shadow-m)" }}>
        <div className="tabs" role="tablist" aria-label="Portfolio sections">
          {NAV_SECTIONS.map(s => (
            <div key={s}
              role="tab"
              tabIndex={0}
              aria-selected={activeSection === s}
              aria-controls={"sec-" + s}
              className={"tab" + (activeSection === s ? "" : " inactive")}
              onClick={() => onNav(s)}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onNav(s); } }}
              style={{ textTransform: "uppercase", fontWeight: activeSection === s ? 700 : 400 }}
            >
              {t("nav." + s)}
            </div>
          ))}
        </div>
      </div>

      {/* Content scroll area */}
      <div ref={bodyRef} className="retro-scroll pbody"
        style={{
          flex: 1, minHeight: 0, overflow: "auto", background: "var(--content)",
        }}>
        <Hero onNav={onNav} onOpenPub={onOpenPub}/>
        <About/>
        <Skills/>
        <Research onOpenPub={onOpenPub}/>
        <Experience/>
        <Contact/>

        {/* status bar */}
        <div style={{
          padding: "6px 12px", borderTop: "1px solid var(--shadow-m)",
          background: "var(--gray)", fontSize: 11, color: "var(--text-dim)",
          display: "flex", justifyContent: "space-between",
        }}>
          <span>{t("status.done")}</span>
          <span>🔒 {t("status.internet")}</span>
        </div>
      </div>
    </DraggableWindow>
  );
};

const ToolbarBtn = ({ icon, iconNode, label, onClick }) => (
  <button onClick={onClick}
    style={{
      display: "flex", flexDirection: "column", alignItems: "center",
      gap: 1, padding: "3px 8px", minWidth: 44,
      background: "transparent", border: "1px solid transparent",
      cursor: "pointer", fontFamily: "inherit",
    }}
    onMouseDown={e => e.currentTarget.style.boxShadow = "var(--bevel-thin-in)"}
    onMouseUp={e => e.currentTarget.style.boxShadow = "none"}
    onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
    onMouseEnter={e => e.currentTarget.style.border = "1px solid var(--shadow-m)"}
    onMouseOut={e => e.currentTarget.style.border = "1px solid transparent"}
  >
    {iconNode
      ? <span style={{ height: 20, display: "grid", placeItems: "center" }}>{iconNode}</span>
      : <span style={{ fontSize: 18, lineHeight: 1, fontFamily: '"Tahoma", monospace' }}>{icon}</span>}
    <span style={{ fontSize: 10 }}>{label}</span>
  </button>
);

/* ---------------- Sticky note widget ---------------- */
const StickyNote = ({ z, onFocus, onClose }) => {
  const t = useT();
  const [pos, setPos] = useState({ x: 24, y: 380 });
  const onDown = (e) => {
    onFocus && onFocus();
    const sx = e.clientX, sy = e.clientY, start = { ...pos };
    const m = (ev) => setPos({ x: start.x + ev.clientX - sx, y: start.y + ev.clientY - sy });
    const u = () => { window.removeEventListener("mousemove", m); window.removeEventListener("mouseup", u); };
    window.addEventListener("mousemove", m); window.addEventListener("mouseup", u);
  };
  return (
    <div style={{
      position: "absolute", left: pos.x, top: pos.y, zIndex: z,
      width: 170, padding: 12,
      background: "#fff6a8",
      boxShadow: "3px 4px 0 rgba(0,0,0,0.25)",
      cursor: "move",
      transform: "rotate(-3deg)",
      fontFamily: '"Courier New", monospace',
      fontSize: 12,
      lineHeight: 1.5,
    }} onMouseDown={onDown}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 4, fontSize: 10, color: "#7a6a00", fontWeight: 700, gap: 4 }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
          <IconNote size={14}/> {t("win.notes.title")}
        </span>
        <span onClick={onClose} style={{ cursor: "pointer", fontFamily: "Tahoma" }}>✕</span>
      </div>
      <div style={{ fontWeight: 700, marginBottom: 4 }}>{t("note.l1")}</div>
      <div>{t("note.l2")}</div>
      <div>{t("note.l3")}</div>
      <div style={{ marginTop: 8, textAlign: "right", fontStyle: "italic" }}>— I.Y.A.</div>
    </div>
  );
};

/* ---------------- Mini "System Stats" widget ---------------- */
const StatsWidget = ({ z, onFocus, onClose, pos: initial }) => {
  const t = useT();
  const [pct, setPct] = useState(72);
  useEffect(() => {
    const t = setInterval(() => setPct(p => 60 + Math.round(Math.sin(Date.now()/2200)*15 + 15)), 1100);
    return () => clearInterval(t);
  }, []);
  return (
    <DraggableWindow
      initial={{ x: initial.x, y: initial.y, w: 230, h: 160 }}
      title={<><IconChart size={14}/> {t("win.stats.title")}</>}
      z={z}
      onFocus={onFocus}
      onClose={onClose}
    >
      <div style={{ padding: 10, background: "var(--paper)", fontSize: 11, flex: 1, minHeight: 0, overflow: "auto" }} className="retro-scroll">
        <div style={{ marginBottom: 6, fontFamily:'"Courier New", monospace' }}>
          {t("stats.title")}
        </div>
        <div style={{
          height: 18, background: "#fff", boxShadow: "var(--bevel-thin-in)",
          padding: 2, display: "flex", gap: 2, overflow: "hidden",
        }}>
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} style={{
              flex: 1, background: i < Math.round(pct/5) ? "var(--navy)" : "transparent",
            }}/>
          ))}
        </div>
        <div style={{ textAlign: "right", marginTop: 4, fontFamily:'"Courier New", monospace' }}>{pct}%</div>
        <div style={{ marginTop: 8, fontSize: 11, lineHeight: 1.4 }}>
          <div>● <b>{t("stats.online")}</b> &middot; {t("stats.frame")} 1842</div>
          <div style={{ color: "var(--text-dim)" }}>{t("stats.eta")} 03:24</div>
        </div>
      </div>
    </DraggableWindow>
  );
};

/* ---------------- Welcome / "About this site" window ---------------- */
const WelcomeWindow = ({ pos: initial, z, onFocus, onClose }) => {
  const t = useT();
  return (
  <DraggableWindow
    initial={{ x: initial.x, y: initial.y, w: 300, h: 220 }}
    title={<><IconComputer size={14}/> {t("win.welcome.title")}</>}
    z={z}
    onFocus={onFocus}
    onClose={onClose}
  >
    <div style={{ padding: 12, background: "var(--paper)", fontSize: 12, lineHeight: 1.5, flex: 1, minHeight: 0, overflow: "auto" }} className="retro-scroll">
      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
        <IconLandscape size={40}/>
        <div style={{ fontFamily:'"Times New Roman", serif', fontSize: 16, fontWeight: 700 }}>
          {t("welcome.title")}
        </div>
      </div>
      <p style={{ margin: 0 }} dangerouslySetInnerHTML={{__html: t("welcome.body")}}/>
      <div style={{ marginTop: 10, textAlign: "right" }}>
        <button className="btn" onClick={onClose}>{t("welcome.ok")}</button>
      </div>
    </div>
  </DraggableWindow>
  );
};

/* ---------------- Start Menu ---------------- */
const StartMenu = ({ open, onClose, onNav, onCloseAll, onOpenA11y, onOpenTerminal, onOpenGames, onOpenNotes }) => {
  const t = useT();
  if (!open) return null;
  const items = [
    { k: "about",      lbl: t("start.about"),      icon: <IconDoc size={18}/> },
    { k: "skills",     lbl: t("start.skills"),     icon: <IconWrench size={18}/> },
    { k: "research",   lbl: t("start.research"),   icon: <IconResearch size={18}/> },
    { k: "experience", lbl: t("start.experience"), icon: <IconBriefcase size={18}/> },
    { k: "contact",    lbl: t("start.contact"),    icon: <IconMail size={18}/> },
    { k: "__projects", lbl: t("start.projects"),   icon: <IconFolder size={18}/> },
    { k: "__blog",     lbl: t("start.blog"),       icon: <IconPencilDoc size={18}/> },
    { k: "__games",    lbl: t("start.games"),      icon: <IconStar size={18}/> },
    { k: "__terminal", lbl: t("start.terminal"),   icon: <IconTerminal size={18}/> },
    { k: "__notes",    lbl: t("start.notes"),      icon: <IconNote size={18}/> },
  ];
  return (
    <>
      <div style={{ position: "fixed", inset: 0, zIndex: 1500 }} onClick={onClose}/>
      <div className="startmenu" role="menu" onClick={e => e.stopPropagation()}>
        <div className="sm-rail">
          <span>portfoli<b>OS</b></span>
        </div>
        <div className="sm-items">
          {items.map(it => (
            <div key={it.k} role="menuitem" tabIndex={0} className="sm-item"
              onClick={() => {
                if (it.k === "__projects") onNav("@projects");
                else if (it.k === "__blog") onNav("@blog");
                else if (it.k === "__games") onOpenGames();
                else if (it.k === "__terminal") onOpenTerminal();
                else if (it.k === "__notes") onOpenNotes();
                else onNav(it.k);
                onClose();
              }}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") e.currentTarget.click(); }}
            >
              <span className="smico" style={{ display:"grid", placeItems:"center" }}>{it.icon}</span>
              {it.lbl}
            </div>
          ))}
          <div className="sm-divider"/>
          <div className="sm-item" onClick={() => { alert(t("alert.cv")); onClose(); }}>
            <span className="smico" style={{ display:"grid", placeItems:"center" }}><IconFloppy size={18}/></span>
            {t("start.cv")}
          </div>
          <div className="sm-item" onClick={() => { onOpenA11y(); onClose(); }}>
            <span className="smico" style={{ display:"grid", placeItems:"center" }}><IconAccessibility size={18}/></span>
            {t("start.a11y")}
          </div>
          <div className="sm-divider"/>
          <div className="sm-item" onClick={onCloseAll}>
            <span className="smico" style={{ display:"grid", placeItems:"center" }}><IconPower size={18}/></span>
            {t("start.shutdown")}
          </div>
        </div>
      </div>
    </>
  );
};

/* ---------------- Accessibility Settings ---------------- */
const AccessibilitySettings = ({ z, onFocus, onClose, settings, setSettings }) => {
  const t = useT();
  const set = (k, v) => setSettings(s => ({ ...s, [k]: v }));
  return (
    <DraggableWindow
      initial={{ x: window.innerWidth/2 - 220, y: 100, w: 440, h: 420 }}
      title={<><IconAccessibility size={14}/> {t("win.a11y.title")}</>}
      z={z}
      onFocus={onFocus}
      onClose={onClose}
    >
      <div className="win-menubar" role="menubar">
        <div role="menuitem">{t("menu.file")}</div>
        <div role="menuitem">{t("menu.help")}</div>
      </div>
      <div className="retro-scroll" style={{
        flex: 1, minHeight: 0, overflow: "auto",
        padding: 14, background: "var(--paper)",
        boxShadow: "var(--bevel-thin-in)", margin: 4,
      }}>
        <div style={{ fontFamily:'"Times New Roman", serif', fontSize: 16, fontWeight: 700, marginBottom: 4 }}>
          {t("a11y.heading")}
        </div>
        <div style={{ fontSize: 11.5, color: "var(--text-dim)", marginBottom: 14 }}>
          {t("a11y.sub")}
        </div>

        <A11ySection title={t("a11y.vision")}>
          <A11yToggle label={t("a11y.large")} hint={t("a11y.largeHint")}
            checked={settings.largeText} onChange={v => set("largeText", v)}/>
          <A11yToggle label={t("a11y.contrast")} hint={t("a11y.contrastHint")}
            checked={settings.highContrast} onChange={v => set("highContrast", v)}/>
          <A11yToggle label={t("a11y.underline")} hint={t("a11y.underlineHint")}
            checked={settings.underlineLinks} onChange={v => set("underlineLinks", v)}/>
        </A11ySection>

        <A11ySection title={t("a11y.motion")}>
          <A11yToggle label={t("a11y.reduceMotion")} hint={t("a11y.reduceMotionHint")}
            checked={settings.reduceMotion} onChange={v => set("reduceMotion", v)}/>
        </A11ySection>

        <A11ySection title={t("a11y.focus")}>
          <A11yToggle label={t("a11y.focusRing")} hint={t("a11y.focusRingHint")}
            checked={settings.focusRing} onChange={v => set("focusRing", v)}/>
        </A11ySection>

        <div style={{
          marginTop: 12, padding: "8px 10px",
          background: "var(--paper-warm)", border: "1px solid var(--shadow-m)",
          fontSize: 11.5, lineHeight: 1.5,
        }} dangerouslySetInnerHTML={{__html: t("a11y.tips")}}/>

        <div style={{ marginTop: 14, display: "flex", gap: 8, justifyContent: "flex-end" }}>
          <button className="btn" onClick={() => setSettings({
            largeText:false, highContrast:false, underlineLinks:false,
            reduceMotion:false, focusRing:false,
          })}>{t("a11y.reset")}</button>
          <button className="btn primary" onClick={onClose}>{t("a11y.ok")}</button>
        </div>
      </div>
    </DraggableWindow>
  );
};

const A11ySection = ({ title, children }) => (
  <div className="group" style={{ marginBottom: 16, paddingTop: 14 }}>
    <div className="group-title">{title}</div>
    <div style={{ display: "grid", gap: 8 }}>{children}</div>
  </div>
);

const A11yToggle = ({ label, hint, checked, onChange }) => (
  <label style={{
    display: "grid", gridTemplateColumns: "22px 1fr", gap: 8,
    cursor: "pointer", padding: "4px 2px",
  }}>
    <input
      type="checkbox"
      checked={!!checked}
      onChange={e => onChange(e.target.checked)}
      style={{ marginTop: 2 }}
    />
    <div>
      <div style={{ fontWeight: 700, fontSize: 12 }}>{label}</div>
      <div style={{ fontSize: 11, color: "var(--text-dim)", lineHeight: 1.4 }}>{hint}</div>
    </div>
  </label>
);

/* ---------------- Tray Calendar Popup ---------------- */
const TrayCalendar = ({ onClose }) => {
  const t = useT();
  const today = new Date();
  const [view, setView] = useState({ y: today.getFullYear(), m: today.getMonth() });
  const monthName = (m, y) =>
    new Date(y, m, 1).toLocaleString(undefined, { month: "long", year: "numeric" });
  const firstDay = new Date(view.y, view.m, 1).getDay(); // 0=Sun
  const daysInMonth = new Date(view.y, view.m + 1, 0).getDate();
  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  const prev = () => setView(v => v.m === 0 ? { y: v.y - 1, m: 11 } : { ...v, m: v.m - 1 });
  const next = () => setView(v => v.m === 11 ? { y: v.y + 1, m: 0 } : { ...v, m: v.m + 1 });
  const isToday = (d) =>
    d === today.getDate() && view.m === today.getMonth() && view.y === today.getFullYear();

  return (
    <div>
      <div style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: "var(--navy)", color: "#fff",
        padding: "3px 6px", fontWeight: 700, fontSize: 11,
        marginBottom: 6,
      }}>
        <button onClick={prev} style={{
          background: "var(--gray)", border: "1px solid #000",
          boxShadow: "var(--bevel-thin-out)", padding: "0 6px",
          cursor: "pointer", fontSize: 11, lineHeight: 1.2,
        }}>‹</button>
        <span>{monthName(view.m, view.y)}</span>
        <button onClick={next} style={{
          background: "var(--gray)", border: "1px solid #000",
          boxShadow: "var(--bevel-thin-out)", padding: "0 6px",
          cursor: "pointer", fontSize: 11, lineHeight: 1.2,
        }}>›</button>
      </div>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(7, 1fr)",
        background: "var(--paper)", boxShadow: "var(--bevel-thin-in)",
        padding: 4, gap: 1, fontFamily: '"Courier New", monospace',
      }}>
        {["S","M","T","W","T","F","S"].map((d, i) => (
          <div key={"h"+i} style={{
            textAlign: "center", padding: 2, fontSize: 10,
            color: "var(--navy)", fontWeight: 700,
          }}>{d}</div>
        ))}
        {cells.map((d, i) => (
          <div key={i} style={{
            textAlign: "center", padding: "3px 0", fontSize: 11,
            background: isToday(d) ? "var(--navy)" : "transparent",
            color: isToday(d) ? "#fff" : (d ? "#000" : "transparent"),
            fontWeight: isToday(d) ? 700 : 400,
            border: d ? "1px solid transparent" : "none",
          }}>{d || "."}</div>
        ))}
      </div>
      <div style={{
        marginTop: 6, paddingTop: 4, borderTop: "1px solid var(--shadow-m)",
        fontSize: 10.5, display: "flex", justifyContent: "space-between",
        color: "var(--text-dim)",
      }}>
        <span>{t("tray.today")} {today.toLocaleDateString()}</span>
        <button onClick={onClose} style={{
          background: "transparent", border: "none", cursor: "pointer",
          fontSize: 10.5, color: "var(--navy)", textDecoration: "underline",
          padding: 0,
        }}>{t("tray.close")}</button>
      </div>
    </div>
  );
};

/* ---------------- Main App ---------------- */
const AppInner = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  useEffect(() => {
    const r = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener("resize", r);
    return () => window.removeEventListener("resize", r);
  }, []);
  if (isMobile) return <MobileOS/>;

  return <Desktop/>;
};

const App = () => (
  <LangProvider>
    <AppInner/>
  </LangProvider>
);

const Desktop = () => {
  const t = useT();
  const [startOpen, setStartOpen] = useState(false);
  const [windows, setWindows] = useState({
    portfolio: { open: true,  min: false },
    notes:     { open: true,  min: false },
    stats:     { open: true,  min: false },
    welcome:   { open: true,  min: false },
    projects:  { open: false, min: false },
    blog:      { open: false, min: false },
    games:     { open: false, min: false },
    terminal:  { open: false, min: false },
    a11y:      { open: false, min: false },
  });
  const [zOrder, setZOrder] = useState(["welcome","stats","notes","portfolio"]);
  const [pubOpen, setPubOpen] = useState(null);
  const [projectFile, setProjectFile] = useState(null);
  const [openGames, setOpenGames] = useState([]); // [{id, instance}]
  const [activeSection, setActiveSection] = useState("home");
  const [scrollTick, setScrollTick] = useState(0);
  const [shutdown, setShutdown] = useState(false);
  const [selected, setSelected] = useState(null);
  const [clock, setClock] = useState(fmtClock());
  const [calOpen, setCalOpen] = useState(false);
  const [a11y, setA11y] = useState(() => {
    try { return JSON.parse(localStorage.getItem("a11y")) || {
      largeText:false, highContrast:false, underlineLinks:false,
      reduceMotion:false, focusRing:false,
    }; } catch { return { largeText:false, highContrast:false, underlineLinks:false, reduceMotion:false, focusRing:false }; }
  });

  useEffect(() => { localStorage.setItem("a11y", JSON.stringify(a11y)); }, [a11y]);

  useEffect(() => {
    const t = setInterval(() => setClock(fmtClock()), 1000 * 15);
    return () => clearInterval(t);
  }, []);

  const bringToFront = (key) => {
    setZOrder(prev => [...prev.filter(k => k !== key), key]);
  };
  const zFor = (key) => 10 + zOrder.indexOf(key);

  const openWin = (key) => {
    setWindows(w => ({ ...w, [key]: { ...(w[key] || {}), open: true, min: false } }));
    bringToFront(key);
    if (pubOpen) bringToFront("publication");
  };
  const closeWin = (key) => setWindows(w => ({ ...w, [key]: { ...w[key], open: false } }));
  const minWin   = (key) => setWindows(w => ({ ...w, [key]: { ...w[key], min: true } }));

  const navTo = (section) => {
    if (section === "@projects") { openWin("projects"); return; }
    if (section === "@blog")     { openWin("blog"); return; }
    setActiveSection(section);
    setScrollTick(t => t + 1);
    openWin("portfolio");
  };

  /* desktop click clears selection */
  const onDesktopClick = (e) => {
    if (e.target === e.currentTarget) setSelected(null);
  };

  if (shutdown) return <ShutdownScreen onPower={() => setShutdown(false)}/>;

  const taskbarApps = [
    { key: "portfolio", icon: <IconGlobe size={18}/>,    name: t("task.portfolio") },
    { key: "projects",  icon: <IconFolder size={18}/>,   name: t("task.projects") },
    { key: "blog",      icon: <IconPencilDoc size={18}/>, name: t("task.blog") },
    { key: "games",     icon: <IconStar size={18}/>,    name: t("task.games") },
    { key: "terminal",  icon: <IconTerminal size={18}/>, name: t("task.terminal") },
    { key: "a11y",      icon: <IconAccessibility size={18}/>, name: t("task.a11y") },
    { key: "welcome",   icon: <IconComputer size={18}/>, name: t("task.welcome") },
    { key: "notes",     icon: <IconNote size={18}/>,    name: t("task.notes") },
    { key: "stats",     icon: <IconChart size={18}/>,   name: t("task.stats") },
  ].filter(a => windows[a.key]?.open);

  const desktopClass = "desktop"
    + (a11y.largeText ? " a11y-large" : "")
    + (a11y.highContrast ? " a11y-contrast" : "")
    + (a11y.underlineLinks ? " a11y-underline" : "")
    + (a11y.reduceMotion ? " a11y-still" : "")
    + (a11y.focusRing ? " a11y-focus" : "");

  return (
    <div className={desktopClass} onClick={onDesktopClick}>
      {/* Desktop shortcuts */}
      <div className="shortcuts">
        <Shortcut sel={selected==="comp"}  onSelect={() => setSelected("comp")}   onOpen={() => openWin("welcome")}      icon={<IconComputer size={44}/>} label={t("sc.mycomp")}/>
        <Shortcut sel={selected==="about"} onSelect={() => setSelected("about")}  onOpen={() => navTo("about")}          icon={<IconDoc size={44}/>}      label={t("start.about")}/>
        <Shortcut sel={selected==="proj"}  onSelect={() => setSelected("proj")}   onOpen={() => openWin("projects")}     icon={<IconFolder size={44}/>}   label={t("sc.projects")}/>
        <Shortcut sel={selected==="blog"}  onSelect={() => setSelected("blog")}   onOpen={() => openWin("blog")}         icon={<IconPencilDoc size={44}/>} label={t("sc.blog")}/>
        <Shortcut sel={selected==="rese"}  onSelect={() => setSelected("rese")}   onOpen={() => navTo("research")}       icon={<IconBook size={44}/>}     label={t("sc.research")}/>
        <Shortcut sel={selected==="web"}   onSelect={() => setSelected("web")}    onOpen={() => navTo("experience")}     icon={<IconGlobe size={44}/>}    label={t("sc.web")}/>
        <Shortcut sel={selected==="tools"} onSelect={() => setSelected("tools")}  onOpen={() => navTo("skills")}         icon={<IconWrench size={44}/>}   label={t("sc.tools")}/>
        <Shortcut sel={selected==="games"} onSelect={() => setSelected("games")}  onOpen={() => openWin("games")}        icon={<IconStar size={44}/>}     label={t("sc.games")}/>
        <Shortcut sel={selected==="term"}  onSelect={() => setSelected("term")}   onOpen={() => openWin("terminal")}     icon={<IconTerminal size={44}/>} label={t("sc.term")}/>
        <Shortcut sel={selected==="notes"} onSelect={() => setSelected("notes")}  onOpen={() => openWin("notes")}        icon={<IconNote size={44}/>}     label={t("sc.notes")}/>
        <Shortcut sel={selected==="bin"}   onSelect={() => setSelected("bin")}    onOpen={() => alert(t("alert.binEmpty"))} icon={<IconTrash size={44}/>}    label={t("sc.bin")}/>
        <Shortcut sel={selected==="cv"}    onSelect={() => setSelected("cv")}     onOpen={() => alert(t("alert.cv"))}    icon={<IconFloppy size={44}/>}   label={t("sc.cv")}/>
        <Shortcut sel={selected==="mail"}  onSelect={() => setSelected("mail")}   onOpen={() => navTo("contact")}        icon={<IconMail size={44}/>}     label={t("sc.contact")}/>
      </div>

      {/* Windows */}
      {windows.welcome.open && !windows.welcome.min && (
        <WelcomeWindow
          pos={{ x: window.innerWidth - 300, y: 28 }}
          z={zFor("welcome")}
          onFocus={() => bringToFront("welcome")}
          onClose={() => closeWin("welcome")}
        />
      )}

      {windows.portfolio.open && !windows.portfolio.min && (
        <PortfolioBrowserWindow
          pos={{ x: 130, y: 22 }}
          size={{ w: Math.min(940, window.innerWidth - 160), h: window.innerHeight - 70 }}
          z={zFor("portfolio")}
          onFocus={() => bringToFront("portfolio")}
          onMin={() => minWin("portfolio")}
          onClose={() => closeWin("portfolio")}
          onMax={null}
          onNav={navTo}
          onOpenPub={(p) => { setPubOpen(p); bringToFront("publication"); }}
          activeSection={activeSection}
          scrollTick={scrollTick}
          setActiveFromScroll={setActiveSection}
        />
      )}

      {windows.notes.open && !windows.notes.min && (
        <StickyNote
          z={zFor("notes")}
          onFocus={() => bringToFront("notes")}
          onClose={() => closeWin("notes")}
        />
      )}

      {windows.stats.open && !windows.stats.min && (
        <StatsWidget
          pos={{ x: 24, y: 540 }}
          z={zFor("stats")}
          onFocus={() => bringToFront("stats")}
          onClose={() => closeWin("stats")}
        />
      )}

      {windows.projects.open && !windows.projects.min && (
        <ProjectsExplorer
          z={zFor("projects")}
          onFocus={() => bringToFront("projects")}
          onMin={() => minWin("projects")}
          onClose={() => closeWin("projects")}
          onOpenFile={(f) => { setProjectFile(f); bringToFront("projectFile"); }}
        />
      )}

      {windows.blog.open && !windows.blog.min && (
        <BlogWindow
          z={zFor("blog")}
          onFocus={() => bringToFront("blog")}
          onMin={() => minWin("blog")}
          onClose={() => closeWin("blog")}
        />
      )}

      {windows.games.open && !windows.games.min && (
        <GamesExplorer
          z={zFor("games")}
          onFocus={() => bringToFront("games")}
          onMin={() => minWin("games")}
          onClose={() => closeWin("games")}
          onOpenGame={(id) => {
            setOpenGames(arr => arr.find(g => g.id === id) ? arr : [...arr, { id, inst: Date.now() }]);
            bringToFront("game-" + id);
          }}
        />
      )}

      {openGames.map(g => (
        <GameWindow key={g.inst} gameId={g.id}
          z={zFor("game-" + g.id)}
          onFocus={() => bringToFront("game-" + g.id)}
          onMin={() => bringToFront("games")}
          onClose={() => setOpenGames(arr => arr.filter(x => x.id !== g.id))}
        />
      ))}

      {windows.terminal.open && !windows.terminal.min && (
        <TerminalWindow
          z={zFor("terminal")}
          onFocus={() => bringToFront("terminal")}
          onMin={() => minWin("terminal")}
          onClose={() => closeWin("terminal")}
        />
      )}

      {windows.a11y.open && !windows.a11y.min && (
        <AccessibilitySettings
          z={zFor("a11y")}
          onFocus={() => bringToFront("a11y")}
          onClose={() => closeWin("a11y")}
          settings={a11y}
          setSettings={setA11y}
        />
      )}

      {projectFile && (
        <ProjectViewer
          file={projectFile}
          z={20 + zOrder.length}
          onFocus={() => bringToFront("projectFile")}
          onClose={() => setProjectFile(null)}
        />
      )}

      {pubOpen && (
        <PublicationModal
          pub={pubOpen}
          onClose={() => setPubOpen(null)}
          bringToFront={() => bringToFront("publication")}
          z={15 + zOrder.length}
        />
      )}

      {/* Taskbar */}
      <div className="taskbar">
        <div className={"start-btn" + (startOpen ? " active" : "")}
          onClick={(e) => { e.stopPropagation(); setStartOpen(s => !s); }}>
          <span className="flag"><i/><i/><i/><i/></span>
          {t("start.start")}
        </div>
        <span className="taskbar-divider"/>
        {taskbarApps.map(a => (
          <div key={a.key}
            className={"task-tab" + ((!windows[a.key].min && zOrder[zOrder.length-1] === a.key) ? " active" : "")}
            onClick={() => {
              if (windows[a.key].min) {
                setWindows(w => ({ ...w, [a.key]: { ...w[a.key], min: false } }));
              } else if (zOrder[zOrder.length-1] === a.key) {
                minWin(a.key);
              }
              bringToFront(a.key);
            }}>
            {a.icon}
            <span className="tname">{a.name}</span>
          </div>
        ))}
        <div className="tray" title={t("tray.calTip")}>
          <LangSwitcher/>
          <div
            onClick={() => setCalOpen(c => !c)}
            style={{ display: "flex", alignItems: "center", gap: 8, cursor: "default", height: "100%" }}
          >
            <IconCalendar size={16}/>
            <span className="clock">{clock}</span>
          </div>
          {calOpen && (
            <div className="tray-cal" onClick={e => e.stopPropagation()}>
              <TrayCalendar onClose={() => setCalOpen(false)}/>
            </div>
          )}
        </div>
      </div>

      <StartMenu
        open={startOpen}
        onClose={() => setStartOpen(false)}
        onNav={navTo}
        onOpenA11y={() => openWin("a11y")}
        onOpenTerminal={() => openWin("terminal")}
        onOpenGames={() => openWin("games")}
        onOpenNotes={() => openWin("notes")}
        onCloseAll={() => { setShutdown(true); setStartOpen(false); }}
      />
    </div>
  );
};

const Shortcut = ({ icon, label, sel, onSelect, onOpen }) => {
  return (
    <div className={"shortcut" + (sel ? " selected" : "")}
      onClick={(e) => { e.stopPropagation(); onSelect(); }}
      onDoubleClick={onOpen}>
      <div className="ico-box">{icon}</div>
      <span className="lbl">{label}</span>
    </div>
  );
};

/* ---------------- Shutdown screen ---------------- */
const ShutdownScreen = ({ onPower }) => {
  const t = useT();
  return (
  <div style={{
    position: "fixed", inset: 0,
    background: "#000", color: "#e7c44a",
    fontFamily:'"Courier New", monospace',
    padding: 40, fontSize: 13, lineHeight: 1.7,
  }}>
    <div>{t("shut.safe")}</div>
    <div style={{ marginTop: 30 }}>
      <button className="btn" onClick={onPower}>{t("shut.restart")}</button>
    </div>
  </div>
  );
};

/* ---------------- Mount ---------------- */
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
window.postMessage({ slideIndexChanged: 0 }, "*");

Object.assign(window, { DraggableWindow });
