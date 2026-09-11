/* =====================================================================
   Portfolio content — lives inside the browser-style window
   Sections: Home / About / Skills / Research / Experience / Contact
   ===================================================================== */

/* Padding before each section header so anchor scrolling lands at the
   title with comfortable breathing room rather than ramming the previous
   section's last line against the tab strip. */
const SECTION_SCROLL_PAD = 12;

const PUBLICATIONS = [
  {
    file: "phoenix1400.prj",
    title: "phoenix1400-python: Tunable Laser Control Library",
    authors: "Python · ctypes · 32-bit DLL · Windows",
    journal: "FAU LHFT", year: "2026", topic: "Instrument Control",
    abstract: "Python control for the Luna/Polytec Phoenix 1400 tunable laser at the FAU photonics lab. The vendor ships a 32-bit DLL with C++, LabVIEW and MATLAB examples and no Python binding, so this one loads it through ctypes behind a class that validates values and tracks what state the laser is in. You write a script instead of clicking through the vendor GUI. Delivered in four rounds, each signed off on the real laser before merge.",
    doi: "", url: "",
  },
  {
    file: "imon-fbg.prj",
    title: "imon-fbg: Fiber Bragg Grating Acquisition Software",
    authors: "Python · FTDI FT232H · Ibsen I-MON 256 USB",
    journal: "FAU LHFT", year: "2026", topic: "Acquisition · Optics",
    abstract: "Custom acquisition and analysis software for an Ibsen I-MON 256 USB fiber Bragg grating interrogator, replacing the vendor evaluation tool. The device streams raw FBG reflection spectra at up to ~6000 frames per second over an FTDI FT232H; the software handles high-speed capture, peak tracking, calibration and a live wavelength-versus-time display.",
    doi: "", url: "",
  },
  {
    file: "ad9910-pico.prj",
    title: "ad9910-pico: DDS Signal Generation over SPI",
    authors: "Raspberry Pi Pico · SPI · AD9910/PCBZ Rev G",
    journal: "FAU LHFT", year: "2026", topic: "RF · Embedded",
    abstract: "Driving an AD9910 direct digital synthesis evaluation board from a Raspberry Pi Pico instead of the Analog Devices USB stack and PC software. The link works end to end: registers read back exact, IO_UPDATE latches writes, and the DAC produces a tone that tracks the programmed tuning word to within 1 ppm. Every pinout trap and bench measurement is written down rather than assumed.",
    doi: "", url: "",
  },
  {
    file: "pomelohook.prj",
    title: "PomeloHook: Self-Hosted Webhook Relay",
    authors: "Go · SQLite · React · Vite · WebSocket",
    journal: "hook.pomelostudios.net", year: "2026", topic: "Infrastructure",
    abstract: "Think ngrok, but self-hosted, team-aware and built around persistent event history. A Go server plus CLI binary with an embedded React/Vite dashboard. Events land in SQLite before forwarding over the WebSocket tunnel, so they stay replayable from CLI or dashboard regardless of forwarding outcome. Personal and org tunnels, 30-day retention, single binary deployment.",
    doi: "", url: "https://hook.pomelostudios.net",
  },
  {
    file: "turbin-ecu.prj",
    title: "turbin-ecu: Micro-Turbine Engine Controller",
    authors: "C++ · PlatformIO · ESP32",
    journal: "Embedded", year: "2026", topic: "FSM · Sensors",
    abstract: "An ESP32 engine control unit driven by a 9-state machine: IDLE, PRE_HEAT, IGNITION, WARMUP, RAMP_UP, RUNNING, SHUTDOWN, COOLING. Interrupt-driven Hall-effect RPM, a MAX31855 thermocouple over SPI and a throttle ADC on the input side; MOSFET-driven solenoid valves, a brushless ESC and a fuel pump on PWM at the output. Runs in desktop simulation through the PlatformIO native target.",
    doi: "", url: "",
  },
  {
    file: "assistbase.prj",
    title: "Assistbase: Patient Journey over WhatsApp",
    authors: "Node.js · OpenAI API · Supabase · Next.js",
    journal: "Production", year: "2025", topic: "LLM Agents",
    abstract: "A fully custom system running the complete patient journey over WhatsApp for a surgical clinic, with no low-code tools or templates: multilingual intake, photo and health data collection, booking, reminders, post-op follow-up. It handles 90% of communication end to end and escalates to staff only when needed, backed by a memory system that parses every conversation into a structured patient profile.",
    doi: "", url: "",
  },
  {
    file: "ctscan.prj",
    title: "ctscan & mend: macOS System Health",
    authors: "Bash · Homebrew · SwiftUI",
    journal: "Open source", year: "2026", topic: "CLI · macOS",
    abstract: "A 14-module CLI published as a Homebrew formula, pure Bash and dependency-free: battery, SSD wear via S.M.A.R.T., thermals, memory, Wi-Fi, FileVault, SIP and Gatekeeper. mend is the SwiftUI macOS app wrapping that engine through the Process API, with menu bar integration and a background scan timer. The commercial app and the open-source tool are intentionally separate.",
    doi: "", url: "https://onur-tellioglu.github.io/ctscan/",
  },
  {
    file: "cull.prj",
    title: "Cull: Swipe-to-Cull iOS Photo Manager",
    authors: "Swift · SwiftUI · Vision",
    journal: "App Store review", year: "2026", topic: "iOS",
    abstract: "A SwiftUI app that reviews a photo library one image at a time, learns what is blurry, and lets you keep, cull or undo with a single gesture. Submitted to App Store review.",
    doi: "", url: "",
  },
];

