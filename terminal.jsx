/* =====================================================================
   Terminal — cute retro terminal with original commands.
   Supports: help, ls, cd, pwd, cat, color, theme, clear, echo, date,
             whoami, neofetch, banner, history, sudo (joke), exit.
   ===================================================================== */

const TERMINAL_THEMES = {
  green:  { bg: "#0a1810", fg: "#7fff7f", accent: "#4ea84e", caret: "#7fff7f" },
  amber:  { bg: "#1a1305", fg: "#ffc26a", accent: "#e7c44a", caret: "#ffc26a" },
  blue:   { bg: "#06122a", fg: "#9ec8ff", accent: "#6fb2ff", caret: "#9ec8ff" },
  paper:  { bg: "#f5efde", fg: "#1a1a1a", accent: "#082575", caret: "#1a1a1a" },
  mono:   { bg: "#000000", fg: "#e6e6e6", accent: "#c0c0c0", caret: "#e6e6e6" },
  pink:   { bg: "#1a0a14", fg: "#ffaee0", accent: "#ff6fb0", caret: "#ffaee0" },
};

const TERMINAL_FS = {
  "~": {
    type: "dir",
    children: ["about.txt", "skills.txt", "fun.txt", "projects", "secrets"],
  },
  "~/projects": {
    type: "dir",
    children: ["portfolio_os.md", "md_pipeline.py", "retro_ui_kit.css"],
  },
  "~/secrets": {
    type: "dir",
    children: ["coffee_order.txt"],
  },
  "~/about.txt": {
    type: "file",
    content:
`Hi, I'm Ibrahim Yağız Akbayrak.
B.Sc. Computer Science @ FAU Erlangen-Nürnberg.
Computational biophysics · 5 peer-reviewed publications.
Co-founding HumanAI Dynamics — disorder-aware multi-agent AI.
TR / EN / DE · Nürnberg, Germany.`,
  },
  "~/skills.txt": {
    type: "file",
    content:
`Languages : Python, MATLAB, R, Java, JavaScript, PHP
Web       : HTML5, CSS3, WordPress (Elementor, WP Rocket, RankMath)
Research  : GROMACS, NWChem, VMD, GAMES
Tools     : Git, MS Office, Unity 2D
Methods   : MD, REMD, K-means clustering, AI ensembles`,
  },
  "~/fun.txt": {
    type: "file",
    content:
`> Type 'theme amber' to feel like an old PDP terminal.
> Type 'neofetch' to print system info.
> Type 'banner <text>' to ASCII-fy something.`,
  },
  "~/projects/portfolio_os.md": {
    type: "file",
    content:
`# portfoliOS
A Windows-95-themed personal site. You are inside it now.`,
  },
  "~/projects/md_pipeline.py": {
    type: "file",
    content:
`# Trajectory analysis pipeline
import mdanalysis as mda  # placeholder
def analyze(traj):
    return "RMSD, RMSF, contact maps"`,
  },
  "~/projects/retro_ui_kit.css": {
    type: "file",
    content:
`.win { box-shadow: var(--bevel-out); }
.btn { box-shadow: var(--bevel-thin-out); }`,
  },
  "~/secrets/coffee_order.txt": {
    type: "file",
    content: "Flat white. One sugar. No nonsense.",
  },
};

const resolvePath = (cwd, p) => {
  if (!p || p === "~") return "~";
  if (p.startsWith("~/")) return p.replace(/\/+$/, "");
  if (p === "..") {
    if (cwd === "~") return "~";
    const parts = cwd.split("/");
    parts.pop();
    return parts.join("/") || "~";
  }
  if (p === ".") return cwd;
  // relative
  const base = cwd === "~" ? "~" : cwd;
  return (base + "/" + p).replace(/\/+$/, "");
};

