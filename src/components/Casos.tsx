import React from "react";
import { wapp } from "../lib/whatsapp";
import { I } from "../lib/icons";

// Observação: este componente não é renderizado pelo App original
// (a seção "(02) A avaliação" usa <Processo/>). Mantido para fidelidade.
const Casos = () => {
  const ref = React.useRef<HTMLElement | null>(null);
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const check = () => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.85) setInView(true);
    };
    window.addEventListener("scroll", check, { passive: true });
    check();
    return () => window.removeEventListener("scroll", check);
  }, []);

  const itens = [
    { label: "Avaliação do problema",     desc: "Histórico completo, quando começou, o que piora, o que já tentou." },
    { label: "Avaliação de força",         desc: "Testes segmentados para identificar o desequilíbrio que gera a dor." },
    { label: "Avaliação de mobilidade",    desc: "Restrições articulares e padrões de movimento no gesto esportivo." },
    { label: "Análise de treino",          desc: "Volume, carga e exercícios revisados quando o treino é o problema." },
    { label: "Exercícios para casa",       desc: "Protocolo complementar entre sessões. O progresso não para." },
    { label: "Direcionamento completo",    desc: "Critérios claros de retorno ao esporte — baseados nos seus objetivos." },
  ];

  return (
    <section id="casos" ref={ref} style={{ padding:"160px 0", borderTop:"1px solid var(--line)", background:"var(--bg-2)" }}>
      <div className="container">

        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"80px 100px", alignItems:"start" }}
             className="aval-grid">

          {/* Left — sticky statement */}
          <div style={{ position:"sticky", top:120 }} className="aval-left">
            <div className="eyebrow reveal" style={{ marginBottom:20 }}>(02) A avaliação</div>
            <h2 className="display reveal reveal-1"
                style={{ fontSize:"clamp(40px,5vw,72px)", lineHeight:1.0, margin:"0 0 28px" }}>
              A maioria trata<br/>
              onde{" "}
              <span className="serif" style={{ fontStyle:"italic", fontWeight:400, color:"var(--accent)" }}>dói</span>.<br/>
              Aqui entendemos<br/>
              por que dói.
            </h2>
            <p className="reveal reveal-2"
               style={{ fontSize:17, lineHeight:1.65, color:"var(--ink-2)", maxWidth:400, margin:"0 0 40px" }}>
              A avaliação vai além do sintoma — força, mobilidade, padrão de movimento e treino são analisados para chegar na causa real.
            </p>
            <a href={wapp("Olá! Quero agendar minha avaliação completa.")}
               target="_blank" rel="noopener"
               className="btn btn-primary reveal reveal-3">
              <I.whats/> Agendar avaliação
            </a>
          </div>

          {/* Right — item list */}
          <div style={{ display:"flex", flexDirection:"column", gap:0 }}>
            {itens.map((item, i) => (
              <div key={i} style={{
                padding:"28px 0",
                borderBottom: i < itens.length - 1 ? "1px solid var(--line)" : "none",
                display:"flex", gap:20, alignItems:"flex-start",
                opacity: inView ? 1 : 0,
                transform: inView ? "none" : "translateX(20px)",
                transition: `opacity .5s ${0.1 + i * 0.08}s var(--ease-out), transform .5s ${0.1 + i * 0.08}s var(--ease-out)`,
              }}>
                <span style={{
                  fontFamily:"var(--mono)", fontSize:11, color:"var(--accent)",
                  letterSpacing:"0.12em", minWidth:24, paddingTop:3,
                }}>0{i+1}</span>
                <div>
                  <div style={{ fontSize:18, fontWeight:650, letterSpacing:"-0.02em", marginBottom:6, color:"var(--ink)" }}>
                    {item.label}
                  </div>
                  <div style={{ fontSize:14, lineHeight:1.6, color:"var(--ink-3)" }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
      <style>{`
        @media(max-width:860px){
          .aval-grid{ grid-template-columns:1fr !important; gap:48px !important }
          .aval-left{ position:static !important }
        }
      `}</style>
    </section>
  );
};

export default Casos;
