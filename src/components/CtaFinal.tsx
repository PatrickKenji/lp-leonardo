import { useMouse } from "../lib/hooks";
import { wapp } from "../lib/whatsapp";
import { I } from "../lib/icons";

const CtaFinal = () => {
  const m = useMouse();
  return (
    <section style={{ padding: "200px 0", position: "relative", overflow: "hidden", background: "var(--ink)", color: "#fff" }}>
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none", background: `radial-gradient(circle at ${m.x * 100}% ${m.y * 100}%, rgba(0,102,255,0.4), transparent 50%)`, transition: "background .3s ease" }}/>
      <div className="container" style={{ position: "relative", textAlign: "center" }}>
        <div className="eyebrow reveal" style={{ marginBottom: 40, color: "rgba(255,255,255,0.5)" }}>Resposta em até 2h</div>
        <h2 className="display reveal reveal-1" style={{ fontSize: "clamp(40px, 7.4vw, 130px)", maxWidth: 1300, marginLeft: "auto", marginRight: "auto" }}>
          Seu corpo está esperando<br/>
          alguém que <span className="serif" style={{ fontWeight: 400, fontStyle: "italic", color: "#7da9ff" }}>ouça</span> antes de tratar.
        </h2>
        <p className="reveal reveal-2" style={{ marginTop: 36, fontSize: 19, lineHeight: 1.55, color: "rgba(255,255,255,0.72)", maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
          A primeira sessão começa com você falando. A clínica escuta, avalia — e descobre o que está acontecendo de verdade.
        </p>
        <div className="reveal reveal-2" style={{ display: "flex", gap: 12, marginTop: 56, flexWrap: "wrap", justifyContent: "center" }}>
          <a href={wapp("Olá, Leonardo! Sou atleta e tive uma lesão. Quero agendar uma avaliação.")} target="_blank" rel="noopener" className="btn btn-lg" style={{ background: "#fff", color: "var(--ink)" }}>
            <I.whats/> Tive uma lesão e quero voltar a treinar
          </a>
          <a href={wapp("Olá, Leonardo! Estou com dor e quero agendar uma avaliação.")} target="_blank" rel="noopener" className="btn btn-lg" style={{ background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.3)" }}>
            Tenho dor e quero entender o que está acontecendo
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaFinal;