const banner5 = (text) => {
  // Tiny 5-row ascii block font for A-Z, 0-9, space.
  const FONT = {
    A: ["  █  ", " █ █ ", "█████", "█   █", "█   █"],
    B: ["████ ", "█   █", "████ ", "█   █", "████ "],
    C: [" ████", "█    ", "█    ", "█    ", " ████"],
    D: ["████ ", "█   █", "█   █", "█   █", "████ "],
    E: ["█████", "█    ", "███  ", "█    ", "█████"],
    F: ["█████", "█    ", "███  ", "█    ", "█    "],
    G: [" ████", "█    ", "█  ██", "█   █", " ████"],
    H: ["█   █", "█   █", "█████", "█   █", "█   █"],
    I: ["█████", "  █  ", "  █  ", "  █  ", "█████"],
    J: ["█████", "    █", "    █", "█   █", " ███ "],
    K: ["█   █", "█  █ ", "███  ", "█  █ ", "█   █"],
    L: ["█    ", "█    ", "█    ", "█    ", "█████"],
    M: ["█   █", "██ ██", "█ █ █", "█   █", "█   █"],
    N: ["█   █", "██  █", "█ █ █", "█  ██", "█   █"],
    O: [" ███ ", "█   █", "█   █", "█   █", " ███ "],
    P: ["████ ", "█   █", "████ ", "█    ", "█    "],
    Q: [" ███ ", "█   █", "█ █ █", "█  █ ", " ██ █"],
    R: ["████ ", "█   █", "████ ", "█  █ ", "█   █"],
    S: [" ████", "█    ", " ███ ", "    █", "████ "],
    T: ["█████", "  █  ", "  █  ", "  █  ", "  █  "],
    U: ["█   █", "█   █", "█   █", "█   █", " ███ "],
    V: ["█   █", "█   █", "█   █", " █ █ ", "  █  "],
    W: ["█   █", "█   █", "█ █ █", "██ ██", "█   █"],
    X: ["█   █", " █ █ ", "  █  ", " █ █ ", "█   █"],
    Y: ["█   █", " █ █ ", "  █  ", "  █  ", "  █  "],
    Z: ["█████", "   █ ", "  █  ", " █   ", "█████"],
    "0":[" ███ ","█  ██","█ █ █","██  █"," ███ "],
    "1":["  █  "," ██  ","  █  ","  █  "," ███ "],
    "2":[" ███ ","█   █","   █ ","  █  ","█████"],
    "3":[" ███ ","█   █","  ██ ","█   █"," ███ "],
    "4":["█   █","█   █","█████","    █","    █"],
    "5":["█████","█    ","████ ","    █","████ "],
    "6":[" ███ ","█    ","████ ","█   █"," ███ "],
    "7":["█████","    █","   █ ","  █  ","  █  "],
    "8":[" ███ ","█   █"," ███ ","█   █"," ███ "],
    "9":[" ███ ","█   █"," ████","    █"," ███ "],
    " ":["     ","     ","     ","     ","     "],
    "!":["  █  ","  █  ","  █  ","     ","  █  "],
    "?":[" ███ ","█   █","   █ ","     ","  █  "],
    ".":["     ","     ","     ","     ","  █  "],
  };
  const t = text.toUpperCase();
  const rows = ["", "", "", "", ""];
  for (const ch of t) {
    const glyph = FONT[ch] || FONT["?"];
    for (let i = 0; i < 5; i++) rows[i] += glyph[i] + " ";
  }
  return rows.join("\n");
};