const SKILLS = [
  "Python","TypeScript","Go","Swift","C++","Bash",
  "React","Next.js","Node.js","PostgreSQL",
  "Docker","Git","SQL","AI/LLM",
];

const SKILL_NOTES = {
  Python:       "Data work, tooling and coursework at FAU. NumPy, pandas, PyTorch.",
  TypeScript:   "Primary language for web and backend work. Strict mode, end-to-end typed APIs.",
  Go:           "PomeloHook server and CLI: pure-Go SQLite, WebSocket tunnels, single binary builds.",
  Swift:        "SwiftUI on iOS and macOS: Cull, mend, PhotoBackup, plus a native WidgetKit widget.",
  "C++":        "Embedded firmware on ESP32 with PlatformIO: interrupts, SPI, PWM, state machines.",
  Bash:         "ctscan is 14 modules of pure Bash, no dependencies. Shipped as a Homebrew formula.",
  React:        "Dashboards and product UIs, from Vite SPAs to embedded panels inside Go binaries.",
  "Next.js":    "App Router, server components, static export. The stack behind most product sites.",
  "Node.js":    "Agent backends, WhatsApp integrations and API services in production.",
  PostgreSQL:   "Prisma schemas, migrations and per-tenant row-level security covered by tests.",
  Docker:       "Local parity and deployment for monorepos; compose stacks for multi-app projects.",
  Git:          "Feature branches, atomic commits, code review, CI on every pull request.",
  SQL:          "Query design and indexing against Postgres and SQLite workloads.",
  "AI/LLM":     "Claude and OpenAI APIs, agent orchestration, tool calling, RAG and memory systems.",
};

