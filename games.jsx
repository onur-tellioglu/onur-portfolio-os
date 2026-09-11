/* =====================================================================
   Games — original retro mini-games (no copyrighted IP).
   - Snake (classic top-down)
   - Pong (single-player vs CPU)
   - Memory (card match)
   - Lights Out (toggle puzzle)
   ===================================================================== */

/* ---------------- Games Explorer ---------------- */
const GAMES_LIST = [
  { id: "snake",  name: "snake.exe",      title: "Snake",      desc: "Eat dots, don't bite your tail.",       icon: "snake" },
  { id: "pong",   name: "pong.exe",       title: "Pong",       desc: "Volley a pixel past the CPU paddle.",   icon: "pong" },
  { id: "memory", name: "memory.exe",     title: "Memory",     desc: "Flip cards. Match pairs. Beat the clock.", icon: "memory" },
  { id: "lights", name: "lights_out.exe", title: "Lights Out", desc: "Toggle every cell until the board is dark.", icon: "lights" },
  { id: "mines",  name: "mines.exe",      title: "Mine Hunt",  desc: "Flag the mines, clear the field.", icon: "mines" },
];

const GAME_ICON_FILES = {
  snake:  "snake-icon.webp",
  pong:   "pong-icon.webp",
  memory: "memory-card-game-icon.webp",
  lights: "lights-out-icon.webp",
  mines:  "minesweeper-icon.webp",
};

const GameTileIcon = ({ kind, size = 36 }) => {
  const file = GAME_ICON_FILES[kind];
  if (!file) return <div style={{ width: size, height: size }}/>;
  return <WIcon file={file} size={size} alt={kind}/>;
};

const GamesExplorer = ({ z, onFocus, onClose, onMin, onOpenGame }) => {
  const [sel, setSel] = React.useState(null);
  return (
    <DraggableWindow
      initial={{ x: 240, y: 90, w: 540, h: 380 }}
      title={<><IconFolder size={14}/> Games — C:\games\</>}
      z={z}
      onFocus={onFocus}
      onMin={onMin}
      onClose={onClose}
    >
      <div className="win-menubar" role="menubar">
        <div role="menuitem"><u>F</u>ile</div>
        <div role="menuitem"><u>V</u>iew</div>
        <div role="menuitem"><u>H</u>elp</div>
      </div>
      <div style={{
        display: "flex", alignItems: "center", gap: 4,
        padding: "4px 6px", background: "var(--gray)",
        borderBottom: "1px solid var(--shadow-m)", fontSize: 12, flexShrink: 0,
      }}>
        <span style={{ color: "var(--text-dim)" }}>Address:</span>
        <code style={{
          flex: 1, background: "#fff", padding: "2px 6px",
          boxShadow: "var(--bevel-thin-in)",
          fontFamily: '"Courier New", monospace', fontSize: 11,
        }}>C:\games\</code>
        <span style={{ color: "var(--text-dim)" }}>{GAMES_LIST.length} item(s)</span>
      </div>
      <div className="retro-scroll" style={{
        flex: 1, minHeight: 0, overflow: "auto",
        background: "var(--paper)", boxShadow: "var(--bevel-thin-in)",
        margin: 4, padding: 14,
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))",
          gap: 14,
        }}>
          {GAMES_LIST.map(g => (
            <button key={g.id}
              onClick={() => setSel(g.id)}
              onDoubleClick={() => onOpenGame(g.id)}
              aria-label={`${g.title} — double-click to open`}
              style={{
                textAlign: "center", padding: 8, cursor: "default",
                userSelect: "none", background: "transparent",
                border: "1px solid transparent",
              }}>
              <div style={{
                display: "grid", placeItems: "center", margin: "0 auto 6px",
                width: 50, height: 50,
                background: sel === g.id ? "rgba(8,37,117,0.18)" : "transparent",
              }}>
                <GameTileIcon kind={g.icon} size={44}/>
              </div>
              <div style={{
                display: "inline-block",
                fontFamily: '"Courier New", monospace',
                fontSize: 11, lineHeight: 1.2,
                padding: "1px 4px",
                background: sel === g.id ? "var(--navy)" : "transparent",
                color: sel === g.id ? "#fff" : "#000",
                outline: sel === g.id ? "1px dotted #fff" : "none",
              }}>{g.name}</div>
              <div style={{ fontSize: 10, color: sel === g.id ? "#000" : "var(--text-dim)", marginTop: 3, lineHeight: 1.3 }}>
                {g.title}
              </div>
            </button>
          ))}
        </div>
        <div style={{
          marginTop: 16, padding: 8,
          background: "var(--paper-warm)",
          border: "1px solid var(--shadow-m)",
          fontSize: 11.5,
          fontFamily: '"Courier New", monospace',
          color: "var(--text-dim)",
        }}>
          {sel
            ? <><b style={{ color: "#000" }}>{GAMES_LIST.find(g => g.id === sel).title}</b> &mdash; {GAMES_LIST.find(g => g.id === sel).desc}</>
            : <>// click a game to see info, double-click to play</>}
        </div>
      </div>
      <div style={{
        padding: "3px 8px", fontSize: 11, background: "var(--gray)",
        borderTop: "1px solid var(--shadow-m)",
        display: "flex", justifyContent: "space-between", color: "var(--text-dim)",
        flexShrink: 0,
      }}>
        <span>{GAMES_LIST.length} object(s)</span>
        <span>double-click to play</span>
      </div>
    </DraggableWindow>
  );
};

