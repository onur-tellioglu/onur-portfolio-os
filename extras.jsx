/* =====================================================================
   Extras — Projects file explorer + Blog window
   These open as separate Windows-95 style windows on the desktop.
   ===================================================================== */

/* ============ PROJECTS DATA ============ */
const PROJECT_FOLDERS = {
  "C:\\projects\\": {
    folders: [
      { name: "humanai_dynamics",  icon: "folder" },
      { name: "pomelo_studios",    icon: "folder" },
      { name: "molecular_sims",    icon: "folder" },
      { name: "web_dev",           icon: "folder" },
    ],
    files: [
      { name: "README.txt", type: "txt" },
    ],
  },
  "C:\\projects\\humanai_dynamics\\": {
    files: [
      {
        name: "biomatics_msa.prj", type: "prj",
        title: "BioMatics 1.0 — Wasserstein MSA",
        stack: "C++ · optimal transport",
        year: "2025",
        body:
`A Wasserstein-distance approach for next-generation Multiple
Sequence Alignment, developed alongside Prof. Orkide Coşkuner Weber.
Fork of ocoskuner/BioMatics under HumanAI Dynamics.

· Optimal-transport metric for sequence comparison
· Designed for IDPs and highly divergent families
· Core building block of the BioMatics AI/MD engine`,
        links: [
          { label: "View on GitHub", url: "https://github.com/akbayrakyagiz/BioMatics" },
        ],
      },
      {
        name: "ipocket_rl_agent.prj", type: "prj",
        title: "iPocket — RL Agent for Cryptic Pocket Search",
        stack: "Python · PyTorch · RL · GROMACS",
        year: "2025 — Present",
        body:
`Multi-agent reinforcement learning over protein trajectories
to surface druggable transient and cryptic pockets that static
structure tools miss.

· Pocket coordinates + druggability scoring
· Used for fragment → hit/lead → ADMET pre-filter workflow
· Designed for IDPs and flexible targets`,
        links: [],
      },
      {
        name: "multimodal_biomarker.prj", type: "prj",
        title: "Multimodal Biomarker Layer",
        stack: "Python · digital pathology · omics",
        year: "2025 — Present",
        body:
`Connects molecular-dynamic signals to clinical decision support
by combining digital pathology, imaging and omics with mechanistic
features from the AI/MD core.

· Companion-diagnostic ready outputs
· SaaS + CRO model for biotech, pharma and diagnostics
· Initial target customers: biotech, pharma, medical imaging`,
        links: [],
      },
    ],
  },
  "C:\\projects\\pomelo_studios\\": {
    files: [
      {
        name: "pomelohook.prj", type: "prj",
        title: "pomelohook",
        stack: "Pomelo Studios",
        year: "2024 — Present",
        body:
`A Pomelo Studios project — hook-style developer utility built
under the studio umbrella alongside the live markdown editor.

Details coming soon — see the Pomelo Studios GitHub org for the
latest source and releases.`,
        links: [
          { label: "Pomelo Studios on GitHub", url: "https://github.com/Pomelo-Studios" },
        ],
      },
      {
        name: "live_markdown_editor.prj", type: "prj",
        title: "Live Markdown Editor",
        stack: "Pomelo Studios · web",
        year: "2024 — Present",
        body:
`A live, in-browser markdown editor by Pomelo Studios with
real-time preview.

Details coming soon — see the Pomelo Studios GitHub org for the
latest source and releases.`,
        links: [
          { label: "Pomelo Studios on GitHub", url: "https://github.com/Pomelo-Studios" },
        ],
      },
    ],
  },
  "C:\\projects\\molecular_sims\\": {
    files: [
      {
        name: "alpha_synuclein_ai_ensembles.prj", type: "prj",
        title: "AI Ensemble Pipelines on α-Synuclein",
        stack: "Python · MDAnalysis · AI ensembles",
        year: "2026",
        body:
`Head-to-head comparison of AI ensemble pipelines on the
intrinsically disordered protein α-synuclein. How do different
methods represent disorder, ensemble heterogeneity, and
biologically meaningful conformational states?

· Published in J. Biomol. Struct. Dyn. (2026)
· DOI: 10.1080/07391102.2026.2630328`,
        links: [
          { label: "Open paper (DOI)", url: "https://doi.org/10.1080/07391102.2026.2630328" },
        ],
      },
      {
        name: "sars_cov2_mpro.prj", type: "prj",
        title: "SARS-CoV-2 Main Protease — Structural Insights",
        stack: "REMD · GROMACS · NWChem",
        year: "2022",
        body:
`Computational analysis of the SARS-CoV-2 main protease (Mpro):
disorder propensity, dynamic structural properties and druggable
conformational states for antiviral discovery.

· Published in Curr. Res. Struct. Biol., 2022; 4:349–355
· DOI: 10.1016/j.crstbi.2022.11.001`,
        links: [
          { label: "Open paper (DOI)", url: "https://doi.org/10.1016/j.crstbi.2022.11.001" },
        ],
      },
      {
        name: "mers_cov_macro_domain.prj", type: "prj",
        title: "MERS-CoV Macro Domain — REMD + Deep Learning",
        stack: "REMD · GROMACS · Deep Learning",
        year: "2020 — 2021",
        body:
`Replica-exchange molecular dynamics of the MERS-CoV macro domain
in aqueous solution, comparing parallel-tempering techniques and
force-field parameters. A separate pre-print couples REMD with
deep learning at the nano level.

· Proteins (2021) · DOI: 10.1002/prot.26150
· Pre-print: 10.22541/au.159646074.43956314`,
        links: [
          { label: "Open paper (DOI)", url: "https://doi.org/10.1002/prot.26150" },
        ],
      },
      {
        name: "idp_neurodegenerative_review.prj", type: "prj",
        title: "IDPs in Neurodegenerative Diseases — Review",
        stack: "Review · IDPs · MD",
        year: "2020",
        body:
`Review of the computational toolkit for intrinsically disordered
proteins (IDPs) in neurodegenerative diseases — force fields,
enhanced sampling, ensemble analysis — and the open challenges in
modelling their disordered states.

· Curr. Alzheimer Res. 17(9): 805–818
· DOI: 10.2174/1567205017666201109094908`,
        links: [
          { label: "Open paper (DOI)", url: "https://doi.org/10.2174/1567205017666201109094908" },
        ],
      },
    ],
  },
  "C:\\projects\\web_dev\\": {
    files: [
      {
        name: "portfolio_os.prj", type: "prj",
        title: "portfoliOS (this site)",
        stack: "React · HTML · CSS",
        year: "2026",
        body:
`A Windows-95-themed personal portfolio with a Holo-era Android
companion for mobile and tablet. Draggable windows on desktop,
icon grid + Holo action bars on mobile.

· Pixel-flavored icon set
· i18n in TR / EN / DE
· Zero external UI dependencies`,
        links: [
          { label: "View source on GitHub", url: "https://github.com/akbayrakyagiz" },
        ],
      },
      {
        name: "demirkan_med_sites.prj", type: "prj",
        title: "Multilingual Medical Practice Websites",
        stack: "WordPress · PHP · Elementor · SEO",
        year: "2022 — 2024",
        body:
`Multilingual websites (TR / DE / EN) and IT infrastructure for
Prof. Dr. Ferit Demirkan's practice in Nürnberg.

· On-page SEO (RankMath) and performance (WP Rocket)
· Technical documentation and translation of medical content
· 4+ years of IT management and support`,
        links: [],
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
    date: "2026-05-09",
    author: "yagiz",
    kind: "milestone",
    title: "Co-founding HumanAI Dynamics",
    tags: ["humanai", "startup", "tubitak-bigg"],
    body:
`Excited to announce that, with Prof. Orkide Coşkuner Weber and a
small founding team, we're co-founding HumanAI Dynamics — a
disorder-aware multi-agent AI platform for drug discovery and
biomarker development. Currently in the TÜBİTAK 1512 BiGG
entrepreneurship programme.`,
  },
  {
    id: "p4",
    date: "2026-04-22",
    author: "yagiz",
    kind: "milestone",
    title: "α-synuclein paper out in J. Biomol. Struct. Dyn.",
    tags: ["research", "publication", "idp"],
    body:
`Our head-to-head comparison of AI ensemble pipelines on
α-synuclein is now out in the Journal of Biomolecular Structure
and Dynamics. doi:10.1080/07391102.2026.2630328`,
  },
  {
    id: "p3",
    date: "2026-03-12",
    author: "yagiz",
    kind: "note",
    title: "Notes on disorder-aware AI pipelines",
    tags: ["ai", "idp", "humanai"],
    body:
`Some scratchpad thoughts before we lock the HumanAI Dynamics
architecture: where physics ends and learned ensembles begin,
why IDPs break naive ensemble metrics, and what "druggable" should
mean for a transient pocket.`,
  },
  {
    id: "p2",
    date: "2026-02-18",
    author: "yagiz",
    kind: "note",
    title: "Three things I learned debugging GROMACS",
    tags: ["dev", "gromacs"],
    body:
`1. Read the .log before the .err.
2. NaN forces almost always trace back to overlapping atoms after
   solvation. Check minimization.
3. Domain decomposition errors are a feature, not a bug — they save
   you from a much worse silent failure later.`,
  },
  {
    id: "p1",
    date: "2025-12-04",
    author: "yagiz",
    kind: "post",
    title: "From materials science to computer science",
    tags: ["meta", "education"],
    body:
`Closing one degree (B.Sc. Materials Science & Technologies at
the Turkish-German University) and starting another (B.Sc. Computer
Science at FAU Erlangen-Nürnberg). The plan: keep the simulations,
add the systems.`,
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
            }}>Y</div>
            <div style={{ fontSize: 11.5 }}>
              <div style={{ fontWeight: 700 }}>İ. Yağız Akbayrak</div>
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
        <span>yagiz.dev/blog</span>
      </div>
    </DraggableWindow>
  );
};

Object.assign(window, {
  ProjectsExplorer, ProjectViewer, BlogWindow,
  PROJECT_FOLDERS, BLOG_POSTS, KIND_BADGE,
});