const EXPERIENCE = [
  {
    period: "Jun 2026 – Present",
    role: "Student Research Assistant (HiWi)",
    org: "FAU, Institute of Microwaves and Photonics (LHFT), Erlangen",
    bullets: [
      "Python control library for a Luna/Polytec Phoenix 1400 tunable laser, built on ctypes over the vendor's 32-bit DLL",
      "Custom acquisition software for an Ibsen I-MON 256 fiber Bragg grating interrogator, ~6000 frames/s over FTDI",
      "AD9910 DDS evaluation board driven over SPI from a Raspberry Pi Pico, tone accurate to 1 ppm",
      "Rebuilt the lab's GPIB stack on Ubuntu 24.04 as a one-shot installer with an update freeze",
    ],
    icon: "chip",
  },
  {
    period: "Feb 2025 – Jan 2026",
    role: "Co-Founder & Lead Developer",
    org: "Assistbase, Remote",
    bullets: [
      "Built a custom system running the full patient journey over WhatsApp for a surgical clinic",
      "Designed a multi-dimensional patient memory system persisted in Supabase",
      "Delivered a paperless operations platform for a German manufacturing facility, live in production",
    ],
    icon: "robot",
  },
  {
    period: "Jul 2023 – Oct 2023",
    role: "Chief IT Consultant",
    org: "Metarc Interior, Istanbul",
    bullets: [
      "Rebuilt the full IT infrastructure of a corporate architecture firm",
      "Secure offsite backup, office telephony and cybersecurity hardening",
    ],
    icon: "globe",
  },
  {
    period: "Aug 2022 – Sept 2022",
    role: "Software Developer Intern",
    org: "HEFA Technology, Istanbul",
    bullets: [
      "Contributed to airpm.io, an air quality monitoring platform",
      "Integrated IoT sensors over LoRa-WAN and The Things Network, built ingestion WebHooks",
    ],
    icon: "chip",
  },
  {
    period: "Dec 2020 – Jun 2023",
    role: "Technical Writer & Web Administrator",
    org: "ModArt PC, Istanbul",
    bullets: [
      "Wrote SEO-optimized tech news, buying guides and in-depth hardware reviews",
      "Hands-on benchmark testing; managed DNS, SSL, Cloudflare and security hardening",
    ],
    icon: "globe",
  },
];

const NAV_SECTIONS = ["home","about","skills","research","experience","contact"];

/* ---------------- Hero ---------------- */
const Hero = ({ onNav, onOpenPub }) => {
  const t = useT();
  return (
  <section id="sec-home" style={{ padding: "18px 22px 8px" }}>
    <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 22, alignItems: "start" }}>
      <div>
        <div style={{ color: "var(--text-dim)", fontSize: 13, marginBottom: 6 }}>{t("hero.greeting")}</div>
        <h1 style={{
          fontFamily: '"Times New Roman", Times, serif',
          fontSize: 46, lineHeight: 1.02, margin: "0 0 12px",
          fontWeight: 700, letterSpacing: "-0.01em",
        }}>
          Onur<br/>Tellioglu
        </h1>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          background: "#dfe5f3", color: "var(--navy)",
          padding: "4px 10px", marginBottom: 14,
          boxShadow: "var(--bevel-thin-in)",
          fontWeight: 700, fontSize: 13,
        }}>
          <IconBulb size={16}/>
          {t("hero.tagline")}
        </div>
        <p style={{ maxWidth: 460, fontSize: 13.5, lineHeight: 1.55, margin: "0 0 18px", color: "var(--text)" }}>
          {t("hero.intro")}
        </p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <button className="btn primary" onClick={() => onNav("research")}>
            <IconResearch size={16}/> {t("hero.btnResearch")}
          </button>
          <button className="btn" onClick={() => onNav("contact")}>
            <IconMail size={16}/> {t("hero.btnContact")}
          </button>
          <button className="btn" onClick={() => window.open("portfolios-assets/onur_tellioglu_cv.pdf", "_blank")}>
            <IconFloppy size={16}/> {t("hero.btnCV")}
          </button>
        </div>
      </div>
      <PortraitPlaceholder width={210} height={230}/>
    </div>

    {/* Stat cards */}
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginTop: 22 }}>
      <StatCard icon={<IconDoc size={26}/>} big={String(PUBLICATIONS.length)} label={t("stat.pubs")}/>
      <StatCard icon={<IconComputer size={26}/>} big="AI" label={t("stat.cs")}/>
      <StatCard icon={<IconGlobe size={26}/>} big="TR&middot;EN&middot;DE" label={t("stat.rw")}/>
    </div>
  </section>
  );
};

