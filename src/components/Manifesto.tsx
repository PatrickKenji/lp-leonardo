import React from "react";
import { wapp } from "../lib/whatsapp";
import { I } from "../lib/icons";
import WaveAccent from "./WaveAccent";

// Para quem e — dois grupos: treina / tem dor
const Manifesto = () => {
  const ref = React.useRef<HTMLElement | null>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const check = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.85) setInView(true);
    };
    window.addEventListener("scroll", check, { passive: true });
    check();
    return () => window.removeEventListener("scroll", check);
  }, []);

  const MIcon = ({ name }) => {
    const s = { width:26, height:26, viewBox:"0 0 24 24", fill:"none", stroke:"currentColor", strokeWidth:"1.5", strokeLinecap:"round", strokeLinejoin:"round", "aria-hidden":"true" };
    const icons = {
      dumbbell: <svg {...s}>
        <rect x="3.5" y="9.5" width="2" height="5" rx="0.75"/>
        <rect x="5.5" y="11" width="1.5" height="2" rx="0.5"/>
        <line x1="7" y1="12" x2="17" y2="12"/>
        <rect x="17" y="11" width="1.5" height="2" rx="0.5"/>
        <rect x="18.5" y="9.5" width="2" height="5" rx="0.75"/>
      </svg>,
      run: <svg {...s}>
        <circle cx="14" cy="4.5" r="1.5"/>
        <path d="M8 21l2.5-6.5L13 17l2.5-6.5L18 13"/>
        <path d="M6 13.5l3.5-3 4 1 3-2.5"/>
      </svg>,
      sport: <svg {...s}>
        <circle cx="12" cy="12" r="9"/>
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4"/>
        <path d="M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8"/>
      </svg>,
      spine: <svg {...s}>
        <rect x="9" y="2" width="6" height="3.5" rx="1"/>
        <rect x="8.5" y="7" width="7" height="3.5" rx="1"/>
        <rect x="9" y="12" width="6" height="3.5" rx="1"/>
        <rect x="8.5" y="17" width="7" height="3.5" rx="1"/>
        <line x1="12" y1="5.5" x2="12" y2="7"/>
        <line x1="12" y1="10.5" x2="12" y2="12"/>
        <line x1="12" y1="15.5" x2="12" y2="17"/>
      </svg>,
      cross: <svg {...s}>
        <rect x="3" y="3" width="18" height="18" rx="3"/>
        <line x1="12" y1="8" x2="12" y2="16"/>
        <line x1="8" y1="12" x2="16" y2="12"/>
      </svg>,
      wave: <svg {...s}>
        <path d="M2 12c2-4 4-4 6 0s4 4 6 0 4-4 6 0"/>
        <path d="M2 17c2-3 4-3 6 0s4 3 6 0 4-3 6 0"/>
      </svg>,
    };
    return icons[name] || null;
  };

  const treina = [
    { icon:"dumbbell", label:"Musculação & Academia",
      desc:"Joelho, ombro, lombar — a maioria vem de sobrecarga ou técnica. Volta a levantar sem parar mais do que o necessário.",
      tags:["Joelho","Ombro","Lombar","Cotovelo"] },
    { icon:"run", label:"Corrida & Endurance",
      desc:"Joelho de corredor, fascite, Aquileu, dores depois do longão. Volta a correr sem medo de cada quilômetro.",
      tags:["Joelho","Tornozelo","Quadril","Pé"] },
    { icon:"sport", label:"Futebol & Esportes",
      desc:"Entorse, coxa, LCA, pós-cirúrgico. Do campo à academia — retorno com critério.",
      tags:["Tornozelo","Coxa","Joelho","Quadril"] },
  ];

  const dor = [
    { icon:"spine", label:"Lombar & Coluna",
      desc:"Dor que trava de manhã, ciática que desce pela perna, hérnia que limita o dia. Tratamento que vai além do alívio temporário.",
      tags:["Lombar","Ciática","Hérnia","Cervical"] },
    { icon:"cross", label:"Pós-cirúrgico",
      desc:"Joelho, ombro ou quadril operado. A reabilitação começa cedo e segue critérios — sem pressa, sem recaída.",
      tags:["LCA","Ombro","Quadril","Joelho"] },
    { icon:"wave", label:"Tendinites & Overuse",
      desc:"Cotovelo de tenista, fascite plantar, manguito rotador, cervical. Dores que aparecem com repetição e não somem sozinhas.",
      tags:["Cotovelo","Fascite","Manguito","Cervical"] },
  ];

  const dores = [
    "Dor no joelho","Lombar travada","Ombro lesionado","Tendinite","LCA / Menisco",
    "Ciática","Cervicalgia","Entorse de tornozelo","Cotovelo de tenista",
    "Fascite plantar","Quadril bloqueado","Pós-cirúrgico","Hérnia de disco","Manguito rotador",
  ];

  const Card = ({ p, i, offset }) => (
    <div style={{
      padding:"28px 24px", borderRadius:20,
      background:"var(--bg)", border:"1px solid var(--line)",
      display:"flex", flexDirection:"column",
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(28px)",
      transition:`opacity .55s ${(i+offset)*0.1}s var(--ease-out), transform .55s ${(i+offset)*0.1}s var(--ease-out)`,
    }}>
      <div style={{
        width:44, height:44, borderRadius:12, marginBottom:16,
        background:"var(--accent-tint)", color:"var(--accent)",
        display:"flex", alignItems:"center", justifyContent:"center",
        flexShrink:0,
      }}>
        <MIcon name={p.icon}/>
      </div>
      <div style={{ fontSize:16, fontWeight:700, letterSpacing:"-0.02em", marginBottom:10, lineHeight:1.25 }}>{p.label}</div>
      <div style={{ fontSize:13.5, color:"var(--ink-3)", lineHeight:1.6, flexGrow:1, marginBottom:18 }}>{p.desc}</div>
      <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
        {p.tags.map((t,j) => (
          <span key={j} style={{
            fontSize:11, fontFamily:"var(--mono)", letterSpacing:"0.05em",
            background:"var(--accent-tint)", color:"var(--accent)",
            borderRadius:999, padding:"3px 9px", border:"1px solid var(--accent-border)",
          }}>{t}</span>
        ))}
      </div>
    </div>
  );

  const GroupLabel = ({ text }) => (
    <div style={{
      display:"flex", alignItems:"center", gap:16, marginBottom:20,
      fontSize:11, fontFamily:"var(--mono)", letterSpacing:"0.14em",
      textTransform:"uppercase", color:"var(--ink-4)",
    }}>
      <span>{text}</span>
      <div style={{ flex:1, height:1, background:"var(--line)" }}/>
    </div>
  );

  return (
    <section ref={ref} style={{ position:"relative", overflow:"hidden",
      padding:"160px 0 200px", borderTop:"1px solid var(--line)", background:"var(--bg-2)" }}>
      <div className="container">

        <div style={{ marginBottom:72 }}>
          <div className="eyebrow reveal" style={{ marginBottom:16 }}>(01) Para quem é</div>
          <h2 className="display reveal reveal-1" style={{ fontSize:"clamp(40px, 5.5vw, 80px)", maxWidth:860, margin:0, lineHeight:1.0 }}>
            Treina sério.{" "}
            <span className="serif" style={{ fontStyle:"italic", fontWeight:400, color:"var(--accent)" }}>Ou só tem dor.</span><br/>
            É aqui que resolve.
          </h2>
          <p className="reveal reveal-2" style={{ marginTop:24, fontSize:18, color:"var(--ink-2)", maxWidth:600, lineHeight:1.65, margin:"24px 0 0" }}>
            Atletas de academia, corrida e futebol — e qualquer pessoa com dor que não passa.
            Na clínica, o ponto de partida é sempre o mesmo: entender o motivo antes de tratar.
          </p>
        </div>

        <div style={{ marginBottom:48 }}>
          <GroupLabel text="Se você treina"/>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14 }} className="perfis-grid">
            {treina.map((p,i) => <Card key={i} p={p} i={i} offset={0}/>)}
          </div>
        </div>

        <div style={{ marginBottom:56 }}>
          <GroupLabel text="Se você tem dor"/>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14 }} className="perfis-grid">
            {dor.map((p,i) => <Card key={i} p={p} i={i} offset={3}/>)}
          </div>
        </div>

        <div style={{ borderTop:"1px solid var(--line)", paddingTop:44 }}>
          <div style={{ fontSize:11, fontFamily:"var(--mono)", letterSpacing:"0.14em", textTransform:"uppercase", color:"var(--ink-4)", marginBottom:18 }}>Condições & queixas tratadas</div>
          <div style={{ display:"flex", flexWrap:"wrap", gap:9 }}>
            {dores.map((d,i) => (
              <span key={i} style={{
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateY(6px)",
                transition:`opacity .4s ${0.3+i*0.04}s ease, transform .4s ${0.3+i*0.04}s ease`,
                fontSize:14, padding:"9px 18px", borderRadius:999,
                background:"var(--bg)", border:"1px solid var(--line-2)", color:"var(--ink-2)",
              }}>{d}</span>
            ))}
          </div>
        </div>

        <div style={{ marginTop:56 }}>
          <a href={wapp("Olá! Quero saber mais sobre o atendimento para o meu caso.")} target="_blank" rel="noopener" className="btn btn-primary btn-lg">
            <I.whats/> Falar sobre o meu caso
          </a>
        </div>

      </div>
      <style>{`
        @media(max-width:900px){ .perfis-grid{ grid-template-columns:repeat(2,1fr) !important } }
        @media(max-width:480px){ .perfis-grid{ grid-template-columns:1fr !important } }
      `}</style>
      <WaveAccent pos="bottom" h={110}/>
    </section>
  );
};

export default Manifesto;
