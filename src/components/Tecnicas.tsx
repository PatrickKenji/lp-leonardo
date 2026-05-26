const TECNICAS = [
  {
    label: "Terapia manual",
    desc: "Movimento das mãos direto na articulação. Mobilizações e manipulações para destravar o que está preso e reduzir o que dói.",
    icon: "hands",
  },
  {
    label: "Liberação miofascial",
    desc: "Trabalho manual profundo no músculo e no tecido ao redor. Quando você sente aquele nó que não sai — é aqui.",
    icon: "body",
  },
  {
    label: "Exercício terapêutico",
    desc: "Exercícios de força e estabilidade montados para o seu caso. Não para uma lesão genérica de joelho qualquer. Para o seu.",
    icon: "dumbbell",
  },
  {
    label: "Eletroterapia",
    desc: "TENS, ultrassom, correntes analgésicas. Usados quando têm indicação — não por rotina.",
    icon: "bolt",
  },
  {
    label: "Treino de movimento",
    desc: "Agachamento, terra, corrida, arremesso. Quando o gesto está errado, o corpo compensa e dói. Corrigimos o movimento, não só a dor.",
    icon: "run",
  },
  {
    label: "Retorno progressivo",
    desc: "Sem te mandar embora na raça. Critérios claros pra cada etapa — você volta confiante, não torcendo pra não recidivar.",
    icon: "target",
  },
];

const IconTecnica = ({ name }) => {
  const icons = {
    hands:    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"/><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>,
    body:     <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="1"/><path d="m9 20 3-6 3 6"/><path d="m6 8 6 2 6-2"/><path d="M12 10v4"/></svg>,
    dumbbell: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.4 14.4 9.6 9.6"/><path d="M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z"/><path d="m21.5 21.5-1.4-1.4"/><path d="M3.9 3.9 2.5 2.5"/><path d="M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z"/></svg>,
    bolt:     <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
    run:      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="13" cy="4" r="1"/><path d="M6 20l4-6 3 2 4-10"/><path d="m10 12-1.5 5"/><path d="m6 9 3 1 2-3"/></svg>,
    target:   <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
  };
  return icons[name] || null;
};

const Tecnicas = () => (
  <section id="tratamentos" style={{ padding:"160px 0", borderTop:"1px solid var(--line)", background:"var(--bg)" }}>
    <div className="container">

      <div className="reveal" style={{ marginBottom:64, maxWidth:900 }}>
        <div className="eyebrow" style={{ marginBottom:20 }}>(01) Recursos & técnicas</div>
        <h2 className="display" style={{ fontSize:"clamp(40px,5.5vw,82px)", lineHeight:1.0 }}>
          O que usamos<br/>
          no <span className="serif" style={{ fontWeight:400, fontStyle:"italic", color:"var(--accent)" }}>tratamento</span>.
        </h2>
        <p style={{ marginTop:24, fontSize:18, lineHeight:1.6, color:"var(--ink-2)", maxWidth:600 }}>
          Cada recurso tem uma razão de estar ali. Nada entra por padrão — tudo vem do que encontrei na avaliação.
        </p>
      </div>

      <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:14 }} className="tec-grid">
        {TECNICAS.map((t, i) => (
          <div key={i} className="reveal pcard" style={{
            padding:"28px 20px", borderRadius:20,
            background:"var(--bg-2)", border:"1px solid var(--line)",
            display:"flex", flexDirection:"column", gap:0,
            transitionDelay:`${i*0.07}s`,
          }}>
            <div style={{
              width:44, height:44, borderRadius:12,
              background:"var(--accent-tint)", border:"1px solid var(--accent-border)",
              display:"flex", alignItems:"center", justifyContent:"center",
              color:"var(--accent)", marginBottom:20,
            }}>
              <IconTecnica name={t.icon}/>
            </div>
            <div style={{ fontSize:18, fontWeight:650, letterSpacing:"-0.02em", marginBottom:10, lineHeight:1.2 }}>{t.label}</div>
            <div style={{ fontSize:14, lineHeight:1.6, color:"var(--ink-3)" }}>{t.desc}</div>
          </div>
        ))}
      </div>

    </div>
    <style>{`
      @media(max-width:1000px){.tec-grid{grid-template-columns:1fr 1fr !important}}
      @media(max-width:360px){.tec-grid{grid-template-columns:1fr !important}}
    `}</style>
  </section>
);

export default Tecnicas;