/* ---------------- Snake ---------------- */
const SnakeGame = () => {
  const COLS = 20, ROWS = 16, CELL = 16;
  const canvasRef = React.useRef(null);
  const [score, setScore] = React.useState(0);
  const [best, setBest] = React.useState(() => +(localStorage.getItem("snake_best") || 0));
  const [over, setOver] = React.useState(false);
  const [paused, setPaused] = React.useState(false);
  const stateRef = React.useRef(null);

  const reset = React.useCallback(() => {
    stateRef.current = {
      snake: [{ x: 9, y: 8 }, { x: 8, y: 8 }, { x: 7, y: 8 }],
      dir: { x: 1, y: 0 },
      next: { x: 1, y: 0 },
      food: { x: 14, y: 8 },
      tick: 0,
    };
    setScore(0);
    setOver(false);
    setPaused(false);
  }, []);

  React.useEffect(() => { reset(); }, [reset]);

  React.useEffect(() => {
    const onKey = (e) => {
      const s = stateRef.current;
      if (!s) return;
      const k = e.key.toLowerCase();
      if (k === "arrowup" || k === "w")    { if (s.dir.y === 0) s.next = { x: 0, y: -1 }; e.preventDefault(); }
      if (k === "arrowdown" || k === "s")  { if (s.dir.y === 0) s.next = { x: 0, y: 1 };  e.preventDefault(); }
      if (k === "arrowleft" || k === "a")  { if (s.dir.x === 0) s.next = { x: -1, y: 0 }; e.preventDefault(); }
      if (k === "arrowright" || k === "d") { if (s.dir.x === 0) s.next = { x: 1, y: 0 };  e.preventDefault(); }
      if (k === " ") { setPaused(p => !p); e.preventDefault(); }
      if (k === "r") reset();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [reset]);

  React.useEffect(() => {
    let raf;
    const draw = () => {
      const s = stateRef.current;
      const c = canvasRef.current;
      if (!c || !s) { raf = requestAnimationFrame(draw); return; }
      const ctx = c.getContext("2d");

      if (!over && !paused) {
        s.tick++;
        if (s.tick % 6 === 0) {
          s.dir = s.next;
          const head = { x: s.snake[0].x + s.dir.x, y: s.snake[0].y + s.dir.y };
          if (head.x < 0 || head.x >= COLS || head.y < 0 || head.y >= ROWS ||
              s.snake.some(p => p.x === head.x && p.y === head.y)) {
            setOver(true);
            setBest(b => {
              const nb = Math.max(b, score);
              localStorage.setItem("snake_best", nb);
              return nb;
            });
          } else {
            s.snake.unshift(head);
            if (head.x === s.food.x && head.y === s.food.y) {
              setScore(sc => sc + 1);
              let nf;
              do {
                nf = { x: Math.floor(Math.random() * COLS), y: Math.floor(Math.random() * ROWS) };
              } while (s.snake.some(p => p.x === nf.x && p.y === nf.y));
              s.food = nf;
            } else {
              s.snake.pop();
            }
          }
        }
      }

      // draw
      ctx.fillStyle = "#0a2a0a";
      ctx.fillRect(0, 0, c.width, c.height);
      // grid dots
      ctx.fillStyle = "#103a10";
      for (let y = 0; y < ROWS; y++) for (let x = 0; x < COLS; x++) {
        ctx.fillRect(x * CELL + CELL/2 - 1, y * CELL + CELL/2 - 1, 2, 2);
      }
      // food
      ctx.fillStyle = "#d94545";
      ctx.fillRect(s.food.x * CELL + 2, s.food.y * CELL + 2, CELL - 4, CELL - 4);
      ctx.fillStyle = "#ff8a8a";
      ctx.fillRect(s.food.x * CELL + 4, s.food.y * CELL + 4, 3, 3);
      // snake
      s.snake.forEach((p, i) => {
        ctx.fillStyle = i === 0 ? "#82c882" : "#4ea84e";
        ctx.fillRect(p.x * CELL + 1, p.y * CELL + 1, CELL - 2, CELL - 2);
        if (i === 0) {
          ctx.fillStyle = "#000";
          ctx.fillRect(p.x * CELL + 5, p.y * CELL + 5, 2, 2);
          ctx.fillRect(p.x * CELL + 9, p.y * CELL + 5, 2, 2);
        }
      });

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(raf);
  }, [over, paused, score]);

  return (
    <GameShell title="Snake" score={`Score: ${score}`} best={`Best: ${best}`} onReset={reset}>
      <canvas
        ref={canvasRef}
        width={COLS * CELL}
        height={ROWS * CELL}
        tabIndex={0}
        aria-label="Snake game canvas. Use arrow keys to move. Space to pause."
        style={{
          background: "#0a2a0a", display: "block",
          boxShadow: "var(--bevel-thin-in)",
          imageRendering: "pixelated",
          outline: "none",
        }}
      />
      <div style={{
        fontFamily: '"Courier New", monospace', fontSize: 11,
        color: "var(--text-dim)", marginTop: 6, textAlign: "center",
      }}>
        ←↑↓→ / WASD to move &nbsp;·&nbsp; SPACE to pause &nbsp;·&nbsp; R to reset
        {over && <div style={{ color: "#b8443c", fontWeight: 700, marginTop: 4 }}>GAME OVER — press R</div>}
        {paused && !over && <div style={{ color: "var(--navy)", fontWeight: 700, marginTop: 4 }}>PAUSED</div>}
      </div>
    </GameShell>
  );
};

/* ---------------- Pong ---------------- */
const PongGame = () => {
  const W = 360, H = 240;
  const canvasRef = React.useRef(null);
  const [scores, setScores] = React.useState({ p: 0, c: 0 });
  const stateRef = React.useRef(null);
  const keys = React.useRef({});

  const reset = React.useCallback(() => {
    stateRef.current = {
      ball: { x: W/2, y: H/2, vx: 2.4, vy: 1.6 },
      player: H/2 - 25,
      cpu: H/2 - 25,
    };
    setScores({ p: 0, c: 0 });
  }, []);
  React.useEffect(() => { reset(); }, [reset]);

  React.useEffect(() => {
    const d = (e) => { keys.current[e.key.toLowerCase()] = true; };
    const u = (e) => { keys.current[e.key.toLowerCase()] = false; };
    window.addEventListener("keydown", d);
    window.addEventListener("keyup", u);
    return () => { window.removeEventListener("keydown", d); window.removeEventListener("keyup", u); };
  }, []);

  React.useEffect(() => {
    let raf;
    const PADDLE_H = 50, PADDLE_W = 6;
    const tick = () => {
      const s = stateRef.current;
      const c = canvasRef.current;
      if (!c || !s) { raf = requestAnimationFrame(tick); return; }
      const ctx = c.getContext("2d");

      // input
      if (keys.current["arrowup"] || keys.current["w"]) s.player = Math.max(0, s.player - 4);
      if (keys.current["arrowdown"] || keys.current["s"]) s.player = Math.min(H - PADDLE_H, s.player + 4);
      // cpu follows ball slowly
      const target = s.ball.y - PADDLE_H/2;
      s.cpu += Math.sign(target - s.cpu) * Math.min(2.4, Math.abs(target - s.cpu));
      s.cpu = Math.max(0, Math.min(H - PADDLE_H, s.cpu));

      // ball
      s.ball.x += s.ball.vx;
      s.ball.y += s.ball.vy;
      if (s.ball.y < 4 || s.ball.y > H - 4) s.ball.vy *= -1;
      // paddle collide
      if (s.ball.x < 16 && s.ball.y > s.player && s.ball.y < s.player + PADDLE_H) {
        s.ball.vx = Math.abs(s.ball.vx) + 0.15;
        s.ball.vy += (s.ball.y - (s.player + PADDLE_H/2)) * 0.05;
      }
      if (s.ball.x > W - 16 && s.ball.y > s.cpu && s.ball.y < s.cpu + PADDLE_H) {
        s.ball.vx = -Math.abs(s.ball.vx) - 0.15;
        s.ball.vy += (s.ball.y - (s.cpu + PADDLE_H/2)) * 0.05;
      }
      if (s.ball.x < 0) { setScores(sc => ({ ...sc, c: sc.c + 1 })); s.ball = { x: W/2, y: H/2, vx: 2.4, vy: 1.6 }; }
      if (s.ball.x > W) { setScores(sc => ({ ...sc, p: sc.p + 1 })); s.ball = { x: W/2, y: H/2, vx: -2.4, vy: 1.6 }; }

      // draw
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, W, H);
      // dashed center
      ctx.fillStyle = "#555";
      for (let y = 0; y < H; y += 12) ctx.fillRect(W/2 - 1, y, 2, 6);
      ctx.fillStyle = "#fff";
      ctx.fillRect(10, s.player, PADDLE_W, PADDLE_H);
      ctx.fillRect(W - 10 - PADDLE_W, s.cpu, PADDLE_W, PADDLE_H);
      ctx.fillRect(s.ball.x - 3, s.ball.y - 3, 6, 6);

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <GameShell title="Pong" score={`You ${scores.p}`} best={`CPU ${scores.c}`} onReset={reset}>
      <canvas
        ref={canvasRef}
        width={W}
        height={H}
        tabIndex={0}
        aria-label="Pong game canvas. Use arrow keys or W/S to move paddle."
        style={{ display: "block", boxShadow: "var(--bevel-thin-in)", outline: "none" }}
      />
      <div style={{ fontFamily: '"Courier New", monospace', fontSize: 11, color: "var(--text-dim)", marginTop: 6, textAlign: "center" }}>
        ↑↓ / W,S to move &nbsp;·&nbsp; first to 11 wins
      </div>
    </GameShell>
  );
};

/* ---------------- Memory ---------------- */
const MEMORY_SYMBOLS = ["♠","♥","♦","♣","★","☀","☂","♪"];
const shuffle = (a) => { const r = a.slice(); for (let i = r.length - 1; i > 0; i--) { const j = Math.floor(Math.random()*(i+1)); [r[i],r[j]]=[r[j],r[i]]; } return r; };

const MemoryGame = () => {
  const [cards, setCards] = React.useState([]);
  const [flipped, setFlipped] = React.useState([]);
  const [matched, setMatched] = React.useState([]);
  const [moves, setMoves] = React.useState(0);
  const [time, setTime] = React.useState(0);
  const [running, setRunning] = React.useState(false);

  const reset = () => {
    const deck = shuffle([...MEMORY_SYMBOLS, ...MEMORY_SYMBOLS]).map((s, i) => ({ id: i, s }));
    setCards(deck);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setTime(0);
    setRunning(true);
  };
  React.useEffect(() => { reset(); }, []);

  React.useEffect(() => {
    if (!running) return;
    const t = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(t);
  }, [running]);

  React.useEffect(() => {
    if (matched.length && matched.length === cards.length) setRunning(false);
  }, [matched, cards]);

  const flip = (id) => {
    if (flipped.includes(id) || matched.includes(id) || flipped.length === 2) return;
    const nf = [...flipped, id];
    setFlipped(nf);
    if (nf.length === 2) {
      setMoves(m => m + 1);
      const [a, b] = nf.map(i => cards.find(c => c.id === i));
      if (a.s === b.s) {
        setMatched(m => [...m, a.id, b.id]);
        setTimeout(() => setFlipped([]), 350);
      } else {
        setTimeout(() => setFlipped([]), 700);
      }
    }
  };

  const won = matched.length === cards.length && cards.length > 0;

  return (
    <GameShell title="Memory" score={`Moves: ${moves}`} best={`Time: ${time}s`} onReset={reset}>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(4, 60px)",
        gap: 6, justifyContent: "center",
      }}>
        {cards.map((c) => {
          const isUp = flipped.includes(c.id) || matched.includes(c.id);
          return (
            <button key={c.id}
              onClick={() => flip(c.id)}
              aria-label={isUp ? `Card ${c.s}` : "Face-down card"}
              style={{
                width: 60, height: 70,
                background: isUp ? "var(--paper)" : "var(--navy)",
                boxShadow: isUp ? "var(--bevel-thin-in)" : "var(--bevel-thin-out)",
                border: "1px solid #000",
                fontSize: 28, lineHeight: 1,
                color: matched.includes(c.id) ? "#b8443c" : "#000",
                cursor: "pointer",
                fontFamily: "Tahoma, sans-serif",
                display: "grid", placeItems: "center",
              }}>
              {isUp ? c.s : (
                <span style={{
                  display: "inline-block", width: 30, height: 40,
                  background: "repeating-linear-gradient(45deg, #1f4ea3 0 4px, #082575 4px 8px)",
                  border: "1px solid #fff", borderRadius: 2,
                }}/>
              )}
            </button>
          );
        })}
      </div>
      <div style={{ fontFamily: '"Courier New", monospace', fontSize: 11, color: "var(--text-dim)", marginTop: 8, textAlign: "center" }}>
        {won
          ? <span style={{ color: "var(--navy)", fontWeight: 700 }}>You cleared the board in {moves} moves &amp; {time}s!</span>
          : <>flip two cards to find a match</>}
      </div>
    </GameShell>
  );
};

/* ---------------- Lights Out ---------------- */
const LightsOutGame = () => {
  const N = 5;
  const [grid, setGrid] = React.useState(null);
  const [moves, setMoves] = React.useState(0);

  const reset = () => {
    // start from solved, then apply N random toggles for guaranteed-solvable
    const g = Array.from({ length: N }, () => Array(N).fill(false));
    const toggle = (g, r, c) => {
      [[0,0],[1,0],[-1,0],[0,1],[0,-1]].forEach(([dr,dc]) => {
        const nr = r+dr, nc = c+dc;
        if (nr>=0&&nr<N&&nc>=0&&nc<N) g[nr][nc] = !g[nr][nc];
      });
    };
    for (let i=0;i<12;i++) toggle(g, Math.floor(Math.random()*N), Math.floor(Math.random()*N));
    setGrid(g);
    setMoves(0);
  };
  React.useEffect(() => { reset(); }, []);

  const click = (r, c) => {
    const g = grid.map(row => row.slice());
    [[0,0],[1,0],[-1,0],[0,1],[0,-1]].forEach(([dr,dc]) => {
      const nr = r+dr, nc = c+dc;
      if (nr>=0&&nr<N&&nc>=0&&nc<N) g[nr][nc] = !g[nr][nc];
    });
    setGrid(g);
    setMoves(m => m + 1);
  };

  const won = grid && grid.every(row => row.every(v => !v));

  return (
    <GameShell title="Lights Out" score={`Moves: ${moves}`} best={won ? "SOLVED" : `${grid ? grid.flat().filter(v=>v).length : 0} on`} onReset={reset}>
      <div style={{
        display: "grid", gridTemplateColumns: `repeat(${N}, 50px)`,
        gap: 4, justifyContent: "center", padding: 6,
        background: "#111", boxShadow: "var(--bevel-thin-in)",
      }}>
        {grid && grid.map((row, r) => row.map((on, c) => (
          <button key={`${r}-${c}`}
            onClick={() => click(r, c)}
            aria-label={`Cell ${r+1}-${c+1} ${on ? "lit" : "dark"}`}
            aria-pressed={on}
            style={{
              width: 50, height: 50,
              background: on ? "#f4cf6a" : "#2a2a2a",
              boxShadow: on
                ? "inset 0 0 12px #fff8c8, 0 0 0 1px #000"
                : "inset 1px 1px 0 #444, inset -1px -1px 0 #000, 0 0 0 1px #000",
              cursor: "pointer",
              border: "none",
            }}/>
        )))}
      </div>
      <div style={{ fontFamily: '"Courier New", monospace', fontSize: 11, color: "var(--text-dim)", marginTop: 8, textAlign: "center" }}>
        {won
          ? <span style={{ color: "var(--navy)", fontWeight: 700 }}>Board is dark — solved in {moves} moves!</span>
          : <>toggle a cell and its 4 neighbors — clear every light</>}
      </div>
    </GameShell>
  );
};

/* ---------------- Mine Hunt (original Minesweeper-style) ---------------- */
const MinesGame = () => {
  const ROWS = 9, COLS = 9, MINES = 10;
  const [board, setBoard] = React.useState(null);
  const [reveal, setReveal] = React.useState(null);
  const [flags, setFlags] = React.useState(null);
  const [over, setOver] = React.useState(null); // null | "win" | "lose"
  const [time, setTime] = React.useState(0);
  const [started, setStarted] = React.useState(false);

  const build = (safeR, safeC) => {
    // place mines, avoiding safeR,safeC and immediate neighbors
    const b = Array.from({ length: ROWS }, () => Array(COLS).fill(0));
    let placed = 0;
    while (placed < MINES) {
      const r = Math.floor(Math.random() * ROWS);
      const c = Math.floor(Math.random() * COLS);
      if (b[r][c] === -1) continue;
      if (Math.abs(r - safeR) <= 1 && Math.abs(c - safeC) <= 1) continue;
      b[r][c] = -1;
      placed++;
    }
    // counts
    for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) {
      if (b[r][c] === -1) continue;
      let n = 0;
      for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) {
        const nr = r+dr, nc = c+dc;
        if (nr>=0&&nr<ROWS&&nc>=0&&nc<COLS&&b[nr][nc]===-1) n++;
      }
      b[r][c] = n;
    }
    return b;
  };

  const reset = () => {
    setBoard(null);
    setReveal(Array.from({ length: ROWS }, () => Array(COLS).fill(false)));
    setFlags(Array.from({ length: ROWS }, () => Array(COLS).fill(false)));
    setOver(null);
    setTime(0);
    setStarted(false);
  };
  React.useEffect(() => { reset(); }, []);

  React.useEffect(() => {
    if (!started || over) return;
    const t = setInterval(() => setTime(t => t + 1), 1000);
    return () => clearInterval(t);
  }, [started, over]);

  const flood = (b, rv, r, c) => {
    if (r<0||r>=ROWS||c<0||c>=COLS||rv[r][c]) return;
    rv[r][c] = true;
    if (b[r][c] === 0) {
      for (let dr=-1;dr<=1;dr++) for (let dc=-1;dc<=1;dc++)
        if (dr||dc) flood(b, rv, r+dr, c+dc);
    }
  };

  const click = (r, c) => {
    if (over) return;
    if (flags[r][c]) return;
    let b = board;
    if (!b) {
      b = build(r, c);
      setBoard(b);
      setStarted(true);
    }
    if (reveal[r][c]) return;
    if (b[r][c] === -1) {
      // reveal all mines
      const rv = reveal.map(row => row.slice());
      for (let rr = 0; rr < ROWS; rr++) for (let cc = 0; cc < COLS; cc++) if (b[rr][cc] === -1) rv[rr][cc] = true;
      rv[r][c] = "boom";
      setReveal(rv);
      setOver("lose");
      return;
    }
    const rv = reveal.map(row => row.slice());
    flood(b, rv, r, c);
    setReveal(rv);
    // check win
    let safe = 0;
    for (let rr = 0; rr < ROWS; rr++) for (let cc = 0; cc < COLS; cc++)
      if (b[rr][cc] !== -1 && rv[rr][cc]) safe++;
    if (safe === ROWS * COLS - MINES) setOver("win");
  };

  const flag = (r, c, e) => {
    e.preventDefault();
    if (over || reveal[r][c]) return;
    const fl = flags.map(row => row.slice());
    fl[r][c] = !fl[r][c];
    setFlags(fl);
  };

  const flagCount = flags ? flags.flat().filter(Boolean).length : 0;
  const numColor = ["#000","#1f64c6","#1e5a1e","#b8443c","#082575","#7a2222","#0a7a7a","#000","#808080"];

  return (
    <GameShell
      title="Mine Hunt"
      score={`Mines: ${MINES - flagCount}`}
      best={`Time: ${time}s`}
      onReset={reset}
    >
      <div style={{
        padding: 6, background: "var(--gray)",
        boxShadow: "var(--bevel-in)",
        display: "inline-block",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: `repeat(${COLS}, 26px)`,
          gap: 0,
        }}>
          {Array.from({ length: ROWS }).map((_, r) =>
            Array.from({ length: COLS }).map((__, c) => {
              const rv = reveal && reveal[r][c];
              const fl = flags && flags[r][c];
              const v = board ? board[r][c] : 0;
              const isMine = v === -1;
              const isBoom = rv === "boom";
              return (
                <button key={`${r}-${c}`}
                  onClick={() => click(r, c)}
                  onContextMenu={(e) => flag(r, c, e)}
                  aria-label={`Cell row ${r+1} column ${c+1}${rv ? " revealed" : fl ? " flagged" : ""}`}
                  style={{
                    width: 26, height: 26,
                    background: isBoom
                      ? "#d94545"
                      : rv ? "#bdbdbd" : "#c0c0c0",
                    boxShadow: rv
                      ? "inset 1px 1px 0 #808080"
                      : "var(--bevel-thin-out)",
                    border: "1px solid #808080",
                    padding: 0,
                    cursor: "pointer",
                    fontFamily: "Tahoma, sans-serif",
                    fontWeight: 700,
                    fontSize: 13,
                    color: numColor[v] || "#000",
                    lineHeight: 1,
                    display: "grid", placeItems: "center",
                  }}>
                  {rv
                    ? (isMine
                        ? <span style={{ fontSize: 14 }}>✦</span>
                        : (v > 0 ? v : ""))
                    : (fl ? <span style={{ color: "#b8443c", fontSize: 13 }}>⚑</span> : "")}
                </button>
              );
            })
          )}
        </div>
      </div>
      <div style={{
        fontFamily: '"Courier New", monospace', fontSize: 11,
        color: "var(--text-dim)", marginTop: 8, textAlign: "center",
      }}>
        left-click to reveal &nbsp;·&nbsp; right-click to flag
        {over === "lose" && <div style={{ color: "#b8443c", fontWeight: 700, marginTop: 4 }}>BOOM — press ↻ New</div>}
        {over === "win"  && <div style={{ color: "var(--navy)", fontWeight: 700, marginTop: 4 }}>Field cleared in {time}s!</div>}
      </div>
    </GameShell>
  );
};

