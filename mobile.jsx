/* =====================================================================
   AndroidOS — Mobile + Tablet (Holo era / Jelly Bean nostalgia).
   ---------------------------------------------------------------------
   Replaces the desktop OS at <=1024px. A single home screen with an
   icon grid, dock, status bar, < O ▢ nav bar, recent apps and a
   notification shade. Apps render full-screen with Holo action bars.
   ===================================================================== */

/* ---------- Localized strings (Android-only) ---------- */
const MOBILE_STRINGS = {
  "a.home":          { en: "Home",         tr: "Anasayfa",        de: "Start" },
  "a.recents":       { en: "Recent apps",  tr: "Son kullanılanlar", de: "Letzte Apps" },
  "a.recents.empty": { en: "No recent apps", tr: "Son uygulama yok", de: "Keine letzten Apps" },
  "a.recents.tip":   { en: "Swipe a card away to dismiss", tr: "Bir kartı kapatmak için kaydırın", de: "Karte zum Schließen wischen" },
  "a.clearAll":      { en: "Clear all",    tr: "Tümünü temizle",  de: "Alle löschen" },
  "a.notifications": { en: "Notifications", tr: "Bildirimler",    de: "Benachrichtigungen" },
  "a.search":        { en: "Search",        tr: "Ara",             de: "Suchen" },
  "a.more":          { en: "More",          tr: "Daha fazla",      de: "Mehr" },
  "a.compose":       { en: "Compose",       tr: "Yaz",             de: "Verfassen" },
  "a.send":          { en: "Send",          tr: "Gönder",          de: "Senden" },
  "a.share":         { en: "Share",         tr: "Paylaş",          de: "Teilen" },
  "a.open":          { en: "Open",          tr: "Aç",              de: "Öffnen" },
  "a.openLink":      { en: "Open link",     tr: "Bağlantıyı aç",   de: "Link öffnen" },
  "a.viewSource":    { en: "View source",   tr: "Kaynağı gör",     de: "Quelle ansehen" },
  "a.download":      { en: "Download",      tr: "İndir",           de: "Herunterladen" },
  "a.empty":         { en: "Empty",         tr: "Boş",             de: "Leer" },
  "a.refresh":       { en: "Refresh",       tr: "Yenile",          de: "Aktualisieren" },
  "a.about":         { en: "About this app",tr: "Bu uygulama hakkında", de: "Über diese App" },
  "a.copyLink":      { en: "Copy link",     tr: "Bağlantıyı kopyala", de: "Link kopieren" },
  "a.feedback":      { en: "Send feedback", tr: "Geri bildirim gönder", de: "Feedback senden" },

  /* Notification shade */
  "shade.wifi":      { en: "Wi-Fi",         tr: "Wi-Fi",           de: "WLAN" },
  "shade.bt":        { en: "Bluetooth",     tr: "Bluetooth",       de: "Bluetooth" },
  "shade.gps":       { en: "GPS",           tr: "Konum",           de: "GPS" },
  "shade.sound":     { en: "Sound",         tr: "Ses",             de: "Ton" },
  "shade.rotate":    { en: "Auto-rotate",   tr: "Döndürme",        de: "Drehen" },
  "noti.empty":      { en: "No notifications",
                       tr: "Bildirim yok",
                       de: "Keine Benachrichtigungen" },
  "more.aboutBody":  { en: "portfoliOS · Android edition. This app screen is part of an interactive CV. Built with React + vanilla CSS.",
                       tr: "portfoliOS · Android sürümü. Bu uygulama ekranı, etkileşimli bir CV'nin parçasıdır. React + vanilla CSS ile yapıldı.",
                       de: "portfoliOS · Android Edition. Dieser App-Bildschirm ist Teil eines interaktiven Lebenslaufs. Mit React + Vanilla-CSS erstellt." },
  "more.linkCopied": { en: "Link copied to clipboard",
                       tr: "Bağlantı panoya kopyalandı",
                       de: "Link in die Zwischenablage kopiert" },

  /* App labels (under icons) */
  "app.me":          { en: "Me",          tr: "Ben",          de: "Ich" },
  "app.skills":      { en: "Skills",      tr: "Yetenekler",   de: "Können" },
  "app.research": { en: "Work", tr: "İşler", de: "Arbeiten" },
  "app.projects":    { en: "Projects",    tr: "Projeler",     de: "Projekte" },
  "app.experience":  { en: "Experience",  tr: "Deneyim",      de: "Erfahrung" },
  "app.blog":        { en: "Blog",        tr: "Blog",         de: "Blog" },
  "app.mail":        { en: "Mail",        tr: "Posta",        de: "Mail" },
  "app.photos":      { en: "Photos",      tr: "Fotoğraflar", de: "Fotos" },
  "app.cv":          { en: "CV",          tr: "CV",           de: "Lebenslauf" },
  "app.github":      { en: "GitHub",      tr: "GitHub",       de: "GitHub" },
  "app.settings":    { en: "Settings",    tr: "Ayarlar",      de: "Einstellungen" },
  "app.phone":       { en: "Phone",       tr: "Telefon",      de: "Telefon" },
  "app.browser":     { en: "Browser",     tr: "Tarayıcı",    de: "Browser" },
  "app.camera":      { en: "Camera",      tr: "Kamera",       de: "Kamera" },

  /* Me app */
  "me.about":        { en: "ABOUT",       tr: "HAKKINDA",     de: "ÜBER" },
  "me.stats":        { en: "AT A GLANCE", tr: "BAKIŞTA",     de: "ÜBERSICHT" },
  "me.disciplines":  { en: "DISCIPLINES", tr: "ALANLAR",      de: "FACHGEBIETE" },
  "me.contactAction":{ en: "Email",       tr: "E-posta",      de: "E-Mail" },

  /* Skills app */
  "sk.lang":         { en: "Languages",   tr: "Diller",       de: "Sprachen" },
  "sk.frame":        { en: "Frameworks & Libs", tr: "Çatılar & Kütüphaneler", de: "Frameworks & Libs" },
  "sk.web": { en: "Web & Backend", tr: "Web & Backend", de: "Web & Backend" },
  "sk.tools":        { en: "Tooling & Infra", tr: "Araçlar & Altyapı", de: "Werkzeuge & Infra" },
  "sk.data":         { en: "Data",        tr: "Veri",         de: "Daten" },
  "sk.science": { en: "AI & Agents", tr: "YZ & Ajanlar", de: "KI & Agenten" },

  /* Research */
  "re.allPubs": { en: "All projects", tr: "Tüm projeler", de: "Alle Projekte" },

  /* Projects */
  "pj.root":         { en: "All projects", tr: "Tüm projeler", de: "Alle Projekte" },
  "pj.empty":        { en: "Nothing here yet", tr: "Henüz bir şey yok", de: "Noch nichts da" },

  /* Mail */
  "mail.inbox":      { en: "Inbox",       tr: "Gelen Kutusu", de: "Posteingang" },
  "mail.from": { en: "From Onur", tr: "Onur'dan", de: "Von Onur" },
  "mail.replyHere":  { en: "Reach me directly:", tr: "Doğrudan ulaş:", de: "Direkt erreichen:" },

  /* Photos */
  "ph.title":        { en: "Photos",      tr: "Fotoğraflar", de: "Fotos" },
  "ph.portrait":     { en: "Portrait",    tr: "Portre",       de: "Porträt" },
  "ph.wallpaper":    { en: "Wallpaper",   tr: "Duvar Kağıdı", de: "Hintergrund" },

  /* Settings */
  "set.lang":        { en: "Language",       tr: "Dil",          de: "Sprache" },
  "set.display":     { en: "Display",        tr: "Görüntü",     de: "Anzeige" },
  "set.about":       { en: "About phone",    tr: "Telefon hakkında", de: "Telefoninfo" },
  "set.version":     { en: "portfoliOS · Android edition · Holo 4.1",
                        tr: "portfoliOS · Android sürümü · Holo 4.1",
                        de: "portfoliOS · Android · Holo 4.1" },
  "set.about.body":  { en: "A re-imagined Holo-era home screen for the mobile + tablet experience. Open-source vibes; React + vanilla CSS under the hood.",
                        tr: "Mobil ve tablet deneyimi için yeniden hayal edilmiş Holo dönemi ana ekranı. Açık kaynak ruhuna uygun; altyapısı React + vanilla CSS.",
                        de: "Eine neu interpretierte Holo-Ära-Startseite für Handy & Tablet. Open-Source-Vibe; React + vanilla CSS unter der Haube." },

  /* Phone */
  "phone.dial":      { en: "Dial",        tr: "Çevir",        de: "Wählen" },
  "phone.contact": { en: "Use email or GitHub instead. I rarely pick up unknown numbers.", tr: "Bunun yerine e-posta veya GitHub kullan; bilinmeyen numaraları nadiren açıyorum.", de: "Bitte stattdessen E-Mail oder GitHub. Unbekannte Nummern gehe ich selten ran." },
  "phone.calling":   { en: "Calling…",     tr: "Aranıyor…",     de: "Anrufen…" },
  "phone.ringing":   { en: "Ringing…",     tr: "Çalıyor…",      de: "Es klingelt…" },
  "phone.unknown":   { en: "Unknown number", tr: "Bilinmeyen numara", de: "Unbekannte Nummer" },
  "phone.unreachable":{ en: "The number you have called cannot be reached. Please check your connection and try again.",
                       tr: "Aradığınız kişiye şu anda ulaşılamıyor. Lütfen bağlantınızı kontrol ederek tekrar deneyiniz.",
                       de: "Der angerufene Teilnehmer ist nicht erreichbar. Bitte überprüfen Sie Ihre Verbindung und versuchen Sie es erneut." },
  "phone.endCall":   { en: "End call",     tr: "Aramayı sonlandır", de: "Anruf beenden" },
  "phone.callAgain": { en: "Call again",   tr: "Tekrar ara",    de: "Erneut anrufen" },
  "phone.close":     { en: "Close",        tr: "Kapat",         de: "Schließen" },
  "phone.keypadLetters": { en: {"2":"ABC","3":"DEF","4":"GHI","5":"JKL","6":"MNO","7":"PQRS","8":"TUV","9":"WXYZ"}, tr: {}, de: {} },

  /* Browser */
  "br.address":      { en: "Address",     tr: "Adres",        de: "Adresse" },

  /* Camera */
  "cam.title":       { en: "Tap to capture", tr: "Çekmek için dokun", de: "Zum Aufnehmen tippen" },
  "cam.body": { en: "There's no real camera, so here's a placeholder portrait instead.", tr: "Gerçek bir kamera yok, onun yerine bir yer tutucu portre.", de: "Keine echte Kamera, dafür ein Platzhalter-Porträt." },

  /* Recents preview captions */
  "rp.me":           { en: "Profile & intro", tr: "Profil ve tanıtım", de: "Profil & Intro" },
  "rp.skills": { en: "14 skills", tr: "14 yetenek", de: "14 Fähigkeiten" },
  "rp.research": { en: "9 projects", tr: "9 proje", de: "9 Projekte" },
  "rp.projects": { en: "5 folders", tr: "5 klasör", de: "5 Ordner" },
  "rp.experience": { en: "5 roles · timeline", tr: "5 rol · zaman çizelgesi", de: "5 Rollen · Verlauf" },
  "rp.blog":         { en: "5 posts",         tr: "5 yazı",            de: "5 Beiträge" },
  "rp.mail":         { en: "1 unread",        tr: "1 okunmamış",       de: "1 ungelesen" },
  "rp.photos":       { en: "2 photos",        tr: "2 fotoğraf",        de: "2 Fotos" },
  "rp.settings":     { en: "System",           tr: "Sistem",            de: "System" },
  "rp.phone":        { en: "Recent calls",     tr: "Son aramalar",      de: "Letzte Anrufe" },
  "rp.browser": { en: "onurtellioglu.com", tr: "onurtellioglu.com", de: "onurtellioglu.com" },
  "rp.camera":       { en: "1 capture",        tr: "1 çekim",           de: "1 Aufnahme" },

  /* Notification mock items */
  "noti.t1": { en: "Reminder", tr: "Hatırlatma", de: "Erinnerung" },
  "noti.s1": { en: "Return the FT232H cable to the bench", tr: "FT232H kablosunu masaya geri koy", de: "FT232H-Kabel zurück an den Messplatz" },
  "noti.t2": { en: "Capture finished", tr: "Yakalama bitti", de: "Erfassung beendet" },
  "noti.s2": { en: "I-MON sweep 2/2: spectra saved", tr: "I-MON taraması 2/2: spektrumlar kaydedildi", de: "I-MON-Sweep 2/2: Spektren gespeichert" },
  "noti.t3": { en: "Build passed", tr: "Derleme geçti", de: "Build erfolgreich" },
  "noti.s3": { en: "PomeloHook main: all checks green", tr: "PomeloHook main: tüm kontroller yeşil", de: "PomeloHook main: alle Checks grün" },
};
Object.assign(STRINGS, MOBILE_STRINGS);

