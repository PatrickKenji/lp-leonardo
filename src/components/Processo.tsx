import { wapp } from "../lib/whatsapp";
import { I } from "../lib/icons";

const AVAL_ITEMS = [
  { n:"01", t:"Escuta e histórico completo",   d:"A avaliação começa pela escuta. Quando começou, o que piora, o que você já tentou. Nada é descartado antes de avaliar." },
  { n:"02", t:"Avaliação de força",             d:"Músculo por músculo. O lado fraco é quase sempre o que gera compensação — e dor." },
  { n:"03", t:"Avaliação de mobilidade",        d:"Quanto você abre, quanto dobra, como você move. Restrições pequenas mudam tudo no gesto esportivo." },
  { n:"04", t:"Análise do treino",              d:"Quando indicado, revisamos a planilha de treino. Volume, frequência, exercícios. Em boa parte dos casos, o corpo não é o problema." },
  { n:"05", t:"Exercícios complementares",      d:"O paciente sai com exercícios para fazer em casa. A recuperação não acontece só dentro da clínica." },
  { n:"06", t:"Direcionamento e retorno",       d:"O que pode fazer, o que evitar e quando está pronto para voltar. Sem achismo — com critério." },
];

const Processo = () => (
  <section id="processo" style={{ padding:"180px 0", position:"relative", overflow:"hidden", background:"var(--navy)" }}>
    <div id="top" style={{ position: "absolute", top: 0 }} />
    <div className="container">
      <div className="reveal" style={{ marginBottom:64, maxWidth:1100 }}>
        <div className="eyebrow" style={{ marginBottom:24, color:"rgba(150,190,255,0.9)", borderColor:"rgba(150,190,255,0.3)" }}>(01) A avaliação</div>
        <h2 className="display" style={{ fontSize:"clamp(44px,7vw,110px)", color:"#fff" }}>
          A maioria trata onde <span className="serif" style={{ fontWeight:400, fontStyle:"italic", color:"var(--accent-light)" }}>dói</span>.<br/>
          Aqui entendemos por que dói.
        </h2>
        <p style={{ marginTop:28, fontSize:19, lineHeight:1.55, color:"rgba(255,255,255,0.70)", maxWidth:680 }}>
          Avaliação individualizada para identificar a causa do problema e construir um plano claro de recuperação.
        </p>
      </div>

      <div className="proc" style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:16 }}>
        {AVAL_ITEMS.map((s,i) => (
          <div key={i} className="reveal pcard" style={{
            padding:32, borderRadius:20,
            background:"var(--navy-card)",
            border:"1px solid var(--navy-card-h)",
            minHeight:220, display:"flex", flexDirection:"column", justifyContent:"space-between",
            transitionDelay:`${i*0.08}s`,
          }}>
            <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start" }}>
              <div className="mono" style={{ fontSize:12, letterSpacing:"0.16em", color:"var(--accent-light)" }}>{s.n}</div>
              <span style={{
                width:36, height:36, borderRadius:999,
                border:"1px solid rgba(255,255,255,0.15)",
                display:"inline-flex", alignItems:"center", justifyContent:"center",
                color:"rgba(255,255,255,0.35)",
              }}><I.arrUR size={14}/></span>
            </div>
            <div>
              <div style={{ fontSize:20, fontWeight:600, letterSpacing:"-0.025em", lineHeight:1.2, color:"#fff" }}>{s.t}</div>
              <div style={{ marginTop:12, fontSize:14, lineHeight:1.6, color:"rgba(255,255,255,0.60)" }}>{s.d}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="reveal" style={{ marginTop:56, textAlign:"center" }}>
        <a href={wapp("Olá! Quero agendar minha avaliação.")} target="_blank" rel="noopener" className="btn btn-primary btn-lg">
          <I.whats/> Agendar avaliação
        </a>
      </div>
    </div>
    <style>{`
      @media(max-width:900px){.proc{grid-template-columns:1fr 1fr !important}}
      @media(max-width:480px){.proc{grid-template-columns:1fr !important}}
      @media(max-width:768px){#processo{padding-top:130px !important}}
    `}</style>
  </section>
);

export default Processo;
