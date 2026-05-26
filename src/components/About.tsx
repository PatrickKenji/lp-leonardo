// Equipe — Leonardo + Rebeca Kaori
const About = () => (
  <section id="sobre" style={{ padding: "180px 0", borderTop: "1px solid var(--line)" }}>
    <div className="container">
      <div className="reveal" style={{ marginBottom: 80 }}>
        <div className="eyebrow" style={{ marginBottom: 24 }}>(05) A equipe</div>
        <h2 className="display" style={{ fontSize: "clamp(36px,5.2vw,78px)", maxWidth: 820, lineHeight: 1.05, letterSpacing: "-.04em" }}>
          Pessoas reais cuidando<br/>
          <span className="serif" style={{ fontWeight: 400, fontStyle: "italic", color: "var(--accent)" }}>de pessoas reais.</span>
        </h2>
        <p style={{ marginTop: 28, fontSize: 18, lineHeight: 1.6, color: "var(--ink-3)", maxWidth: 600 }}>
          Do primeiro contato até o fim do tratamento — você sabe com quem está.
        </p>
      </div>

      <div className="team-grid">
        {/* Leonardo */}
        <div className="team-card reveal">
          <div className="team-photo" style={{ background: `url("${window.__resources.leo}") center/cover` }}>
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(180deg,transparent 45%,rgba(0,0,0,0.82))" }}/>
            <div style={{ position:"absolute", left:24, bottom:24, color:"#fff" }}>
              <div className="mono" style={{ fontSize:10, letterSpacing:"0.18em", textTransform:"uppercase", opacity:0.65, marginBottom:6 }}>Fisioterapeuta</div>
              <div style={{ fontSize:20, fontWeight:600, letterSpacing:"-.02em" }}>Leonardo Biroqui</div>
              <div style={{ fontSize:12, opacity:0.6, marginTop:2 }}>CREFITO · Ortopedia e Esporte</div>
            </div>
          </div>
          <div className="team-bio">
            <p style={{ margin:0, fontSize:16, lineHeight:1.7, color:"var(--ink-2)" }}>
              Formação em ortopedia e esporte. Cada sessão na clínica é dedicada a um paciente — sem revezamento, sem pressa de encerrar e chamar o próximo.
            </p>
            <div className="team-tags">
              {["Ortopedia & Esporte","Reabilitação pós-cirúrgica","Prevenção e performance"].map(t => (
                <span key={t} className="team-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Rebeca Kaori */}
        <div className="team-card reveal reveal-1">
          <div className="team-photo" style={{ position:"relative", aspectRatio:"4/3.4" }}>
            <div style={{
              position:"absolute", inset:0,
              background:"linear-gradient(135deg, #0f27a0 0%, #1a4de0 55%, #137dff 100%)",
              display:"flex", alignItems:"center", justifyContent:"center",
            }}>
              <span style={{ fontSize:80, fontWeight:700, color:"rgba(255,255,255,0.15)", letterSpacing:"-.04em", userSelect:"none" }}>RK</span>
            </div>
            <div style={{ position:"absolute", inset:0, background:"linear-gradient(180deg,transparent 45%,rgba(0,0,0,0.75))" }}/>
            <div style={{ position:"absolute", left:24, bottom:24, color:"#fff" }}>
              <div className="mono" style={{ fontSize:10, letterSpacing:"0.18em", textTransform:"uppercase", opacity:0.65, marginBottom:6 }}>Secretária</div>
              <div style={{ fontSize:20, fontWeight:600, letterSpacing:"-.02em" }}>Rebeca Kaori</div>
              <div style={{ fontSize:12, opacity:0.6, marginTop:2 }}>Recepção & Agendamento</div>
            </div>
          </div>
          <div className="team-bio">
            <p style={{ margin:0, fontSize:16, lineHeight:1.7, color:"var(--ink-2)" }}>
              É com ela que você fala primeiro. Cuida dos agendamentos e de tudo que acontece antes de você entrar na sala — pra quando você chegar, não precisar se preocupar com mais nada.
            </p>
            <div className="team-tags">
              {["Agendamentos","Atendimento ao paciente","Organização da clínica"].map(t => (
                <span key={t} className="team-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <style>{`
      .team-grid { display:grid; grid-template-columns:1fr 1fr; gap:24px; align-items:start; }
      .team-card { border-radius:24px; overflow:hidden; border:1px solid var(--line); background:var(--bg); }
      .team-photo { position:relative; aspect-ratio:4/3.4; background-size:cover; background-position:center; }
      .team-bio { padding:28px 32px 32px; }
      .team-tags { display:flex; flex-wrap:wrap; gap:8px; margin-top:20px; }
      .team-tag { font-family:var(--mono); font-size:10px; letter-spacing:0.12em; text-transform:uppercase; padding:6px 12px; border-radius:999px; border:1px solid var(--line); color:var(--ink-3); }
      @media(max-width:860px){ .team-grid{grid-template-columns:1fr !important} }
    `}</style>
  </section>
);

export default About;
