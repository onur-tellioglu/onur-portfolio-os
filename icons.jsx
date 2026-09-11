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


/* === Inline pixel-art tiles drawn for this portfolio (no matching WebP) === */
/* Every one is a 16x16 grid so it stays crisp next to the WebP icons. */

const IconChip = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" shapeRendering="crispEdges">
    {[3,6,9,12].map(y => <React.Fragment key={"p"+y}>
      <rect x="0" y={y} width="3" height="1" fill="#9a9a9a"/>
      <rect x="13" y={y} width="3" height="1" fill="#9a9a9a"/>
    </React.Fragment>)}
    {[3,6,9,12].map(x => <React.Fragment key={"q"+x}>
      <rect x={x} y="0" width="1" height="3" fill="#9a9a9a"/>
      <rect x={x} y="13" width="1" height="3" fill="#9a9a9a"/>
    </React.Fragment>)}
    <rect x="3" y="3" width="10" height="10" fill="#1d1d1d"/>
    <rect x="3" y="3" width="10" height="1" fill="#3d3d3d"/>
    <rect x="3" y="12" width="10" height="1" fill="#000"/>
    <rect x="5" y="5" width="6" height="6" fill="#2f6f3f"/>
    <rect x="6" y="6" width="4" height="1" fill="#5fbf6f"/>
    <rect x="6" y="8" width="3" height="1" fill="#5fbf6f"/>
    <rect x="4" y="4" width="1" height="1" fill="#c8a13a"/>
  </svg>
);

const IconRobot = ({ size = 32 }) => <WIcon file="robot-head-with-brain-motif-icon.webp" size={size} alt="AI"/>;

const TileTypeScript = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" shapeRendering="crispEdges">
    <rect x="1" y="1" width="14" height="14" fill="#3178c6"/>
    <rect x="1" y="1" width="14" height="1" fill="#5a9ae0"/>
    <rect x="1" y="14" width="14" height="1" fill="#1f4e8c"/>
    {/* T */}
    <rect x="2" y="5" width="6" height="2" fill="#fff"/>
    <rect x="4" y="7" width="2" height="5" fill="#fff"/>
    {/* S */}
    <rect x="9" y="5" width="5" height="2" fill="#fff"/>
    <rect x="9" y="7" width="2" height="1" fill="#fff"/>
    <rect x="9" y="8" width="5" height="2" fill="#fff"/>
    <rect x="12" y="10" width="2" height="1" fill="#fff"/>
    <rect x="9" y="11" width="5" height="1" fill="#fff"/>
  </svg>
);

const TileGo = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" shapeRendering="crispEdges">
    <rect x="3" y="1" width="2" height="3" fill="#00add8"/>
    <rect x="11" y="1" width="2" height="3" fill="#00add8"/>
    <rect x="3" y="3" width="10" height="10" fill="#00add8"/>
    <rect x="2" y="5" width="1" height="6" fill="#00add8"/>
    <rect x="13" y="5" width="1" height="6" fill="#00add8"/>
    <rect x="3" y="3" width="10" height="1" fill="#5fd7f0"/>
    <rect x="4" y="5" width="3" height="3" fill="#fff"/>
    <rect x="9" y="5" width="3" height="3" fill="#fff"/>
    <rect x="5" y="6" width="2" height="2" fill="#111"/>
    <rect x="10" y="6" width="2" height="2" fill="#111"/>
    <rect x="6" y="9" width="4" height="2" fill="#f6d2a2"/>
    <rect x="7" y="10" width="2" height="1" fill="#b07b4f"/>
    <rect x="3" y="12" width="10" height="1" fill="#0089ab"/>
  </svg>
);

const TileSwift = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" shapeRendering="crispEdges">
    <rect x="1" y="1" width="14" height="14" fill="#f05138"/>
    <rect x="1" y="1" width="14" height="1" fill="#ff7a5c"/>
    <rect x="1" y="14" width="14" height="1" fill="#b83318"/>
    <rect x="9" y="3" width="3" height="2" fill="#fff"/>
    <rect x="7" y="5" width="4" height="2" fill="#fff"/>
    <rect x="5" y="7" width="4" height="2" fill="#fff"/>
    <rect x="3" y="9" width="5" height="2" fill="#fff"/>
    <rect x="4" y="11" width="7" height="2" fill="#fff"/>
    <rect x="10" y="10" width="2" height="2" fill="#fff"/>
  </svg>
);