const Terminal = ({ onClose }) => {
  const [theme, setTheme] = React.useState("green");
  const [lines, setLines] = React.useState([]);
  const [input, setInput] = React.useState("");
  const [cwd, setCwd] = React.useState("~");
  const [history, setHistory] = React.useState([]);
  const [histIdx, setHistIdx] = React.useState(-1);
  const [closing, setClosing] = React.useState(false);
  const scrollRef = React.useRef(null);
  const inputRef = React.useRef(null);

  const T = TERMINAL_THEMES[theme] || TERMINAL_THEMES.green;

  const print = (text, opts = {}) => {
    setLines(L => [...L, { text, color: opts.color, bold: opts.bold }]);
  };
  const printLines = (txt, color) => {
    txt.split("\n").forEach(l => print(l, color ? { color } : {}));
  };

  React.useEffect(() => {
    // boot banner
    setLines([
      { text: "yagiz-os v1.0.0  ©  type 'help' for commands.", bold: true },
      { text: "" },
    ]);
  }, []);

  React.useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  });

  const runCommand = (raw) => {
    const cmd = raw.trim();
    if (cmd) setHistory(h => [...h, cmd]);
    setHistIdx(-1);

    print(`${prompt()}${cmd}`, { color: T.accent });

    if (!cmd) return;
    const [c, ...args] = cmd.split(/\s+/);
    const arg = args.join(" ");

    switch (c.toLowerCase()) {
      case "help":
        printLines(
`Available commands:
  help              show this list
  ls [path]         list directory contents
  cd <dir>          change directory ('cd ..' to go up)
  pwd               print working directory
  cat <file>        display a file
  echo <text>       print text
  date              current date and time
  whoami            print user
  history           show command history
  clear / cls       clear the screen
  theme <name>      themes: green, amber, blue, paper, mono, pink
  color <name>      alias for 'theme'
  banner <text>     ASCII-art a short phrase
  neofetch          show system info
  sudo <cmd>        ...not today
  exit              close the terminal`
        );
        break;
      case "ls": {
        const path = arg ? resolvePath(cwd, arg) : cwd;
        const node = TERMINAL_FS[path];
        if (!node) { print(`ls: cannot access '${arg||path}': No such file or directory`, { color: "#ff7a7a" }); break; }
        if (node.type === "file") { print(path.split("/").pop()); break; }
        node.children.forEach(name => {
          const childPath = path === "~" ? `~/${name}` : `${path}/${name}`;
          const child = TERMINAL_FS[childPath];
          const isDir = child && child.type === "dir";
          print((isDir ? name + "/" : name), { color: isDir ? T.accent : T.fg, bold: isDir });
        });
        break;
      }
      case "cd": {
        if (!arg) { setCwd("~"); break; }
        const path = resolvePath(cwd, arg);
        const node = TERMINAL_FS[path];
        if (!node) { print(`cd: no such directory: ${arg}`, { color: "#ff7a7a" }); break; }
        if (node.type !== "dir") { print(`cd: not a directory: ${arg}`, { color: "#ff7a7a" }); break; }
        setCwd(path);
        break;
      }
      case "pwd":
        print(cwd);
        break;
      case "cat": {
        if (!arg) { print("cat: missing operand", { color: "#ff7a7a" }); break; }
        const path = resolvePath(cwd, arg);
        const node = TERMINAL_FS[path];
        if (!node) { print(`cat: ${arg}: No such file`, { color: "#ff7a7a" }); break; }
        if (node.type !== "file") { print(`cat: ${arg}: Is a directory`, { color: "#ff7a7a" }); break; }
        printLines(node.content);
        break;
      }
      case "echo":
        print(arg);
        break;
      case "date":
        print(new Date().toString());
        break;
      case "whoami":
        print("guest@yagiz-os");
        break;
      case "history":
        history.forEach((h, i) => print(`  ${String(i+1).padStart(3)}  ${h}`));
        break;
      case "clear":
      case "cls":
        setLines([]);
        break;
      case "theme":
      case "color": {
        const t = arg.trim().toLowerCase();
        if (!t) { print(`themes: ${Object.keys(TERMINAL_THEMES).join(", ")}`); break; }
        if (!TERMINAL_THEMES[t]) { print(`unknown theme: ${t}`, { color: "#ff7a7a" }); break; }
        setTheme(t);
        print(`theme set: ${t}`, { color: TERMINAL_THEMES[t].accent });
        break;
      }
      case "banner": {
        if (!arg) { print("usage: banner <text>"); break; }
        const max = arg.slice(0, 14);
        printLines(banner5(max), T.accent);
        break;
      }
      case "neofetch":
        printLines(
`            ░░░░░       guest@yagiz-os
       ░░░░██░░░░       ----------------
    ░░██████░░░░░░      OS:      portfoliOS 1.0
   ██████░░░░░░░░░░     Host:    a draggable browser window
  ████░░██████░░░░░░    Kernel:  React 18 · vanilla CSS
  ██░░██░░░░██████░░    Shell:   shell.js (custom)
   ██████░░░░░░░░██     Theme:   ${theme}
    ░░░░██████████      Uptime:  ${Math.floor(performance.now()/1000)} s
       ░░░░████         CPU:     curiosity @ 4.2 GHz
            ░░          Memory:  caffeine / regret`, T.accent);
        break;
      case "sudo":
        print("Nice try.", { color: "#ff7a7a" });
        print("...you are not in the sudoers file. This incident will be remembered.", { color: T.accent });
        break;
      case "exit":
      case "quit": {
        if (!onClose) { print("(use the × button to close the window)"); break; }
        setClosing(true);
        print("Closing terminal session...", { color: T.accent });
        let n = 3;
        const tick = () => {
          if (n <= 0) { onClose(); return; }
          print(`  ${n}...`, { bold: true });
          n -= 1;
          setTimeout(tick, 700);
        };
        tick();
        break;
      }
      case "yagiz":
      case "ibrahim":
        print("hi! 👋  (try 'cat about.txt')", { color: T.accent });
        break;
      default:
        print(`command not found: ${c}`, { color: "#ff7a7a" });
        print(`(try 'help')`);
    }
  };

  const prompt = () => `guest@yagiz-os:${cwd}$ `;

  const onKey = (e) => {
    if (closing) { e.preventDefault(); return; }
    if (e.key === "Enter") {
      runCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!history.length) return;
      const ni = histIdx < 0 ? history.length - 1 : Math.max(0, histIdx - 1);
      setHistIdx(ni);
      setInput(history[ni]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIdx < 0) return;
      const ni = histIdx + 1;
      if (ni >= history.length) { setHistIdx(-1); setInput(""); }
      else { setHistIdx(ni); setInput(history[ni]); }
    } else if (e.key === "Tab") {
      e.preventDefault();
      // tiny tab-complete: match filenames in cwd
      const parts = input.split(/\s+/);
      const last = parts[parts.length - 1] || "";
      const dir = TERMINAL_FS[cwd];
      if (dir && dir.children) {
        const m = dir.children.find(n => n.startsWith(last));
        if (m) {
          parts[parts.length - 1] = m;
          setInput(parts.join(" "));
        }
      }
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
    }
  };

  return (
    <div
      onClick={() => inputRef.current?.focus()}
      style={{
        background: T.bg, color: T.fg,
        fontFamily: '"Courier New", Consolas, monospace',
        fontSize: 13, lineHeight: 1.4,
        flex: 1, minHeight: 0,
        display: "flex", flexDirection: "column",
        padding: 8,
        boxShadow: "inset 0 0 60px rgba(0,0,0,0.5)",
        cursor: "text",
      }}
    >
      <div
        ref={scrollRef}
        className="retro-scroll"
        role="log"
        aria-live="polite"
        aria-label="Terminal output"
        style={{
          flex: 1, minHeight: 0, overflow: "auto",
          padding: 4,
        }}>
        {lines.map((l, i) => (
          <div key={i} style={{
            whiteSpace: "pre",
            color: l.color || T.fg,
            fontWeight: l.bold ? 700 : 400,
            opacity: l.text === "" ? 0.6 : 1,
          }}>{l.text || "\u00A0"}</div>
        ))}
      </div>
      <div style={{
        display: "flex", alignItems: "center", padding: "2px 4px",
        gap: 0,
        whiteSpace: "pre",
      }}>
        <span style={{ color: T.accent }}>{prompt()}</span>
        <input
          ref={inputRef}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={onKey}
          autoFocus
          disabled={closing}
          aria-label="Terminal input"
          spellCheck={false}
          autoComplete="off"
          style={{
            width: `${Math.max(1, input.length)}ch`,
            background: "transparent",
            border: "none",
            color: T.fg,
            font: "inherit",
            outline: "none",
            caretColor: "transparent",
            padding: 0,
          }}
        />
        <span style={{
          display: "inline-block",
          width: "0.6ch", height: "1.1em",
          marginLeft: 0,
          background: T.caret,
          verticalAlign: "middle",
          animation: closing ? "none" : "blinkCaret 1s steps(2,end) infinite",
          opacity: 0.85,
        }} aria-hidden="true"/>
        <span style={{ flex: 1 }}/>
      </div>
      <style>{`@keyframes blinkCaret { 50% { opacity: 0; } }`}</style>
    </div>
  );
};

const TerminalWindow = ({ z, onFocus, onClose, onMin }) => (
  <DraggableWindow
    initial={{
      x: Math.max(60, window.innerWidth/2 - 280 + Math.random()*30),
      y: 90 + Math.random()*20,
      w: 560, h: 380,
    }}
    title={<><IconTerminal size={14}/> Terminal — yagiz@shell</>}
    z={z}
    onFocus={onFocus}
    onMin={onMin}
    onClose={onClose}
  >
    <Terminal onClose={onClose}/>
  </DraggableWindow>
);

/* Terminal icon — comes from icons.jsx (WebP) via window scope */

Object.assign(window, { Terminal, TerminalWindow });