const StatCard = ({ icon, big, label }) => (
  <div style={{
    background: "var(--paper)",
    boxShadow: "var(--bevel-thin-in)",
    padding: "10px 12px",
    display: "flex", alignItems: "center", gap: 10,
  }}>
    <div style={{ display: "grid", placeItems: "center" }}>{icon}</div>
    <div>
      <div style={{ fontFamily: '"Times New Roman", serif', fontSize: 22, fontWeight: 700, lineHeight: 1 }}
           dangerouslySetInnerHTML={{__html: big}} />
      <div style={{ fontSize: 11.5, color: "var(--text-dim)", marginTop: 2 }}>{label}</div>
    </div>
  </div>
);

/* ---------------- About ---------------- */
const About = () => {
  const t = useT();
  return (
  <section id="sec-about" style={{ padding: "10px 22px" }}>
    <SectionHeader title={t("sec.about.title")} sub={t("sec.about.sub")}/>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
      <AboutCard icon={<IconComputer size={28}/>} title={t("about.cs.title")}  body={t("about.cs.body")}/>
      <AboutCard icon={<IconChip size={28}/>} title={t("about.cb.title")}  body={t("about.cb.body")}/>
      <AboutCard icon={<IconRobot size={28}/>} title={t("about.rd.title")}  body={t("about.rd.body")}/>
      <AboutCard icon={<IconGlobe size={28}/>}    title={t("about.web.title")} body={t("about.web.body")}/>
    </div>
  </section>
  );
};

const AboutCard = ({ icon, title, body }) => (
  <div className="field" style={{ padding: 10 }}>
    <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 6 }}>
      {icon}
      <div style={{ fontWeight: 700, color: "var(--navy)", fontSize: 11.5, lineHeight: 1.1 }}>
        {title.split("&amp;").join("&")}
      </div>
    </div>
    <div style={{ fontSize: 12, lineHeight: 1.45 }} dangerouslySetInnerHTML={{__html: body}}/>
  </div>
);

/* ---------------- Skills (tile grid w/ tooltip) ---------------- */
const Skills = () => {
  const t = useT();
  const [hover, setHover] = React.useState(null);
  return (
    <section id="sec-skills" style={{ padding: "10px 22px" }}>
      <SectionHeader title={t("sec.skills.title")} sub={t("sec.skills.sub")}/>
      <div className="field" style={{ padding: 12 }}>
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(8, 1fr)", gap: 8,
        }}>
          {SKILLS.map(s => {
            const Tile = SKILL_TILES[s];
            return (
              <div
                key={s}
                onMouseEnter={() => setHover(s)}
                onMouseLeave={() => setHover(prev => prev === s ? null : prev)}
                style={{
                  textAlign: "center",
                  padding: 6,
                  cursor: "default",
                  background: hover === s ? "#dfe5f3" : "transparent",
                  outline: hover === s ? "1px dotted #000" : "none",
                }}
              >
                <div style={{ display: "grid", placeItems: "center", marginBottom: 4 }}>
                  {Tile ? <Tile size={36}/> : <div style={{ width: 36, height: 36, background:"#ddd"}}/>}
                </div>
                <div style={{ fontSize: 11, lineHeight: 1.1 }}>{s}</div>
              </div>
            );
          })}
        </div>
        <div style={{
          marginTop: 10,
          padding: "6px 10px",
          background: "var(--paper-warm)",
          border: "1px solid var(--shadow-m)",
          fontSize: 11.5,
          minHeight: 28,
          fontFamily: '"Courier New", monospace',
        }}>
          {hover
            ? <><b>{hover}</b> &mdash; {SKILL_NOTES[hover]}</>
            : <span style={{ color: "var(--text-dim)" }}>{t("sec.skills.empty")}</span>}
        </div>
      </div>
    </section>
  );
};