/* ============ Holo SVG glyphs (line/vector — not webp pixel art) ============ */
const Glyph = {
  Back: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M15 5 L8 12 L15 19 M8 12 L20 12" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Home: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="6.5" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  Recents: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="6" y="5" width="12" height="14" rx="1" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  Signal: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 16 16">
      <rect x="0"  y="11" width="3" height="3" fill="currentColor"/>
      <rect x="4"  y="8"  width="3" height="6" fill="currentColor"/>
      <rect x="8"  y="5"  width="3" height="9" fill="currentColor"/>
      <rect x="12" y="2"  width="3" height="12" fill="currentColor" opacity="0.4"/>
    </svg>
  ),
  Wifi: ({ size = 14 }) => (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <path d="M2 6 a10 10 0 0 1 12 0" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M4 8.5 a7 7 0 0 1 8 0" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M6 11 a4 4 0 0 1 4 0" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="8" cy="13" r="0.9" fill="currentColor"/>
    </svg>
  ),
  Battery: ({ size = 14, pct = 78 }) => (
    <svg width={size*1.6} height={size} viewBox="0 0 24 12">
      <rect x="0" y="1" width="20" height="10" fill="none" stroke="currentColor" strokeWidth="1"/>
      <rect x="20.5" y="4" width="2.5" height="4" fill="currentColor"/>
      <rect x="2" y="3" width={Math.max(1, (pct/100)*16)} height="6" fill="currentColor"/>
    </svg>
  ),
  ChevDown: ({ size = 12 }) => (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <path d="M2 4 L6 8 L10 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Search: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="10" cy="10" r="6" stroke="currentColor" strokeWidth="2"/>
      <path d="M14.5 14.5 L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  More: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24">
      <circle cx="12" cy="5"  r="1.6" fill="currentColor"/>
      <circle cx="12" cy="12" r="1.6" fill="currentColor"/>
      <circle cx="12" cy="19" r="1.6" fill="currentColor"/>
    </svg>
  ),
  Plus: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M12 5 V19 M5 12 H19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
  ),
  Send: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 4 L21 12 L3 20 L5 13 L15 12 L5 11 Z"/>
    </svg>
  ),
  Phone: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M5 3 L9 5 L7 9 a14 14 0 0 0 6 6 L17 13 L19 17 a3 3 0 0 1 -3 4 a17 17 0 0 1 -14 -14 a3 3 0 0 1 3 -4 Z"
        stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  ),
  Browser: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
      <ellipse cx="12" cy="12" rx="4" ry="9" stroke="currentColor" strokeWidth="2"/>
      <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  Camera: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="2" y="6" width="20" height="14" rx="1" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 6 L9.5 4 H14.5 L16 6" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="13" r="4" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  Mail: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="6" width="18" height="13" rx="1" stroke="currentColor" strokeWidth="2"/>
      <path d="M3 7 L12 14 L21 7" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  Settings: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 3 V6 M12 18 V21 M3 12 H6 M18 12 H21 M5.6 5.6 L7.7 7.7 M16.3 16.3 L18.4 18.4 M5.6 18.4 L7.7 16.3 M16.3 7.7 L18.4 5.6"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  Person: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
      <path d="M4 21 a8 8 0 0 1 16 0" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  Document: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M5 3 H14 L19 8 V21 H5 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <path d="M14 3 V8 H19" stroke="currentColor" strokeWidth="2"/>
      <line x1="8" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1.6"/>
      <line x1="8" y1="16" x2="16" y2="16" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  ),
  Folder: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M3 6 H10 L12 8 H21 V19 H3 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    </svg>
  ),
  Briefcase: ({ size = 22 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="7" width="18" height="13" stroke="currentColor" strokeWidth="2"/>
      <path d="M8 7 V5 a1 1 0 0 1 1 -1 h6 a1 1 0 0 1 1 1 V7" stroke="currentColor" strokeWidth="2"/>
      <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2"/>
    </svg>
  ),
  Star: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2 L14.7 8.6 L21.7 9.2 L16.4 13.8 L18.1 20.7 L12 17 L5.9 20.7 L7.6 13.8 L2.3 9.2 L9.3 8.6 Z"/>
    </svg>
  ),
  Check: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M5 12 L10 17 L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Bluetooth: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M8 6 L16 18 L12 22 V2 L16 6 L8 18" stroke="currentColor" strokeWidth="2"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Gps: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="2"/>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 1 V4 M12 20 V23 M1 12 H4 M20 12 H23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  Volume: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M3 9 V15 H7 L13 20 V4 L7 9 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" fill="none"/>
      <path d="M16.5 8 a5 5 0 0 1 0 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M19 5 a9 9 0 0 1 0 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  Rotate: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M4 12 a8 8 0 0 1 14 -5.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M20 12 a8 8 0 0 1 -14 5.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M18 2 V7 H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 22 V17 H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  WifiToggle: ({ size = 20 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M2 8 a16 16 0 0 1 20 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M5 11.5 a11 11 0 0 1 14 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M8 15 a6 6 0 0 1 8 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="12" cy="19" r="1.4" fill="currentColor"/>
    </svg>
  ),
  Refresh: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M3 12 a9 9 0 0 1 15 -6.5 L21 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M21 3 V8 H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 12 a9 9 0 0 1 -15 6.5 L3 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M3 21 V16 H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  Info: ({ size = 18 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
      <line x1="12" y1="11" x2="12" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="12" cy="7.5" r="1.2" fill="currentColor"/>
    </svg>
  ),
  Close: ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path d="M6 6 L18 18 M18 6 L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
};

