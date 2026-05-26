import React from "react";
import WaveAccent from "./WaveAccent";

// Depoimentos — grid limpo
const DEPS = [
  { name: "Rafael M.",   role: "Corredor · 33 anos",        stars: 5, text: "Cheguei com dor no joelho que ia me tirar da Maratona de Maringá. Em 6 sessões já estava treinando longão. Atendimento sério, sem firula." },
  { name: "Camila S.",   role: "Crossfit · 28 anos",        stars: 5, text: "Pós-cirurgia de ombro, eu tinha medo de levantar carga. O Leonardo construiu o retorno comigo, semana a semana. Hoje agacho mais que antes." },
  { name: "Diego P.",    role: "Futebol amador · 31 anos",  stars: 5, text: "Já passei por outros fisios pelo plano. Ter o profissional só pra você é absurdo. Voltei a jogar sem mancar no dia seguinte." },
  { name: "Juliana R.",  role: "Musculação · 27 anos",      stars: 5, text: "Lombar travada de tanto puxar peso errado. Em 4 sessões entendi o que estava fazendo errado. Não foi só tratar, foi aprender." },
  { name: "Marcelo T.",  role: "Corredor · 38 anos",        stars: 5, text: "Avaliação muito completa, identificou um déficit no tornozelo que ninguém viu. Mudou minha pisada e a dor sumiu." },
];

const GBadge = () => (
  <svg width="16" height="16" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const Stars = ({ n = 5 }) => (
  <span style={{ display:"inline-flex", gap:3, color:"#f5a623" }}>
    {[...Array(n)].map((_,i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </span>
);

const Depoimentos = () => {
  const ref = React.useRef<HTMLElement | null>(null);
  const [vis, setVis] = React.useState({});

  React.useEffect(() => {
    const cards = ref.current?.querySelectorAll(".dep-card");
    if (!cards) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) setVis(v => ({ ...v, [e.target.dataset.i]: true }));
      });
    }, { threshold: 0.08 });
    cards.forEach(c => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="depoimentos" ref={ref} style={{ padding:"260px 0 160px", borderTop:"1px solid var(--line)", position:"relative", overflow:"hidden" }}>
      <div className="container">

        {/* Header */}
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:64, flexWrap:"wrap", gap:20 }}>
          <div>
            <div className="eyebrow reveal" style={{ marginBottom:14 }}>(04) Quem já passou</div>
            <div style={{ display:"flex", alignItems:"center", gap:14 }}>
              <span className="display reveal reveal-1" style={{ fontSize:"clamp(48px,7vw,96px)", lineHeight:1, letterSpacing:"-.04em", fontWeight:700 }}>4.9</span>
              <div className="reveal reveal-1">
                <Stars n={5}/>
                <div style={{ fontSize:14, color:"var(--ink-3)", marginTop:5, whiteSpace:"nowrap" }}>87 avaliações no Google</div>
              </div>
            </div>
          </div>
          <a href="https://g.page/r/fisioleonardobiroqui/review" target="_blank" rel="noopener"
            className="btn btn-ghost reveal reveal-2"
            style={{ gap:8, fontSize:13 }}>
            <GBadge/> Ver no Google
          </a>
        </div>

        {/* Grid */}
        <div className="dep-grid">
          {DEPS.map((d, i) => (
            <div key={i} data-i={i} className={`dep-card${i===0?" dep-featured":""}`}
              style={{
                opacity:    vis[i] ? 1 : 0,
                transform:  vis[i] ? "none" : "translateY(20px)",
                transition: `opacity .5s ${i*70}ms ease, transform .5s ${i*70}ms ease`,
              }}>
              {/* Top row */}
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:16 }}>
                <Stars n={d.stars}/>
                <GBadge/>
              </div>
              {/* Quote */}
              <p className="dep-text">{d.text}</p>
              {/* Footer */}
              <div className="dep-footer">
                <div className="dep-name">{d.name}</div>
                <div className="dep-role">{d.role}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
      <style>{`
        .dep-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          align-items: start;
        }
        .dep-card {
          background: var(--bg);
          border: 1px solid var(--line);
          border-radius: 20px;
          padding: 28px;
          display: flex;
          flex-direction: column;
        }
        .dep-featured {
          grid-column: span 2;
          background: #0d1117;
          border-color: #0d1117;
        }
        .dep-text {
          margin: 0 0 24px;
          line-height: 1.65;
          flex-grow: 1;
          color: var(--ink-1);
        }
        .dep-featured .dep-text {
          font-size: 17px;
          color: rgba(255,255,255,0.88);
          font-family: var(--serif);
          font-style: italic;
          line-height: 1.6;
        }
        .dep-footer {
          padding-top: 18px;
          border-top: 1px solid var(--line);
        }
        .dep-featured .dep-footer {
          border-top-color: rgba(255,255,255,0.1);
        }
        .dep-name {
          font-size: 14px;
          font-weight: 600;
          color: var(--ink);
          letter-spacing: -.01em;
        }
        .dep-featured .dep-name { color: #fff; }
        .dep-role {
          font-size: 12px;
          margin-top: 3px;
          color: var(--ink-4);
        }
        .dep-featured .dep-role { color: rgba(255,255,255,0.4); }
        @media(max-width: 860px) {
          .dep-grid { grid-template-columns: 1fr 1fr; }
          .dep-featured { grid-column: span 2; }
        }
        @media(max-width: 520px) {
          .dep-grid { grid-template-columns: 1fr; }
          .dep-featured { grid-column: span 1; }
        }
      `}</style>
      <WaveAccent pos="top" h={100}/>
    </section>
  );
};

export default Depoimentos;