/* ---------------- Research (file explorer) ---------------- */
const Research = ({ onOpenPub }) => {
  const t = useT();
  return (
  <section id="sec-research" style={{ padding: "10px 22px" }}>
    <SectionHeader title={t("sec.research.title")} sub={t("sec.research.sub")}/>
    <div className="field" style={{ padding: 0 }}>
      {/* explorer toolbar */}
      <div style={{
        display: "flex", alignItems: "center", gap: 4,
        padding: "4px 6px", borderBottom: "1px solid var(--shadow-m)",
        background: "var(--gray)", fontSize: 11,
      }}>
        <span style={{ color: "var(--text-dim)" }}>{t("proj.address")}</span>
        <code style={{
          flex: 1, background: "#fff", padding: "2px 6px",
          boxShadow: "var(--bevel-thin-in)", fontFamily:'"Courier New", monospace',
        }}>
          C:\portfolio\projects\
        </code>
        <span style={{ color: "var(--text-dim)" }}>{PUBLICATIONS.length} {t("sec.research.items")}</span>
      </div>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
        gap: 10, padding: 12,
        background: "var(--paper)",
      }}>
        {PUBLICATIONS.map((p, i) => (
          <PubFile key={i} pub={p} onOpen={() => onOpenPub(p)}/>
        ))}
      </div>
    </div>
  </section>
  );
};

const PubFile = ({ pub, onOpen }) => {
  const [sel, setSel] = React.useState(false);
  return (
    <div
      onClick={() => setSel(true)}
      onMouseLeave={() => setSel(false)}
      onDoubleClick={onOpen}
      style={{
        textAlign: "center", padding: 6, cursor: "default",
        background: sel ? "var(--navy)" : "transparent",
        color: sel ? "#fff" : "#000",
      }}
    >
      <div style={{ display:"grid", placeItems:"center", marginBottom: 6 }}>
        <IconDoc size={42}/>
      </div>
      <div style={{
        fontFamily: '"Courier New", monospace',
        fontSize: 11,
        outline: sel ? "1px dotted #fff" : "none",
        padding: "1px 3px",
        wordBreak: "break-all",
      }}>
        {pub.file}
      </div>
      <div style={{ fontSize: 10, marginTop: 2, opacity: sel ? 1 : 0.7 }}>{pub.journal} · {pub.year}</div>
    </div>
  );
};

/* ---------------- Experience timeline ---------------- */
const Experience = () => {
  const t = useT();
  return (
  <section id="sec-experience" style={{ padding: "10px 22px" }}>
    <SectionHeader title={t("sec.exp.title")} sub={t("sec.exp.sub")}/>
    <div className="field" style={{ padding: 14 }}>
      <div style={{
        fontFamily: '"Courier New", monospace', fontSize: 11,
        color: "var(--text-dim)", marginBottom: 10,
      }}>
        {t("sec.exp.shell")}
      </div>
      <div style={{ position: "relative", paddingLeft: 28 }}>
        <div style={{
          position:"absolute", left: 10, top: 4, bottom: 4,
          width: 0, borderLeft: "2px dotted var(--navy)",
        }}/>
        {EXPERIENCE.map((e, i) => (
          <div key={i} style={{ position: "relative", paddingBottom: 14 }}>
            <div style={{
              position: "absolute", left: -22, top: 6,
              width: 10, height: 10, background: "var(--navy)",
              boxShadow: "0 0 0 2px var(--paper), 0 0 0 3px var(--navy)",
            }}/>
            <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 12 }}>
              <div>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: 4,
                  fontFamily: '"Courier New", monospace',
                  fontSize: 11, color: "var(--navy)", fontWeight: 700,
                }}>
                  <IconCalendar size={12}/>
                  {t(`exp.${i}.period`)}
                </div>
                <div style={{ fontFamily: '"Times New Roman", serif', fontSize: 17, fontWeight: 700, lineHeight: 1.2, marginTop: 2 }}>
                  {t(`exp.${i}.role`)}
                </div>
                <div style={{ fontSize: 12, color: "var(--text-dim)", marginBottom: 6 }}>
                  {t(`exp.${i}.org`)}
                </div>
                <ul style={{ margin: 0, paddingLeft: 18, fontSize: 12, lineHeight: 1.55 }}>
                  {e.bullets.map((_, j) => <li key={j}>{t(`exp.${i}.b${j}`)}</li>)}
                </ul>
              </div>
              <div style={{ display: "grid", placeItems: "start" }}>
                {e.icon === "chip" && <IconChip size={32}/>}
                {e.icon === "globe" && <IconGlobe size={32}/>}
                {e.icon === "robot" && <IconRobot size={32}/>}
                {e.icon === "briefcase" && <IconBriefcase size={32}/>}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 10, padding: "8px 10px", background: "var(--paper-warm)", border: "1px solid var(--shadow-m)" }}>
        <div style={{ fontWeight: 700, fontSize: 12, marginBottom: 4 }}>{t("sec.exp.eduTitle")}</div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <IconCap size={24}/>
          <div style={{ fontSize: 12 }} dangerouslySetInnerHTML={{__html: t("sec.exp.eduBody")}}/>
        </div>
      </div>
    </div>
  </section>
  );
};