/* ============ App Registry ============ */
const APP_COLORS = {
  me:         "#5b3a86",
  skills:     "#0d7d76",
  research:   "#1976a3",
  projects:   "#cc7a14",
  experience: "#2f7a3a",
  blog:       "#a23a30",
  mail:       "#1a8fb3",
  photos:     "#b3357a",
  cv:         "#2a4a6e",
  github:     "#1c1f24",
  settings:   "#3a3f48",
  phone:      "#2e8b57",
  browser:    "#0099cc",
  camera:     "#1f2730",
};

/* HOME — apps shown on the grid. Order: top -> bottom. */
const HOME_APPS = [
  "me", "skills", "research", "projects",
  "experience", "blog", "photos", "settings",
  "github", "cv", "camera",
];
const DOCK_APPS = ["phone", "browser", "mail", "me"];

/* App metadata - icon (which Glyph) + label key. Render via squircle. */
const APP_META = {
  me:         { glyph: "Person",    label: "app.me",         color: APP_COLORS.me },
  skills:     { glyph: "Settings",  label: "app.skills",     color: APP_COLORS.skills },
  research:   { glyph: "folder",    label: "app.research",   color: APP_COLORS.research, isFolder: true },
  projects:   { glyph: "folder",    label: "app.projects",   color: APP_COLORS.projects, isFolder: true },
  experience: { glyph: "Briefcase", label: "app.experience", color: APP_COLORS.experience },
  blog:       { glyph: "Document",  label: "app.blog",       color: APP_COLORS.blog },
  mail:       { glyph: "Mail",      label: "app.mail",       color: APP_COLORS.mail },
  photos:     { glyph: "Photos",    label: "app.photos",     color: APP_COLORS.photos },
  cv:         { glyph: "Document",  label: "app.cv",         color: APP_COLORS.cv },
  github:     { glyph: "gh",        label: "app.github",     color: APP_COLORS.github },
  settings:   { glyph: "Settings",  label: "app.settings",   color: APP_COLORS.settings },
  phone:      { glyph: "Phone",     label: "app.phone",      color: APP_COLORS.phone },
  browser:    { glyph: "Browser",   label: "app.browser",    color: APP_COLORS.browser },
  camera:     { glyph: "Camera",    label: "app.camera",     color: APP_COLORS.camera },
};

