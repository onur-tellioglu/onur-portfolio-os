/* =====================================================================
   Extras — Projects file explorer + Blog window
   These open as separate Windows-95 style windows on the desktop.
   ===================================================================== */

/* ============ PROJECTS DATA ============ */
const PROJECT_FOLDERS = {
  "C:\\projects\\": {
    folders: [
      { name: "fau_photonics_lab", icon: "folder" },
      { name: "llm_agents",        icon: "folder" },
      { name: "apps_and_infra",    icon: "folder" },
      { name: "embedded",          icon: "folder" },
      { name: "web",               icon: "folder" },
    ],
    files: [
      { name: "README.txt", type: "txt" },
    ],
  },
  "C:\\projects\\fau_photonics_lab\\": {
    files: [
      {
        name: "phoenix1400_python.prj", type: "prj",
        title: "phoenix1400-python: Tunable Laser Control",
        stack: "Python · ctypes · 32-bit DLL",
        year: "2026",
        body:
`Python control for the Luna/Polytec Phoenix 1400 tunable laser
at FAU LHFT. The vendor ships a 32-bit Phoenix.dll with examples
for C++, LabVIEW and MATLAB, and no Python binding.

· Loads the DLL through ctypes
· A class that validates values and tracks laser state
· Four rounds, each signed off on the real laser`,
        links: [],
      },
      {
        name: "imon_fbg.prj", type: "prj",
        title: "imon-fbg: FBG Interrogator Software",
        stack: "Python · FTDI FT232H · Ibsen I-MON 256",
        year: "2026",
        body:
`Custom acquisition and analysis software for an Ibsen I-MON 256
USB fiber Bragg grating interrogator, replacing the vendor
evaluation tool.

· Raw reflection spectra at up to ~6000 frames/s
· Peak tracking and calibration
· Live wavelength-versus-time display`,
        links: [],
      },
      {
        name: "ad9910_pico.prj", type: "prj",
        title: "ad9910-pico: DDS over SPI",
        stack: "Raspberry Pi Pico · SPI · AD9910/PCBZ",
        year: "2026",
        body:
`Drives an AD9910 evaluation board from a Raspberry Pi Pico
instead of the Analog Devices USB stack and PC software.

· Registers read back exact
· IO_UPDATE latches writes
· DAC tone tracks the tuning word to within 1 ppm`,
        links: [],
      },
      {
        name: "gpib_hfdev160.prj", type: "prj",
        title: "gpib-hfdev160: GPIB on Ubuntu 24.04",
        stack: "linux-gpib · NI GPIB-USB-HS · Bash",
        year: "2026",
        body:
`One-shot installer that rebuilds the lab PC's GPIB stack.
Ubuntu ships no GPIB driver at all, so linux-gpib is built
from source and pinned.

· Compat bridge for the kernel 6.16+ timer API
· Update freeze so kernel upgrades cannot break it
· Bus scan without root, survives replug`,
        links: [],
      },
      {
        name: "instrument_lan_bench.prj", type: "prj",
        title: "Instrument LAN Bench Mounts",
        stack: "OpenSCAD · Prusa MK4 · PLA/PETG",
        year: "2026",
        body:
`3D-printed mounts that put the lab's closed instrument network
onto the bench: switch brackets for a 40 x 80 T-slot profile
and a replacement end cap for a power strip.

· Modelled in OpenSCAD, PLA fit test, PETG final
· Every load path checked before printing`,
        links: [],
      },
    ],
  },
  "C:\\projects\\llm_agents\\": {
    files: [
      {
        name: "assistbase_whatsapp.prj", type: "prj",
        title: "Assistbase: Patient Journey over WhatsApp",
        stack: "Node.js · OpenAI API · Supabase",
        year: "2025 – 2026",
        body:
`A fully custom system running the complete patient journey
over WhatsApp for a surgical clinic, with no low-code tools
or templates.

· Multilingual intake, photos, booking, reminders, follow-up
· Handles 90% of communication end to end
· Structured patient memory persisted in Supabase`,
        links: [],
      },
    ],
  },
  "C:\\projects\\apps_and_infra\\": {
    files: [
      {
        name: "pomelohook.prj", type: "prj",
        title: "PomeloHook: Self-Hosted Webhook Relay",
        stack: "Go · SQLite · React · WebSocket",
        year: "2026",
        body:
`Think ngrok, but self-hosted, team-aware and built around
persistent event history.

· Events land in SQLite before forwarding
· Replay from CLI or dashboard
· Single Go binary, dashboard embedded`,
        links: [
          { label: "hook.pomelostudios.net", url: "https://hook.pomelostudios.net" },
        ],
      },
      {
        name: "ctscan_mend.prj", type: "prj",
        title: "ctscan & mend: macOS System Health",
        stack: "Bash · Homebrew · SwiftUI",
        year: "2026",
        body:
`A 14-module CLI published as a Homebrew formula, pure Bash
and dependency-free. mend is the SwiftUI app on top of it.

· Battery, SSD wear, thermals, memory, Wi-Fi
· FileVault, SIP and Gatekeeper checks
· Menu bar app with a background scan timer`,
        links: [
          { label: "ctscan on GitHub Pages", url: "https://onur-tellioglu.github.io/ctscan/" },
        ],
      },
      {
        name: "cull.prj", type: "prj",
        title: "Cull: Swipe-to-Cull Photo Manager",
        stack: "Swift · SwiftUI",
        year: "2026",
        body:
`Reviews a photo library one image at a time, learns what is
blurry, and keeps, culls or undoes with a single gesture.

· Submitted to App Store review`,
        links: [],
      },
    ],
  },
  "C:\\projects\\embedded\\": {
    files: [
      {
        name: "turbin_ecu.prj", type: "prj",
        title: "turbin-ecu: Micro-Turbine Engine Controller",
        stack: "C++ · PlatformIO · ESP32",
        year: "2026",
        body:
`ESP32 engine control unit driven by a 9-state machine, from
IDLE through IGNITION and RUNNING to COOLING.

· Hall-effect RPM, MAX31855 thermocouple over SPI
· Solenoid valves, brushless ESC and fuel pump on PWM
· Desktop simulation via the PlatformIO native target`,
        links: [],
      },
    ],
  },
  "C:\\projects\\web\\": {
    files: [
      {
        name: "agite_storefront.prj", type: "prj",
        title: "AGITÉ: Headless E-Commerce Storefront",
        stack: "Next.js · Prisma · Postgres · MinIO",
        year: "2026",
        body:
`Storefront and admin panel for a Turkish direct-to-consumer
fashion brand, live in production and self-hosted on one VPS.

· 3D Secure card payments through QNB Sanal POS
· Refunds, back-in-stock emails, critical-error alerts
· Product images on MinIO, email with Resend`,
        links: [
          { label: "agitebrand.com", url: "https://agitebrand.com" },
        ],
      },
      {
        name: "portfolio_os.prj", type: "prj",
        title: "portfoliOS (this site)",
        stack: "React · HTML · CSS",
        year: "2026",
        body:
`A Windows-95-themed personal portfolio with a Holo-era Android
companion for mobile. Built on portfoliOS by Ibrahim Yağız
Akbayrak, used with his permission.

· Pixel-art icon set
· i18n in TR / EN / DE
· Zero external UI dependencies`,
        links: [],
      },
      {
        name: "fauvault.prj", type: "prj",
        title: "FAUVault.space: Study Platform",
        stack: "Next.js · Vercel",
        year: "2026",
        body:
`Study platform for FAU students. More than 60% of one
semester's exam was directly covered by the content.`,
        links: [
          { label: "fauvault.space", url: "https://fauvault.space" },
        ],
      },
      {
        name: "side_sites.prj", type: "prj",
        title: "Side Sites",
        stack: "Next.js · MongoDB",
        year: "2025",
        body:
`Small sites built for friends and fun.

· kampusdizi: TV series tracker
· stan-quiz: fan quiz platform`,
        links: [
          { label: "kampusdizi.vercel.app", url: "https://kampusdizi.vercel.app/" },
          { label: "stan-quiz.vercel.app", url: "https://stan-quiz.vercel.app/" },
        ],
      },
    ],
  },
};