/* ---------------- Contact (mail client style) ---------------- */
const Contact = () => {
  const t = useT();
  return (
  <section id="sec-contact" style={{ padding: "10px 22px 24px" }}>
    <SectionHeader title={t("sec.contact.title")} sub={t("sec.contact.sub")}/>
    <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 12 }}>
      {/* fake mail composer */}
      <div className="win" style={{ alignSelf: "start" }}>
        <div className="win-title">
          <div className="ttl-text"><IconMail size={14}/> {t("contact.newMsg")}</div>
          <div className="win-btns">
            <div className="win-btn"><svg width="8" height="8"><line x1="0" y1="0" x2="8" y2="8" stroke="#000" strokeWidth="1"/><line x1="8" y1="0" x2="0" y2="8" stroke="#000" strokeWidth="1"/></svg></div>
          </div>
        </div>
        <div style={{ padding: 10, background: "var(--paper)" }}>
          <div style={{ display: "grid", gridTemplateColumns: "60px 1fr", gap: 6, fontSize: 12, marginBottom: 8 }}>
            <div style={{ color: "var(--text-dim)" }}>{t("contact.to")}</div>
            <div style={{ background: "#fff", boxShadow: "var(--bevel-thin-in)", padding: "2px 6px" }}>
              {t("contact.toValue")}
            </div>
            <div style={{ color: "var(--text-dim)" }}>{t("contact.subject")}</div>
            <div style={{ background: "#fff", boxShadow: "var(--bevel-thin-in)", padding: "2px 6px" }}>
              {t("contact.subjValue")}
            </div>
          </div>
          <div style={{
            background: "#fff", boxShadow: "var(--bevel-thin-in)", padding: 8,
            fontSize: 12.5, lineHeight: 1.55, minHeight: 120,
          }}>
            <p style={{ margin: "0 0 8px" }}>{t("contact.greet")}</p>
            <p style={{ margin: 0 }} dangerouslySetInnerHTML={{__html: t("contact.body")}}/>
            <p style={{ margin: "10px 0 0", fontSize: 18 }}>
              <span style={{ display: "inline-block", width: 22, height: 22, borderRadius: "50%", background: "#f4cf6a", border: "1px solid #000", textAlign: "center", lineHeight: "20px", fontSize: 14 }}>:)</span>
            </p>
          </div>
        </div>
      </div>

      {/* contact links */}
      <div className="field" style={{ padding: 8 }}>
        <ContactRow icon={<IconMail size={20}/>}    label={t("contact.email")}    value="onur.tellioglu@fau.de" href="mailto:onur.tellioglu@fau.de"/>
        <ContactRow icon={<IconGitHub size={20}/>}   label={t("contact.github")}   value="github.com/onur-tellioglu" href="https://github.com/onur-tellioglu"/>
        <ContactRow icon={<IconGlobe size={20}/>}     label={t("contact.site")}     value="onurtellioglu.com" href="https://onurtellioglu.com"/>
        <ContactRow icon={<IconBook size={20}/>}      label={t("contact.studio")}   value="fauvault.space" href="https://fauvault.space"/>
        <ContactRow icon={<IconPin size={20}/>}      label={t("contact.location")} value={t("contact.locationVal")}/>
        <ContactRow icon={<IconFloppy size={20}/>}   label={t("contact.cv")}       value="onur_tellioglu_cv.pdf" href="portfolios-assets/onur_tellioglu_cv.pdf"/>
      </div>
    </div>
  </section>
  );
};