/* ============ Squircle icon — color background + glyph (or webp inside) ============ */
const AppIcon = ({ appId, size = 56 }) => {
  const meta = APP_META[appId];
  const t = useT();
  const color = meta.color;

  /* Folder = mini grid of webp icons */
  if (meta.isFolder) {
    const tiles = appId === "research"
      ? ["file-icon.webp", "terminal-icon.webp", "robot-head-with-brain-motif-icon.webp", "python-icon.webp"]
      : ["folder-icon.webp", "globe-with-code-brackets.webp", "react-icon.webp", "python-icon.webp"];
    return (
      <div className="a-app-ico" style={{ background: "rgba(255,255,255,0.08)" }}>
        <div className="a-folder-ico">
          {tiles.map((f, i) => (
            <div key={i}>
              <img src={"portfolios-assets/icons/" + f}
                style={{ width: "78%", height: "78%", objectFit: "contain", imageRendering: "pixelated" }}
                draggable={false} alt=""/>
            </div>
          ))}
        </div>
      </div>
    );
  }

  /* Glyph icons — colored squircle with vector glyph */
  const GlyphMap = {
    Person: Glyph.Person, Settings: Glyph.Settings, Briefcase: Glyph.Briefcase,
    Document: Glyph.Document, Mail: Glyph.Mail, Phone: Glyph.Phone,
    Browser: Glyph.Browser, Camera: Glyph.Camera, Folder: Glyph.Folder,
  };

  if (meta.glyph === "Photos") {
    /* Photos has the portrait peeking out */
    return (
      <div className="a-app-ico" style={{
        background: `linear-gradient(135deg, ${color}, ${shade(color, -20)})`,
      }}>
        <img src="portfolios-assets/onur-portrait-placeholder.svg"
          alt="" draggable={false}
          style={{
            position: "absolute", left: "8%", top: "12%",
            width: "84%", height: "76%", objectFit: "cover",
            imageRendering: "pixelated",
            borderRadius: 6,
            opacity: 0.92,
          }}/>
      </div>
    );
  }

  if (meta.glyph === "in") {
    return (
      <div className="a-app-ico" style={{ background: color, color: "#fff" }}>
        <span style={{ fontFamily: '"Roboto", sans-serif', fontWeight: 900, fontSize: size * 0.46, letterSpacing: "-0.02em" }}>in</span>
      </div>
    );
  }
  if (meta.glyph === "gh") {
    return (
      <div className="a-app-ico" style={{ background: color, color: "#fff" }}>
        <svg width={size * 0.62} height={size * 0.62} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2 a10 10 0 0 0 -3.16 19.5 c0.5 0.09 0.68 -0.22 0.68 -0.48 c0 -0.24 -0.01 -0.87 -0.01 -1.71 c-2.78 0.6 -3.37 -1.34 -3.37 -1.34 c-0.45 -1.15 -1.11 -1.46 -1.11 -1.46 c-0.91 -0.62 0.07 -0.6 0.07 -0.6 c1 0.07 1.53 1.03 1.53 1.03 c0.89 1.53 2.34 1.09 2.91 0.83 c0.09 -0.65 0.35 -1.09 0.63 -1.34 c-2.22 -0.25 -4.56 -1.11 -4.56 -4.95 c0 -1.09 0.39 -1.99 1.03 -2.69 c-0.1 -0.25 -0.45 -1.27 0.1 -2.65 c0 0 0.84 -0.27 2.75 1.02 a9.6 9.6 0 0 1 5 0 c1.91 -1.29 2.75 -1.02 2.75 -1.02 c0.55 1.38 0.2 2.4 0.1 2.65 c0.64 0.7 1.03 1.6 1.03 2.69 c0 3.85 -2.34 4.7 -4.57 4.95 c0.36 0.31 0.68 0.92 0.68 1.85 c0 1.34 -0.01 2.42 -0.01 2.75 c0 0.27 0.18 0.58 0.69 0.48 A10 10 0 0 0 12 2 Z"/>
        </svg>
      </div>
    );
  }

  const G = GlyphMap[meta.glyph];
  return (
    <div className="a-app-ico" style={{
      background: `linear-gradient(135deg, ${shade(color, 14)}, ${shade(color, -16)})`,
      color: "#fff",
    }}>
      {G && <G size={Math.round(size * 0.5)}/>}
    </div>
  );
};

