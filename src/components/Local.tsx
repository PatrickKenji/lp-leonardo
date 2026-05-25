import { wapp } from "../lib/whatsapp";
import { I } from "../lib/icons";

const Local = () => (
  <section id="local" style={{ padding: "180px 0", borderTop: "1px solid var(--line)", background: "var(--bg-2)" }}>
    <div className="container">
      <div className="lg" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 64, alignItems: "start" }}>
        {/* Coluna esquerda: info */}
        <div className="reveal">
          <div className="eyebrow" style={{ marginBottom: 24 }}>(07) Onde fica</div>
          <h2 className="display" style={{ fontSize: "clamp(40px, 6vw, 84px)" }}>
            Av. Tuiuti, 1868<br/>
            <span className="serif" style={{ fontWeight: 400, fontStyle: "italic", color: "var(--accent)" }}>Vila Morangueira.</span>
          </h2>
          <div style={{ marginTop: 40, display: "flex", flexDirection: "column", gap: 24 }}>
            {[
              [<I.pin/>, "Endereço", "Av. Tuiuti, 1868. Vila Morangueira, Maringá–PR · CEP 87040-360"],
              [<I.clock/>, "Horário", "Segunda a sexta · 10h às 22h"],
              [<I.whats/>, "WhatsApp", "(44) 98836-2701"],
              [<I.insta/>, "Instagram", "@fisioleonardobiroqui"],
            ].map(([ic, l, v]) => (
              <div key={l} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                <div style={{ color: "var(--accent)", marginTop: 2 }}>{ic}</div>
                <div>
                  <div className="mono" style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color:"var(--ink-3)" }}>{l}</div>
                  <div style={{ marginTop: 4, fontSize: 16, color: "var(--ink)" }}>{v}</div>
                </div>
              </div>
            ))}
          </div>
          <a href={wapp("Olá, Leonardo! Quero agendar uma sessão.")} target="_blank" rel="noopener" className="btn btn-primary btn-lg" style={{ marginTop: 40 }}>
            <I.whats/> Agendar sessão
          </a>
        </div>

        {/* Coluna direita: mapa + quick facts */}
        <div className="reveal reveal-1">
          {/* Google Maps iframe */}
          <div style={{
            borderRadius: 20, overflow: "hidden",
            border: "1px solid var(--line)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
            position: "relative",
          }}>
            {/* Badge overlay */}
            <div style={{
              position: "absolute", zIndex: 10, left: 16, top: 16,
              background: "rgba(255,255,255,0.92)", padding: "8px 14px", borderRadius: 999,
              fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase",
              backdropFilter: "blur(12px)",
              boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
              display: "flex", alignItems: "center", gap: 6,
            }}>
              <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                <circle cx="4" cy="4" r="3" fill="var(--accent)" opacity="0.9"/>
                <circle cx="4" cy="4" r="1.5" fill="white"/>
              </svg>
              Clínica · sala individual
            </div>

            <iframe
              title="Localização Leonardo Biroqui Fisioterapia"
              src="https://maps.google.com/maps?q=Av.+Tuiuti,+1868,+Vila+Morangueira,+Maring%C3%A1,+PR,+87040-360,+Brasil&output=embed&z=16&hl=pt-BR"
              width="100%"
              height="420"
              style={{ display: "block", border: "none" }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Quick facts */}
          <div className="ls" style={{
            marginTop: 16, padding: 28, borderRadius: 20,
            background: "var(--bg-3)", border: "1px solid var(--line)",
            display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32,
          }}>
            {[["Estacionamento","Na rua, gratuito"],["Acessibilidade","Térreo, sem escada"],["Próximo a","Catedral · UEM"]].map(([l,v]) => (
              <div key={l}>
                <div className="mono" style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color:"var(--ink-3)" }}>{l}</div>
                <div style={{ marginTop: 8, fontSize: 14 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <style>{`
      @media(max-width:900px){.lg{grid-template-columns:1fr !important}} @media(max-width:560px){.ls{grid-template-columns:1fr !important}} @media(max-width:900px){#local iframe{height:260px !important}}
    `}</style>
  </section>
);

export default Local;
