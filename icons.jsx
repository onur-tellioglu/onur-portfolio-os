/* =====================================================================
   Icons — WebP-backed pixel-art icons.
   Component names match original API so call sites don't need to change.
   `IconCode` intentionally remains an inline SVG (no matching WebP).
   ===================================================================== */

const ICON_BASE = "portfolios-assets/icons/";

/* Generic WebP icon. Crisp-pixel rendering, drag/select-proof, async-decoded. */
const WIcon = ({ file, size = 32, alt = "", title, style }) => (
  <img
    src={ICON_BASE + file}
    alt={alt}
    title={title}
    width={size}
    height={size}
    draggable={false}
    decoding="async"
    loading="lazy"
    style={{
      width: size,
      height: size,
      imageRendering: "pixelated",
      userSelect: "none",
      display: "inline-block",
      verticalAlign: "middle",
      flexShrink: 0,
      pointerEvents: "none",
      ...style,
    }}
  />
);

/* === Desktop / shortcut icons === */
const IconComputer = ({ size = 32 }) => <WIcon file="my-computer-icon.webp"      size={size} alt="My Computer"/>;
const IconFolder   = ({ size = 32 }) => <WIcon file="folder-icon.webp"           size={size} alt="Folder"/>;
const IconResearch = ({ size = 32 }) => <WIcon file="microscope-icon.webp"       size={size} alt="Research"/>;
const IconGlobe    = ({ size = 32 }) => <WIcon file="globe-icon.webp"            size={size} alt="Globe"/>;
const IconWrench   = ({ size = 32 }) => <WIcon file="crossed-tools-icon.webp"    size={size} alt="Tools"/>;
const IconTrash    = ({ size = 32 }) => <WIcon file="recycling-bin-icon.webp"    size={size} alt="Recycle Bin"/>;
const IconMail     = ({ size = 32 }) => <WIcon file="envelope-icon.webp"         size={size} alt="Mail"/>;
const IconDoc      = ({ size = 32 }) => <WIcon file="file-icon.webp"             size={size} alt="Document"/>;
const IconFloppy   = ({ size = 32 }) => <WIcon file="floppy-disk-icon.webp"      size={size} alt="Save / CV"/>;
const IconBriefcase= ({ size = 32 }) => <WIcon file="briefcase-icon.webp"        size={size} alt="Briefcase"/>;
const IconBook     = ({ size = 32 }) => <WIcon file="bookshelf-icon.webp"        size={size} alt="Bookshelf"/>;
const IconChart    = ({ size = 32 }) => <WIcon file="chart-icon.webp"            size={size} alt="Chart"/>;
const IconMolecule = ({ size = 32 }) => <WIcon file="molecule-icon.webp"         size={size} alt="Molecule"/>;
const IconFlask    = ({ size = 32 }) => <WIcon file="laboratory-test-tubes-icon.webp" size={size} alt="Lab"/>;
const IconPin      = ({ size = 32 }) => <WIcon file="red-map-pin-icon.webp"      size={size} alt="Location"/>;
const IconLinkedIn = ({ size = 32 }) => <WIcon file="LinkedIn-logo-icon.webp"    size={size} alt="LinkedIn"/>;
const IconGitHub   = ({ size = 32 }) => <WIcon file="github-icon.webp"           size={size} alt="GitHub"/>;

/* === New icons === */
const IconAccessibility = ({ size = 32 }) => <WIcon file="accessibility-icon.webp" size={size} alt="Accessibility"/>;
const IconPower    = ({ size = 32 }) => <WIcon file="power-off-icon.webp"        size={size} alt="Shut Down"/>;
const IconTerminal = ({ size = 32 }) => <WIcon file="terminal-icon.webp"         size={size} alt="Terminal"/>;
const IconSearch   = ({ size = 32 }) => <WIcon file="search-icon.webp"           size={size} alt="Search"/>;
const IconCap      = ({ size = 32 }) => <WIcon file="cap-on-a-book.webp"         size={size} alt="Education"/>;
const IconNote     = ({ size = 32 }) => <WIcon file="note-icon.webp"             size={size} alt="Note"/>;
const IconPencilDoc= ({ size = 32 }) => <WIcon file="document-and-pencil-icon.webp" size={size} alt="Blog"/>;
const IconBulb     = ({ size = 32 }) => <WIcon file="bulb-icon.webp"             size={size} alt="Idea"/>;
const IconCalendar = ({ size = 32 }) => <WIcon file="calendar-icon.webp"         size={size} alt="Calendar"/>;
const IconLandscape= ({ size = 32 }) => <WIcon file="landscape-in-retro-frame-icon.webp" size={size} alt="Wallpaper"/>;
const IconStar     = ({ size = 32 }) => <WIcon file="yellow-star-icon.webp"      size={size} alt="Games / Favorites"/>;
const IconDiploma  = ({ size = 32 }) => <WIcon file="diploma-with-award-seal-icon.webp" size={size} alt="ORCID"/>;