/* Quick color shade helper */
function shade(hex, pct) {
  const m = hex.replace("#", "").match(/(..)(..)(..)/);
  if (!m) return hex;
  const adj = (v) => Math.max(0, Math.min(255, parseInt(v, 16) + Math.round(255 * pct / 100)));
  const to = (n) => n.toString(16).padStart(2, "0");
  return "#" + to(adj(m[1])) + to(adj(m[2])) + to(adj(m[3]));
}

/* ---------- AppButton on home grid ---------- */
const AppButton = ({ appId, onOpen, size }) => {
  const t = useT();
  const meta = APP_META[appId];
  return (
    <button className="a-app" onClick={() => onOpen(appId)} aria-label={t(meta.label)}>
      <AppIcon appId={appId} size={size}/>
      <span className="a-app-lbl">{t(meta.label)}</span>
    </button>
  );
};

/* ---------- Status bar ---------- */
const StatusBar = ({ onShade, hasUnread, clock }) => {
  return (
    <div className="a-status" onClick={(e) => {
      // top half tap opens shade
      if (e.currentTarget === e.target) onShade();
    }}>
      <div className="left" onClick={onShade} style={{ cursor: "pointer", flex: 1 }}>
        {hasUnread && <span className="notif"><Glyph.Mail size={11}/></span>}
        <span className="notif"><Glyph.Star size={10}/></span>
        <span className="notif"><span style={{ fontSize: 10, fontWeight: 700 }}>R</span></span>
      </div>
      <div className="right">
        <Glyph.Signal size={12}/>
        <Glyph.Wifi size={12}/>
        <Glyph.Battery size={11} pct={78}/>
        <span style={{ width: 6 }}/>
        <span style={{ fontWeight: 500 }}>{clock}</span>
      </div>
    </div>
  );
};

/* ---------- Navigation bar ---------- */
const NavBar = ({ onBack, onHome, onRecents, canBack }) => {
  return (
    <div className="a-navbar">
      <button className={"a-nav-btn"} onClick={onBack} aria-label="Back"
        style={{ opacity: canBack ? 1 : 0.5 }}>
        <Glyph.Back size={20}/>
      </button>
      <button className="a-nav-btn" onClick={onHome} aria-label="Home">
        <Glyph.Home size={18}/>
      </button>
      <button className="a-nav-btn" onClick={onRecents} aria-label="Recents">
        <Glyph.Recents size={18}/>
      </button>
    </div>
  );
};

/* ---------- Home screen ---------- */
const HomeScreen = ({ onOpen }) => {
  const t = useT();
  return (
    <div className="a-home">
      <div className="a-home-grid">
        {HOME_APPS.map(id => (
          <AppButton key={id} appId={id} onOpen={onOpen} size={56}/>
        ))}
      </div>
      <div className="a-page-dots">
        <span className="active"/><span/>
      </div>
      <div className="a-dock">
        {DOCK_APPS.map(id => (
          <AppButton key={id} appId={id} onOpen={onOpen} size={56}/>
        ))}
      </div>
    </div>
  );
};

/* ---------- Recents overlay ---------- */
const RecentsOverlay = ({ apps, onPick, onClose, onClear, onDismiss }) => {
  const t = useT();
  return (
    <div className="a-recents">
      <div className="a-recents-title" style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
        <span>{t("a.recents")}{apps.length > 0 ? ` · ${t("a.recents.tip")}` : ""}</span>
        {apps.length > 0 && (
          <span className="clear" onClick={onClear}
            style={{ color: "var(--holo-cyan)", cursor: "pointer", fontSize: 11 }}>
            {t("a.clearAll")}
          </span>
        )}
      </div>
      {apps.length === 0 ? (
        <div className="a-recents-empty">{t("a.recents.empty")}</div>
      ) : (
        <div className="a-recents-stack">
          {apps.map((id, i) => (
            <RecentCard key={id+i} appId={id}
              onPick={() => { onPick(id); onClose(); }}
              onDismiss={() => onDismiss(id)}/>
          ))}
        </div>
      )}
    </div>
  );
};

const RecentCard = ({ appId, onPick, onDismiss }) => {
  const t = useT();
  const meta = APP_META[appId];
  const captionMap = {
    me: "rp.me", skills: "rp.skills", research: "rp.research",
    projects: "rp.projects", experience: "rp.experience", blog: "rp.blog",
    mail: "rp.mail", photos: "rp.photos", settings: "rp.settings",
    phone: "rp.phone", browser: "rp.browser", camera: "rp.camera",
    cv: "app.cv", github: "app.github",
  };
  return (
    <div className="a-recents-card" onClick={onPick}>
      <div className="rc-header" style={{ background: `linear-gradient(180deg, ${meta.color}, ${shade(meta.color, -20)})` }}>
        <div style={{ width: 22, height: 22, display: "grid", placeItems: "center", color: "#fff" }}>
          <AppIcon appId={appId} size={28}/>
        </div>
        <span style={{ marginLeft: 4 }}>{t(meta.label)}</span>
        <span className="rc-close"
          onClick={(e) => { e.stopPropagation(); onDismiss && onDismiss(); }}
          role="button" aria-label="Dismiss"
        >
          <Glyph.Close size={14}/>
        </span>
      </div>
      <div className="rc-preview">
        <RecentPreview appId={appId}/>
        <div style={{
          position: "absolute", left: 0, right: 0, bottom: 0,
          padding: "6px 12px", fontSize: 11, color: "var(--holo-text-dim)",
          background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.6))",
          letterSpacing: "0.04em",
        }}>{t(captionMap[appId] || meta.label)}</div>
      </div>
    </div>
  );
};

