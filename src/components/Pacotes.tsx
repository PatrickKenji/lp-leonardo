import React from "react";
import { wapp } from "../lib/whatsapp";

// A Clínica — galeria fotográfica
const Pacotes = () => {
  const ref = React.useRef<HTMLElement | null>(null);
  const [vis, setVis] = React.useState({});

  React.useEffect(() => {
    const cards = ref.current?.querySelectorAll(".gc");
    if (!cards) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) setVis(v => ({ ...v, [e.target.dataset.i]: true }));
      });
    }, { threshold: 0.08 });
    cards.forEach(c => obs.observe(c));
    return () => obs.disconnect();
  }, []);

  const anim = (i) => ({
    opacity:    vis[i] ? 1 : 0,
    transform:  vis[i] ? "none" : "translateY(28px)",
    transition: `opacity .7s ${i * 90}ms ease, transform .7s ${i * 90}ms ease`,
  });

  return (
    <section ref={ref} style={{ padding:"160px 0", borderTop:"1px solid var(--line)", background:"var(--bg-2)" }}>
      <div className="container">

        <div className="gc" data-i="0" style={{ ...anim(0), display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:48, flexWrap:"wrap", gap:16 }}>
          <div>
            <div className="eyebrow" style={{ marginBottom:16 }}>(04) A Clínica</div>
            <h2 className="display" style={{ fontSize:"clamp(34px,5vw,72px)", lineHeight:1, letterSpacing:"-.04em", margin:0 }}>
              Um espaço feito<br/>
              <span className="serif" style={{ fontWeight:400, fontStyle:"italic", color:"var(--accent)" }}>para tratar de verdade.</span>
            </h2>
          </div>
          <a href={wapp("Olá! Gostaria de conhecer a clínica antes de agendar.")} target="_blank" rel="noopener" className="btn btn-ghost">
            Falar com a equipe
          </a>
        </div>

        <div className="photo-bento">

          {/* Fachada — grande, portrait, esquerda */}
          <div className="gc pb-fachada" data-i="1" style={anim(1)}>
            <div className="photo-wrap">
              <img src={window.__resources.clinica_fachada} alt="Fachada da clínica" className="photo-img"/>
              <div className="photo-caption">
                <span className="mono photo-tag">Fachada</span>
                <span className="photo-label">Vila Morangueira · Maringá</span>
              </div>
            </div>
          </div>

          {/* Coluna direita: sala + equipamentos */}
          <div className="pb-right">
            <div className="gc" data-i="2" style={{ ...anim(2), flex:1 }}>
              <div className="photo-wrap">
                <img src={window.__resources.clinica_sala} alt="Sala de atendimento individual" className="photo-img"/>
                <div className="photo-caption">
                  <span className="mono photo-tag">Sala individual</span>
                  <span className="photo-label">Você não divide a sessão com ninguém</span>
                </div>
              </div>
            </div>
            <div className="gc" data-i="3" style={{ ...anim(3), flex:1 }}>
              <div className="photo-wrap">
                <img src={window.__resources.clinica_equipment} alt="Equipamentos de fisioterapia" className="photo-img"/>
                <div className="photo-caption">
                  <span className="mono photo-tag">Equipamentos</span>
                  <span className="photo-label">O que precisar, tem aqui.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Barra de diferenciais */}
          <div className="gc pb-bar" data-i="4" style={anim(4)}>
            {[
              { n:"50 min", d:"Sessão dedicada só pra você" },
              { n:"1:1",    d:"Sem revezamento de pacientes" },
              { n:"Seg–Sex",d:"10h às 22h" },
            ].map(({ n, d }) => (
              <div key={n} className="pb-stat">
                <div className="pb-stat-n">{n}</div>
                <div className="pb-stat-d">{d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .photo-bento { display:grid; grid-template-columns:1.1fr 1fr; grid-template-rows:auto auto; gap:12px; }
        @media(max-width:640px){
          .photo-bento{ grid-template-columns:1fr !important; grid-template-rows:auto !important }
          .pb-fachada{ grid-column:1 !important; grid-row:1 !important; aspect-ratio:4/3 !important }
          .pb-right{ grid-column:1 !important; grid-row:2 !important; flex-direction:row !important }
          .pb-right > *{ flex:1 }
          .pb-bar{ grid-column:1 !important; grid-row:3 !important; flex-direction:column !important }
          .pb-stat{ border-right:none !important; border-bottom:1px solid rgba(255,255,255,0.08) }
          .pb-stat:last-child{ border-bottom:none }
        }
        .pb-fachada  { grid-column:1; grid-row:1; }
        .pb-right    { grid-column:2; grid-row:1; display:flex; flex-direction:column; gap:12px; }
        .pb-bar      { grid-column:1/-1; grid-row:2; display:flex; align-items:stretch; background:var(--ink); border-radius:20px; overflow:hidden; }
        .pb-stat     { flex:1; padding:28px 32px; border-right:1px solid rgba(255,255,255,0.08); display:flex; flex-direction:column; justify-content:center; gap:6px; }
        .pb-stat:last-child { border-right:none; }
        .pb-stat-n   { font-size:clamp(22px,2.5vw,34px); font-weight:700; color:#fff; letter-spacing:-.03em; }
        .pb-stat-d   { font-size:13px; color:rgba(255,255,255,0.5); line-height:1.4; }
        .photo-wrap  { position:relative; width:100%; height:100%; border-radius:20px; overflow:hidden; background:var(--bg-3); }
        .pb-fachada .photo-wrap { aspect-ratio:3/4; }
        .pb-right .photo-wrap   { aspect-ratio:4/3; }
        .photo-img   { width:100%; height:100%; object-fit:cover; object-position:center; display:block; transition:transform .6s ease; }
        .photo-wrap:hover .photo-img { transform:scale(1.04); }
        .photo-caption { position:absolute; bottom:0; left:0; right:0; padding:48px 20px 20px; background:linear-gradient(transparent,rgba(0,0,0,0.65)); display:flex; align-items:flex-end; justify-content:space-between; gap:8px; }
        .photo-tag   { font-size:9px; letter-spacing:0.16em; text-transform:uppercase; color:rgba(255,255,255,0.7); background:rgba(255,255,255,0.14); padding:4px 10px; border-radius:999px; backdrop-filter:blur(6px); }
        .photo-label { font-size:12px; color:rgba(255,255,255,0.7); text-align:right; line-height:1.4; }
        @media(max-width:860px){
          .photo-bento { grid-template-columns:1fr; }
          .pb-fachada,.pb-right,.pb-bar { grid-column:1; grid-row:auto; }
          .pb-bar { flex-direction:column; }
          .pb-stat { border-right:none; border-bottom:1px solid rgba(255,255,255,0.08); }
        }
      `}</style>
    </section>
  );
};

export default Pacotes;
