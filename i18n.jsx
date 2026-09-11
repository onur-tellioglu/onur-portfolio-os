/* =====================================================================
   i18n — translations + LangContext + useT hook + LangSwitcher
   ---------------------------------------------------------------------
   Usage:
     wrap <App/> in <LangProvider> (see app.jsx)
     inside any component:  const t = useT();  ...  {t("nav.home")}
   ===================================================================== */

const LANGUAGES = [
  { code: "EN", id: "en", name: "English",  domain: "https://yagiz.dev/portfolio/"     },
  { code: "TR", id: "tr", name: "Türkçe",   domain: "https://yagiz.dev/tr/portfolio/"  },
  { code: "DE", id: "de", name: "Deutsch",  domain: "https://yagiz.dev/de/portfolio/"  },
];

/* ------------------------- TRANSLATIONS ------------------------- */
const STRINGS = {
  /* Browser window — toolbar / menubar / status */
  "menu.file":      { en: "File",       tr: "Dosya",       de: "Datei" },
  "menu.edit":      { en: "Edit",       tr: "Düzen",       de: "Bearbeiten" },
  "menu.view":      { en: "View",       tr: "Görünüm",     de: "Ansicht" },
  "menu.favorites": { en: "Favorites",  tr: "Sık Kullanılanlar", de: "Favoriten" },
  "menu.tools":     { en: "Tools",      tr: "Araçlar",     de: "Extras" },
  "menu.help":      { en: "Help",       tr: "Yardım",      de: "Hilfe" },
  "menu.search":    { en: "Search",     tr: "Ara",         de: "Suchen" },
  "menu.post":      { en: "Post",       tr: "Yazı",        de: "Beitrag" },

  "tb.back":     { en: "Back",     tr: "Geri",     de: "Zurück" },
  "tb.forward":  { en: "Forward",  tr: "İleri",    de: "Vorwärts" },
  "tb.stop":     { en: "Stop",     tr: "Dur",      de: "Stopp" },
  "tb.refresh":  { en: "Refresh",  tr: "Yenile",   de: "Aktualisieren" },
  "tb.home":     { en: "Home",     tr: "Anasayfa", de: "Start" },
  "tb.search":   { en: "Search",   tr: "Ara",      de: "Suchen" },
  "tb.favs":     { en: "Favorites", tr: "Favoriler", de: "Favoriten" },
  "tb.history":  { en: "History",  tr: "Geçmiş",   de: "Verlauf" },
  "tb.mail":     { en: "Mail",     tr: "Posta",    de: "E-Mail" },
  "tb.print":    { en: "Print",    tr: "Yazdır",   de: "Drucken" },
  "tb.address":  { en: "Address",  tr: "Adres",    de: "Adresse" },
  "tb.go":       { en: "Go",       tr: "Git",      de: "Los" },
  "tb.up":       { en: "Up",       tr: "Yukarı",   de: "Auf" },

  "status.done":     { en: "Done",                  tr: "Tamamlandı",        de: "Fertig" },
  "status.internet": { en: "Internet — 100%",       tr: "İnternet — %100",   de: "Internet — 100%" },

  "win.portfolio.title":   { en: "Ibrahim Yağız Akbayrak — personal portfolio",
                             tr: "Ibrahim Yağız Akbayrak — kişisel portföy",
                             de: "Ibrahim Yağız Akbayrak — persönliches Portfolio" },
  "win.notes.title":   { en: "notes.txt", tr: "notlar.txt", de: "notizen.txt" },
  "win.welcome.title": { en: "welcome.exe", tr: "hosgeldin.exe", de: "willkommen.exe" },
  "win.stats.title":   { en: "system.stat", tr: "sistem.dur", de: "system.dat" },
  "win.projects.title":{ en: "Projects", tr: "Projeler", de: "Projekte" },
  "win.blog.title":    { en: "Blog — yagiz.log", tr: "Blog — yagiz.log", de: "Blog — yagiz.log" },
  "win.games.title":   { en: "Games", tr: "Oyunlar", de: "Spiele" },
  "win.terminal.title":{ en: "Terminal", tr: "Terminal", de: "Terminal" },
  "win.a11y.title":    { en: "Accessibility — Control Panel",
                         tr: "Erişilebilirlik — Denetim Masası",
                         de: "Bedienungshilfen — Systemsteuerung" },

  /* Navigation tabs (inside browser window) */
  "nav.home":       { en: "home",       tr: "anasayfa",  de: "start" },
  "nav.about":      { en: "about",      tr: "hakkımda",  de: "über mich" },
  "nav.skills":     { en: "skills",     tr: "yetenekler",de: "fähigkeiten" },
  "nav.research":   { en: "research",   tr: "araştırma", de: "forschung" },
  "nav.experience": { en: "experience", tr: "deneyim",   de: "erfahrung" },
  "nav.contact":    { en: "contact",    tr: "iletişim",  de: "kontakt" },

  /* HERO */
  "hero.greeting":  { en: "Hello! I'm",  tr: "Merhaba! Ben",  de: "Hallo! Ich bin" },
  "hero.tagline":   { en: "Computer scientist · computational biophysicist · co-founder.",
                      tr: "Bilgisayar bilimcisi · hesaplamalı biyofizikçi · kurucu ortak.",
                      de: "Informatiker · Computational Biophysicist · Mitgründer." },
  "hero.intro":     { en: "Computer Science student at FAU Erlangen-Nürnberg with a background in computational biophysics and materials science. Co-author of 5 peer-reviewed publications on protein structure, intrinsically disordered proteins and molecular dynamics. Currently co-founding HumanAI Dynamics, a disorder-aware multi-agent AI platform for drug discovery and biomarker development — progressing through the TÜBİTAK BiGG entrepreneurship programme.",
                      tr: "Friedrich-Alexander Üniversitesi Erlangen-Nürnberg'de Bilgisayar Bilimi öğrencisiyim; hesaplamalı biyofizik ve malzeme bilimleri geçmişine sahibim. Protein yapısı, yapısal olarak düzensiz proteinler ve moleküler dinamik üzerine 5 hakemli yayının ortak yazarıyım. Şu anda ilaç keşfi ve biyomarker geliştirme için disorder-aware bir multi-agent yapay zekâ platformu olan HumanAI Dynamics'in kurucu ortağıyım — TÜBİTAK BiGG girişimcilik programında ilerliyoruz.",
                      de: "Informatikstudent an der FAU Erlangen-Nürnberg mit Hintergrund in rechnergestützter Biophysik und Materialwissenschaften. Mitautor von 5 Peer-Review-Publikationen zu Proteinstruktur, intrinsisch ungeordneten Proteinen und Molekulardynamik. Aktuell Mitgründer von HumanAI Dynamics, einer Disorder-Aware Multi-Agent-KI-Plattform für Wirkstoff- und Biomarker-Entdeckung — im TÜBİTAK-BiGG-Programm." },
  "hero.btnResearch":{en: "View Research", tr: "Araştırmaları Gör", de: "Forschung ansehen" },
  "hero.btnContact": {en: "Contact",       tr: "İletişim",          de: "Kontakt" },
  "hero.btnCV":      {en: "Download CV",   tr: "CV İndir",          de: "Lebenslauf" },
  "hero.cvAlert":    {en: "CV available on request — get in touch via the contact section.",
                      tr: "CV talep üzerine paylaşılır — iletişim bölümünden ulaşabilirsiniz.",
                      de: "Lebenslauf auf Anfrage — bitte über den Kontaktbereich melden." },

  "stat.pubs":   { en: "Peer-reviewed Publications", tr: "Hakemli Yayınlar",          de: "Peer-Review-Publikationen" },
  "stat.cs":     { en: "CS @ FAU Erlangen-Nürnberg",   tr: "FAU Erlangen-Nürnberg · Bilgisayar Bilimi", de: "Informatik @ FAU Erlangen-Nürnberg" },
  "stat.rw":     { en: "HumanAI Dynamics · Co-founder",  tr: "HumanAI Dynamics · Kurucu Ortak",      de: "HumanAI Dynamics · Mitgründer" },

  /* Section headers */
  "sec.about.title":      { en: "ABOUT ME",
                            tr: "HAKKIMDA",
                            de: "ÜBER MICH" },
  "sec.about.sub":        { en: "Background and disciplines",
                            tr: "Geçmiş ve alanlar",
                            de: "Hintergrund und Disziplinen" },

  "sec.skills.title":     { en: "SKILLS", tr: "YETENEKLER", de: "FÄHIGKEITEN" },
  "sec.skills.sub":       { en: "Languages, tools & environments — hover a tile",
                            tr: "Diller, araçlar ve ortamlar — bir karenin üzerine gelin",
                            de: "Sprachen, Werkzeuge & Umgebungen — Kachel hovern" },
  "sec.skills.empty":     { en: "// hover a skill tile to see notes",
                            tr: "// notları görmek için bir yetenek karesinin üzerine gelin",
                            de: "// Kachel hovern, um Notizen zu sehen" },

  "sec.research.title":   { en: "RESEARCH & PUBLICATIONS",
                            tr: "ARAŞTIRMA & YAYINLAR",
                            de: "FORSCHUNG & PUBLIKATIONEN" },
  "sec.research.sub":     { en: "Peer-reviewed work — double-click to open",
                            tr: "Hakemli çalışmalar — açmak için çift tıklayın",
                            de: "Begutachtete Arbeiten — Doppelklick zum Öffnen" },
  "sec.research.items":   { en: "item(s)", tr: "öğe", de: "Element(e)" },

  "sec.exp.title":        { en: "EXPERIENCE.LOG", tr: "DENEYIM.LOG", de: "ERFAHRUNG.LOG" },
  "sec.exp.sub":          { en: "Timeline of roles", tr: "Görev zaman çizelgesi", de: "Zeitachse der Rollen" },
  "sec.exp.shell":        { en: "$ cat experience.log",
                            tr: "$ cat deneyim.log",
                            de: "$ cat erfahrung.log" },
  "sec.exp.eduTitle":     { en: "EDUCATION", tr: "EĞİTİM", de: "AUSBILDUNG" },
  "sec.exp.eduBody":      { en: "<b>B.Sc. Computer Science</b> — Friedrich-Alexander-Universität Erlangen-Nürnberg, Germany &nbsp;·&nbsp; 2023 – ongoing<br/><b>B.Sc. Materials Science and Technologies</b> — Turkish-German University, Istanbul &nbsp;·&nbsp; 2018 – 2023",
                            tr: "<b>Bilgisayar Bilimi Lisansı</b> — Friedrich-Alexander-Üniversitesi Erlangen-Nürnberg, Almanya &nbsp;·&nbsp; 2023 – devam ediyor<br/><b>Malzeme Bilimi ve Teknolojileri Lisansı</b> — Türk-Alman Üniversitesi, İstanbul &nbsp;·&nbsp; 2018 – 2023",
                            de: "<b>B.Sc. Informatik</b> — Friedrich-Alexander-Universität Erlangen-Nürnberg, Deutschland &nbsp;·&nbsp; 2023 – laufend<br/><b>B.Sc. Materialwissenschaften und -technologien</b> — Türkisch-Deutsche Universität, Istanbul &nbsp;·&nbsp; 2018 – 2023" },

  "sec.contact.title":    { en: "CONTACT.MSG", tr: "ILETISIM.MSG", de: "KONTAKT.MSG" },
  "sec.contact.sub":      { en: "Let's build something meaningful together",
                            tr: "Birlikte anlamlı bir şey yapalım",
                            de: "Lass uns gemeinsam etwas Sinnvolles bauen" },
  "contact.newMsg":       { en: "New Message", tr: "Yeni Mesaj", de: "Neue Nachricht" },
  "contact.to":           { en: "To:", tr: "Kime:", de: "An:" },
  "contact.subject":      { en: "Subject:", tr: "Konu:", de: "Betreff:" },
  "contact.toValue":      { en: "Let's build something meaningful!",
                            tr: "Birlikte anlamlı bir şey yapalım!",
                            de: "Lass uns etwas Sinnvolles bauen!" },
  "contact.subjValue":    { en: "Collaboration / Project / Hello",
                            tr: "İşbirliği / Proje / Merhaba",
                            de: "Zusammenarbeit / Projekt / Hallo" },
  "contact.greet":        { en: "Hi Yağız,", tr: "Merhaba Yağız,", de: "Hallo Yağız," },
  "contact.body":         { en: "I&rsquo;m always open to interesting projects, collaborations, and conversations &mdash; from molecular simulations to thoughtful web work. Send a note anywhere on the right and I&rsquo;ll get back to you.",
                            tr: "İlginç projelere, işbirliklerine ve sohbetlere — moleküler simülasyonlardan özenli web işlerine kadar — her zaman açığım. Sağdaki kanallardan birine yazın, geri dönerim.",
                            de: "Ich bin immer offen für spannende Projekte, Kooperationen und Gespräche — von Molekulardynamik bis durchdachter Webarbeit. Schreib mir auf einem der Kanäle rechts, ich melde mich." },
  "contact.email":        { en: "Email",       tr: "E-posta",   de: "E-Mail" },
  "contact.linkedin":     { en: "LinkedIn",    tr: "LinkedIn",  de: "LinkedIn" },
  "contact.github":       { en: "GitHub",      tr: "GitHub",    de: "GitHub" },
  "contact.studio":       { en: "Studio",      tr: "Stüdyo",    de: "Studio" },
  "contact.orcid":        { en: "ORCID",       tr: "ORCID",     de: "ORCID" },
  "contact.location":     { en: "Location",    tr: "Konum",     de: "Standort" },
  "contact.locationVal":  { en: "Nürnberg, Germany", tr: "Nürnberg, Almanya", de: "Nürnberg, Deutschland" },
  "contact.cv":           { en: "Download CV", tr: "CV İndir",  de: "Lebenslauf" },

  /* ABOUT cards */
  "about.cs.title":  { en: "Computer Science",        tr: "Bilgisayar Bilimi",    de: "Informatik" },
  "about.cs.body":   { en: "B.Sc. Computer Science at FAU Erlangen-Nürnberg, with prior B.Sc. in Materials Science and Technologies (TAU Istanbul).",
                       tr: "FAU Erlangen-Nürnberg'de Bilgisayar Bilimi lisansı; öncesinde Türk-Alman Üniversitesi'nde Malzeme Bilimi ve Teknolojileri lisansı.",
                       de: "B.Sc. Informatik an der FAU Erlangen-Nürnberg; zuvor B.Sc. Materialwissenschaften und -technologien (TAU Istanbul)." },
  "about.cb.title":  { en: "Computational Biophysics", tr: "Hesaplamalı Biyofizik", de: "Rechnergestützte Biophysik" },
  "about.cb.body":   { en: "Molecular dynamics, REMD and quantum-chemistry workflows for proteins — including intrinsically disordered and viral systems.",
                       tr: "Proteinler için moleküler dinamik, REMD ve kuantum-kimya iş akışları — yapısal olarak düzensiz ve viral sistemler dahil.",
                       de: "Molekulardynamik, REMD und Quantenchemie-Workflows für Proteine — inkl. intrinsisch ungeordneter und viraler Systeme." },
  "about.rd.title":  { en: "Research Driven", tr: "Araştırma Odaklı", de: "Forschungsorientiert" },
  "about.rd.body":   { en: "5 peer-reviewed publications on protein structure, IDPs and SARS-CoV-2 / MERS-CoV systems.",
                       tr: "Protein yapısı, IDP'ler ve SARS-CoV-2 / MERS-CoV sistemleri üzerine 5 hakemli yayın.",
                       de: "5 Peer-Review-Publikationen zu Proteinstruktur, IDPs sowie SARS-CoV-2- und MERS-CoV-Systemen." },
  "about.web.title": { en: "Founder · Web / IT", tr: "Kurucu · Web / BT", de: "Gründer · Web / IT" },
  "about.web.body":  { en: "Co-founding HumanAI Dynamics (TÜBİTAK BiGG). Also 4+ years of multilingual web/IT work (TR · DE · EN).",
                       tr: "HumanAI Dynamics'i (TÜBİTAK BiGG) kuruyorum. Ayrıca 4+ yıl çok dilli web/BT deneyimi (TR · DE · EN).",
                       de: "Mitgründung von HumanAI Dynamics (TÜBİTAK BiGG). Zusätzlich 4+ Jahre mehrsprachige Web-/IT-Arbeit (TR · DE · EN)." },

  /* Experience entries (3 roles × bullets) */
  "exp.0.role":   { en: "Co-founder & CTO",
                    tr: "Kurucu Ortak & CTO",
                    de: "Mitgründer & CTO" },
  "exp.0.org":    { en: "HumanAI Dynamics — TÜBİTAK BiGG · Dijitalpark Teknokent",
                    tr: "HumanAI Dynamics — TÜBİTAK BiGG · Dijitalpark Teknokent",
                    de: "HumanAI Dynamics — TÜBİTAK BiGG · Dijitalpark Teknokent" },
  "exp.0.period": { en: "2025 – Present", tr: "2025 – Günümüz", de: "2025 – Heute" },
  "exp.0.b0":     { en: "Co-founding a Disorder-Aware MultiAgent AI platform for drug discovery & biomarker development",
                    tr: "İlaç keşfi ve biyomarker geliştirme için Disorder-Aware MultiAgent yapay zekâ platformunu kuruyorum",
                    de: "Mitgründung einer Disorder-Aware-MultiAgent-KI-Plattform für Wirkstoff- und Biomarker-Entdeckung" },
  "exp.0.b1":     { en: "Architecting the end-to-end physics + AI + multi-agent RL stack (BioMatics, iPocket, AI/MD ensembles)",
                    tr: "Uçtan uca fizik + AI + multi-agent RL mimarisini kuruyorum (BioMatics, iPocket, AI/MD ensemble'ları)",
                    de: "Architektur des End-to-End-Stacks aus Physik + KI + Multi-Agent-RL (BioMatics, iPocket, AI/MD-Ensembles)" },
  "exp.0.b2":     { en: "Currently progressing through the TÜBİTAK 1512 BiGG entrepreneurship programme",
                    tr: "TÜBİTAK 1512 BiGG girişimcilik programında ilerliyoruz",
                    de: "Aktuell im TÜBİTAK-1512-BiGG-Gründerprogramm" },

  "exp.1.role":   { en: "Webentwickler (Work Study)",
                    tr: "Webentwickler (Work Study)",
                    de: "Webentwickler (Werkstudent)" },
  "exp.1.org":    { en: "Schmetterling International GmbH & Co. KG — Geschwand, Germany",
                    tr: "Schmetterling International GmbH & Co. KG — Geschwand, Almanya",
                    de: "Schmetterling International GmbH & Co. KG — Geschwand, Deutschland" },
  "exp.1.period": { en: "May 2025 – Present", tr: "May 2025 – Günümüz", de: "Mai 2025 – Heute" },
  "exp.1.b0":     { en: "WordPress development and maintenance for one of Europe's largest independent travel-trade groups",
                    tr: "Avrupa'nın en büyük bağımsız seyahat-ticaret gruplarından biri için WordPress geliştirme ve bakım",
                    de: "WordPress-Entwicklung und -Wartung für eine der größten unabhängigen Touristik-Vertriebsgruppen Europas" },
  "exp.1.b1":     { en: "On-site role at the company HQ in Geschwand",
                    tr: "Geschwand'daki şirket merkezinde on-site çalışıyorum",
                    de: "Vor Ort am Firmensitz in Geschwand" },

  "exp.2.role":   { en: "IT Manager",
                    tr: "IT Yöneticisi",
                    de: "IT-Manager" },
  "exp.2.org":    { en: "Prof. Dr. Ferit Demirkan — Nürnberg, Germany",
                    tr: "Prof. Dr. Ferit Demirkan — Nürnberg, Almanya",
                    de: "Prof. Dr. Ferit Demirkan — Nürnberg, Deutschland" },
  "exp.2.period": { en: "Mar 2022 – Mar 2024", tr: "Mar 2022 – Mar 2024", de: "Mär 2022 – Mär 2024" },
  "exp.2.b0":     { en: "Built and maintained multilingual websites (TR / DE / EN) and managed IT infrastructure",
                    tr: "Çok dilli web sitelerinin (TR / DE / EN) geliştirilmesi ve bakımı; BT altyapısı yönetimi",
                    de: "Mehrsprachige Websites (TR / DE / EN) entwickelt und gepflegt; IT-Infrastruktur betreut" },
  "exp.2.b1":     { en: "On-page SEO optimization, performance tuning and technical documentation",
                    tr: "Sayfa içi SEO optimizasyonu, performans ayarı ve teknik dokümantasyon",
                    de: "On-Page-SEO-Optimierung, Performance-Tuning und technische Dokumentation" },
  "exp.2.b2":     { en: "Translation of medical documents across three languages (TR / DE / EN)",
                    tr: "Tıbbi belgelerin üç dilde çevirisi (TR / DE / EN)",
                    de: "Übersetzung medizinischer Dokumente in drei Sprachen (TR / DE / EN)" },

  "exp.3.role":   { en: "Scholarship Researcher",
                    tr: "Burslu Araştırmacı",
                    de: "Stipendiaten-Forscher" },
  "exp.3.org":    { en: "TÜBİTAK – BİLGEM, Istanbul",
                    tr: "TÜBİTAK – BİLGEM, İstanbul",
                    de: "TÜBİTAK – BİLGEM, Istanbul" },
  "exp.3.period": { en: "Nov 2020 – Dec 2021", tr: "Kas 2020 – Ara 2021", de: "Nov 2020 – Dez 2021" },
  "exp.3.b0":     { en: "Molecular dynamics simulations of proteins using REMD, GROMACS and NWChem",
                    tr: "REMD, GROMACS ve NWChem ile proteinler üzerine moleküler dinamik simülasyonları",
                    de: "Molekulardynamik-Simulationen an Proteinen mit REMD, GROMACS und NWChem" },
  "exp.3.b1":     { en: "Co-authored 5 peer-reviewed publications in computational biophysics",
                    tr: "Hesaplamalı biyofizik alanında 5 hakemli yayının ortak yazarı",
                    de: "Mitautor von 5 Peer-Review-Publikationen in der Computational Biophysics" },
  "exp.3.b2":     { en: "Completed the GAMES, GROMACS & NWChem MD training (TÜBİTAK, Nov 2020 – Feb 2021)",
                    tr: "GAMES, GROMACS & NWChem Moleküler Simülasyon Eğitimi’ne katılım (TÜBİTAK, Kas 2020 – Şub 2021)",
                    de: "Teilnahme an der GAMES, GROMACS & NWChem MD-Schulung (TÜBİTAK, Nov 2020 – Feb 2021)" },

  /* Sticky note */
  "note.l1": { en: "Curious mind.",     tr: "Meraklı zihin.",      de: "Neugieriger Geist." },
  "note.l2": { en: "Clean code.",       tr: "Temiz kod.",          de: "Sauberer Code." },
  "note.l3": { en: "Better tomorrow.",  tr: "Daha iyi bir yarın.", de: "Besseres Morgen." },

  /* Welcome */
  "welcome.title": { en: "Welcome to portfoliOS",
                     tr: "portfoliOS'a Hoşgeldin",
                     de: "Willkommen bei portfoliOS" },
  "welcome.body":  { en: "A retro desktop housing my CV. Double-click shortcuts at left to jump around, or open <b>portfolio.html</b>. Files in the Research folder open like proper documents.",
                     tr: "CV'mi barındıran retro bir masaüstü. Soldaki kısayollara çift tıklayarak dolaşın veya <b>portfolio.html</b> dosyasını açın. Araştırma klasöründeki dosyalar gerçek belgeler gibi açılır.",
                     de: "Ein Retro-Desktop, der meinen Lebenslauf beherbergt. Doppelklick auf die Verknüpfungen links zum Navigieren oder <b>portfolio.html</b> öffnen. Dateien im Research-Ordner öffnen wie echte Dokumente." },
  "welcome.ok":    { en: "Got it", tr: "Tamam", de: "Verstanden" },

  /* Stats widget */
  "stats.title":   { en: "MD_SIM.exe — Research mode",
                     tr: "MD_SIM.exe — Araştırma modu",
                     de: "MD_SIM.exe — Forschungsmodus" },
  "stats.online":  { en: "ONLINE", tr: "ÇEVRİMİÇİ", de: "ONLINE" },
  "stats.frame":   { en: "trajectory frame", tr: "yörünge karesi", de: "Trajektorienbild" },
  "stats.eta":     { en: "est. complete:", tr: "tahmini bitiş:",   de: "vorauss. fertig:" },

  /* Shortcuts */
  "sc.mycomp":   { en: "My Computer",    tr: "Bilgisayarım",   de: "Arbeitsplatz" },
  "sc.projects": { en: "Projects",       tr: "Projeler",       de: "Projekte" },
  "sc.blog":     { en: "Blog",           tr: "Blog",           de: "Blog" },
  "sc.research": { en: "Research",       tr: "Araştırma",     de: "Forschung" },
  "sc.web":      { en: "Web",            tr: "Web",            de: "Web" },
  "sc.tools":    { en: "Tools",          tr: "Araçlar",       de: "Werkzeuge" },
  "sc.games":    { en: "Games",          tr: "Oyunlar",       de: "Spiele" },
  "sc.term":     { en: "Terminal",       tr: "Terminal",       de: "Terminal" },
  "sc.notes":    { en: "Sticky Note",    tr: "Yapışkan Not",  de: "Haftnotiz" },
  "sc.bin":      { en: "Recycle Bin",    tr: "Geri Dönüşüm",  de: "Papierkorb" },
  "sc.cv":       { en: "Download CV",    tr: "CV İndir",      de: "Lebenslauf" },
  "sc.contact":  { en: "Contact",        tr: "İletişim",      de: "Kontakt" },
  "alert.binEmpty":{ en: "Empty.",       tr: "Boş.",           de: "Leer." },
  "alert.cv":    { en: "CV placeholder", tr: "CV yer tutucusu", de: "Lebenslauf-Platzhalter" },

  /* Start menu */
  "start.start":      { en: "Start",          tr: "Başlat",     de: "Start" },
  "start.about":      { en: "About",          tr: "Hakkımda",   de: "Über mich" },
  "start.skills":     { en: "Skills",         tr: "Yetenekler", de: "Fähigkeiten" },
  "start.research":   { en: "Research",       tr: "Araştırma", de: "Forschung" },
  "start.experience": { en: "Experience",     tr: "Deneyim",    de: "Erfahrung" },
  "start.contact":    { en: "Contact",        tr: "İletişim",   de: "Kontakt" },
  "start.projects":   { en: "Projects",       tr: "Projeler",   de: "Projekte" },
  "start.blog":       { en: "Blog",           tr: "Blog",       de: "Blog" },
  "start.games":      { en: "Games",          tr: "Oyunlar",    de: "Spiele" },
  "start.terminal":   { en: "Terminal",       tr: "Terminal",   de: "Terminal" },
  "start.notes":      { en: "Notes",          tr: "Notlar",     de: "Notizen" },
  "start.cv":         { en: "Download CV",    tr: "CV İndir",   de: "Lebenslauf" },
  "start.a11y":       { en: "Accessibility",  tr: "Erişilebilirlik", de: "Bedienungshilfen" },
  "start.shutdown":   { en: "Shut Down...",   tr: "Bilgisayarı Kapat...", de: "Herunterfahren..." },
  "start.logoff":     { en: "Log Off...",     tr: "Oturumu Kapat...", de: "Abmelden..." },
  "start.settings":   { en: "Settings",       tr: "Ayarlar",    de: "Einstellungen" },

  /* Taskbar app names */
  "task.portfolio":   { en: "portfolio.html", tr: "portfolio.html", de: "portfolio.html" },
  "task.projects":    { en: "projects",       tr: "projeler",       de: "projekte" },
  "task.blog":        { en: "blog — yagiz.log", tr: "blog — yagiz.log", de: "blog — yagiz.log" },
  "task.games":       { en: "games",          tr: "oyunlar",        de: "spiele" },
  "task.terminal":    { en: "terminal",       tr: "terminal",       de: "terminal" },
  "task.a11y":        { en: "accessibility",  tr: "erişilebilirlik",de: "bedienungshilfen" },
  "task.welcome":     { en: "welcome.exe",    tr: "hosgeldin.exe",  de: "willkommen.exe" },
  "task.notes":       { en: "notes.txt",      tr: "notlar.txt",     de: "notizen.txt" },
  "task.stats":       { en: "system.stat",    tr: "sistem.dur",     de: "system.dat" },

  /* Tray clock tooltip */
  "tray.calTip":      { en: "Click for calendar", tr: "Takvim için tıklayın", de: "Klick für Kalender" },
  "tray.today":       { en: "Today:",  tr: "Bugün:", de: "Heute:" },
  "tray.close":       { en: "close",   tr: "kapat",  de: "schließen" },

  /* Accessibility panel */
  "a11y.heading":  { en: "Make portfoliOS work for you",
                     tr: "portfoliOS'u kendine göre ayarla",
                     de: "portfoliOS auf dich anpassen" },
  "a11y.sub":      { en: "Settings apply instantly and persist across visits.",
                     tr: "Ayarlar anında uygulanır ve ziyaretler arasında kalıcıdır.",
                     de: "Einstellungen wirken sofort und bleiben erhalten." },
  "a11y.vision":   { en: "VISION",  tr: "GÖRÜŞ",   de: "SEHEN" },
  "a11y.motion":   { en: "MOTION",  tr: "HAREKET", de: "BEWEGUNG" },
  "a11y.focus":    { en: "FOCUS",   tr: "ODAK",    de: "FOKUS" },
  "a11y.large":    { en: "Larger text",        tr: "Daha büyük yazı",     de: "Größerer Text" },
  "a11y.largeHint":{ en: "Bump body text by ~15%.",
                     tr: "Gövde yazısını ~%15 büyütür.",
                     de: "Vergrößert Fließtext um ~15%." },
  "a11y.contrast": { en: "High contrast",      tr: "Yüksek kontrast",     de: "Hoher Kontrast" },
  "a11y.contrastHint":{en:"Stronger borders, deeper blacks.",
                     tr: "Daha güçlü kenarlar, daha koyu siyahlar.",
                     de: "Stärkere Ränder, tiefere Schwarzwerte." },
  "a11y.underline":{ en: "Underline links",    tr: "Linkleri altı çizili", de: "Links unterstreichen" },
  "a11y.underlineHint":{en:"Always underline links inside content.",
                     tr: "İçerikteki linkleri her zaman altı çizili göster.",
                     de: "Links im Inhalt immer unterstreichen." },
  "a11y.reduceMotion":{en:"Reduce motion",     tr: "Hareketi azalt",      de: "Bewegung reduzieren" },
  "a11y.reduceMotionHint":{en:"Disable open/scroll animations.",
                     tr: "Açma/kaydırma animasyonlarını kapatır.",
                     de: "Öffnungs-/Scroll-Animationen deaktivieren." },
  "a11y.focusRing":{ en: "Always-on focus ring",
                     tr: "Sürekli odak halkası",
                     de: "Dauerhaft sichtbarer Fokusring" },
  "a11y.focusRingHint":{en:"Show a thick dotted ring on every focused control.",
                     tr: "Odaklanmış her kontrolün etrafında kalın bir nokta halkası gösterir.",
                     de: "Zeigt einen dicken Punktring um jedes fokussierte Element." },
  "a11y.tips":     { en: "<b>Keyboard tips:</b> <kbd>Tab</kbd> to move, <kbd>Enter</kbd>/<kbd>Space</kbd> to activate, <kbd>Esc</kbd> closes the start menu.",
                     tr: "<b>Klavye ipuçları:</b> hareket için <kbd>Tab</kbd>, etkinleştirmek için <kbd>Enter</kbd>/<kbd>Space</kbd>, başlat menüsünü kapatmak için <kbd>Esc</kbd>.",
                     de: "<b>Tastatur-Tipps:</b> <kbd>Tab</kbd> zum Wechseln, <kbd>Enter</kbd>/<kbd>Space</kbd> zum Aktivieren, <kbd>Esc</kbd> schließt das Startmenü." },
  "a11y.reset":    { en: "Reset",    tr: "Sıfırla",  de: "Zurücksetzen" },
  "a11y.ok":       { en: "OK",       tr: "Tamam",    de: "OK" },

  /* Shutdown */
  "shut.safe":     { en: "It is now safe to turn off your computer.",
                     tr: "Bilgisayarınızı şimdi güvenle kapatabilirsiniz.",
                     de: "Sie können den Computer jetzt sicher ausschalten." },
  "shut.restart":  { en: "↻ Restart", tr: "↻ Yeniden Başlat", de: "↻ Neu starten" },

  /* Publication modal */
  "pub.props":     { en: "Properties", tr: "Özellikler", de: "Eigenschaften" },
  "pub.doi":       { en: "DOI:",       tr: "DOI:",       de: "DOI:" },
  "pub.openNew":   { en: "Open in new window",
                     tr: "Yeni pencerede aç",
                     de: "In neuem Fenster öffnen" },
  "pub.ok":        { en: "OK",         tr: "Tamam",      de: "OK" },

  /* Projects window */
  "proj.address":  { en: "Address:",   tr: "Adres:",     de: "Adresse:" },
  "proj.objects":  { en: "object(s)",  tr: "öğe",        de: "Objekt(e)" },
  "proj.dblOpen":  { en: "double-click to open",
                     tr: "açmak için çift tıklayın",
                     de: "Doppelklick zum Öffnen" },
  "proj.back":     { en: "← Back",     tr: "← Geri",     de: "← Zurück" },
  "proj.placeholder":{en:"Placeholder link",
                     tr: "Yer tutucu link",
                     de: "Platzhalter-Link" },

  /* Blog window */
  "blog.entries":  { en: "entries",    tr: "yazı",       de: "Einträge" },
  "blog.reply":    { en: "✉ Reply",    tr: "✉ Yanıtla",  de: "✉ Antworten" },
  "blog.share":    { en: "↗ Share",    tr: "↗ Paylaş",   de: "↗ Teilen" },
  "blog.shareAlert":{en:"Shared.",     tr: "Paylaşıldı.",de: "Geteilt." },
  "blog.replyAlert":{en:"Hi! Thanks for reading.",
                     tr: "Selam! Okuduğun için teşekkürler.",
                     de: "Hi! Danke fürs Lesen." },
  "blog.of":       { en: "of",         tr: "/",          de: "von" },

  /* Mobile-specific */
  "m.about.sub":       { en: "Disciplines", tr: "Alanlar", de: "Disziplinen" },
  "m.skills.sub":      { en: "Tap a tile for notes",
                         tr: "Notlar için bir karenin üzerine dokunun",
                         de: "Tippe eine Kachel für Notizen" },
  "m.research.sub":    { en: "Tap a file to inspect",
                         tr: "İncelemek için bir dosyaya dokunun",
                         de: "Tippe eine Datei zum Ansehen" },
  "m.quickAccess":     { en: "QUICK ACCESS",      tr: "HIZLI ERİŞİM",      de: "SCHNELLZUGRIFF" },
  "m.researchAreas":   { en: "RESEARCH AREAS",    tr: "ARAŞTIRMA ALANLARI",de: "FORSCHUNGSGEBIETE" },
  "m.timeline":        { en: "Timeline",          tr: "Zaman Çizelgesi",   de: "Zeitachse" },
  "m.exp":             { en: "EXPERIENCE",        tr: "DENEYİM",           de: "ERFAHRUNG" },
  "m.research":        { en: "RESEARCH",          tr: "ARAŞTIRMA",        de: "FORSCHUNG" },
  "m.projects":        { en: "PROJECTS",          tr: "PROJELER",          de: "PROJEKTE" },
  "m.blog":            { en: "BLOG — yagiz.log",  tr: "BLOG — yagiz.log",  de: "BLOG — yagiz.log" },
  "m.area.cb":         { en: "Computational Biophysics", tr: "Hesaplamalı Biyofizik", de: "Rechnergestützte Biophysik" },
  "m.area.md":         { en: "Intrinsically Disordered Proteins",    tr: "Yapısal Olarak Düzensiz Proteinler", de: "Intrinsisch ungeordnete Proteine" },
  "m.area.sw":         { en: "AI for Drug & Biomarker Discovery",
                         tr: "İlaç ve Biyomarker Keşfi için AI",
                         de: "KI für Wirkstoff- & Biomarker-Entdeckung" },
  "m.allPosts":        { en: "← All posts",       tr: "← Tüm yazılar",     de: "← Alle Beiträge" },

  /* Blog — kind badges */
  "blog.kind.post":      { en: "POST",      tr: "YAZI",      de: "BEITRAG" },
  "blog.kind.milestone": { en: "MILESTONE", tr: "KİLOMETRE TAŞI", de: "MEILENSTEIN" },
  "blog.kind.talk":      { en: "TALK",      tr: "KONUŞMA",   de: "VORTRAG" },
  "blog.kind.note":      { en: "NOTE",      tr: "NOT",       de: "NOTIZ" },

  /* Blog — post 5 (2026-05-09) */
  "blog.p5.title": { en: "Co-founding HumanAI Dynamics",
                     tr: "HumanAI Dynamics'i kuruyoruz",
                     de: "Mitgründung von HumanAI Dynamics" },
  "blog.p5.body":  { en: "Excited to announce that, with Prof. Orkide Coşkuner Weber and a small founding team, we're co-founding HumanAI Dynamics — a disorder-aware multi-agent AI platform for drug discovery and biomarker development. We're currently progressing through the TÜBİTAK 1512 BiGG entrepreneurship programme.",
                     tr: "Prof. Orkide Coşkuner Weber ve küçük bir kurucu ekiple birlikte HumanAI Dynamics'i kuruyoruz — ilaç keşfi ve biyomarker geliştirme için disorder-aware multi-agent yapay zekâ platformu. Şu anda TÜBİTAK 1512 BiGG girişimcilik programında ilerliyoruz.",
                     de: "Mit Prof. Orkide Coşkuner Weber und einem kleinen Gründerteam starten wir HumanAI Dynamics — eine Disorder-Aware-Multi-Agent-KI-Plattform für Wirkstoff- und Biomarker-Entdeckung. Wir sind gerade im TÜBİTAK-1512-BiGG-Programm." },

  /* Blog — post 4 (2026-04-22) */
  "blog.p4.title": { en: "α-synuclein paper out in J. Biomol. Struct. Dyn.",
                     tr: "α-sinüklein çalışması J. Biomol. Struct. Dyn.'da yayınlandı",
                     de: "α-Synuclein-Paper in J. Biomol. Struct. Dyn. erschienen" },
  "blog.p4.body":  { en: "Our head-to-head comparison of AI ensemble pipelines on α-synuclein is now out in the Journal of Biomolecular Structure and Dynamics. A nice excuse to think hard about what \"disorder\" actually means once you let a few different models tell you about it.",
                     tr: "α-sinüklein üzerine AI ensemble pipeline'larını birebir karşılaştıran çalışmamız J. Biomol. Struct. Dyn.'da yayınlandı. Farklı modellerin “disorder” kavramına nasıl yaklaştığını düşünmek için güzel bir bahane.",
                     de: "Unser direkter Vergleich von KI-Ensemble-Pipelines an α-Synuclein ist jetzt im Journal of Biomolecular Structure and Dynamics erschienen. Eine schöne Gelegenheit, darüber nachzudenken, was „Disorder“ eigentlich heißt, wenn man verschiedene Modelle darüber reden lässt." },

  /* Blog — post 3 (2026-03-12) */
  "blog.p3.title": { en: "Notes on disorder-aware AI pipelines",
                     tr: "Disorder-aware AI pipeline'ları üzerine notlar",
                     de: "Notizen zu Disorder-Aware-KI-Pipelines" },
  "blog.p3.body":  { en: "Some scratchpad thoughts before we lock the HumanAI Dynamics architecture: where physics ends and learned ensembles begin, why IDPs break naive ensemble metrics, and what \"druggable\" should mean for a transient pocket.",
                     tr: "HumanAI Dynamics mimarisini sabitlemeden önce bazı ham notlar: fiziğin nerede bittiği ve öğrenilen ensemble'ların nerede başladığı, IDP'lerin neden naif ensemble metriklerini bozduğu ve transient bir cep için “druggable” ne demek olmalı.",
                     de: "Ein paar Notizen, bevor wir die HumanAI-Dynamics-Architektur einfrieren: wo Physik endet und gelernte Ensembles beginnen, warum IDPs naive Ensemble-Metriken zerlegen und was „druggable“ für eine transiente Tasche eigentlich heißen sollte." },

  /* Blog — post 2 (2026-02-18) */
  "blog.p2.title": { en: "Three things I learned debugging GROMACS",
                     tr: "GROMACS hata ayıklarken öğrendiğim üç şey",
                     de: "Drei Dinge, die ich beim GROMACS-Debuggen gelernt habe" },
  "blog.p2.body":  { en: "1. Read the .log before the .err.\n2. NaN forces almost always trace back to overlapping atoms after solvation. Check minimization.\n3. Domain decomposition errors are a feature, not a bug — they save you from a much worse silent failure later.",
                     tr: "1. .err'den önce .log'u oku.\n2. NaN kuvvetleri neredeyse her zaman solvasyondan sonra üst üste binmiş atomlara dayanıyor. Minimizasyonu kontrol et.\n3. Domain decomposition hataları bir bug değil, özelliktir — daha sonra ortaya çıkacak çok daha kötü sessiz hatalardan kurtarır.",
                     de: "1. Lies die .log vor der .err.\n2. NaN-Kräfte kommen fast immer von überlappenden Atomen nach der Solvatation. Minimierung prüfen.\n3. Domain-Decomposition-Fehler sind ein Feature, kein Bug — sie bewahren dich vor einem viel schlimmeren stillen Crash später." },

  /* Blog — post 1 (2025-12-04) */
  "blog.p1.title": { en: "From materials science to computer science",
                     tr: "Malzeme biliminden bilgisayar bilimine",
                     de: "Von der Materialwissenschaft zur Informatik" },
  "blog.p1.body":  { en: "Closing one degree (B.Sc. Materials Science & Technologies at the Turkish-German University) and starting another (B.Sc. Computer Science at FAU Erlangen-Nürnberg). The plan: keep the simulations, add the systems.",
                     tr: "Bir lisansı kapatıp (Türk-Alman Üniversitesi'nde Malzeme Bilimi ve Teknolojileri) bir diğerine başlıyorum (FAU Erlangen-Nürnberg'de Bilgisayar Bilimi). Plan basit: simülasyonları bırakmadan sistemleri eklemek.",
                     de: "Einen Abschluss schließe ich ab (B.Sc. Materialwissenschaften und -technologien an der Türkisch-Deutschen Universität) und beginne den nächsten (B.Sc. Informatik an der FAU Erlangen-Nürnberg). Plan: Simulationen behalten, Systeme dazu lernen." },
};