const TileCpp = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" shapeRendering="crispEdges">
    <rect x="1" y="1" width="14" height="14" fill="#00599c"/>
    <rect x="1" y="1" width="14" height="1" fill="#3a86c8"/>
    <rect x="1" y="14" width="14" height="1" fill="#00365f"/>
    {/* C */}
    <rect x="3" y="5" width="4" height="1" fill="#fff"/>
    <rect x="2" y="6" width="1" height="4" fill="#fff"/>
    <rect x="3" y="10" width="4" height="1" fill="#fff"/>
    {/* ++ */}
    <rect x="8" y="7" width="3" height="1" fill="#fff"/>
    <rect x="9" y="6" width="1" height="3" fill="#fff"/>
    <rect x="11" y="7" width="3" height="1" fill="#fff"/>
    <rect x="12" y="6" width="1" height="3" fill="#fff"/>
  </svg>
);

const TileNext = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" shapeRendering="crispEdges">
    <rect x="5" y="1" width="6" height="1" fill="#000"/>
    <rect x="3" y="2" width="10" height="1" fill="#000"/>
    <rect x="2" y="3" width="12" height="2" fill="#000"/>
    <rect x="1" y="5" width="14" height="6" fill="#000"/>
    <rect x="2" y="11" width="12" height="2" fill="#000"/>
    <rect x="3" y="13" width="10" height="1" fill="#000"/>
    <rect x="5" y="14" width="6" height="1" fill="#000"/>
    <rect x="5" y="5" width="2" height="7" fill="#fff"/>
    <rect x="7" y="7" width="1" height="2" fill="#fff"/>
    <rect x="8" y="8" width="1" height="2" fill="#fff"/>
    <rect x="9" y="9" width="2" height="3" fill="#fff"/>
    <rect x="9" y="5" width="2" height="3" fill="#fff"/>
  </svg>
);

const TileNode = ({ size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" shapeRendering="crispEdges">
    <rect x="6" y="1" width="4" height="1" fill="#539e43"/>
    <rect x="4" y="2" width="8" height="2" fill="#539e43"/>
    <rect x="3" y="4" width="10" height="8" fill="#539e43"/>
    <rect x="4" y="12" width="8" height="2" fill="#539e43"/>
    <rect x="6" y="14" width="4" height="1" fill="#539e43"/>
    <rect x="3" y="4" width="10" height="1" fill="#7fc46d"/>
    <rect x="5" y="5" width="2" height="6" fill="#fff"/>
    <rect x="9" y="5" width="2" height="6" fill="#fff"/>
    <rect x="7" y="7" width="1" height="2" fill="#fff"/>
    <rect x="8" y="8" width="1" height="2" fill="#fff"/>
  </svg>
);

const TileBash = ({ size = 40 }) => <SkillTile file="terminal-icon.webp" size={size}/>;
const TileGoLang = TileGo;

const SKILL_TILES = {
  Python: TilePython,
  TypeScript: TileTypeScript,
  Go: TileGo,
  Swift: TileSwift,
  "C++": TileCpp,
  Bash: TileBash,
  React: TileReact,
  "Next.js": TileNext,
  "Node.js": TileNode,
  PostgreSQL: TilePostgreSQL,
  Docker: TileDocker,
  Git: TileGit,
  SQL: TileSQL,
  "AI/LLM": TileAI,
  JavaScript: TileJS,
  Java: TileJava,
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
      src="portfolios-assets/onur-portrait-placeholder.svg"
      alt="Onur Tellioglu, portrait placeholder"
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
  IconLandscape, IconStar, IconDiploma, IconChip, IconRobot,
  SKILL_TILES, PortraitPlaceholder,
});