/* ============ PROJECTS EXPLORER WINDOW ============ */
const ProjectsExplorer = ({ z, onFocus, onClose, onMin, onOpenFile }) => {
  const t = useT();
  const [path, setPath] = React.useState("C:\\projects\\");
  const [sel, setSel] = React.useState(null);
  const folder = PROJECT_FOLDERS[path] || { folders: [], files: [] };

  const goUp = () => {
    if (path === "C:\\projects\\") return;
    setPath("C:\\projects\\");
    setSel(null);
  };

  return (
    <DraggableWindow
      initial={{ x: 200, y: 60, w: 560, h: 420 }}
      title={<><IconFolder size={14}/> {t("win.projects.title")} — {path}</>}
      z={z}
      onFocus={onFocus}
      onMin={onMin}
      onClose={onClose}
    >
      <div className="win-menubar">
        <div>{t("menu.file")}</div><div>{t("menu.edit")}</div><div>{t("menu.view")}</div><div>{t("menu.help")}</div>
      </div>

      {/* Toolbar */}
      <div style={{
        display: "flex", alignItems: "center", gap: 4,
        padding: "4px 6px", background: "var(--gray)",
        borderBottom: "1px solid var(--shadow-m)", fontSize: 12, flexShrink: 0,
      }}>
        <button className="btn" style={{ padding: "2px 8px" }} onClick={goUp}>↑ {t("tb.up")}</button>
        <span className="taskbar-divider"/>
        <span style={{ color: "var(--text-dim)" }}>{t("proj.address")}</span>
        <code style={{
          flex: 1, background: "#fff", padding: "2px 6px",
          boxShadow: "var(--bevel-thin-in)",
          fontFamily:'"Courier New", monospace', fontSize: 11,
        }}>{path}</code>
      </div>

      {/* Body — sidebar tree + main grid */}
      <div style={{ flex: 1, display: "grid", gridTemplateColumns: "150px 1fr", minHeight: 0 }}>
        <div className="retro-scroll" style={{
          background: "var(--paper)",
          boxShadow: "var(--bevel-thin-in)",
          margin: 4, padding: 6,
          fontSize: 11.5,
          overflow: "auto", minHeight: 0,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 3 }}>
            <span style={{ width: 10 }}>▾</span>
            <IconFolder size={14}/> <span style={{ fontWeight: 700 }}>projects</span>
          </div>
          {PROJECT_FOLDERS["C:\\projects\\"].folders.map(f => {
            const p = `C:\\projects\\${f.name}\\`;
            return (
              <div key={f.name}
                onClick={() => { setPath(p); setSel(null); }}
                style={{
                  display: "flex", alignItems: "center", gap: 4,
                  paddingLeft: 18, paddingTop: 2, paddingBottom: 2,
                  cursor: "pointer",
                  background: path === p ? "var(--navy)" : "transparent",
                  color: path === p ? "#fff" : "#000",
                }}>
                <IconFolder size={14}/> <span>{f.name}</span>
              </div>
            );
          })}
        </div>

        <div className="retro-scroll" style={{
          background: "var(--paper)",
          boxShadow: "var(--bevel-thin-in)",
          margin: "4px 4px 4px 0", padding: 10,
          overflow: "auto", minHeight: 0,
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(96px, 1fr))",
            gap: 10,
          }}>
            {(folder.folders || []).map(f => (
              <ExplorerItem key={f.name}
                icon={<IconFolder size={36}/>}
                name={f.name}
                selected={sel === f.name}
                onSelect={() => setSel(f.name)}
                onOpen={() => { setPath(`C:\\projects\\${f.name}\\`); setSel(null); }}
              />
            ))}
            {(folder.files || []).map(f => (
              <ExplorerItem key={f.name}
                icon={f.type === "prj" ? <IconCode size={36}/> : <IconDoc size={36}/>}
                name={f.name}
                selected={sel === f.name}
                onSelect={() => setSel(f.name)}
                onOpen={() => f.type === "prj" && onOpenFile(f)}
              />
            ))}
          </div>
        </div>
      </div>

      <div style={{
        padding: "3px 8px", fontSize: 11, background: "var(--gray)",
        borderTop: "1px solid var(--shadow-m)",
        display: "flex", justifyContent: "space-between", color: "var(--text-dim)",
        flexShrink: 0,
      }}>
        <span>{(folder.folders?.length || 0) + (folder.files?.length || 0)} {t("proj.objects")}</span>
        <span>{t("proj.dblOpen")}</span>
      </div>
    </DraggableWindow>
  );
};