/* ---------------- Game shell (toolbar + reset) ---------------- */
const GameShell = ({ title, score, best, onReset, children }) => (
  <div style={{
    background: "var(--gray)",
    padding: 10,
    flex: 1, minHeight: 0,
    display: "flex", flexDirection: "column",
    gap: 8,
  }}>
    <div style={{
      display: "flex", alignItems: "center",
      padding: "4px 8px",
      background: "var(--paper)",
      boxShadow: "var(--bevel-thin-in)",
      fontFamily: '"Courier New", monospace', fontSize: 12,
    }}>
      <span style={{ fontWeight: 700 }}>{title}</span>
      <span style={{ marginLeft: 12, color: "var(--text-dim)" }}>{score}</span>
      <span style={{ marginLeft: 12, color: "var(--text-dim)" }}>{best}</span>
      <button className="btn" style={{ marginLeft: "auto", padding: "2px 10px" }} onClick={onReset} aria-label="Reset game">↻ New</button>
    </div>
    <div style={{ display: "grid", placeItems: "center", flex: 1, minHeight: 0, overflow: "auto" }} className="retro-scroll">
      <div>{children}</div>
    </div>
  </div>
);

/* ---------------- Game host window ---------------- */
const GameWindow = ({ gameId, z, onFocus, onClose, onMin }) => {
  const meta = GAMES_LIST.find(g => g.id === gameId);
  if (!meta) return null;
  const Body =
    gameId === "snake"  ? <SnakeGame/> :
    gameId === "pong"   ? <PongGame/> :
    gameId === "memory" ? <MemoryGame/> :
    gameId === "lights" ? <LightsOutGame/> :
    gameId === "mines"  ? <MinesGame/> : null;
  return (
    <DraggableWindow
      initial={{
        x: Math.max(20, window.innerWidth/2 - 220 + Math.random()*40),
        y: 70 + Math.random()*30,
        w: 440, h: 460,
      }}
      title={<><GameTileIcon kind={meta.icon} size={14}/> {meta.name}</>}
      z={z}
      onFocus={onFocus}
      onMin={onMin}
      onClose={onClose}
    >
      <div className="win-menubar" role="menubar">
        <div role="menuitem"><u>G</u>ame</div>
        <div role="menuitem"><u>H</u>elp</div>
      </div>
      {Body}
    </DraggableWindow>
  );
};

Object.assign(window, {
  GamesExplorer, GameWindow, GAMES_LIST, GameTileIcon,
});
