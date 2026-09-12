/* =====================================================================
   Android app screens — Holo era styled.
   Each screen renders inside <div class="a-app-frame opening">.
   ===================================================================== */

/* ---------- ME (full one-page CV) ---------- */
const MeApp = ({ onOpen }) => {
  const t = useT();
  return (
    <>
      <ActionBar
        iconAppId="me"
        title="Onur Tellioglu"
        sub={t("hero.tagline")}
        actions={[
          { icon: <Glyph.Search size={20}/>, label: t("a.search") },
          { icon: <Glyph.More size={20}/>,   label: t("a.more") },
        ]}
      />
      <div className="a-body">

        {/* ===== Hero ===== */}
        <div style={{
          background: "linear-gradient(180deg, #1a2030, #0e1014)",
          padding: "22px 18px 22px",
          display: "flex", gap: 16, alignItems: "center",
          borderBottom: "1px solid var(--holo-divider)",
        }}>
          <div style={{
            width: 104, height: 104, flexShrink: 0,
            background: "#0a0a0a", padding: 3,
            border: "1px solid rgba(51,181,229,0.3)",
            boxShadow: "0 0 18px rgba(51,181,229,0.2)",
          }}>
            <img src="portfolios-assets/onur-portrait-placeholder.svg"
              alt="" draggable={false}
              style={{ width:"100%", height:"100%", objectFit:"cover", imageRendering:"pixelated" }}/>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 12, color: "var(--holo-text-dim)", marginBottom: 2 }}>
              {t("hero.greeting")}
            </div>
            <div style={{ fontSize: 20, fontWeight: 500, lineHeight: 1.15 }}>
              Onur<br/>Tellioglu
            </div>
            <div style={{
              display: "inline-block", marginTop: 8,
              color: "var(--holo-cyan)", fontSize: 11.5,
              fontFamily: '"Roboto Condensed", sans-serif',
              letterSpacing: "0.08em", textTransform: "uppercase",
              borderTop: "1px solid var(--holo-cyan)",
              borderBottom: "1px solid var(--holo-cyan)",
              padding: "2px 0",
            }}>{t("contact.locationVal")} · TR / EN / DE</div>
          </div>
        </div>

        {/* Intro */}
        <div style={{ padding: "16px 16px 4px", fontSize: 13.5, lineHeight: 1.6, color: "#cfd6dd" }}>
          {t("hero.intro")}
        </div>

        {/* Stats row */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "var(--holo-divider)", margin: "14px 0" }}>
          {[
            ["8", t("stat.pubs")],
            ["AI", t("stat.cs")],
            ["TR·EN·DE", t("stat.rw")],
          ].map(([big, lbl], i) => (
            <div key={i} style={{ background: "#0e1014", padding: "16px 10px", textAlign: "center" }}>
              <div style={{ fontSize: 28, fontWeight: 300, color: "var(--holo-cyan)", lineHeight: 1 }}>{big}</div>
              <div style={{ fontSize: 11, color: "var(--holo-text-dim)", marginTop: 6, lineHeight: 1.3 }}>{lbl}</div>
            </div>
          ))}
        </div>

        {/* ===== About / Disciplines ===== */}
        <div className="a-sectionhead">{t("sec.about.title")}</div>
        <div className="a-list">
          {[
            { ico: () => <IconComputer size={32}/>, k: "about.cs",  appId: "skills" },
            { ico: () => <IconChip size={32}/>,     k: "about.cb",  appId: "research" },
            { ico: () => <IconRobot size={32}/>,    k: "about.rd",  appId: "experience" },
            { ico: () => <IconGlobe size={32}/>,    k: "about.web", appId: "experience" },
          ].map((d, i) => (
            <div key={i} className="a-list-row" onClick={() => onOpen && onOpen(d.appId)}>
              <div className="lr-ico">{d.ico()}</div>
              <div>
                <div className="lr-title">{t(d.k + ".title").replace("&amp;","&")}</div>
                <div className="lr-sub">{t(d.k + ".body")}</div>
              </div>
              <div style={{ color: "var(--holo-cyan)", fontSize: 18, opacity: 0.6 }}>›</div>
            </div>
          ))}
        </div>

        {/* ===== Skills snapshot ===== */}
        <SectionWithViewAll
          title={t("nav.skills").toUpperCase()}
          sub={`${SKILLS.length} ${t("sec.research.items")}`}
          onView={() => onOpen && onOpen("skills")}
        />
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(78px, 1fr))",
          gap: 4, padding: "10px 12px 4px",
        }}>
          {SKILLS.map(s => {
            const Tile = SKILL_TILES[s];
            return (
              <div key={s} style={{
                display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
                padding: "8px 4px", background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.04)",
              }}>
                {Tile ? <Tile size={28}/> : <div style={{ width: 28, height: 28, background:"#222"}}/>}
                <div style={{ fontSize: 10.5, color: "#cfd6dd", textAlign: "center", lineHeight: 1.2 }}>{s}</div>
              </div>
            );
          })}
        </div>

        {/* ===== Research snapshot ===== */}
        <SectionWithViewAll
          title={t("sec.research.title")}
          sub={`${PUBLICATIONS.length} ${t("sec.research.items")}`}
          onView={() => onOpen && onOpen("research")}
        />
        <div className="a-list">
          {PUBLICATIONS.slice(0, 3).map((p, i) => (
            <div key={i} className="a-list-row" onClick={() => onOpen && onOpen("research")}>
              <div className="lr-ico"><IconDoc size={32}/></div>
              <div>
                <div className="lr-title" style={{ fontSize: 14 }}>{p.title}</div>
                <div className="lr-sub">{p.journal} · {p.year}</div>
              </div>
              <div style={{ color: "var(--holo-cyan)", fontSize: 18, opacity: 0.6 }}>›</div>
            </div>
          ))}
        </div>

        {/* ===== Experience timeline ===== */}
        <SectionWithViewAll
          title={t("sec.exp.title")}
          sub={t("m.timeline")}
          onView={() => onOpen && onOpen("experience")}
        />
        <div style={{ position: "relative", paddingLeft: 32, paddingRight: 12, paddingTop: 10 }}>
          <div style={{
            position: "absolute", left: 18, top: 14, bottom: 14, width: 2,
            background: "linear-gradient(180deg, var(--holo-cyan), transparent)",
            opacity: 0.5,
          }}/>
          {EXPERIENCE.map((e, i) => (
            <div key={i} style={{ position: "relative", paddingBottom: 14 }}>
              <div style={{
                position: "absolute", left: -19, top: 16,
                width: 12, height: 12, borderRadius: "50%",
                background: "var(--holo-cyan)",
                boxShadow: "0 0 0 3px #0e1014, 0 0 10px rgba(51,181,229,0.6)",
              }}/>
              <div className="a-card" style={{ margin: 0 }}>
                <div className="a-card-body">
                  <div className="a-card-meta">{t(`exp.${i}.period`)}</div>
                  <div className="a-card-title">{t(`exp.${i}.role`)}</div>
                  <div className="a-card-sub" style={{ marginBottom: 6 }}>{t(`exp.${i}.org`)}</div>
                  <ul style={{ margin: 0, paddingLeft: 16, fontSize: 12.5, lineHeight: 1.55, color: "#cfd6dd" }}>
                    {e.bullets.map((_, j) => <li key={j}>{t(`exp.${i}.b${j}`)}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education */}
        <div className="a-sectionhead">{t("sec.exp.eduTitle")}</div>
        <div style={{ padding: "14px 16px", display: "flex", gap: 12, alignItems: "center" }}>
          <IconCap size={36}/>
          <div style={{ fontSize: 13.5, lineHeight: 1.5, color: "#cfd6dd" }}
            dangerouslySetInnerHTML={{__html: t("sec.exp.eduBody")}}/>
        </div>

        {/* ===== Contact ===== */}
        <div className="a-sectionhead">{t("sec.contact.title")}</div>
        <div className="a-list">
          <a className="a-list-row" href="mailto:onur@onurtellioglu.com" style={lrLink}>
            <div className="lr-ico"><IconMail size={32}/></div>
            <div>
              <div className="lr-title">{t("contact.email")}</div>
              <div className="lr-sub">onur@onurtellioglu.com</div>
            </div>
            <div style={{ color: "var(--holo-cyan)", fontSize: 18, opacity: 0.6 }}>›</div>
          </a>
          <a className="a-list-row" href="https://github.com/onur-tellioglu" target="_blank" rel="noreferrer" style={lrLink}>
            <div className="lr-ico"><IconGitHub size={32}/></div>
            <div>
              <div className="lr-title">{t("contact.github")}</div>
              <div className="lr-sub">github.com/onur-tellioglu</div>
            </div>
            <div style={{ color: "var(--holo-cyan)", fontSize: 18, opacity: 0.6 }}>›</div>
          </a>
          <a className="a-list-row" href="https://onurtellioglu.com" target="_blank" rel="noreferrer" style={lrLink}>
            <div className="lr-ico"><IconGlobe size={32}/></div>
            <div>
              <div className="lr-title">{t("contact.site")}</div>
              <div className="lr-sub">onurtellioglu.com</div>
            </div>
            <div style={{ color: "var(--holo-cyan)", fontSize: 18, opacity: 0.6 }}>›</div>
          </a>
          <a className="a-list-row" href="https://fauvault.space" target="_blank" rel="noreferrer" style={lrLink}>
            <div className="lr-ico"><IconBook size={32}/></div>
            <div>
              <div className="lr-title">{t("contact.studio")}</div>
              <div className="lr-sub">fauvault.space</div>
            </div>
            <div style={{ color: "var(--holo-cyan)", fontSize: 18, opacity: 0.6 }}>›</div>
          </a>
          <a className="a-list-row" href="portfolios-assets/onur_tellioglu_cv.pdf" target="_blank" rel="noreferrer" style={lrLink}>
            <div className="lr-ico"><IconFloppy size={32}/></div>
            <div>
              <div className="lr-title">{t("contact.cv")}</div>
              <div className="lr-sub">onur_tellioglu_cv.pdf</div>
            </div>
            <div style={{ color: "var(--holo-cyan)", fontSize: 18, opacity: 0.6 }}>›</div>
          </a>
        </div>

        <div style={{ height: 90 }}/>
      </div>
      <button className="a-fab" onClick={() => {
        location.href = "mailto:onur@onurtellioglu.com";
      }} title={t("me.contactAction")}>
        <Glyph.Mail size={22}/>
      </button>
    </>
  );
};

const lrLink = { textDecoration: "none", color: "inherit" };

const SectionWithViewAll = ({ title, sub, onView }) => {
  const t = useT();
  return (
    <div className="a-sectionhead" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
      <span>{title}</span>
      <span onClick={onView} style={{
        color: "var(--holo-cyan)", fontSize: 11, fontWeight: 700,
        letterSpacing: "0.06em", cursor: "pointer", padding: "2px 4px",
      }}>VIEW ALL ›</span>
    </div>
  );
};

/* ---------- SKILLS ---------- */
const SKILL_GROUPS = [
  { id: "lang",    titleK: "sk.lang",    items: ["Python", "TypeScript", "Go", "Swift", "C++", "Bash"] },
  { id: "web",     titleK: "sk.web",     items: ["React", "Next.js", "Node.js"] },
  { id: "tools",   titleK: "sk.tools",   items: ["Docker", "Git", "PostgreSQL", "SQL"] },
  { id: "science", titleK: "sk.science", items: ["AI/LLM"] },
];

const SkillsApp = () => {
  const t = useT();
  const [active, setActive] = React.useState("lang");
  const grp = SKILL_GROUPS.find(g => g.id === active);
  return (
    <>
      <ActionBar
        iconAppId="skills"
        title={t("app.skills")}
        sub={`${SKILLS.length} ${t("proj.objects")}`}
        tabs={SKILL_GROUPS.map(g => ({ id: g.id, label: t(g.titleK) }))}
        activeTab={active}
        onTabPick={setActive}
      />
      <div className="a-body">
        <div className="a-list">
          {grp.items.map(s => {
            const Tile = SKILL_TILES[s];
            return (
              <div key={s} className="a-list-row">
                <div className="lr-ico">
                  {Tile ? <Tile size={36}/> : <div style={{ width: 36, height: 36, background:"#222"}}/>}
                </div>
                <div>
                  <div className="lr-title">{s}</div>
                  <div className="lr-sub">{SKILL_NOTES[s]}</div>
                </div>
                <div style={{ color: "var(--holo-cyan)", fontSize: 18, opacity: 0.7 }}>›</div>
              </div>
            );
          })}
        </div>
        <div style={{ height: 32 }}/>
      </div>
    </>
  );
};

/* ---------- RESEARCH ---------- */
const ResearchApp = () => {
  const t = useT();
  const [open, setOpen] = React.useState(null);
  if (open) {
    return (
      <>
        <ActionBar
          onUp={() => setOpen(null)}
          iconAppId="research"
          title={open.title}
          sub={`${open.journal} · ${open.year}`}
          actions={[{ icon: <Glyph.More size={20}/>, label: t("a.more") }]}
        />
        <div className="a-body" style={{ padding: "18px 16px" }}>
          <div style={{
            display: "inline-block", padding: "3px 10px",
            background: "rgba(51,181,229,0.16)", color: "var(--holo-cyan)",
            fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase",
            marginBottom: 14,
          }}>{open.topic}</div>
          <div style={{
            fontSize: 13.5, lineHeight: 1.6, color: "#cfd6dd",
            padding: "14px 0", borderTop: "1px solid var(--holo-divider)",
            borderBottom: "1px solid var(--holo-divider)",
          }}>
            {open.abstract}
          </div>
          <div style={{ marginTop: 18, display: "flex", gap: 10 }}>
            <button className="a-btn solid" onClick={() => open.url && window.open(open.url, "_blank", "noreferrer")}><Glyph.Document size={16}/> {t("a.open")}</button>
            <button className="a-btn"><Glyph.Send size={16}/> {t("a.share")}</button>
          </div>
          {open.doi && (
            <div style={{ marginTop: 22, fontSize: 11.5, color: "var(--holo-text-dim)" }}>
              DOI · <span style={{ fontFamily: '"Roboto Mono", monospace', color: "var(--holo-cyan)" }}>{open.doi}</span>
            </div>
          )}
        </div>
      </>
    );
  }
  return (
    <>
      <ActionBar
        iconAppId="research"
        title={t("app.research")}
        sub={`${PUBLICATIONS.length} ${t("sec.research.items")}`}
        actions={[
          { icon: <Glyph.Search size={20}/>, label: t("a.search") },
          { icon: <Glyph.More size={20}/>,   label: t("a.more") },
        ]}
      />
      <div className="a-body">
        <div className="a-list">
          {PUBLICATIONS.map((p, i) => (
            <div key={i} className="a-list-row" onClick={() => setOpen(p)}>
              <div className="lr-ico"><IconDoc size={36}/></div>
              <div>
                <div className="lr-title">{p.title}</div>
                <div className="lr-sub">{p.journal} · {p.year}</div>
                <div style={{
                  display: "inline-block", marginTop: 4,
                  padding: "1px 7px", fontSize: 10,
                  background: "rgba(51,181,229,0.14)", color: "var(--holo-cyan)",
                  letterSpacing: "0.05em", textTransform: "uppercase",
                }}>{p.topic}</div>
              </div>
              <div style={{ color: "var(--holo-cyan)", fontSize: 18, opacity: 0.6 }}>›</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

/* ---------- PROJECTS (folder browser) ---------- */
const ProjectsApp = () => {
  const t = useT();
  const [path, setPath] = React.useState("C:\\projects\\");
  const [openFile, setOpenFile] = React.useState(null);
  const folder = PROJECT_FOLDERS[path] || { folders: [], files: [] };
  const atRoot = path === "C:\\projects\\";
  const folderName = atRoot ? null : path.match(/projects\\([^\\]+)\\/)?.[1];

  if (openFile) {
    return (
      <>
        <ActionBar
          onUp={() => setOpenFile(null)}
          iconAppId="projects"
          title={openFile.title}
          sub={openFile.year}
          actions={[{ icon: <Glyph.More size={20}/>, label: t("a.more") }]}
        />
        <div className="a-body" style={{ padding: "16px 16px 24px" }}>
          <div style={{
            fontFamily: '"Roboto Mono", "Roboto Condensed", monospace',
            fontSize: 11.5, color: "var(--holo-cyan)",
            letterSpacing: "0.05em", textTransform: "uppercase",
            paddingBottom: 12, borderBottom: "1px solid var(--holo-divider)",
          }}>{openFile.stack}</div>
          <pre style={{
            margin: "14px 0 0", whiteSpace: "pre-wrap",
            fontFamily: '"Roboto Mono", "Roboto Condensed", monospace',
            fontSize: 12.5, lineHeight: 1.6, color: "#cfd6dd",
          }}>{openFile.body}</pre>
          {openFile.links && openFile.links.length > 0 && (
            <div style={{ marginTop: 18, display: "flex", gap: 8, flexWrap: "wrap" }}>
              {openFile.links.map((l, i) => (
                <button key={i} className="a-btn" onClick={() => window.open(l.url, "_blank", "noreferrer")}>{l.label}</button>
              ))}
            </div>
          )}
        </div>
      </>
    );
  }

  const itemCount = (folder.folders?.length || 0) + (folder.files?.length || 0);

  return (
    <>
      <ActionBar
        onUp={atRoot ? undefined : () => setPath("C:\\projects\\")}
        iconAppId="projects"
        title={atRoot ? t("app.projects") : prettyFolderName(folderName)}
        sub={atRoot
          ? `${itemCount} ${t("proj.objects")}`
          : `${t("app.projects")} › ${prettyFolderName(folderName)}`}
        actions={[
          { icon: <Glyph.Search size={20}/>, label: t("a.search") },
          { icon: <Glyph.More size={20}/>,   label: t("a.more") },
        ]}
      />
      <div className="a-body">
        <div className="a-list">
          {(folder.folders || []).map(f => {
            const sub = PROJECT_FOLDERS[`C:\\projects\\${f.name}\\`];
            const subCount = (sub?.folders?.length || 0) + (sub?.files?.length || 0);
            return (
              <div key={f.name} className="a-list-row" onClick={() => setPath(`C:\\projects\\${f.name}\\`)}>
                <div className="lr-ico"><IconFolder size={36}/></div>
                <div>
                  <div className="lr-title">{prettyFolderName(f.name)}</div>
                  <div className="lr-sub">{subCount} {t("proj.objects")}</div>
                </div>
                <div style={{ color: "var(--holo-cyan)", fontSize: 18, opacity: 0.6 }}>›</div>
              </div>
            );
          })}
          {(folder.files || []).map(f => (
            <div key={f.name} className="a-list-row" onClick={() => f.type === "prj" && setOpenFile(f)}>
              <div className="lr-ico">
                {f.type === "prj" ? <IconCode size={36}/> : <IconDoc size={36}/>}
              </div>
              <div>
                <div className="lr-title">{f.title || prettyFolderName(f.name.replace(/\.(prj|txt)$/, ""))}</div>
                <div className="lr-sub" style={{ fontFamily: '"Roboto Mono", monospace', fontSize: 11.5 }}>
                  {f.name}{f.stack ? ` · ${f.stack}` : ""}
                </div>
              </div>
              <div style={{ color: "var(--holo-cyan)", fontSize: 18, opacity: 0.6 }}>{f.type === "prj" ? "›" : ""}</div>
            </div>
          ))}
          {!folder.folders?.length && !folder.files?.length && (
            <div style={{ padding: "30px 16px", textAlign: "center", color: "var(--holo-text-dim)" }}>
              {t("pj.empty")}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
function prettyFolderName(name) {
  if (!name) return "";
  return name.replace(/_/g, " ").replace(/\b\w/g, c => c.toUpperCase());
}

/* ---------- EXPERIENCE ---------- */
const ExperienceApp = () => {
  const t = useT();
  return (
    <>
      <ActionBar
        iconAppId="experience"
        title={t("app.experience")}
        sub={t("m.timeline")}
      />
      <div className="a-body" style={{ padding: "10px 0 24px" }}>
        <div style={{ position: "relative", paddingLeft: 36 }}>
          <div style={{
            position: "absolute", left: 22, top: 12, bottom: 12, width: 2,
            background: "linear-gradient(180deg, var(--holo-cyan), transparent)",
            opacity: 0.5,
          }}/>
          {EXPERIENCE.map((e, i) => (
            <div key={i} style={{ position: "relative", paddingBottom: 18 }}>
              <div style={{
                position: "absolute", left: -19, top: 18,
                width: 14, height: 14, borderRadius: "50%",
                background: "var(--holo-cyan)",
                boxShadow: "0 0 0 4px #0e1014, 0 0 12px rgba(51,181,229,0.6)",
              }}/>
              <div className="a-card" style={{ margin: "6px 16px 0 4px" }}>
                <div className="a-card-body">
                  <div className="a-card-meta">{t(`exp.${i}.period`)}</div>
                  <div className="a-card-title">{t(`exp.${i}.role`)}</div>
                  <div className="a-card-sub" style={{ marginBottom: 8 }}>{t(`exp.${i}.org`)}</div>
                  <ul style={{ margin: 0, paddingLeft: 16, fontSize: 12.5, lineHeight: 1.55, color: "#cfd6dd" }}>
                    {e.bullets.map((_, j) => <li key={j}>{t(`exp.${i}.b${j}`)}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="a-sectionhead">{t("sec.exp.eduTitle")}</div>
        <div style={{ padding: "14px 16px", display: "flex", gap: 12, alignItems: "center" }}>
          <IconCap size={36}/>
          <div style={{ fontSize: 13.5, lineHeight: 1.5, color: "#cfd6dd" }}
            dangerouslySetInnerHTML={{__html: t("sec.exp.eduBody")}}/>
        </div>
      </div>
    </>
  );
};

/* ---------- BLOG ---------- */
const BLOG_KIND_COLOR = {
  post: "#1976a3", milestone: "#2f7a3a", talk: "#b3357a", note: "#cc7a14",
};

const BlogApp = () => {
  const t = useT();
  const [openId, setOpenId] = React.useState(null);
  if (openId) {
    const p = BLOG_POSTS.find(x => x.id === openId);
    return (
      <>
        <ActionBar
          onUp={() => setOpenId(null)}
          iconAppId="blog"
          title={t("blog." + p.id + ".title")}
          sub={p.date}
          actions={[{ icon: <Glyph.Send size={20}/>, label: t("a.share") }]}
        />
        <div className="a-body" style={{ padding: "14px 16px 28px" }}>
          <div style={{
            display: "inline-block", padding: "3px 10px",
            background: BLOG_KIND_COLOR[p.kind] || "#444", color: "#fff",
            fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase",
            marginBottom: 12,
          }}>{t("blog.kind." + p.kind)}</div>
          <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginBottom: 14 }}>
            {p.tags.map(tag => (
              <span key={tag} style={{
                fontSize: 10.5, padding: "1px 7px",
                background: "rgba(255,255,255,0.06)", color: "var(--holo-text-dim)",
                fontFamily: '"Roboto Mono", monospace',
              }}>#{tag}</span>
            ))}
          </div>
          <pre style={{
            margin: 0, whiteSpace: "pre-wrap",
            fontFamily: '"Roboto", sans-serif',
            fontSize: 14, lineHeight: 1.65, color: "#dde4ea",
          }}>{t("blog." + p.id + ".body")}</pre>
        </div>
      </>
    );
  }
  return (
    <>
      <ActionBar
        iconAppId="blog"
        title={t("app.blog")}
        sub={`${BLOG_POSTS.length} ${t("blog.entries")}`}
        actions={[
          { icon: <Glyph.Search size={20}/>, label: t("a.search") },
          { icon: <Glyph.More size={20}/>,   label: t("a.more") },
        ]}
      />
      <div className="a-body">
        <div className="a-list">
          {BLOG_POSTS.map(p => (
            <div key={p.id} className="a-list-row" onClick={() => setOpenId(p.id)}>
              <div className="lr-ico">
                <div style={{
                  width: 40, height: 40, borderRadius: 4,
                  background: BLOG_KIND_COLOR[p.kind] || "#444",
                  display: "grid", placeItems: "center", color: "#fff",
                  fontSize: 16, fontWeight: 500,
                }}>
                  {p.kind[0].toUpperCase()}
                </div>
              </div>
              <div>
                <div className="lr-title" style={{ marginBottom: 3 }}>{t("blog." + p.id + ".title")}</div>
                <div className="lr-sub" style={{ display: "flex", gap: 8, alignItems: "center", whiteSpace: "nowrap" }}>
                  <span style={{ fontFamily: '"Roboto Mono", monospace' }}>{p.date}</span>
                  <span style={{
                    fontSize: 10, color: "var(--holo-cyan)",
                    textTransform: "uppercase", letterSpacing: "0.05em",
                  }}>{t("blog.kind." + p.kind)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

/* ---------- MAIL ---------- */
const MailApp = () => {
  const t = useT();
  const [composing, setComposing] = React.useState(false);
  if (composing) {
    return (
      <>
        <ActionBar
          onUp={() => setComposing(false)}
          title={t("contact.newMsg")}
          actions={[
            { icon: <Glyph.Send size={20}/>, label: t("a.send"),
              onClick: () => { location.href = "mailto:onur@onurtellioglu.com"; setComposing(false); } },
            { icon: <Glyph.More size={20}/>, label: t("a.more") },
          ]}
        />
        <div className="a-body">
          <div style={{ padding: "10px 16px", borderBottom: "1px solid var(--holo-divider)" }}>
            <div style={{ fontSize: 11, color: "var(--holo-text-dim)", marginBottom: 4 }}>{t("contact.to")}</div>
            <input defaultValue="onur@onurtellioglu.com" style={inpStyle}/>
          </div>
          <div style={{ padding: "10px 16px", borderBottom: "1px solid var(--holo-divider)" }}>
            <div style={{ fontSize: 11, color: "var(--holo-text-dim)", marginBottom: 4 }}>{t("contact.subject")}</div>
            <input defaultValue={t("contact.subjValue")} style={inpStyle}/>
          </div>
          <div style={{ padding: "12px 16px" }}>
            <textarea defaultValue={t("contact.greet") + "\n\n" + t("contact.body").replace(/&[a-z]+;/g, "'")}
              style={{ ...inpStyle, minHeight: 200, resize: "vertical" }}/>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <ActionBar
        iconAppId="mail"
        title={t("app.mail")}
        sub={t("mail.from")}
        actions={[
          { icon: <Glyph.Search size={20}/>, label: t("a.search") },
          { icon: <Glyph.More size={20}/>,   label: t("a.more") },
        ]}
      />
      <div className="a-body">
        <div className="a-sectionhead">{t("mail.replyHere")}</div>
        <div className="a-list">
          <a className="a-list-row" href="mailto:onur@onurtellioglu.com" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="lr-ico"><IconMail size={36}/></div>
            <div>
              <div className="lr-title">{t("contact.email")}</div>
              <div className="lr-sub">onur@onurtellioglu.com</div>
            </div>
            <div style={{ color: "var(--holo-cyan)", fontSize: 18, opacity: 0.6 }}>›</div>
          </a>
          <a className="a-list-row" href="https://github.com/onur-tellioglu" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="lr-ico"><IconGitHub size={36}/></div>
            <div>
              <div className="lr-title">{t("contact.github")}</div>
              <div className="lr-sub">github.com/onur-tellioglu</div>
            </div>
            <div style={{ color: "var(--holo-cyan)", fontSize: 18, opacity: 0.6 }}>›</div>
          </a>
          <a className="a-list-row" href="https://onurtellioglu.com" target="_blank" rel="noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
            <div className="lr-ico"><IconGlobe size={36}/></div>
            <div>
              <div className="lr-title">{t("contact.site")}</div>
              <div className="lr-sub">onurtellioglu.com</div>
            </div>
            <div style={{ color: "var(--holo-cyan)", fontSize: 18, opacity: 0.6 }}>›</div>
          </a>
          <div className="a-list-row">
            <div className="lr-ico"><IconPin size={36}/></div>
            <div>
              <div className="lr-title">{t("contact.location")}</div>
              <div className="lr-sub">{t("contact.locationVal")}</div>
            </div>
          </div>
        </div>

        <div style={{ padding: "18px 16px 16px" }}>
          <div style={{
            background: "var(--holo-card)",
            border: "1px solid var(--holo-divider)",
            padding: 16,
          }}>
            <div style={{ fontSize: 14, fontWeight: 500, color: "var(--holo-text)", marginBottom: 6 }}>
              {t("contact.greet")}
            </div>
            <div style={{ fontSize: 13, lineHeight: 1.55, color: "#cfd6dd" }}
              dangerouslySetInnerHTML={{__html: t("contact.body")}}/>
            <div style={{ marginTop: 14, color: "var(--holo-cyan)", fontSize: 12, letterSpacing: "0.04em", fontFamily: '"Roboto Condensed", sans-serif' }}>
              Onur
            </div>
          </div>
        </div>
        <div style={{ height: 90 }}/>
      </div>
      <button className="a-fab" onClick={() => setComposing(true)} title={t("a.compose")}>
        <Glyph.Plus size={26}/>
      </button>
    </>
  );
};

const inpStyle = {
  width: "100%", background: "transparent",
  border: "none", borderBottom: "1px solid rgba(255,255,255,0.18)",
  color: "var(--holo-text)", fontFamily: "inherit", fontSize: 14,
  outline: "none", padding: "6px 0",
};

/* ---------- PHOTOS ---------- */
const PhotosApp = ({ onPhotoOpen }) => {
  const t = useT();
  const items = [
    { src: "portfolios-assets/onur-portrait-placeholder.svg", label: t("ph.portrait") },
    { src: "portfolios-assets/desktop-background.avif",                       label: t("ph.wallpaper") },
  ];
  return (
    <>
      <ActionBar
        iconAppId="photos"
        title={t("ph.title")}
        sub={`${items.length} ${t("ph.title").toLowerCase()}`}
        actions={[
          { icon: <Glyph.Search size={20}/>, label: t("a.search") },
          { icon: <Glyph.More size={20}/>,   label: t("a.more") },
        ]}
      />
      <div className="a-body">
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(2, 1fr)",
          gap: 2, padding: 2,
        }}>
          {items.map((p, i) => (
            <div key={i} style={{ position: "relative", aspectRatio: "1 / 1", cursor: "pointer" }}
              onClick={() => onPhotoOpen(p.src)}>
              <img src={p.src} alt={p.label}
                draggable={false}
                style={{ width: "100%", height: "100%", objectFit: "cover", imageRendering: "pixelated", display: "block" }}/>
              <div style={{
                position: "absolute", left: 0, right: 0, bottom: 0,
                background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                color: "#fff", padding: "16px 10px 8px",
                fontSize: 12, fontWeight: 500,
              }}>{p.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

/* ---------- SOCIAL placeholder (GitHub) ---------- */
const SocialApp = ({ kind }) => {
  const t = useT();
  const meta = APP_META[kind];
  const url = "https://github.com/onur-tellioglu";
  const handle = "github.com/onur-tellioglu";
  return (
    <>
      <ActionBar
        iconAppId={kind}
        title={t("app." + kind)}
        sub={handle}
        actions={[{ icon: <Glyph.More size={20}/>, label: t("a.more") }]}
      />
      <div className="a-body" style={{ padding: "30px 24px", textAlign: "center" }}>
        <div style={{ display: "inline-block" }}>
          <AppIcon appId={kind} size={92}/>
        </div>
        <div style={{ fontSize: 20, fontWeight: 500, marginTop: 18 }}>
          Onur Tellioglu
        </div>
        <div style={{ fontSize: 13, color: "var(--holo-text-dim)", marginTop: 6 }}>
          @onur-tellioglu
        </div>
        <div style={{ marginTop: 26 }}>
          <a className="a-btn solid" href={url} target="_blank" rel="noreferrer"
            style={{ textDecoration: "none" }}>
            <Glyph.Browser size={16}/> {t("a.openLink")}
          </a>
        </div>
        <div style={{
          marginTop: 30, padding: 14,
          background: "rgba(255,255,255,0.04)",
          border: "1px solid var(--holo-divider)",
          textAlign: "left", fontSize: 12.5, color: "#bcc4cc",
          lineHeight: 1.55,
        }}>
          Source for ctscan, PomeloHook and a few side projects lives here.
        </div>
      </div>
    </>
  );
};

/* ---------- SETTINGS ---------- */
const SettingsApp = () => {
  const t = useT();
  const { lang, setLang } = useLang();
  const { a11y, setA11y } = useA11y();
  const tog = (k) => setA11y({ [k]: !a11y[k] });
  return (
    <>
      <ActionBar iconAppId="settings" title={t("start.settings")}/>
      <div className="a-body">
        <div className="a-sectionhead">{t("set.lang")}</div>
        <div className="a-list">
          {LANGUAGES.map(l => (
            <div key={l.id} className="a-list-row" onClick={() => setLang(l.id)}>
              <div className="lr-ico">
                <div style={{
                  width: 32, height: 32, display: "grid", placeItems: "center",
                  background: lang === l.id ? "var(--holo-cyan-deep)" : "rgba(255,255,255,0.08)",
                  color: "#fff", fontWeight: 700, fontSize: 12, letterSpacing: "0.04em",
                }}>{l.code}</div>
              </div>
              <div>
                <div className="lr-title">{l.name}</div>
                <div className="lr-sub">{lang === l.id ? "Active" : "Tap to switch"}</div>
              </div>
              <div style={{ color: "var(--holo-cyan)", width: 24, display: "grid", placeItems: "center" }}>
                {lang === l.id && <Glyph.Check size={16}/>}
              </div>
            </div>
          ))}
        </div>

        <div className="a-sectionhead">{t("a11y.vision")}</div>
        <div className="a-list">
          <div className="a-list-row" onClick={() => tog("largeText")}>
            <div className="lr-ico"><IconAccessibility size={36}/></div>
            <div>
              <div className="lr-title">{t("a11y.large")}</div>
              <div className="lr-sub">{t("a11y.largeHint")}</div>
            </div>
            <Toggle on={a11y.largeText} onChange={() => tog("largeText")}/>
          </div>
          <div className="a-list-row" onClick={() => tog("highContrast")}>
            <div className="lr-ico"><IconBulb size={36}/></div>
            <div>
              <div className="lr-title">{t("a11y.contrast")}</div>
              <div className="lr-sub">{t("a11y.contrastHint")}</div>
            </div>
            <Toggle on={a11y.highContrast} onChange={() => tog("highContrast")}/>
          </div>
          <div className="a-list-row" onClick={() => tog("underlineLinks")}>
            <div className="lr-ico"><IconPencilDoc size={36}/></div>
            <div>
              <div className="lr-title">{t("a11y.underline")}</div>
              <div className="lr-sub">{t("a11y.underlineHint")}</div>
            </div>
            <Toggle on={a11y.underlineLinks} onChange={() => tog("underlineLinks")}/>
          </div>
        </div>

        <div className="a-sectionhead">{t("a11y.motion")}</div>
        <div className="a-list">
          <div className="a-list-row" onClick={() => tog("reduceMotion")}>
            <div className="lr-ico"><IconStar size={36}/></div>
            <div>
              <div className="lr-title">{t("a11y.reduceMotion")}</div>
              <div className="lr-sub">{t("a11y.reduceMotionHint")}</div>
            </div>
            <Toggle on={a11y.reduceMotion} onChange={() => tog("reduceMotion")}/>
          </div>
        </div>

        <div className="a-sectionhead">{t("a11y.focus")}</div>
        <div className="a-list">
          <div className="a-list-row" onClick={() => tog("focusRing")}>
            <div className="lr-ico"><IconSearch size={36}/></div>
            <div>
              <div className="lr-title">{t("a11y.focusRing")}</div>
              <div className="lr-sub">{t("a11y.focusRingHint")}</div>
            </div>
            <Toggle on={a11y.focusRing} onChange={() => tog("focusRing")}/>
          </div>
          <div className="a-list-row" onClick={() => setA11y(A11Y_DEFAULTS)}>
            <div className="lr-ico"><IconPower size={36}/></div>
            <div>
              <div className="lr-title">{t("a11y.reset")}</div>
              <div className="lr-sub">Restore default accessibility settings</div>
            </div>
            <div style={{ color: "var(--holo-cyan)", fontSize: 18, opacity: 0.6 }}>›</div>
          </div>
        </div>

        <div className="a-sectionhead">{t("set.about")}</div>
        <div style={{ padding: "14px 16px" }}>
          <div style={{
            display: "inline-block", padding: "6px 12px",
            background: "rgba(51,181,229,0.14)", color: "var(--holo-cyan)",
            fontFamily: '"Roboto Mono", monospace', fontSize: 12,
            letterSpacing: "0.04em",
          }}>{t("set.version")}</div>
          <div style={{ marginTop: 14, fontSize: 13.5, lineHeight: 1.55, color: "#cfd6dd" }}>
            {t("set.about.body")}
          </div>
        </div>
        <div style={{ height: 40 }}/>
      </div>
    </>
  );
};

const Toggle = ({ on, onChange }) => {
  return (
    <div onClick={(e) => { e.stopPropagation(); onChange && onChange(!on); }}
      role="switch" aria-checked={on}
      style={{
        width: 44, height: 22, borderRadius: 11,
        background: on ? "var(--holo-cyan-deep)" : "rgba(255,255,255,0.16)",
        position: "relative", cursor: "pointer",
        transition: "background 0.15s",
        flexShrink: 0,
      }}>
      <div style={{
        position: "absolute", top: 2, left: on ? 24 : 2,
        width: 18, height: 18, borderRadius: "50%",
        background: "#fff",
        transition: "left 0.15s",
        boxShadow: "0 1px 3px rgba(0,0,0,0.5)",
      }}/>
    </div>
  );
};

/* ---------- PHONE (decorative with call simulation) ---------- */
const KEY_LETTERS = {
  "2": "ABC", "3": "DEF", "4": "GHI", "5": "JKL",
  "6": "MNO", "7": "PQRS", "8": "TUV", "9": "WXYZ",
};
const RECENT_CALLS = [
  { name: "FAU LHFT",  num: "Erlangen",           kind: "out", when: "Tue" },
  { name: "GitHub",    num: "@onur-tellioglu",    kind: "in",  when: "Mon" },
  { name: "Recruiter", num: "+90 5•• ••• ••••",   kind: "miss",when: "Sun" },
];

const PhoneApp = () => {
  const t = useT();
  const [tab, setTab] = React.useState("dial");
  const [dialed, setDialed] = React.useState("");
  // call: null | { number, phase: "calling" | "ringing" | "unreachable" }
  const [call, setCall] = React.useState(null);

  // Phase transitions: calling (~0.9s) -> ringing (~3.2s) -> unreachable
  React.useEffect(() => {
    if (!call) return;
    if (call.phase === "calling") {
      const id = setTimeout(() => setCall(c => c && { ...c, phase: "ringing" }), 900);
      return () => clearTimeout(id);
    }
    if (call.phase === "ringing") {
      const id = setTimeout(() => setCall(c => c && { ...c, phase: "unreachable" }), 3200);
      return () => clearTimeout(id);
    }
  }, [call?.phase]);

  const startCall = () => {
    if (!dialed) return;
    setCall({ number: dialed, phase: "calling" });
  };

  if (call) {
    return <PhoneInCallScreen
      call={call}
      onEnd={() => setCall(null)}
      onRetry={() => setCall({ number: call.number, phase: "calling" })}
    />;
  }

  const keys = [
    ["1","2","3"], ["4","5","6"], ["7","8","9"], ["*","0","#"],
  ];
  return (
    <>
      <ActionBar iconAppId="phone" title={t("app.phone")} tabs={[
        { id: "dial", label: t("phone.dial") },
        { id: "log",  label: "Log" },
        { id: "fav",  label: "Fav" },
      ]} activeTab={tab} onTabPick={setTab}/>
      <div className="a-body" style={{ display: "flex", flexDirection: "column" }}>
        {tab === "dial" && (
          <>
            {/* Number display */}
            <div style={{
              padding: "26px 16px 14px",
              background: "linear-gradient(180deg, rgba(51,181,229,0.10), transparent 70%)",
              borderBottom: "1px solid var(--holo-divider)",
              textAlign: "center",
              position: "relative",
            }}>
              <div style={{
                fontFamily: '"Roboto", sans-serif', fontWeight: 200,
                fontSize: 34, color: "var(--holo-text)",
                letterSpacing: "0.05em", minHeight: 42,
                lineHeight: 1.1,
              }}>
                {dialed || <span style={{ color: "var(--holo-text-dimmer)", fontWeight: 100 }}>—</span>}
              </div>
              <div style={{ fontSize: 11, color: "var(--holo-text-dim)", marginTop: 8, lineHeight: 1.4, padding: "0 12px" }}>
                {t("phone.contact")}
              </div>
              {dialed && (
                <button onClick={() => setDialed(d => d.slice(0, -1))}
                  style={{
                    position: "absolute", right: 12, top: 32,
                    background: "transparent", border: "none",
                    color: "var(--holo-text-dim)", cursor: "pointer",
                    width: 36, height: 36, display: "grid", placeItems: "center",
                    fontSize: 20,
                  }}
                  aria-label="backspace"
                >⌫</button>
              )}
            </div>

            {/* Keypad */}
            <div style={{
              flex: 1, display: "grid",
              gridTemplateRows: "repeat(4, 1fr)", gap: 1,
              background: "var(--holo-divider)",
              minHeight: 280,
            }}>
              {keys.map((row, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1 }}>
                  {row.map(k => (
                    <button key={k}
                      onClick={() => setDialed(d => d.length < 14 ? d + k : d)}
                      style={{
                        background: "#0f1115", color: "var(--holo-text)",
                        border: "none", cursor: "pointer", fontFamily: "inherit",
                        display: "flex", flexDirection: "column",
                        alignItems: "center", justifyContent: "center",
                        gap: 1, padding: 4,
                        transition: "background 0.1s",
                      }}
                      onMouseDown={e => e.currentTarget.style.background = "rgba(51,181,229,0.22)"}
                      onMouseUp={e => e.currentTarget.style.background = "#0f1115"}
                      onMouseLeave={e => e.currentTarget.style.background = "#0f1115"}
                    >
                      <span style={{ fontSize: 28, fontWeight: 300, lineHeight: 1 }}>{k}</span>
                      <span style={{
                        fontSize: 9, color: "var(--holo-text-dim)",
                        letterSpacing: "0.14em", height: 11,
                        fontFamily: '"Roboto Condensed", sans-serif',
                      }}>{KEY_LETTERS[k] || (k === "0" ? "+" : "\u00A0")}</span>
                    </button>
                  ))}
                </div>
              ))}
            </div>

            {/* Call bar */}
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 80px 1fr",
              padding: "10px 8px 12px", gap: 4,
              background: "#0a0c10",
              borderTop: "1px solid var(--holo-divider)",
              alignItems: "center",
            }}>
              <button onClick={() => setDialed("")}
                disabled={!dialed}
                style={{
                  background: "transparent", border: "none",
                  color: dialed ? "var(--holo-text-dim)" : "var(--holo-text-dimmer)",
                  cursor: dialed ? "pointer" : "default", fontSize: 12,
                  letterSpacing: "0.06em",
                }}>CLEAR</button>
              <button onClick={startCall} disabled={!dialed}
                style={{
                  width: 64, height: 64, borderRadius: "50%",
                  background: dialed ? "var(--holo-cyan-deep)" : "rgba(255,255,255,0.10)",
                  color: "#fff", border: "none",
                  cursor: dialed ? "pointer" : "default",
                  margin: "0 auto", display: "grid", placeItems: "center",
                  boxShadow: dialed ? "0 0 14px rgba(51,181,229,0.5)" : "none",
                  transition: "background 0.15s, box-shadow 0.15s",
                }}
                aria-label="Call"
              >
                <Glyph.Phone size={28}/>
              </button>
              <div/>
            </div>
          </>
        )}

        {tab === "log" && (
          <div className="a-list">
            {RECENT_CALLS.map((c, i) => {
              const color = c.kind === "miss" ? "#cc3a3a" : c.kind === "in" ? "#2f7a3a" : "var(--holo-cyan)";
              const arrow = c.kind === "in" ? "↙" : c.kind === "out" ? "↗" : "✕";
              return (
                <div key={i} className="a-list-row" onClick={() => { setDialed(c.num); setTab("dial"); }}>
                  <div className="lr-ico">
                    <div style={{
                      width: 36, height: 36, borderRadius: "50%",
                      background: "rgba(51,181,229,0.10)",
                      display: "grid", placeItems: "center",
                      color, fontSize: 18, fontWeight: 500,
                    }}>{arrow}</div>
                  </div>
                  <div>
                    <div className="lr-title">{c.name}</div>
                    <div className="lr-sub" style={{ fontFamily: '"Roboto Mono", monospace' }}>{c.num}</div>
                  </div>
                  <div style={{ fontSize: 11, color: "var(--holo-text-dim)", letterSpacing: "0.05em", textTransform: "uppercase" }}>{c.when}</div>
                </div>
              );
            })}
          </div>
        )}

        {tab === "fav" && (
          <div style={{ padding: "40px 24px", textAlign: "center", color: "var(--holo-text-dim)" }}>
            <div style={{ display: "inline-block", marginBottom: 12, opacity: 0.6 }}>
              <Glyph.Star size={36}/>
            </div>
            <div style={{ fontSize: 13.5, lineHeight: 1.5 }}>{t("phone.contact")}</div>
          </div>
        )}
      </div>
    </>
  );
};

/* In-call screen — calling -> ringing -> unreachable */
const PhoneInCallScreen = ({ call, onEnd, onRetry }) => {
  const t = useT();
  const isUnreachable = call.phase === "unreachable";
  const statusText =
      call.phase === "calling"     ? t("phone.calling")
    : call.phase === "ringing"     ? t("phone.ringing")
    : t("phone.unreachable");

  // Ringing ticker (dots)
  const [tick, setTick] = React.useState(0);
  React.useEffect(() => {
    if (isUnreachable) return;
    const id = setInterval(() => setTick(x => (x + 1) % 4), 450);
    return () => clearInterval(id);
  }, [isUnreachable]);
  const dots = ".".repeat(tick);

  return (
    <div style={{
      position: "absolute", inset: 0,
      display: "flex", flexDirection: "column",
      background: isUnreachable
        ? "linear-gradient(180deg, #2a1414 0%, #110a0c 60%, #060709 100%)"
        : "linear-gradient(180deg, #0a2230 0%, #0a1018 55%, #06080c 100%)",
      color: "var(--holo-text)",
      animation: "app-zoom-in 0.18s ease-out",
      transition: "background 0.4s",
    }}>
      {/* Top status strip */}
      <div style={{
        padding: "16px 18px 8px",
        textAlign: "center",
        fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase",
        color: isUnreachable ? "#e88080" : "var(--holo-cyan)",
        fontFamily: '"Roboto Condensed", sans-serif',
      }}>
        {call.phase === "unreachable" ? "Call ended" : "Outgoing call"}
      </div>

      {/* Caller card */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", padding: "0 24px" }}>
        {/* Avatar */}
        <div style={{
          width: 124, height: 124, borderRadius: "50%",
          background: "linear-gradient(135deg, #1a3a55, #0a1a26)",
          border: `2px solid ${isUnreachable ? "rgba(232,128,128,0.4)" : "rgba(51,181,229,0.45)"}`,
          display: "grid", placeItems: "center", color: "#fff",
          boxShadow: isUnreachable
            ? "0 0 0 6px rgba(232,128,128,0.10), 0 0 36px rgba(232,128,128,0.25)"
            : "0 0 0 6px rgba(51,181,229,0.10), 0 0 36px rgba(51,181,229,0.25)",
          transition: "all 0.4s",
          animation: isUnreachable ? "none" : "phone-pulse 1.6s ease-in-out infinite",
        }}>
          <Glyph.Person size={68}/>
        </div>

        {/* Number */}
        <div style={{
          marginTop: 24,
          fontSize: 26, fontWeight: 300,
          letterSpacing: "0.06em",
          fontFamily: '"Roboto", sans-serif',
          textAlign: "center",
          maxWidth: "100%",
          overflowWrap: "break-word",
          wordBreak: "break-all",
        }}>{call.number}</div>

        {/* Sub-line: "Unknown number" */}
        <div style={{
          marginTop: 6,
          fontSize: 12, color: "var(--holo-text-dim)",
          letterSpacing: "0.08em", textTransform: "uppercase",
        }}>{t("phone.unknown")}</div>

        {/* Status row */}
        <div style={{
          marginTop: 28,
          fontSize: 15,
          color: isUnreachable ? "#e88080" : "var(--holo-cyan)",
          textAlign: "center", lineHeight: 1.55,
          maxWidth: 320, padding: "0 8px",
          minHeight: 24,
        }}>
          {isUnreachable
            ? statusText
            : <span>{statusText.replace(/[…\.]+$/,"")}<span style={{ display:"inline-block", width: 18, textAlign:"left" }}>{dots}</span></span>}
        </div>

        {/* Signal hint when unreachable */}
        {isUnreachable && (
          <div style={{
            marginTop: 18,
            display: "inline-flex", gap: 8, alignItems: "center",
            padding: "6px 12px",
            background: "rgba(232,128,128,0.10)",
            border: "1px solid rgba(232,128,128,0.25)",
            color: "#e8a0a0",
            fontFamily: '"Roboto Mono", monospace',
            fontSize: 11, letterSpacing: "0.04em",
          }}>
            <span style={{ display: "inline-block", width: 14, height: 14 }}>
              <Glyph.Signal size={14}/>
            </span>
            <span>NO SIGNAL · CHECK CONNECTION</span>
          </div>
        )}
      </div>

      {/* Bottom actions */}
      <div style={{
        padding: "20px 24px 28px",
        display: "flex", justifyContent: "center", alignItems: "center",
        gap: 24,
        background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.5))",
      }}>
        {isUnreachable ? (
          <>
            <button onClick={onRetry}
              style={{
                background: "transparent",
                color: "var(--holo-cyan)",
                border: "1px solid rgba(51,181,229,0.4)",
                padding: "10px 18px", cursor: "pointer",
                fontFamily: '"Roboto Condensed", sans-serif',
                fontSize: 12, letterSpacing: "0.10em", textTransform: "uppercase",
              }}>{t("phone.callAgain")}</button>
            <button onClick={onEnd}
              style={{
                background: "var(--holo-cyan-deep)",
                color: "#fff", border: "none",
                padding: "10px 22px", cursor: "pointer",
                fontFamily: '"Roboto Condensed", sans-serif',
                fontSize: 12, letterSpacing: "0.10em", textTransform: "uppercase",
                boxShadow: "0 0 14px rgba(51,181,229,0.35)",
              }}>{t("phone.close")}</button>
          </>
        ) : (
          <button onClick={onEnd}
            aria-label={t("phone.endCall")}
            style={{
              width: 70, height: 70, borderRadius: "50%",
              background: "#c93a3a",
              border: "none", cursor: "pointer",
              display: "grid", placeItems: "center", color: "#fff",
              boxShadow: "0 0 0 4px rgba(201,58,58,0.18), 0 0 26px rgba(201,58,58,0.4)",
              transform: "rotate(135deg)",
            }}>
            <Glyph.Phone size={32}/>
          </button>
        )}
      </div>
    </div>
  );
};

/* ---------- BROWSER (decorative) ---------- */
const BrowserApp = () => {
  const t = useT();
  const { lang } = useLang();
  const url = langMeta(lang).domain;
  return (
    <>
      <ActionBar iconAppId="browser" title={t("app.browser")}
        actions={[
          { icon: <Glyph.More size={20}/>, label: t("a.more") },
        ]}
      />
      <div style={{
        display: "flex", gap: 6, alignItems: "center",
        padding: "8px 12px",
        background: "rgba(255,255,255,0.04)",
        borderBottom: "1px solid var(--holo-divider)",
        fontSize: 12,
      }}>
        <div style={{
          flex: 1, background: "rgba(0,0,0,0.4)", color: "#cfd6dd",
          padding: "8px 12px", fontFamily: '"Roboto Mono", monospace',
          fontSize: 12.5,
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 2,
        }}>{url}</div>
        <button className="a-btn flat" style={{ padding: "6px 10px" }}>↻</button>
      </div>
      <div className="a-body" style={{ padding: 0 }}>
        <div style={{
          padding: "28px 22px 18px",
          background: "linear-gradient(180deg, #102036, #0a1521)",
          borderBottom: "2px solid var(--holo-cyan)",
        }}>
          <div style={{ fontFamily: '"Roboto", sans-serif', fontSize: 24, fontWeight: 500, marginBottom: 4 }}>
            Onur Tellioglu
          </div>
          <div style={{ fontSize: 13, color: "var(--holo-cyan)" }}>{t("hero.tagline")}</div>
        </div>
        <div style={{ padding: "16px 18px", fontSize: 13.5, lineHeight: 1.6, color: "#cfd6dd" }}>
          {t("hero.intro")}
        </div>
        <div className="a-sectionhead">{t("nav.research").toUpperCase()}</div>
        <div className="a-list">
          {PUBLICATIONS.slice(0, 3).map((p, i) => (
            <div key={i} className="a-list-row">
              <div className="lr-ico"><IconDoc size={32}/></div>
              <div>
                <div className="lr-title" style={{ fontSize: 13.5 }}>{p.title}</div>
                <div className="lr-sub">{p.journal} · {p.year}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ padding: 18, textAlign: "center", color: "var(--holo-text-dimmer)", fontSize: 11 }}>
          © 2026 — built with React + vanilla CSS
        </div>
      </div>
    </>
  );
};

/* ---------- CAMERA (decorative) ---------- */
const CameraApp = ({ onPhotoOpen }) => {
  const t = useT();
  return (
    <>
      <ActionBar iconAppId="camera" title={t("app.camera")}/>
      <div className="a-body" style={{
        display: "flex", flexDirection: "column",
        background: "#000",
      }}>
        <div style={{ flex: 1, display: "grid", placeItems: "center", position: "relative" }}>
          {/* Fake viewfinder grid */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "33.33% 33.33%",
          }}/>
          <div style={{ color: "var(--holo-text-dim)", fontSize: 13, textAlign: "center", padding: "0 30px" }}>
            <div style={{ fontSize: 15, marginBottom: 6, color: "#cfd6dd" }}>{t("cam.title")}</div>
            <div>{t("cam.body")}</div>
          </div>
          {/* Corner brackets */}
          {[
            { top: 30, left: 30, b: ["b","r"] },
            { top: 30, right: 30, b: ["b","l"] },
            { bottom: 30, left: 30, b: ["t","r"] },
            { bottom: 30, right: 30, b: ["t","l"] },
          ].map((c, i) => (
            <div key={i} style={{
              position: "absolute", width: 26, height: 26,
              ...c,
              border: "1.5px solid rgba(255,255,255,0.4)",
              borderTopColor: c.b.includes("t") ? undefined : "transparent",
              borderBottomColor: c.b.includes("b") ? undefined : "transparent",
              borderLeftColor: c.b.includes("l") ? undefined : "transparent",
              borderRightColor: c.b.includes("r") ? undefined : "transparent",
            }}/>
          ))}
        </div>
        <div style={{
          display: "grid", gridTemplateColumns: "60px 1fr 60px",
          alignItems: "center", padding: "16px 24px",
          background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.9))",
        }}>
          <div style={{
            width: 44, height: 44, border: "1px solid rgba(255,255,255,0.3)", borderRadius: 4,
            overflow: "hidden", cursor: "pointer",
          }} onClick={() => onPhotoOpen("portfolios-assets/onur-portrait-placeholder.svg")}>
            <img src="portfolios-assets/onur-portrait-placeholder.svg"
              style={{ width: "100%", height: "100%", objectFit: "cover", imageRendering: "pixelated" }} alt=""/>
          </div>
          <button onClick={() => onPhotoOpen("portfolios-assets/onur-portrait-placeholder.svg")}
            style={{
              width: 64, height: 64, borderRadius: "50%",
              background: "#fff", border: "4px solid rgba(255,255,255,0.4)",
              cursor: "pointer", margin: "0 auto",
              boxShadow: "0 0 0 2px rgba(0,0,0,0.4)",
            }}/>
          <div style={{
            width: 44, height: 44, display: "grid", placeItems: "center",
            color: "rgba(255,255,255,0.6)", fontSize: 22, cursor: "pointer",
          }}>⟳</div>
        </div>
      </div>
    </>
  );
};

Object.assign(window, {
  MeApp, SkillsApp, ResearchApp, ProjectsApp, ExperienceApp, BlogApp,
  MailApp, PhotosApp, SocialApp, SettingsApp, PhoneApp, BrowserApp, CameraApp,
  SKILL_GROUPS, Toggle, BLOG_KIND_COLOR, inpStyle,
});