const LANG_IDS = LANGUAGES.map(l => l.id);

/* ------------------------- CONTEXT + PROVIDER ------------------------- */
const LangContext = React.createContext({
  lang: "en",
  setLang: () => {},
});

const LangProvider = ({ children }) => {
  const [lang, setLangState] = React.useState(() => {
    try {
      const saved = localStorage.getItem("portfoliOS_lang");
      if (saved && LANG_IDS.includes(saved)) return saved;
    } catch {}
    return "en";
  });
  const setLang = React.useCallback((id) => {
    if (!LANG_IDS.includes(id)) return;
    setLangState(id);
    try { localStorage.setItem("portfoliOS_lang", id); } catch {}
    try { document.documentElement.lang = id; } catch {}
  }, []);
  React.useEffect(() => { try { document.documentElement.lang = lang; } catch {} }, [lang]);
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

const useLang = () => React.useContext(LangContext);

const useT = () => {
  const { lang } = useLang();
  return React.useCallback((key) => {
    const entry = STRINGS[key];
    if (!entry) return key;
    return entry[lang] ?? entry.en ?? key;
  }, [lang]);
};

/* Find language metadata (URL, name, code) by id */
const langMeta = (id) => LANGUAGES.find(l => l.id === id) || LANGUAGES[0];

/* ------------------------- LANG SWITCHER ------------------------- */
/* Sits in the tray to the LEFT of the clock. Click the current code to
   reveal the OTHER languages stacked upwards. */
const LangSwitcher = () => {
  const { lang, setLang } = useLang();
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!open) return;
    const onDocClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, [open]);

  const others = LANGUAGES.filter(l => l.id !== lang);
  const current = langMeta(lang);

  return (
    <div ref={ref}
      onClick={(e) => e.stopPropagation()}
      style={{ position: "relative", display: "inline-flex", alignItems: "center", height: "100%" }}
    >
      {/* Pop-up stacked above when open */}
      {open && (
        <div style={{
          position: "absolute",
          bottom: "calc(100% + 4px)",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          background: "var(--gray)",
          boxShadow: "var(--bevel-out)",
          padding: 2,
          zIndex: 3000,
        }}>
          {others.map(l => (
            <button
              key={l.id}
              type="button"
              onClick={() => { setLang(l.id); setOpen(false); }}
              title={l.name}
              style={{
                fontFamily: "inherit",
                fontSize: 11,
                fontWeight: 700,
                padding: "3px 8px",
                background: "var(--gray)",
                boxShadow: "var(--bevel-thin-out)",
                border: "1px solid #000",
                cursor: "pointer",
                color: "#000",
                minWidth: 36,
                letterSpacing: "0.04em",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "var(--navy)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "var(--gray)";
                e.currentTarget.style.color = "#000";
              }}
            >
              {l.code}
            </button>
          ))}
        </div>
      )}

      {/* Current language pill (the trigger). Looks like sunken tray content. */}
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        title={current.name}
        aria-haspopup="menu"
        aria-expanded={open}
        style={{
          fontFamily: "inherit",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.04em",
          padding: "2px 7px",
          background: "transparent",
          border: "1px solid transparent",
          cursor: "pointer",
          color: "#000",
          height: 18,
          display: "inline-flex",
          alignItems: "center",
          gap: 3,
          lineHeight: 1,
        }}
        onMouseEnter={e => e.currentTarget.style.background = "rgba(0,0,32,0.08)"}
        onMouseLeave={e => e.currentTarget.style.background = "transparent"}
      >
        {current.code}
        <span style={{ fontSize: 8, marginLeft: 1, opacity: 0.7 }}>▾</span>
      </button>
    </div>
  );
};

/* Expose everything on window so other Babel scripts can use it */
Object.assign(window, {
  LANGUAGES, STRINGS, LangContext, LangProvider, useLang, useT, langMeta, LangSwitcher,
});
