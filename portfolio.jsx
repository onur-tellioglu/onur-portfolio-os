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
    file: "coskuner-weber_2026_ai_ensembles_synuclein.pdf",
    title: "How do AI ensemble pipelines treat disorder? A head-to-head comparison on α-synuclein",
    authors: "Coskuner-Weber O, Akkum FI, Caglayan SI, Akbayrak IY, Uversky VN, Eyuboglu S",
    journal: "J. Biomol. Struct. Dyn.", year: "2026", topic: "AI · IDPs",
    abstract: "Head-to-head benchmarking of modern AI ensemble pipelines on the intrinsically disordered protein α-synuclein, characterizing how each method represents disorder, ensemble heterogeneity and biologically relevant conformational states.",
    doi: "10.1080/07391102.2026.2630328",
    url: "https://doi.org/10.1080/07391102.2026.2630328",
  },
  {
    file: "akbayrak_2022_sars-cov-2_mpro.pdf",
    title: "Insights into the structural properties of SARS-CoV-2 main protease",
    authors: "Akbayrak IY, Caglayan SI, Kurgan L, Uversky VN, Coskuner-Weber O",
    journal: "Curr. Res. Struct. Biol.", year: "2022", topic: "Viral Biophysics",
    abstract: "Computational analysis of the SARS-CoV-2 main protease (Mpro), focusing on dynamic structural properties, disorder propensity, and druggable conformational states relevant to antiviral discovery.",
    doi: "10.1016/j.crstbi.2022.11.001",
    url: "https://doi.org/10.1016/j.crstbi.2022.11.001",
  },
  {
    file: "akbayrak_2021_mers-cov_macro_domain.pdf",
    title: "Structures of MERS-CoV macro domain in aqueous solution with dynamics: Impacts of parallel tempering simulation techniques and force field parameters",
    authors: "Akbayrak IY, Caglayan SI, Durdagi S, et al.",
    journal: "Proteins", year: "2021", topic: "Molecular Dynamics",
    abstract: "Replica-exchange molecular dynamics (REMD) simulations of the MERS-CoV macro domain in aqueous solution. Compares parallel-tempering techniques and force-field parameter choices on the resulting conformational ensemble.",
    doi: "10.1002/prot.26150",
    url: "https://doi.org/10.1002/prot.26150",
  },
  {
    file: "akbayrak_2020_idp_neurodegenerative_review.pdf",
    title: "Current Challenges and Limitations in the Studies of Intrinsically Disordered Proteins in Neurodegenerative Diseases by Computer Simulations",
    authors: "Akbayrak IY, Caglayan SI, Ozcan Z, Uversky VN, Coskuner-Weber O",
    journal: "Curr. Alzheimer Res.", year: "2020", topic: "Review · IDPs",
    abstract: "A review of the computational toolkit for intrinsically disordered proteins (IDPs) in neurodegenerative disease — force fields, enhanced sampling, ensemble analysis — and the open challenges in modelling their disordered states.",
    doi: "10.2174/1567205017666201109094908",
    url: "https://doi.org/10.2174/1567205017666201109094908",
  },
  {
    file: "akbayrak_2020_mers-cov_macro_remd_dl_preprint.pdf",
    title: "Structures of MERS-CoV Macro Domain: Coupling Replica Exchange Molecular Dynamics and Deep Learning at the Nano Level",
    authors: "Akbayrak IY, et al.",
    journal: "Preprint", year: "2020", topic: "REMD · Deep Learning",
    abstract: "Pre-print combining replica-exchange molecular dynamics with deep-learning analysis to characterize the conformational landscape of the MERS-CoV macro domain at the nanoscale.",
    doi: "10.22541/au.159646074.43956314",
    url: "https://doi.org/10.22541/au.159646074.43956314",
  },
];

const SKILLS = [
  "Python","MATLAB","R","Java","JavaScript","PHP",
  "HTML5","CSS3","WordPress",
  "Git","GROMACS","NWChem","VMD","AI/ML",
];

const SKILL_NOTES = {
  Python:     "Primary language. NumPy, pandas, MDAnalysis, PyTorch.",
  MATLAB:     "Numerical analysis & signal processing from materials-science coursework.",
  R:          "Statistical analysis & visualization of experimental and simulation data.",
  Java:       "Algorithms & data-structures coursework at FAU Erlangen-Nürnberg.",
  JavaScript: "Front-end prototypes, lightweight tooling, this very portfoliOS.",
  PHP:        "WordPress theme/plugin work and back-office tooling for client sites.",
  HTML5:      "Semantic markup, accessibility-aware structure.",
  CSS3:       "Layouts with grid/flex, animation, retro UI fidelity.",
  WordPress:  "Custom themes, Elementor, WP Rocket and RankMath for multilingual sites.",
  Git:        "Branching workflows, code review, reproducible research repos.",
  GROMACS:    "All-atom MD: setup, equilibration, production, REMD, trajectory analysis.",
  NWChem:     "Quantum-chemistry calculations alongside classical MD pipelines.",
  VMD:        "Trajectory visualization, scripting and figure preparation for publications.",
  "AI/ML":    "PyTorch, ensemble methods and multi-agent systems for biomolecular data.",
};