/* Lightweight previews shown in recent card */
const RecentPreview = ({ appId }) => {
  const meta = APP_META[appId];
  const color = meta.color;
  if (appId === "me") {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 16, padding: 14 }}>
        <div style={{ width: 80, height: 80, background: "#2a2f3a", overflow: "hidden", border: "1px solid rgba(255,255,255,0.12)" }}>
          <img src="portfolios-assets/onur-portrait-placeholder.svg"
            style={{ width: "100%", height: "100%", objectFit: "cover", imageRendering: "pixelated" }} alt=""/>
        </div>
        <div style={{ flex: 1, color: "#cdd5dc" }}>
          <div style={{ fontSize: 14, fontWeight: 500 }}>Onur Tellioglu</div>
          <div style={{ fontSize: 12, color: "var(--holo-text-dim)" }}>AI · Instruments</div>
        </div>
      </div>
    );
  }
  if (appId === "photos") {
    return (
      <div style={{ padding: 10, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4, height: "100%" }}>
        <img src="portfolios-assets/onur-portrait-placeholder.svg"
          style={{ width: "100%", height: "100%", objectFit: "cover", imageRendering: "pixelated" }} alt=""/>
        <img src="portfolios-assets/desktop-background.avif"
          style={{ width: "100%", height: "100%", objectFit: "cover" }} alt=""/>
      </div>
    );
  }
  if (appId === "blog") {
    return (
      <div style={{ padding: 10, fontSize: 11, color: "var(--holo-text-dim)" }}>
        {BLOG_POSTS.slice(0, 3).map(p => (
          <div key={p.id} style={{ marginBottom: 6, borderLeft: "2px solid var(--holo-cyan)", paddingLeft: 8 }}>
            <div style={{ color: "#e4e9ee" }}>{p.title.slice(0, 38)}…</div>
            <div style={{ fontSize: 10 }}>{p.date}</div>
          </div>
        ))}
      </div>
    );
  }
  if (appId === "research") {
    return (
      <div style={{ padding: 10, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
        {PUBLICATIONS.slice(0, 4).map((p, i) => (
          <div key={i} style={{ background: "rgba(255,255,255,0.04)", padding: 6, fontSize: 10.5, color: "var(--holo-text-dim)", borderLeft: "2px solid var(--holo-cyan)" }}>
            <div style={{ color: "#e4e9ee", fontWeight: 500 }}>{p.title.slice(0, 28)}…</div>
            <div style={{ marginTop: 2 }}>{p.journal}</div>
          </div>
        ))}
      </div>
    );
  }
  /* default — colored band + glyph */
  return (
    <div style={{
      position: "absolute", inset: 0,
      background: `radial-gradient(circle at 70% 30%, ${shade(color, 30)}, ${shade(color, -30)})`,
      display: "grid", placeItems: "center",
    }}>
      <div style={{ opacity: 0.6, transform: "scale(2.4)" }}>
        <AppIcon appId={appId} size={48}/>
      </div>
    </div>
  );
};

/* ---------- Notification shade ---------- */
const SHADE_TOGGLE_DEFS = [
  { k: "wifi",   labelK: "shade.wifi",   Icon: () => <Glyph.WifiToggle size={20}/> },
  { k: "bt",     labelK: "shade.bt",     Icon: () => <Glyph.Bluetooth size={18}/> },
  { k: "gps",    labelK: "shade.gps",    Icon: () => <Glyph.Gps size={18}/> },
  { k: "sound",  labelK: "shade.sound",  Icon: () => <Glyph.Volume size={18}/> },
  { k: "rotate", labelK: "shade.rotate", Icon: () => <Glyph.Rotate size={18}/> },
];

const NotificationShade = ({ onClose, clock, toggles, setToggles, cleared, onClear, onOpenBlog }) => {
  const t = useT();
  const posts = typeof BLOG_POSTS !== "undefined" ? BLOG_POSTS.slice(0, 3) : [];
  const dateLabel = (iso) => {
    try {
      const d = new Date(iso);
      const today = new Date();
      const dDay = Math.floor((today - d) / (1000 * 60 * 60 * 24));
      if (dDay <= 0) return "now";
      if (dDay === 1) return "1d";
      if (dDay < 7) return dDay + "d";
      if (dDay < 30) return Math.floor(dDay / 7) + "w";
      return Math.floor(dDay / 30) + "mo";
    } catch { return ""; }
  };

  return (
    <>
      <div style={{
        position: "absolute", inset: 0, zIndex: 28, background: "rgba(0,0,0,0.4)",
      }} onClick={onClose}/>
      <div className="a-shade">
        <div className="a-shade-h">
          <span>{clock} · {t("a.notifications")}</span>
          {!cleared && posts.length > 0 && (
            <span className="clear" onClick={onClear}>
              <Glyph.Close size={11}/> {t("a.clearAll")}
            </span>
          )}
        </div>
        <div className="a-toggles">
          {SHADE_TOGGLE_DEFS.map(({ k, labelK, Icon }) => (
            <div key={k} className={"a-toggle" + (toggles[k] ? " on" : "")}
              onClick={() => setToggles(s => ({ ...s, [k]: !s[k] }))}>
              <div className="ti"><Icon/></div>
              <div style={{ fontSize: 10.5, letterSpacing: "0.04em" }}>{t(labelK)}</div>
            </div>
          ))}
        </div>
        {cleared || posts.length === 0 ? (
          <div style={{
            padding: "32px 16px",
            textAlign: "center",
            color: "var(--holo-text-dimmer)",
            fontSize: 12, letterSpacing: "0.04em",
          }}>
            {t("noti.empty")}
          </div>
        ) : (
          posts.map(p => {
            const color = (typeof BLOG_KIND_COLOR !== "undefined" && BLOG_KIND_COLOR[p.kind]) || APP_COLORS.blog;
            const title = t("blog." + p.id + ".title");
            const body = t("blog." + p.id + ".body");
            const snippet = (body || "").replace(/\s+/g, " ").trim().slice(0, 90);
            return (
              <div key={p.id} className="a-noti"
                onClick={onOpenBlog}
                style={{ cursor: "pointer" }}>
                <div style={{
                  display: "grid", placeItems: "center",
                  width: 32, height: 32,
                  background: color, borderRadius: 4, color: "#fff",
                }}>
                  <Glyph.Document size={16}/>
                </div>
                <div>
                  <div className="nt" style={{
                    overflow: "hidden", textOverflow: "ellipsis",
                    display: "-webkit-box", WebkitLineClamp: 1, WebkitBoxOrient: "vertical",
                  }}>{title}</div>
                  <div className="ns" style={{
                    overflow: "hidden", textOverflow: "ellipsis",
                    display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical",
                  }}>
                    <span style={{
                      color: color, textTransform: "uppercase", letterSpacing: "0.06em",
                      fontSize: 10, fontWeight: 700, marginRight: 6,
                    }}>{t("blog.kind." + p.kind)}</span>
                    {snippet}…
                  </div>
                </div>
                <div className="ntime">{dateLabel(p.date)}</div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

/* ============ a11y state — shared with desktop via localStorage ============ */
const A11Y_DEFAULTS = {
  largeText: false, highContrast: false, underlineLinks: false,
  reduceMotion: false, focusRing: false,
};
const A11yContext = React.createContext({ a11y: A11Y_DEFAULTS, setA11y: () => {} });
const useA11y = () => React.useContext(A11yContext);

const A11yProvider = ({ children }) => {
  const [a11y, setA11yState] = React.useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("a11y"));
      return { ...A11Y_DEFAULTS, ...(saved || {}) };
    } catch { return A11Y_DEFAULTS; }
  });
  const setA11y = React.useCallback((updater) => {
    setA11yState(prev => {
      const next = typeof updater === "function" ? updater(prev) : { ...prev, ...updater };
      try { localStorage.setItem("a11y", JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);
  return (
    <A11yContext.Provider value={{ a11y, setA11y }}>
      {children}
    </A11yContext.Provider>
  );
};

/* ============ Main AndroidOS shell ============ */
const AndroidOS = () => {
  return (
    <A11yProvider>
      <AndroidOSInner/>
    </A11yProvider>
  );
};

const AndroidOSInner = () => {
  const t = useT();
  const { a11y } = useA11y();
  const [activeApp, setActiveApp] = React.useState(null);   // null = home
  const [appKey,   setAppKey]   = React.useState(0);        // re-mount for zoom anim
  const [appStack, setAppStack] = React.useState({});       // {appId: innerState}
  const [appHistory, setAppHistory] = React.useState([]);   // back stack of previously-opened apps
  const [recents,  setRecents]  = React.useState([]);
  const [recentsOpen, setRecentsOpen] = React.useState(false);
  const [shade, setShade] = React.useState(false);
  const [clock, setClock] = React.useState(fmtClock());
  const [unread, setUnread] = React.useState(true);
  const [photoOpen, setPhotoOpen] = React.useState(null);
  // Persisted-across-shade-open state (resets on page reload only)
  const [shadeToggles, setShadeToggles] = React.useState({
    wifi: true, bt: false, gps: true, sound: true, rotate: false,
  });
  const [notiCleared, setNotiCleared] = React.useState(false);
  const [moreMenuApp, setMoreMenuApp] = React.useState(null); // appId whose 3-dot menu is open

  React.useEffect(() => {
    const t = setInterval(() => setClock(fmtClock()), 30 * 1000);
    return () => clearInterval(t);
  }, []);

  const openApp = (id) => {
    if (id === "cv") {
      window.open("portfolios-assets/onur_tellioglu_cv.pdf", "_blank");
      return;
    }
    // Push current app onto history so Back can return to it
    setAppHistory(h => (activeApp && activeApp !== id) ? [...h, activeApp] : h);
    setActiveApp(id);
    setAppKey(k => k + 1);
    setRecents(prev => [id, ...prev.filter(x => x !== id)].slice(0, 6));
    setRecentsOpen(false);
    setShade(false);
    if (id === "mail") setUnread(false);
  };

  const goHome = () => {
    setActiveApp(null);
    setAppHistory([]);
    setRecentsOpen(false);
    setShade(false);
    setPhotoOpen(null);
  };

  const onBack = () => {
    if (shade) { setShade(false); return; }
    if (recentsOpen) { setRecentsOpen(false); return; }
    if (photoOpen) { setPhotoOpen(null); return; }
    if (activeApp) {
      if (appHistory.length > 0) {
        // Pop previous app off the stack and re-open it
        const prev = appHistory[appHistory.length - 1];
        setAppHistory(h => h.slice(0, -1));
        setActiveApp(prev);
        setAppKey(k => k + 1);
        setRecents(r => [prev, ...r.filter(x => x !== prev)].slice(0, 6));
      } else {
        goHome();
      }
      return;
    }
  };
  const onRecents = () => {
    setRecentsOpen(o => !o);
    setShade(false);
  };
  const onShade = () => {
    setShade(s => !s);
    setRecentsOpen(false);
  };

  const a11yClass = "android-os"
    + (a11y.largeText ? " a11y-large" : "")
    + (a11y.highContrast ? " a11y-contrast" : "")
    + (a11y.underlineLinks ? " a11y-underline" : "")
    + (a11y.reduceMotion ? " a11y-still" : "")
    + (a11y.focusRing ? " a11y-focus" : "");

  return (
    <div className={a11yClass}>
      <div className="wp-pulse"/>

      <StatusBar onShade={onShade} hasUnread={unread} clock={clock}/>

      <div className="a-content">
        {activeApp === null && (
          <HomeScreen onOpen={openApp}/>
        )}
        {activeApp !== null && (
          <div key={appKey} className="a-app-frame">
            <AppScreenRouter
              appId={activeApp}
              onOpen={openApp}
              onPhotoOpen={setPhotoOpen}
            />
          </div>
        )}
        {photoOpen && (
          <PhotoViewer src={photoOpen} onClose={() => setPhotoOpen(null)}/>
        )}
        {recentsOpen && (
          <RecentsOverlay
            apps={recents}
            onPick={(id) => openApp(id)}
            onClose={() => setRecentsOpen(false)}
            onClear={() => setRecents([])}
            onDismiss={(id) => setRecents(r => r.filter(x => x !== id))}
          />
        )}
      </div>

      <NavBar
        onBack={onBack} onHome={goHome} onRecents={onRecents}
        canBack={!!activeApp || recentsOpen || shade || photoOpen || appHistory.length > 0}/>

      {shade && <NotificationShade
        onClose={() => setShade(false)}
        clock={clock}
        toggles={shadeToggles}
        setToggles={setShadeToggles}
        cleared={notiCleared}
        onClear={() => setNotiCleared(true)}
        onOpenBlog={() => { setShade(false); openApp("blog"); }}
      />}
    </div>
  );
};

/* ============ App router ============ */
const AppScreenRouter = ({ appId, onOpen, onPhotoOpen }) => {
  switch (appId) {
    case "me":         return <MeApp onOpen={onOpen}/>;
    case "skills":     return <SkillsApp/>;
    case "research":   return <ResearchApp/>;
    case "projects":   return <ProjectsApp/>;
    case "experience": return <ExperienceApp/>;
    case "blog":       return <BlogApp/>;
    case "mail":       return <MailApp/>;
    case "photos":     return <PhotosApp onPhotoOpen={onPhotoOpen}/>;
    case "github":     return <SocialApp kind="github"/>;
    case "settings":   return <SettingsApp/>;
    case "phone":      return <PhoneApp/>;
    case "browser":    return <BrowserApp/>;
    case "camera":     return <CameraApp onPhotoOpen={onPhotoOpen}/>;
    default:           return <div style={{ padding: 20 }}>App not found</div>;
  }
};

/* ============ Action bar component ============ */
const ActionBar = ({ title, sub, iconAppId, onUp, actions, tabs, activeTab, onTabPick }) => {
  const t = useT();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [toast, setToast] = React.useState("");
  React.useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(""), 1800);
    return () => clearTimeout(id);
  }, [toast]);

  // Generic menu — opens when an action has no onClick (i.e. the 3-dot "More" button).
  const defaultMenu = [
    { k: "refresh", labelK: "a.refresh", Icon: Glyph.Refresh, onClick: () => {
        // Visual refresh: scroll body to top + flash
        const body = document.querySelector(".a-app-frame .a-body");
        if (body) body.scrollTop = 0;
        setToast(t("a.refresh"));
      }
    },
    { k: "copy", labelK: "a.copyLink", Icon: Glyph.Send, onClick: async () => {
        try {
          await navigator.clipboard.writeText(window.location.origin + window.location.pathname);
          setToast(t("more.linkCopied"));
        } catch {
          setToast(t("more.linkCopied"));
        }
      }
    },
    { k: "about", labelK: "a.about", Icon: Glyph.Info, onClick: () => {
        alert(t("more.aboutBody"));
      }
    },
  ];

  return (
    <>
      <div className="a-actionbar">
        {onUp && (
          <div className="up" onClick={onUp}>
            <Glyph.Back size={20}/>
          </div>
        )}
        <div style={{ flex: 1, minWidth: 0, paddingLeft: onUp ? 4 : 16 }}>
          <div className="ab-title">{title}</div>
          {sub && <div className="ab-sub">{sub}</div>}
        </div>
        {actions && actions.map((a, i) => {
          const handler = a.onClick
            ? a.onClick
            : () => setMenuOpen(o => !o);
          return (
            <div key={i} className="ab-action"
              onClick={(e) => { e.stopPropagation(); handler(); }}
              title={a.label}
              style={{ position: "relative" }}
            >
              {a.icon}
            </div>
          );
        })}
      </div>
      {tabs && (
        <div className="a-tabs">
          {tabs.map(tb => (
            <div key={tb.id}
              className={"a-tab" + (activeTab === tb.id ? " active" : "")}
              onClick={() => onTabPick(tb.id)}>
              {tb.label}
            </div>
          ))}
        </div>
      )}

      {/* Generic More popover */}
      {menuOpen && (
        <>
          <div onClick={() => setMenuOpen(false)}
            style={{ position: "absolute", inset: 0, zIndex: 24, background: "transparent" }}/>
          <div style={{
            position: "absolute", top: "calc(var(--holo-status-h) + 6px)", right: 6,
            zIndex: 25, minWidth: 180,
            background: "#1a1f26", border: "1px solid rgba(51,181,229,0.25)",
            boxShadow: "0 12px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,0,0,0.4)",
            padding: "4px 0",
            animation: "more-menu-in 0.14s ease-out",
          }}>
            {defaultMenu.map((m, i) => (
              <div key={m.k}
                onClick={() => { setMenuOpen(false); m.onClick(); }}
                style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "10px 14px",
                  color: "var(--holo-text)", cursor: "pointer",
                  fontSize: 13.5,
                  borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.04)",
                }}
                onMouseDown={e => e.currentTarget.style.background = "rgba(51,181,229,0.16)"}
                onMouseUp={e => e.currentTarget.style.background = "transparent"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                <span style={{ color: "var(--holo-cyan)", display: "grid", placeItems: "center", width: 20 }}>
                  <m.Icon size={18}/>
                </span>
                <span>{t(m.labelK)}</span>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Toast */}
      {toast && (
        <div style={{
          position: "absolute", left: "50%", bottom: "calc(var(--holo-nav-h) + 20px)",
          transform: "translateX(-50%)",
          zIndex: 26,
          background: "rgba(20,24,30,0.95)",
          border: "1px solid rgba(51,181,229,0.35)",
          color: "var(--holo-text)",
          padding: "10px 16px",
          fontSize: 12.5, letterSpacing: "0.02em",
          animation: "toast-in 0.22s ease-out",
          boxShadow: "0 4px 18px rgba(0,0,0,0.6)",
          maxWidth: "85%",
        }}>{toast}</div>
      )}
    </>
  );
};

/* Photo viewer (used by Photos app + Camera) */
const PhotoViewer = ({ src, onClose }) => (
  <div style={{
    position: "absolute", inset: 0, zIndex: 30,
    background: "#000", display: "grid", placeItems: "center",
    animation: "app-zoom-in 0.18s ease-out",
  }} onClick={onClose}>
    <img src={src} alt="" style={{
      maxWidth: "94%", maxHeight: "84%",
      imageRendering: "pixelated", boxShadow: "0 0 40px rgba(0,0,0,0.7)",
    }}/>
    <div style={{
      position: "absolute", bottom: 10, left: 0, right: 0,
      textAlign: "center", color: "var(--holo-text-dim)", fontSize: 12,
    }}>tap to close</div>
  </div>
);

/* Export to window for app.jsx to mount as <MobileOS/> */
const MobileOS = AndroidOS;

Object.assign(window, {
  MobileOS, AndroidOS, AppIcon, AppScreenRouter, APP_META, APP_COLORS,
  HOME_APPS, DOCK_APPS, Glyph, ActionBar, PhotoViewer,
  A11yContext, A11yProvider, useA11y, A11Y_DEFAULTS,
  fmtClock: window.fmtClock || (() => {
    const d = new Date(); let h = d.getHours();
    const m = String(d.getMinutes()).padStart(2,"0");
    return `${h.toString().padStart(2,"0")}:${m}`;
  }),
  shade, MOBILE_STRINGS,
});

/* Override clock format for android — 24h no AM/PM */
function fmtClock() {
  const d = new Date();
  return `${String(d.getHours()).padStart(2,"0")}:${String(d.getMinutes()).padStart(2,"0")}`;
}
window.fmtClock = fmtClock;