const ExplorerItem = ({ icon, name, selected, onSelect, onOpen }) => (
  <div
    onClick={() => onSelect()}
    onDoubleClick={() => onOpen()}
    style={{
      textAlign: "center", padding: 4, cursor: "default",
      userSelect: "none",
    }}>
    <div style={{
      display: "grid", placeItems: "center", margin: "0 auto 4px",
      width: 44, height: 44,
      background: selected ? "rgba(8,37,117,0.18)" : "transparent",
    }}>{icon}</div>
    <div style={{
      display: "inline-block",
      fontFamily: '"Courier New", monospace',
      fontSize: 11, lineHeight: 1.2,
      padding: "1px 3px",
      background: selected ? "var(--navy)" : "transparent",
      color: selected ? "#fff" : "#000",
      outline: selected ? "1px dotted #fff" : "none",
    }}>{name}</div>
  </div>
);

/* ============ PROJECT VIEWER WINDOW (file opened) ============ */
const ProjectViewer = ({ file, z, onFocus, onClose }) => {
  const t = useT();
  return (
  <DraggableWindow
    initial={{
      x: Math.min(window.innerWidth - 460, 280 + Math.random()*60),
      y: 100 + Math.random()*40,
      w: 460, h: 420,
    }}
    title={<><IconCode size={14}/> {file.name} — Notepad</>}
    z={z}
    onFocus={onFocus}
    onClose={onClose}
  >
    <div className="win-menubar">
      <div>{t("menu.file")}</div><div>{t("menu.edit")}</div><div>{t("menu.search")}</div><div>{t("menu.help")}</div>
    </div>
    <div className="retro-scroll" style={{
      flex: 1, minHeight: 0, overflow: "auto",
      background: "#fff", boxShadow: "var(--bevel-thin-in)",
      margin: 4, padding: 14,
      fontFamily: '"Courier New", monospace',
      fontSize: 12, lineHeight: 1.55, color: "var(--text)",
    }}>
      <div style={{
        fontFamily:'"Times New Roman", serif',
        fontSize: 19, fontWeight: 700, lineHeight: 1.15,
        marginBottom: 4,
      }}>{file.title}</div>
      <div style={{ color: "var(--text-dim)", fontSize: 11.5, marginBottom: 12 }}>
        {file.stack} &middot; {file.year}
      </div>
      <hr style={{ border: "none", borderTop: "1px dashed var(--shadow-m)", margin: "0 0 10px" }}/>
      <pre style={{
        margin: 0, fontFamily: 'inherit', fontSize: 12, lineHeight: 1.55,
        whiteSpace: "pre-wrap",
      }}>{file.body}</pre>

      {file.links && file.links.length > 0 && (
        <>
          <hr style={{ border: "none", borderTop: "1px dashed var(--shadow-m)", margin: "12px 0 8px" }}/>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
            {file.links.map((l, i) => (
              <button key={i} className="btn" onClick={() => alert(t("proj.placeholder"))}>
                {l.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  </DraggableWindow>
  );
};

/* ============ BLOG DATA ============ */
const BLOG_POSTS = [
  {
    id: "p5",
    date: "2026-08-25",
    author: "onur",
    kind: "post",
    title: "A Python binding for a laser that only ships a 32-bit DLL",
    tags: ["lab", "python", "ctypes"],
    body:
`The Phoenix 1400 tunable laser comes with a 32-bit Phoenix.dll
and examples for C++, LabVIEW and MATLAB, but nothing for Python.
The binding I wrote loads the DLL through ctypes and puts a class
in front of it that checks every value and knows what state the
laser is in. It shipped in four rounds, each signed off on the
real laser before it was merged.`,
  },
  {
    id: "p4",
    date: "2026-08-12",
    author: "onur",
    kind: "post",
    title: "Driving an AD9910 from a Raspberry Pi Pico",
    tags: ["lab", "rf", "embedded"],
    body:
`The lab's AD9910 evaluation board normally talks to a PC through
Analog Devices' USB interface. I replaced that with a Raspberry
Pi Pico over SPI. Registers read back exactly what was written,
and the DAC tone tracks the programmed tuning word to within
1 ppm. Most of the work was jumpers and pinouts, not code.`,
  },
  {
    id: "p3",
    date: "2026-06-18",
    author: "onur",
    kind: "milestone",
    title: "Joining the FAU photonics lab as a HiWi",
    tags: ["lab", "fau", "hiwi"],
    body:
`I started as a student research assistant at the Institute of
Microwaves and Photonics, between instruments and software. The
first weeks went into the bench itself and into making the lab
PC's GPIB stack survive kernel upgrades on Ubuntu 24.04.`,
  },
  {
    id: "p2",
    date: "2026-04-26",
    author: "onur",
    kind: "note",
    title: "PomeloHook: store first, forward second",
    tags: ["go", "infra", "sqlite"],
    body:
`Every event lands in SQLite before it is forwarded. If the
forward fails, the event is still there and can be replayed from
the CLI or the dashboard. One Go binary, React dashboard embedded,
pure-Go SQLite so the build needs no C toolchain.`,
  },
  {
    id: "p1",
    date: "2025-10-01",
    author: "onur",
    kind: "milestone",
    title: "From computer engineering to AI at FAU",
    tags: ["meta", "education"],
    body:
`After a year of computer engineering at Istanbul Arel University
I transferred to FAU Erlangen-Nürnberg to study Artificial
Intelligence. The plan: keep building real systems on the side
while the degree fills in the theory underneath them.`,
  },
];

const KIND_BADGE = {
  post:      { label: "POST",      bg: "#dfe5f3", fg: "var(--navy)" },
  milestone: { label: "MILESTONE", bg: "#dff3df", fg: "#1e5a1e" },
  talk:      { label: "TALK",      bg: "#fff3c4", fg: "#7a5a00" },
  note:      { label: "NOTE",      bg: "#f3e0dc", fg: "#8a2e1f" },
};

/* ============ BLOG WINDOW ============ */
const BlogWindow = ({ z, onFocus, onClose, onMin }) => {
  const t = useT();
  const [openId, setOpenId] = React.useState(BLOG_POSTS[0].id);
  const open = BLOG_POSTS.find(p => p.id === openId) || BLOG_POSTS[0];

  return (
    <DraggableWindow
      initial={{ x: 220, y: 80, w: 620, h: 460 }}
      title={<><IconBook size={14}/> {t("win.blog.title")}</>}
      z={z}
      onFocus={onFocus}
      onMin={onMin}
      onClose={onClose}
    >
      <div className="win-menubar">
        <div>{t("menu.file")}</div><div>{t("menu.view")}</div><div>{t("menu.post")}</div><div>{t("menu.help")}</div>
      </div>

      <div style={{
        flex: 1, display: "grid", gridTemplateColumns: "220px 1fr",
        minHeight: 0, padding: 4, gap: 4,
      }}>
        <div className="retro-scroll" style={{
          background: "var(--paper)",
          boxShadow: "var(--bevel-thin-in)",
          overflow: "auto", minHeight: 0,
        }}>
          {BLOG_POSTS.map(p => {
            const k = KIND_BADGE[p.kind];
            const kLbl = t("blog.kind." + p.kind);
            const active = p.id === openId;
            return (
              <div key={p.id}
                onClick={() => setOpenId(p.id)}
                style={{
                  padding: "8px 8px 9px",
                  borderBottom: "1px dotted var(--shadow-m)",
                  cursor: "pointer",
                  background: active ? "var(--navy)" : "transparent",
                  color: active ? "#fff" : "#000",
                }}>
                <div style={{
                  display: "flex", justifyContent: "space-between", gap: 4,
                  fontSize: 10, marginBottom: 3, alignItems: "center",
                }}>
                  <span style={{
                    fontFamily: '"Courier New", monospace',
                    color: active ? "#fff" : "var(--text-dim)",
                  }}>{p.date}</span>
                  <span style={{
                    padding: "0 4px", fontSize: 9, fontWeight: 700, letterSpacing: "0.05em",
                    background: active ? "#fff" : k.bg,
                    color: k.fg,
                  }}>{kLbl}</span>
                </div>
                <div style={{
                  fontSize: 12, fontWeight: 700, lineHeight: 1.25,
                }}>{t("blog." + p.id + ".title")}</div>
              </div>
            );
          })}
        </div>

        <div className="retro-scroll" style={{
          background: "var(--paper)",
          boxShadow: "var(--bevel-thin-in)",
          padding: 16, overflow: "auto", minHeight: 0,
        }}>
          <div style={{
            display: "flex", alignItems: "center", gap: 8, marginBottom: 4,
          }}>
            <div style={{
              width: 28, height: 28,
              background: "var(--navy)", color: "#fff",
              display: "grid", placeItems: "center",
              fontFamily:'"Times New Roman", serif', fontWeight: 700, fontSize: 16,
              boxShadow: "var(--bevel-thin-out)",
            }}>O</div>
            <div style={{ fontSize: 11.5 }}>
              <div style={{ fontWeight: 700 }}>Onur Tellioglu</div>
              <div style={{
                color: "var(--text-dim)", fontFamily:'"Courier New", monospace', fontSize: 10.5,
              }}>@{open.author} · {open.date}</div>
            </div>
            <span style={{
              marginLeft: "auto", fontSize: 10, fontWeight: 700, letterSpacing: "0.05em",
              padding: "1px 6px",
              background: KIND_BADGE[open.kind].bg,
              color: KIND_BADGE[open.kind].fg,
            }}>{t("blog.kind." + open.kind)}</span>
          </div>
          <h2 style={{
            fontFamily:'"Times New Roman", serif', fontSize: 22, lineHeight: 1.15,
            margin: "8px 0 4px", fontWeight: 700,
          }}>{t("blog." + open.id + ".title")}</h2>
          <div style={{ display: "flex", gap: 4, flexWrap: "wrap", marginBottom: 10 }}>
            {open.tags.map(t => (
              <span key={t} style={{
                fontSize: 10, padding: "1px 6px",
                background: "var(--gray-3)", color: "var(--text-dim)",
                fontFamily:'"Courier New", monospace',
              }}>#{t}</span>
            ))}
          </div>
          <pre style={{
            margin: 0, fontFamily: '"Tahoma", sans-serif',
            fontSize: 13, lineHeight: 1.6, whiteSpace: "pre-wrap",
          }}>{t("blog." + open.id + ".body")}</pre>

          <div style={{
            marginTop: 18, paddingTop: 10,
            borderTop: "1px dashed var(--shadow-m)",
            display: "flex", gap: 8, alignItems: "center",
          }}>
            <button className="btn" onClick={() => alert(t("blog.replyAlert"))}>{t("blog.reply")}</button>
            <button className="btn" onClick={() => alert(t("blog.shareAlert"))}>{t("blog.share")}</button>
            <span style={{ marginLeft: "auto", color: "var(--text-dim)", fontSize: 11 }}>
              {BLOG_POSTS.findIndex(p => p.id === open.id) + 1} {t("blog.of")} {BLOG_POSTS.length}
            </span>
          </div>
        </div>
      </div>

      <div style={{
        padding: "3px 8px", fontSize: 11, background: "var(--gray)",
        borderTop: "1px solid var(--shadow-m)",
        display: "flex", justifyContent: "space-between", color: "var(--text-dim)",
        flexShrink: 0,
      }}>
        <span>{BLOG_POSTS.length} {t("blog.entries")}</span>
        <span>onurtellioglu.com/blog</span>
      </div>
    </DraggableWindow>
  );
};

Object.assign(window, {
  ProjectsExplorer, ProjectViewer, BlogWindow,
  PROJECT_FOLDERS, BLOG_POSTS, KIND_BADGE,
});