const ContactRow = ({ icon, label, value, href }) => (
  <a href={href || "#"} target={href && href.startsWith("http") ? "_blank" : undefined}
    rel="noreferrer"
    style={{
      display: "grid", gridTemplateColumns: "26px 1fr", gap: 10,
      padding: "8px 6px", textDecoration: "none", color: "#000",
      borderBottom: "1px dotted var(--shadow-m)",
    }}>
    <div style={{ display: "grid", placeItems: "center" }}>{icon}</div>
    <div>
      <div style={{ fontWeight: 700, fontSize: 12, color: "var(--navy)" }}>{label}</div>
      <div style={{ fontSize: 12, color: "var(--text)" }}>{value}</div>
    </div>
  </a>
);

/* ---------------- Section header ---------------- */
const SectionHeader = ({ title, sub }) => (
  <div style={{ margin: "16px 0 10px" }}>
    <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
      <div style={{
        fontWeight: 700, fontSize: 13, letterSpacing: "0.06em",
        color: "var(--navy)",
      }}>{title}</div>
      <div style={{ fontSize: 11, color: "var(--text-dim)" }}
           dangerouslySetInnerHTML={{__html: sub}}/>
    </div>
    <div className="section-rule"/>
  </div>
);

/* ---------------- Publication modal ---------------- */
const PublicationModal = ({ pub, onClose, bringToFront, z }) => {
  const t = useT();
  const ref = React.useRef(null);
  return (
    <DraggableWindow
      initial={{ x: window.innerWidth/2 - 240, y: 110, w: 480, h: undefined }}
      title={<><IconDoc size={14}/> {pub.file} &mdash; {t("pub.props")}</>}
      onClose={onClose}
      onFocus={bringToFront}
      z={z}
    >
      <div style={{ padding: 14, background: "var(--paper)", fontSize: 12.5, lineHeight: 1.5 }}>
        <div style={{ display: "grid", gridTemplateColumns: "70px 1fr", gap: 8 }}>
          <div style={{ display:"grid", placeItems:"center" }}>
            <IconDoc size={56}/>
          </div>
          <div>
            <div style={{ fontFamily:'"Times New Roman", serif', fontSize: 17, fontWeight: 700, lineHeight: 1.2 }}>
              {pub.title}
            </div>
            <div style={{ color: "var(--text-dim)", fontSize: 11.5, marginTop: 3 }}>
              {pub.journal} &middot; {pub.year} &middot; {pub.topic}
            </div>
          </div>
        </div>
        {pub.authors && (
          <div style={{ marginTop: 10, fontSize: 11.5, color: "var(--text-dim)", fontStyle: "italic" }}>
            {pub.authors}
          </div>
        )}
        <div style={{ marginTop: 10, padding: 10, background: "#fff", boxShadow: "var(--bevel-thin-in)" }}>
          {pub.abstract}
        </div>
        <div style={{ marginTop: 10, display: "flex", gap: 6, alignItems: "center" }}>
          {pub.doi && (<>
            <span style={{ color: "var(--text-dim)" }}>{t("pub.doi")}</span>
            <code style={{ fontFamily:'"Courier New", monospace' }}>{pub.doi}</code>
          </>)}
          <div style={{ marginLeft: "auto", display: "flex", gap: 6 }}>
            {pub.url && (
              <button className="btn" onClick={() => window.open(pub.url, "_blank", "noreferrer")}>{t("pub.openNew")}</button>
            )}
            <button className="btn primary" onClick={onClose}>{t("pub.ok")}</button>
          </div>
        </div>
      </div>
    </DraggableWindow>
  );
};

Object.assign(window, {
  Hero, About, Skills, Research, Experience, Contact,
  SectionHeader, PublicationModal, PUBLICATIONS, SKILLS, SKILL_NOTES, EXPERIENCE,
  NAV_SECTIONS,
});