/* === IconCode kept as inline SVG (no matching WebP) === */
const IconCode = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" shapeRendering="crispEdges">
    <rect x="1" y="2" width="14" height="12" fill="#0b1a3a" />
    <rect x="1" y="2" width="14" height="1" fill="#1a2b6a" />
    <rect x="0" y="2" width="1" height="12" fill="#000" />
    <rect x="15" y="2" width="1" height="12" fill="#000" />
    <rect x="1" y="14" width="14" height="1" fill="#000" />
    <rect x="3" y="5" width="2" height="1" fill="#4ea84e" />
    <rect x="3" y="7" width="3" height="1" fill="#4ea84e" />
    <rect x="3" y="9" width="2" height="1" fill="#4ea84e" />
    <rect x="6" y="5" width="3" height="1" fill="#e7c44a" />
    <rect x="7" y="7" width="3" height="1" fill="#e7c44a" />
  </svg>
);

/* === Skill tiles — WebP, with a couple of inline-SVG fallbacks === */
const SkillTile = ({ file, size = 40, bg }) => (
  <div style={{
    width: size, height: size,
    display: "grid", placeItems: "center",
    background: bg || "transparent",
  }}>
    <WIcon file={file} size={Math.round(size * 0.9)}/>
  </div>
);

const TilePython     = ({ size }) => <SkillTile file="python-icon.webp"             size={size}/>;
const TileJS         = ({ size }) => <SkillTile file="javascript-icon.webp"         size={size}/>;
const TileReact      = ({ size }) => <SkillTile file="react-icon.webp"              size={size}/>;
const TileMatlab     = ({ size }) => <SkillTile file="matlab-icon.webp"             size={size}/>;
const TileJava       = ({ size }) => <SkillTile file="java-icon.webp"               size={size}/>;
const TileHTML       = ({ size }) => <SkillTile file="shield-with-checkmark-icon.webp" size={size}/>;
const TileCSS        = ({ size }) => <SkillTile file="CSS3-shield-emblem-icon.webp"  size={size}/>;
const TileGit        = ({ size }) => <SkillTile file="git-icon.webp"                size={size}/>;
const TileDocker     = ({ size }) => <SkillTile file="docker-icon.webp"             size={size}/>;
const TileWordPress  = ({ size }) => <SkillTile file="wordpress-icon.webp"          size={size}/>;
const TileSQL        = ({ size }) => <SkillTile file="sql-icon.webp"                size={size}/>;
const TilePostgreSQL = ({ size }) => <SkillTile file="elephant-head-logo.webp"      size={size}/>;
const TileGromacs    = ({ size }) => <SkillTile file="dna-icon.webp"                size={size}/>;
const TileR          = ({ size }) => <SkillTile file="chart-icon.webp"              size={size}/>;
const TilePHP        = ({ size }) => <SkillTile file="globe-with-code-brackets.webp" size={size}/>;
const TileNWChem     = ({ size }) => <SkillTile file="molecule-icon.webp"           size={size}/>;
const TileVMD        = ({ size }) => <SkillTile file="microscope-icon.webp"         size={size}/>;
const TileAI         = ({ size }) => <SkillTile file="robot-head-with-brain-motif-icon.webp" size={size}/>;
const TileUnity      = ({ size }) => <SkillTile file="puzzle-icon.webp"             size={size}/>;

const SKILL_TILES = {
  Python: TilePython,
  MATLAB: TileMatlab,
  R: TileR,
  Java: TileJava,
  JavaScript: TileJS,
  PHP: TilePHP,
  React: TileReact,
  HTML5: TileHTML,
  CSS3: TileCSS,
  WordPress: TileWordPress,
  Git: TileGit,
  Docker: TileDocker,
  GROMACS: TileGromacs,
  NWChem: TileNWChem,
  VMD: TileVMD,
  "AI/ML": TileAI,
  Unity: TileUnity,
  SQL: TileSQL,
  PostgreSQL: TilePostgreSQL,
};

/* === Real pixel-art portrait === */
const PortraitPlaceholder = ({ width = 220, height = 220 }) => (
  <div style={{
    width, height,
    background: "var(--paper)",
    boxShadow: "var(--bevel-thin-in)",
    padding: 4,
    display: "grid",
    placeItems: "center",
  }}>
    <img
      src="portfolios-assets/ibrahim-yagiz-akbayrak-portre-pixel-art.avif"
      alt="Ibrahim Yağız Akbayrak — pixel-art portrait"
      draggable={false}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        imageRendering: "pixelated",
        userSelect: "none",
        display: "block",
      }}
    />
  </div>
);

Object.assign(window, {
  WIcon,
  IconComputer, IconFolder, IconResearch, IconGlobe, IconWrench,
  IconTrash, IconMail, IconDoc, IconFloppy, IconBriefcase,
  IconBook, IconCode, IconChart, IconMolecule, IconFlask,
  IconPin, IconLinkedIn, IconGitHub,
  IconAccessibility, IconPower, IconTerminal, IconSearch,
  IconCap, IconNote, IconPencilDoc, IconBulb, IconCalendar,
  IconLandscape, IconStar, IconDiploma,
  SKILL_TILES, PortraitPlaceholder,
});
