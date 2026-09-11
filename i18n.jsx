/* =====================================================================
   i18n — translations + LangContext + useT hook + LangSwitcher
   ---------------------------------------------------------------------
   Usage:
     wrap <App/> in <LangProvider> (see app.jsx)
     inside any component:  const t = useT();  ...  {t("nav.home")}
   ===================================================================== */

const LANGUAGES = [
  { code: "EN", id: "en", name: "English",  domain: "https://onurtellioglu.com/"     },
  { code: "TR", id: "tr", name: "Türkçe",   domain: "https://onurtellioglu.com/tr/"  },
  { code: "DE", id: "de", name: "Deutsch",  domain: "https://onurtellioglu.com/de/"  },
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

  "win.portfolio.title": { en: "Onur Tellioglu: personal portfolio", tr: "Onur Tellioglu: kişisel portföy", de: "Onur Tellioglu: persönliches Portfolio" },
  "win.notes.title":   { en: "notes.txt", tr: "notlar.txt", de: "notizen.txt" },
  "win.welcome.title": { en: "welcome.exe", tr: "hosgeldin.exe", de: "willkommen.exe" },
  "win.stats.title":   { en: "system.stat", tr: "sistem.dur", de: "system.dat" },
  "win.projects.title":{ en: "Projects", tr: "Projeler", de: "Projekte" },
  "win.blog.title": { en: "Blog: onur.log", tr: "Blog: onur.log", de: "Blog: onur.log" },
  "win.games.title":   { en: "Games", tr: "Oyunlar", de: "Spiele" },
  "win.terminal.title":{ en: "Terminal", tr: "Terminal", de: "Terminal" },
  "win.a11y.title":    { en: "Accessibility — Control Panel",
                         tr: "Erişilebilirlik — Denetim Masası",
                         de: "Bedienungshilfen — Systemsteuerung" },

  /* Navigation tabs (inside browser window) */
  "nav.home":       { en: "home",       tr: "anasayfa",  de: "start" },
  "nav.about":      { en: "about",      tr: "hakkımda",  de: "über mich" },
  "nav.skills":     { en: "skills",     tr: "yetenekler",de: "fähigkeiten" },
  "nav.research":   { en: "projects",   tr: "projeler",  de: "projekte" },
  "nav.experience": { en: "experience", tr: "deneyim",   de: "erfahrung" },
  "nav.contact":    { en: "contact",    tr: "iletişim",  de: "kontakt" },

  /* HERO */
  "hero.greeting":  { en: "Hello! I'm",  tr: "Merhaba! Ben",  de: "Hallo! Ich bin" },
  "hero.tagline":   { en: "AI student · instrument software · LLM agents · embedded.",
                      tr: "YZ öğrencisi · cihaz yazılımı · LLM ajanları · gömülü sistemler.",
                      de: "KI-Student · Gerätesoftware · LLM-Agenten · Embedded." },
  "hero.intro":     { en: "B.Sc. Artificial Intelligence student at FAU Erlangen-Nürnberg and research assistant in the university's photonics lab, where I write the software that drives its lasers, spectrometers and RF hardware. Before that I co-founded Assistbase and built a WhatsApp system that runs the full patient journey for a surgical clinic. I've been writing production code since 2021, from Go infrastructure to ESP32 firmware.",
                      tr: "FAU Erlangen-Nürnberg'de Yapay Zeka lisans öğrencisiyim ve üniversitenin fotonik laboratuvarında araştırma asistanıyım; laboratuvarın lazerlerini, spektrometrelerini ve RF donanımını süren yazılımları yazıyorum. Öncesinde Assistbase'in kurucu ortağıydım ve bir cerrahi klinik için tüm hasta yolculuğunu yürüten bir WhatsApp sistemi geliştirdim. 2021'den beri Go altyapısından ESP32 firmware'ine kadar prodüksiyon kodu yazıyorum.",
                      de: "B.Sc.-Student der Künstlichen Intelligenz an der FAU Erlangen-Nürnberg und studentische Hilfskraft im Photonik-Labor der Universität, wo ich die Software für Laser, Spektrometer und HF-Hardware schreibe. Davor habe ich Assistbase mitgegründet und ein WhatsApp-System gebaut, das die komplette Patient Journey einer chirurgischen Klinik abwickelt. Seit 2021 schreibe ich Produktionscode, von Go-Infrastruktur bis ESP32-Firmware." },
  "hero.btnResearch":{en: "View Projects", tr: "Projeleri Gör", de: "Projekte ansehen" },
  "hero.btnContact": {en: "Contact",       tr: "İletişim",      de: "Kontakt" },
  "hero.btnCV":      {en: "Download CV",   tr: "CV İndir",      de: "Lebenslauf" },
  "hero.cvAlert":    {en: "Opening the CV in a new tab.",
                      tr: "CV yeni sekmede açılıyor.",
                      de: "Lebenslauf wird in einem neuen Tab geöffnet." },

  /* Stat cards */
  "stat.pubs":   { en: "Projects in the folder", tr: "Klasördeki proje", de: "Projekte im Ordner" },
  "stat.cs":     { en: "B.Sc. AI @ FAU Erlangen-Nürnberg", tr: "FAU Erlangen-Nürnberg · Yapay Zeka", de: "KI @ FAU Erlangen-Nürnberg" },
  "stat.rw":     { en: "Spoken languages", tr: "Konuşulan diller", de: "Gesprochene Sprachen" },

  /* Section headers */
  "sec.about.title":      { en: "ABOUT ME", tr: "HAKKIMDA", de: "ÜBER MICH" },
  "sec.about.sub":        { en: "What I work on", tr: "Üzerinde çalıştıklarım", de: "Woran ich arbeite" },
  "sec.skills.title":     { en: "SKILLS", tr: "YETENEKLER", de: "FÄHIGKEITEN" },
  "sec.skills.sub":       { en: "Languages, tools and environments: hover a tile",
                            tr: "Diller, araçlar ve ortamlar: bir karonun üzerine gel",
                            de: "Sprachen, Tools und Umgebungen: Kachel überfahren" },
  "sec.skills.empty":     { en: "// hover a skill tile to see notes",
                            tr: "// notları görmek için bir karonun üzerine gel",
                            de: "// Kachel überfahren, um Notizen zu sehen" },
  "sec.research.title":   { en: "PROJECTS", tr: "PROJELER", de: "PROJEKTE" },
  "sec.research.sub":     { en: "Selected work: double-click to open",
                            tr: "Seçili işler: açmak için çift tıkla",
                            de: "Ausgewählte Arbeiten: Doppelklick zum Öffnen" },
  "sec.research.items":   { en: "item(s)", tr: "öğe", de: "Element(e)" },
  "sec.exp.title":        { en: "EXPERIENCE.LOG", tr: "DENEYIM.LOG", de: "ERFAHRUNG.LOG" },
  "sec.exp.sub":          { en: "Timeline of roles", tr: "Görev zaman çizelgesi", de: "Zeitachse der Rollen" },
  "sec.exp.shell":        { en: "$ cat experience.log", tr: "$ cat deneyim.log", de: "$ cat erfahrung.log" },
  "sec.exp.eduTitle":     { en: "EDUCATION", tr: "EĞİTİM", de: "AUSBILDUNG" },
  "sec.exp.eduBody":      { en: "<b>B.Sc. Artificial Intelligence</b>, Friedrich-Alexander-Universität Erlangen-Nürnberg &nbsp;·&nbsp; 2025 – ongoing, GPA 1.4<br/><b>B.Sc. Computer Engineering</b>, Istanbul Arel University &nbsp;·&nbsp; 2023 – 2024, transferred to FAU<br/><b>Associate Degree, Computer Programming</b>, Istanbul Aydın University &nbsp;·&nbsp; 2020 – 2022, Honor Student",
                            tr: "<b>Yapay Zeka Lisans</b>, Friedrich-Alexander-Universität Erlangen-Nürnberg &nbsp;·&nbsp; 2025 – devam ediyor, not ortalaması 1.4<br/><b>Bilgisayar Mühendisliği Lisans</b>, İstanbul Arel Üniversitesi &nbsp;·&nbsp; 2023 – 2024, FAU'ya yatay geçiş<br/><b>Bilgisayar Programcılığı Ön Lisans</b>, İstanbul Aydın Üniversitesi &nbsp;·&nbsp; 2020 – 2022, Onur Öğrencisi",
                            de: "<b>B.Sc. Künstliche Intelligenz</b>, Friedrich-Alexander-Universität Erlangen-Nürnberg &nbsp;·&nbsp; 2025 – laufend, Note 1,4<br/><b>B.Sc. Technische Informatik</b>, Istanbul Arel University &nbsp;·&nbsp; 2023 – 2024, Wechsel an die FAU<br/><b>Associate Degree Programmierung</b>, Istanbul Aydın University &nbsp;·&nbsp; 2020 – 2022, Auszeichnung" },
  "sec.contact.title":    { en: "CONTACT.MSG", tr: "ILETISIM.MSG", de: "KONTAKT.MSG" },
  "sec.contact.sub":      { en: "Let's build something that works",
                            tr: "Çalışan bir şey inşa edelim",
                            de: "Lass uns etwas bauen, das funktioniert" },

  /* Contact */
  "contact.newMsg":       { en: "New Message", tr: "Yeni Mesaj", de: "Neue Nachricht" },
  "contact.to":           { en: "To:", tr: "Kime:", de: "An:" },
  "contact.subject":      { en: "Subject:", tr: "Konu:", de: "Betreff:" },
  "contact.toValue":      { en: "Onur Tellioglu", tr: "Onur Tellioglu", de: "Onur Tellioglu" },
  "contact.subjValue":    { en: "Project / Collaboration / Hello",
                            tr: "Proje / İş birliği / Merhaba",
                            de: "Projekt / Zusammenarbeit / Hallo" },
  "contact.greet":        { en: "Hi Onur,", tr: "Merhaba Onur,", de: "Hallo Onur," },
  "contact.body":         { en: "I&rsquo;m open to interesting projects, lab work and freelance builds, from instrument software and LLM agents to web products. Send a note through any of the channels on the right and I&rsquo;ll get back to you.",
                            tr: "İlginç projelere, laboratuvar işlerine ve serbest işlere açığım: cihaz yazılımından LLM ajanlarına ve web ürünlerine kadar. Sağdaki kanallardan birinden yazman yeterli, dönüş yaparım.",
                            de: "Ich bin offen für spannende Projekte, Laborarbeit und Freelance-Aufträge, von Gerätesoftware über LLM-Agenten bis zu Webprodukten. Schreib mir über einen der Kanäle rechts, ich melde mich." },
  "contact.email":        { en: "Email",       tr: "E-posta",   de: "E-Mail" },
  "contact.linkedin":     { en: "LinkedIn",    tr: "LinkedIn",  de: "LinkedIn" },
  "contact.github":       { en: "GitHub",      tr: "GitHub",    de: "GitHub" },
  "contact.site":         { en: "Website",     tr: "Web sitesi", de: "Webseite" },
  "contact.studio":       { en: "Study platform", tr: "Çalışma platformu", de: "Lernplattform" },
  "contact.orcid":        { en: "ORCID",       tr: "ORCID",     de: "ORCID" },
  "contact.location":     { en: "Location",    tr: "Konum",     de: "Standort" },
  "contact.locationVal":  { en: "Nuremberg, Germany", tr: "Nürnberg, Almanya", de: "Nürnberg, Deutschland" },
  "contact.cv":           { en: "Download CV", tr: "CV İndir",  de: "Lebenslauf" },

  /* About cards */
  "about.cs.title":  { en: "Artificial Intelligence", tr: "Yapay Zeka", de: "Künstliche Intelligenz" },
  "about.cs.body":   { en: "B.Sc. Artificial Intelligence at FAU Erlangen-Nürnberg, GPA 1.4. Earlier: computer engineering and computer programming in Istanbul.",
                       tr: "FAU Erlangen-Nürnberg'de Yapay Zeka lisansı, not ortalaması 1.4. Öncesinde İstanbul'da bilgisayar mühendisliği ve bilgisayar programcılığı.",
                       de: "B.Sc. Künstliche Intelligenz an der FAU Erlangen-Nürnberg, Note 1,4. Davor Technische Informatik und Programmierung in Istanbul." },
  "about.cb.title":  { en: "Instruments & Embedded", tr: "Cihazlar & Gömülü", de: "Geräte & Embedded" },
  "about.cb.body":   { en: "Control and acquisition software for lab lasers, FBG interrogators and DDS boards; ESP32 firmware with state machines, SPI and PWM.",
                       tr: "Laboratuvar lazerleri, FBG interrogatörleri ve DDS kartları için kontrol ve veri toplama yazılımı; durum makineli, SPI ve PWM kullanan ESP32 firmware'i.",
                       de: "Steuer- und Erfassungssoftware für Laborlaser, FBG-Interrogatoren und DDS-Boards; ESP32-Firmware mit Zustandsautomaten, SPI und PWM." },
  "about.rd.title":  { en: "LLM Agents", tr: "LLM Ajanları", de: "LLM-Agenten" },
  "about.rd.body":   { en: "Agents in production: a WhatsApp system that handles 90% of a clinic's patient communication, with a structured memory per patient.",
                       tr: "Üretimde çalışan ajanlar: bir kliniğin hasta iletişiminin %90'ını yöneten, her hasta için yapısal hafıza tutan bir WhatsApp sistemi.",
                       de: "Agenten im Produktivbetrieb: ein WhatsApp-System, das 90 % der Patientenkommunikation einer Klinik übernimmt, mit strukturiertem Gedächtnis pro Patient." },
  "about.web.title": { en: "Products · Infra", tr: "Ürünler · Altyapı", de: "Produkte · Infrastruktur" },
  "about.web.body":  { en: "A Go webhook relay, a Homebrew CLI, SwiftUI apps for iOS and macOS, and Next.js product sites.",
                       tr: "Go ile yazılmış bir webhook aktarıcısı, bir Homebrew CLI'ı, iOS ve macOS için SwiftUI uygulamaları ve Next.js ürün siteleri.",
                       de: "Ein Go-Webhook-Relay, ein Homebrew-CLI, SwiftUI-Apps für iOS und macOS und Next.js-Produktseiten." },

  /* Experience (index matches EXPERIENCE in portfolio.jsx) */
  "exp.0.role":   { en: "Student Research Assistant (HiWi)", tr: "Öğrenci Araştırma Asistanı (HiWi)", de: "Studentische Hilfskraft (HiWi)" },
  "exp.0.org":    { en: "FAU, Institute of Microwaves and Photonics (LHFT), Erlangen",
                    tr: "FAU, Yüksek Frekans Tekniği ve Fotonik Enstitüsü (LHFT), Erlangen",
                    de: "FAU, Lehrstuhl für Hochfrequenztechnik (LHFT), Erlangen" },
  "exp.0.period": { en: "Jun 2026 – Present", tr: "Haz 2026 – Günümüz", de: "Jun 2026 – Heute" },
  "exp.0.b0":     { en: "Python control library for a Luna/Polytec Phoenix 1400 tunable laser, built on ctypes over the vendor's 32-bit DLL",
                    tr: "Luna/Polytec Phoenix 1400 ayarlanabilir lazer için, üreticinin 32-bit DLL'i üzerine ctypes ile kurulu Python kontrol kütüphanesi",
                    de: "Python-Steuerbibliothek für den durchstimmbaren Laser Luna/Polytec Phoenix 1400, per ctypes auf der 32-Bit-DLL des Herstellers" },
  "exp.0.b1":     { en: "Custom acquisition software for an Ibsen I-MON 256 fiber Bragg grating interrogator, around 6000 frames/s over FTDI",
                    tr: "Ibsen I-MON 256 fiber Bragg grating interrogatörü için özel veri toplama yazılımı, FTDI üzerinden yaklaşık 6000 kare/s",
                    de: "Eigene Erfassungssoftware für einen Ibsen I-MON 256 FBG-Interrogator, rund 6000 Frames/s über FTDI" },
  "exp.0.b2":     { en: "AD9910 DDS evaluation board driven over SPI from a Raspberry Pi Pico, output tone accurate to 1 ppm",
                    tr: "AD9910 DDS geliştirme kartı Raspberry Pi Pico'dan SPI ile sürülüyor, çıkış tonu 1 ppm hassasiyetinde",
                    de: "AD9910-DDS-Evaluierungsboard per SPI von einem Raspberry Pi Pico gesteuert, Ausgangston auf 1 ppm genau" },
  "exp.0.b3":     { en: "Rebuilt the lab's GPIB stack on Ubuntu 24.04 as a one-shot installer with an update freeze",
                    tr: "Laboratuvarın GPIB yığınını Ubuntu 24.04'te güncelleme dondurmalı, tek komutluk bir kuruluma dönüştürdü",
                    de: "GPIB-Stack des Labors unter Ubuntu 24.04 als One-Shot-Installer mit Update-Sperre neu aufgebaut" },

  "exp.1.role":   { en: "Co-Founder & Lead Developer", tr: "Kurucu Ortak & Baş Geliştirici", de: "Mitgründer & Lead Developer" },
  "exp.1.org":    { en: "Assistbase, Remote", tr: "Assistbase, Uzaktan", de: "Assistbase, Remote" },
  "exp.1.period": { en: "Feb 2025 – Jan 2026", tr: "Şub 2025 – Oca 2026", de: "Feb 2025 – Jan 2026" },
  "exp.1.b0":     { en: "Built a custom system running the full patient journey over WhatsApp for a surgical clinic",
                    tr: "Bir cerrahi klinik için tüm hasta yolculuğunu WhatsApp üzerinden yürüten özel bir sistem geliştirdi",
                    de: "Individuelles System gebaut, das die komplette Patient Journey einer chirurgischen Klinik über WhatsApp abwickelt" },
  "exp.1.b1":     { en: "Designed a multi-dimensional patient memory system persisted in Supabase",
                    tr: "Supabase'de saklanan çok boyutlu bir hasta hafıza sistemi tasarladı",
                    de: "Mehrdimensionales Patientengedächtnis mit Persistenz in Supabase entworfen" },
  "exp.1.b2":     { en: "Delivered a paperless operations platform for a German manufacturing facility, live in production",
                    tr: "Almanya'daki bir üretim tesisi için kağıtsız operasyon platformu teslim etti, üretimde aktif",
                    de: "Papierlose Betriebsplattform für einen deutschen Fertigungsbetrieb geliefert, produktiv im Einsatz" },

  "exp.2.role":   { en: "Chief IT Consultant", tr: "Baş BT Danışmanı", de: "Leitender IT-Berater" },
  "exp.2.org":    { en: "Metarc Interior, Istanbul", tr: "Metarc Interior, İstanbul", de: "Metarc Interior, Istanbul" },
  "exp.2.period": { en: "Jul 2023 – Oct 2023", tr: "Tem 2023 – Eki 2023", de: "Jul 2023 – Okt 2023" },
  "exp.2.b0":     { en: "Rebuilt the full IT infrastructure of a corporate architecture firm",
                    tr: "Kurumsal bir mimarlık firmasının BT altyapısını baştan kurdu",
                    de: "Komplette IT-Infrastruktur eines Architekturbüros neu aufgebaut" },
  "exp.2.b1":     { en: "Secure offsite backup, office telephony and cybersecurity hardening",
                    tr: "Güvenli uzak yedekleme, ofis telefon sistemi ve siber güvenlik sertleştirmesi",
                    de: "Sicheres Offsite-Backup, Bürotelefonie und Security-Härtung" },

  "exp.3.role":   { en: "Software Developer Intern", tr: "Yazılım Geliştirici Stajyeri", de: "Praktikant Softwareentwicklung" },
  "exp.3.org":    { en: "HEFA Technology, Istanbul", tr: "HEFA Technology, İstanbul", de: "HEFA Technology, Istanbul" },
  "exp.3.period": { en: "Aug 2022 – Sept 2022", tr: "Ağu 2022 – Eyl 2022", de: "Aug 2022 – Sep 2022" },
  "exp.3.b0":     { en: "Contributed to airpm.io, an air quality monitoring platform",
                    tr: "Hava kalitesi izleme platformu airpm.io'ya katkıda bulundu",
                    de: "Mitarbeit an airpm.io, einer Plattform zur Luftqualitätsüberwachung" },
  "exp.3.b1":     { en: "Integrated IoT sensors over LoRa-WAN and The Things Network, built ingestion WebHooks",
                    tr: "IoT sensörlerini LoRa-WAN ve The Things Network üzerinden entegre etti, veri alımı için WebHook'lar yazdı",
                    de: "IoT-Sensoren über LoRa-WAN und The Things Network angebunden, Ingestion-WebHooks gebaut" },

  "exp.4.role":   { en: "Technical Writer & Web Administrator", tr: "Teknik Yazar & Web Yöneticisi", de: "Technischer Redakteur & Web-Administrator" },
  "exp.4.org":    { en: "ModArt PC, Istanbul", tr: "ModArt PC, İstanbul", de: "ModArt PC, Istanbul" },
  "exp.4.period": { en: "Dec 2020 – Jun 2023", tr: "Ara 2020 – Haz 2023", de: "Dez 2020 – Jun 2023" },
  "exp.4.b0":     { en: "Wrote SEO-optimized tech news, buying guides and in-depth hardware reviews",
                    tr: "SEO uyumlu teknoloji haberleri, alım rehberleri ve detaylı donanım incelemeleri yazdı",
                    de: "SEO-optimierte Tech-News, Kaufberatungen und ausführliche Hardware-Tests geschrieben" },
  "exp.4.b1":     { en: "Hands-on benchmark testing; managed DNS, SSL, Cloudflare and security hardening",
                    tr: "Uygulamalı benchmark testleri; DNS, SSL, Cloudflare ve güvenlik sertleştirmesini yönetti",
                    de: "Praktische Benchmark-Tests; DNS, SSL, Cloudflare und Security-Härtung verwaltet" },

  /* Sticky note */
  "note.l1": { en: "Curious mind.",     tr: "Meraklı zihin.",      de: "Neugieriger Geist." },
  "note.l2": { en: "Clean code.",       tr: "Temiz kod.",          de: "Sauberer Code." },
  "note.l3": { en: "Better tomorrow.",  tr: "Daha iyi bir yarın.", de: "Besseres Morgen." },

  /* Welcome */
  "welcome.title": { en: "Welcome to portfoliOS",
                     tr: "portfoliOS'a Hoşgeldin",
                     de: "Willkommen bei portfoliOS" },
  "welcome.body": { en: "A retro desktop housing my CV. Double-click the shortcuts on the left to move around, or open <b>portfolio.html</b>. Files in the Projects folder open like proper documents.", tr: "CV'mi barındıran retro bir masaüstü. Dolaşmak için soldaki kısayollara çift tıkla ya da <b>portfolio.html</b> dosyasını aç. Projeler klasöründeki dosyalar gerçek belgeler gibi açılır.", de: "Ein Retro-Desktop mit meinem Lebenslauf. Doppelklick auf die Verknüpfungen links zum Navigieren oder <b>portfolio.html</b> öffnen. Dateien im Projekte-Ordner öffnen sich wie echte Dokumente." },
  "welcome.ok":    { en: "Got it", tr: "Tamam", de: "Verstanden" },

  /* Stats widget */
  "stats.title": { en: "FBG_ACQ.exe · capture mode", tr: "FBG_ACQ.exe · yakalama modu", de: "FBG_ACQ.exe · Erfassungsmodus" },
  "stats.online":  { en: "ONLINE", tr: "ÇEVRİMİÇİ", de: "ONLINE" },
  "stats.frame": { en: "spectrum frame", tr: "spektrum karesi", de: "Spektrum-Frame" },
  "stats.eta":     { en: "est. complete:", tr: "tahmini bitiş:",   de: "vorauss. fertig:" },

  /* Shortcuts */
  "sc.mycomp":   { en: "My Computer",    tr: "Bilgisayarım",   de: "Arbeitsplatz" },
  "sc.projects": { en: "Projects",       tr: "Projeler",       de: "Projekte" },
  "sc.blog":     { en: "Blog",           tr: "Blog",           de: "Blog" },
  "sc.research": { en: "Work", tr: "İşler", de: "Arbeiten" },
  "sc.web":      { en: "Web",            tr: "Web",            de: "Web" },
  "sc.tools":    { en: "Tools",          tr: "Araçlar",       de: "Werkzeuge" },
  "sc.games":    { en: "Games",          tr: "Oyunlar",       de: "Spiele" },
  "sc.term":     { en: "Terminal",       tr: "Terminal",       de: "Terminal" },
  "sc.notes":    { en: "Sticky Note",    tr: "Yapışkan Not",  de: "Haftnotiz" },
  "sc.bin":      { en: "Recycle Bin",    tr: "Geri Dönüşüm",  de: "Papierkorb" },
  "sc.cv":       { en: "Download CV",    tr: "CV İndir",      de: "Lebenslauf" },
  "sc.contact":  { en: "Contact",        tr: "İletişim",      de: "Kontakt" },
  "alert.binEmpty":{ en: "Empty.",       tr: "Boş.",           de: "Leer." },
  "alert.cv": { en: "Opening the CV in a new tab.", tr: "CV yeni sekmede açılıyor.", de: "Lebenslauf wird in einem neuen Tab geöffnet." },

  /* Start menu */
  "start.start":      { en: "Start",          tr: "Başlat",     de: "Start" },
  "start.about":      { en: "About",          tr: "Hakkımda",   de: "Über mich" },
  "start.skills":     { en: "Skills",         tr: "Yetenekler", de: "Fähigkeiten" },
  "start.research": { en: "Work", tr: "İşler", de: "Arbeiten" },
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
  "task.blog": { en: "blog: onur.log", tr: "blog: onur.log", de: "blog: onur.log" },
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
  "m.researchAreas": { en: "FOCUS AREAS", tr: "ODAK ALANLARI", de: "SCHWERPUNKTE" },
  "m.timeline":        { en: "Timeline",          tr: "Zaman Çizelgesi",   de: "Zeitachse" },
  "m.exp":             { en: "EXPERIENCE",        tr: "DENEYİM",           de: "ERFAHRUNG" },
  "m.research": { en: "WORK", tr: "İŞLER", de: "ARBEITEN" },
  "m.projects":        { en: "PROJECTS",          tr: "PROJELER",          de: "PROJEKTE" },
  "m.blog": { en: "BLOG: onur.log", tr: "BLOG: onur.log", de: "BLOG: onur.log" },
  "m.area.cb": { en: "Instrument & Lab Software", tr: "Cihaz ve Laboratuvar Yazılımı", de: "Geräte- & Laborsoftware" },
  "m.area.md": { en: "LLM Agents in Production", tr: "Üretimde LLM Ajanları", de: "LLM-Agenten im Produktivbetrieb" },
  "m.area.sw": { en: "Embedded Systems", tr: "Gömülü Sistemler", de: "Embedded-Systeme" },
  "m.allPosts":        { en: "← All posts",       tr: "← Tüm yazılar",     de: "← Alle Beiträge" },

  /* Blog — kind badges */
  "blog.kind.post":      { en: "POST",      tr: "YAZI",      de: "BEITRAG" },
  "blog.kind.milestone": { en: "MILESTONE", tr: "KİLOMETRE TAŞI", de: "MEILENSTEIN" },
  "blog.kind.talk":      { en: "TALK",      tr: "KONUŞMA",   de: "VORTRAG" },
  "blog.kind.note":      { en: "NOTE",      tr: "NOT",       de: "NOTIZ" },

  /* Blog post 4 */
  "blog.p4.title": { en: "Driving an AD9910 from a Raspberry Pi Pico",
                     tr: "AD9910'u bir Raspberry Pi Pico ile sürmek",
                     de: "Einen AD9910 mit einem Raspberry Pi Pico ansteuern" },
  "blog.p4.body":  { en: "The lab's AD9910 evaluation board normally talks to a PC through Analog Devices' USB interface and software. I replaced that with a Raspberry Pi Pico over SPI. Registers now read back exactly what was written, IO_UPDATE latches the writes, and the DAC produces a tone that tracks the programmed tuning word to within 1 ppm. Most of the work was not the code but the jumpers and header pinouts, so every trap I found is written down next to the measurements.",
                     tr: "Laboratuvardaki AD9910 geliştirme kartı normalde Analog Devices'ın USB arayüzü ve yazılımı üzerinden bir bilgisayarla konuşuyor. Bunun yerine kartı SPI üzerinden bir Raspberry Pi Pico ile sürdüm. Artık register'lar yazılan değeri birebir geri veriyor, IO_UPDATE yazmaları kilitliyor ve DAC, programlanan ayar kelimesini 1 ppm hassasiyetle takip eden bir ton üretiyor. İşin çoğu kod değil, jumper'lar ve pin dizilimleriydi; bulduğum her tuzağı ölçümlerin yanına yazdım.",
                     de: "Das AD9910-Evaluierungsboard im Labor spricht normalerweise über die USB-Schnittstelle und Software von Analog Devices mit einem PC. Ich habe das durch einen Raspberry Pi Pico über SPI ersetzt. Die Register lesen jetzt genau das zurück, was geschrieben wurde, IO_UPDATE übernimmt die Schreibvorgänge, und der DAC erzeugt einen Ton, der dem programmierten Tuning Word auf 1 ppm genau folgt. Die meiste Arbeit steckte nicht im Code, sondern in Jumpern und Pinbelegungen, deshalb steht jede Falle, die ich gefunden habe, direkt neben den Messungen." },

  /* Blog post 5 */
  "blog.p5.title": { en: "A Python binding for a laser that only ships a 32-bit DLL",
                     tr: "Sadece 32-bit DLL ile gelen bir lazer için Python bağlayıcısı",
                     de: "Ein Python-Binding für einen Laser, der nur eine 32-Bit-DLL mitbringt" },
  "blog.p5.body":  { en: "The Phoenix 1400 tunable laser comes with a 32-bit Phoenix.dll and examples for C++, LabVIEW and MATLAB, but nothing for Python. The binding I wrote loads the DLL through ctypes and puts a class in front of it that checks every value and knows what state the laser is in, so a measurement becomes a script instead of a session of clicking through the vendor GUI. It shipped in four rounds, and each round was signed off on the real laser before it was merged. The one thing to remember is that it needs a 32-bit Python, because a 64-bit interpreter cannot load the DLL at all.",
                     tr: "Phoenix 1400 ayarlanabilir lazeri 32-bit bir Phoenix.dll ve C++, LabVIEW ile MATLAB örnekleriyle geliyor, ama Python için hiçbir şey yok. Yazdığım bağlayıcı DLL'i ctypes ile yüklüyor ve önüne her değeri kontrol eden, lazerin hangi durumda olduğunu bilen bir sınıf koyuyor; böylece bir ölçüm, üreticinin arayüzünde tıklayarak geçen bir oturum yerine bir betik oluyor. Dört turda teslim edildi ve her tur birleştirilmeden önce gerçek lazer üzerinde onaylandı. Akılda tutulması gereken tek şey 32-bit Python gerektirmesi, çünkü 64-bit bir yorumlayıcı DLL'i hiç yükleyemiyor.",
                     de: "Der durchstimmbare Laser Phoenix 1400 kommt mit einer 32-Bit-Phoenix.dll und Beispielen für C++, LabVIEW und MATLAB, aber ohne etwas für Python. Das Binding, das ich geschrieben habe, lädt die DLL über ctypes und setzt eine Klasse davor, die jeden Wert prüft und weiß, in welchem Zustand der Laser ist. So wird eine Messung zu einem Skript statt zu einer Klick-Sitzung in der Hersteller-GUI. Es wurde in vier Runden ausgeliefert, und jede Runde wurde vor dem Merge am echten Laser abgenommen. Wichtig ist nur, dass es ein 32-Bit-Python braucht, denn ein 64-Bit-Interpreter kann die DLL gar nicht laden." },

  /* Blog post 3 */
  "blog.p3.title": { en: "Joining the FAU photonics lab as a HiWi",
                     tr: "FAU fotonik laboratuvarına HiWi olarak katıldım",
                     de: "Als HiWi im Photonik-Labor der FAU" },
  "blog.p3.body":  { en: "I started as a student research assistant at the Institute of Microwaves and Photonics. The job sits exactly where I like to be, between instruments and software. The first weeks went into the bench itself, a closed instrument network with 3D-printed switch mounts on the T-slot profile, and into making the lab PC's GPIB stack survive kernel upgrades on Ubuntu 24.04.",
                     tr: "Yüksek Frekans Tekniği ve Fotonik Enstitüsü'nde öğrenci araştırma asistanı olarak başladım. İş tam sevdiğim yerde duruyor, cihazlarla yazılımın arasında. İlk haftalar düzeneğin kendisine gitti: T-slot profile oturan 3D baskı switch montajlarıyla kapalı bir cihaz ağı kurmaya ve laboratuvar bilgisayarındaki GPIB yığınının Ubuntu 24.04'te çekirdek güncellemelerinden sağ çıkmasını sağlamaya.",
                     de: "Ich habe als studentische Hilfskraft am Lehrstuhl für Hochfrequenztechnik angefangen. Die Stelle liegt genau da, wo ich gern bin, zwischen Messgeräten und Software. Die ersten Wochen gingen in den Messplatz selbst, ein geschlossenes Gerätenetz mit 3D-gedruckten Switch-Halterungen am Nutprofil, und darin, den GPIB-Stack des Labor-PCs unter Ubuntu 24.04 kernel-update-fest zu machen." },

  /* Blog post 2 */
  "blog.p2.title": { en: "PomeloHook: store first, forward second",
                     tr: "PomeloHook: önce kaydet, sonra ilet",
                     de: "PomeloHook: erst speichern, dann weiterleiten" },
  "blog.p2.body":  { en: "PomeloHook is a self-hosted webhook relay, something like ngrok for a team. The design decision that shaped everything else is that every event lands in SQLite before it is forwarded. If the forward fails, the event is still there and can be replayed from the CLI or the dashboard. The whole thing is a single Go binary with the React dashboard embedded, and it uses a pure-Go SQLite driver so the build needs no C toolchain.",
                     tr: "PomeloHook, kendi sunucunda çalışan bir webhook aktarıcısı; bir ekip için ngrok gibi düşünülebilir. Diğer her şeyi belirleyen tasarım kararı, her olayın iletilmeden önce SQLite'a yazılması. İletim başarısız olursa olay yine orada duruyor ve CLI'dan ya da panelden tekrar oynatılabiliyor. Tamamı, React paneli gömülü tek bir Go binary'si ve saf Go ile yazılmış bir SQLite sürücüsü kullandığı için derlemek C araç zinciri gerektirmiyor.",
                     de: "PomeloHook ist ein selbst gehostetes Webhook-Relay, so etwas wie ngrok für ein Team. Die Entscheidung, die alles andere geprägt hat: Jedes Event landet in SQLite, bevor es weitergeleitet wird. Schlägt die Weiterleitung fehl, ist das Event trotzdem da und lässt sich über die CLI oder das Dashboard erneut abspielen. Das Ganze ist ein einzelnes Go-Binary mit eingebettetem React-Dashboard und nutzt einen reinen Go-SQLite-Treiber, sodass der Build keine C-Toolchain braucht." },

  /* Blog post 1 */
  "blog.p1.title": { en: "From computer engineering to AI at FAU",
                     tr: "Bilgisayar mühendisliğinden FAU'da yapay zekaya",
                     de: "Von der Technischen Informatik zur KI an der FAU" },
  "blog.p1.body":  { en: "After a year of computer engineering at Istanbul Arel University I transferred to Friedrich-Alexander-Universität Erlangen-Nürnberg to study Artificial Intelligence. The plan is to keep building real systems on the side while the degree fills in the theory underneath them.",
                     tr: "İstanbul Arel Üniversitesi'nde bir yıl bilgisayar mühendisliği okuduktan sonra Yapay Zeka okumak için Friedrich-Alexander-Universität Erlangen-Nürnberg'e geçtim. Plan, bölüm altındaki teoriyi doldururken bir yandan gerçek sistemler inşa etmeye devam etmek.",
                     de: "Nach einem Jahr Technischer Informatik an der Istanbul Arel University bin ich an die Friedrich-Alexander-Universität Erlangen-Nürnberg gewechselt, um Künstliche Intelligenz zu studieren. Der Plan ist, nebenbei weiter echte Systeme zu bauen, während das Studium die Theorie darunter liefert." },
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