const EXPERIENCE = [
  {
    period: "2025 – Present",
    role: "Co-founder & CTO",
    org: "HumanAI Dynamics — TÜBİTAK BiGG · Dijitalpark Teknokent",
    bullets: [
      "Co-founding a Disorder-Aware MultiAgent AI platform for drug discovery & biomarker development",
      "Architecting the end-to-end physics + AI + multi-agent RL stack (BioMatics, iPocket, AI/MD ensembles)",
      "Currently progressing through the TÜBİTAK 1512 BiGG entrepreneurship programme",
    ],
    icon: "flask",
  },
  {
    period: "May 2025 – Present",
    role: "Webentwickler (Work Study)",
    org: "Schmetterling International GmbH & Co. KG — Geschwand, Germany",
    bullets: [
      "WordPress development and maintenance for one of Europe's largest independent travel-trade groups",
      "On-site role at the company HQ in Geschwand",
    ],
    icon: "globe",
  },
  {
    period: "Mar 2022 – Mar 2024",
    role: "IT Manager",
    org: "Prof. Dr. Ferit Demirkan — Nürnberg, Germany",
    bullets: [
      "Built and maintained multilingual websites (TR / DE / EN) and managed IT infrastructure",
      "On-page SEO optimization, performance tuning and technical documentation",
      "Translation of medical documents across three languages (TR / DE / EN)",
    ],
    icon: "globe",
  },
  {
    period: "Nov 2020 – Dec 2021",
    role: "Scholarship Researcher",
    org: "TÜBİTAK – BİLGEM, Istanbul",
    bullets: [
      "Ran molecular dynamics simulations of proteins using REMD, GROMACS and NWChem",
      "Co-authored 5 peer-reviewed publications in computational biophysics",
      "Completed the GAMES, GROMACS & NWChem MD training (TÜBİTAK, Nov 2020 – Feb 2021)",
    ],
    icon: "molecule",
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
          Ibrahim Yağız<br/>Akbayrak
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
          <button className="btn" onClick={() => alert(t("hero.cvAlert"))}>
            <IconFloppy size={16}/> {t("hero.btnCV")}
          </button>
        </div>
      </div>
      <PortraitPlaceholder width={210} height={230}/>
    </div>

    {/* Stat cards */}
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, marginTop: 22 }}>
      <StatCard icon={<IconDoc size={26}/>} big="5" label={t("stat.pubs")}/>
      <StatCard icon={<IconComputer size={26}/>} big="CS" label={t("stat.cs")}/>
      <StatCard icon={<IconGlobe size={26}/>} big="R&amp;W" label={t("stat.rw")}/>
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
      <AboutCard icon={<IconMolecule size={28}/>} title={t("about.cb.title")}  body={t("about.cb.body")}/>
      <AboutCard icon={<IconResearch size={28}/>} title={t("about.rd.title")}  body={t("about.rd.body")}/>
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
          C:\portfolio\research\publications\
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
                {e.icon === "flask" && <IconFlask size={32}/>}
                {e.icon === "globe" && <IconGlobe size={32}/>}
                {e.icon === "molecule" && <IconMolecule size={32}/>}
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
        <ContactRow icon={<IconMail size={20}/>}    label={t("contact.email")}    value="ibrahimyagizakbayrak@gmail.com" href="mailto:ibrahimyagizakbayrak@gmail.com"/>
        <ContactRow icon={<IconLinkedIn size={20}/>} label={t("contact.linkedin")} value="linkedin.com/in/iyagiz-akbayrak" href="https://www.linkedin.com/in/iyagiz-akbayrak/"/>
        <ContactRow icon={<IconGitHub size={20}/>}   label={t("contact.github")}   value="github.com/akbayrakyagiz" href="https://github.com/akbayrakyagiz"/>
        <ContactRow icon={<IconBriefcase size={20}/>} label={t("contact.studio")}   value="github.com/Pomelo-Studios" href="https://github.com/Pomelo-Studios"/>
        <ContactRow icon={<IconDiploma size={20}/>}  label={t("contact.orcid")}    value="0000-0001-9611-0965" href="https://orcid.org/0000-0001-9611-0965"/>
        <ContactRow icon={<IconPin size={20}/>}      label={t("contact.location")} value={t("contact.locationVal")}/>
        <ContactRow icon={<IconFloppy size={20}/>}   label={t("contact.cv")}       value="yagiz_cv.pdf" href="#"/>
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
          <span style={{ color: "var(--text-dim)" }}>{t("pub.doi")}</span>
          <code style={{ fontFamily:'"Courier New", monospace' }}>{pub.doi}</code>
          <div style={{ marginLeft: "auto", display: "flex", gap: 6 }}>
            <button className="btn" onClick={() => pub.url && window.open(pub.url, "_blank", "noreferrer")}>{t("pub.openNew")}</button>
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
