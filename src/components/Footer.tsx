import { wapp } from "../lib/whatsapp";
import { Logo } from "../lib/Logo";

const Col = ({ title, items }) => (
  <div>
    <div className="mono" style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color:"var(--ink-3)", marginBottom: 20 }}>{title}</div>
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12, fontSize: 14 }}>
      {items.map(([t, h]) => <li key={t}><a href={h} className="lnk" style={{ color: "var(--ink-2)" }}>{t}</a></li>)}
    </ul>
  </div>
);

const Footer = () => (
  <footer style={{ borderTop: "1px solid var(--line)", padding: "72px 0 40px", color: "var(--ink-3)" }}>
    <div className="container">
      <div className="fg" style={{
        display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: 48,
        paddingBottom: 56, borderBottom: "1px solid var(--line)",
      }}>
        <div>
          <Logo/>
          <p style={{ marginTop: 24, fontSize: 14, lineHeight: 1.6, maxWidth: 360 }}>
            Fisioterapia esportiva em Maringá. Atendo um paciente de cada vez.
          </p>
        </div>
        <Col title="Navegar" items={[
          ["Nossa equipe","#sobre"],
          ["Tratamentos","#casos"],
          ["Método","#processo"],
          ["Depoimentos","#depoimentos"],
          ["Perguntas","#faq"],
        ]}/>
        <Col title="Contato" items={[
          ["(44) 98836-2701", wapp("Olá, Leonardo! Vim pelo site.")],
          ["leo.com.bhg@gmail.com","mailto:leo.com.bhg@gmail.com"],
          ["@fisioleonardobiroqui","https://instagram.com/fisioleonardobiroqui"],
        ]}/>
        <div>
          <div className="mono" style={{ fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color:"var(--ink-3)", marginBottom: 20 }}>Endereço</div>
          <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6 }}>
            Av. Tuiuti, 1868<br/>Vila Morangueira<br/>Maringá–PR · 87040-360
          </p>
        </div>
      </div>
      <div style={{ marginTop: 32, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 16, fontSize: 12, color: "var(--ink-3)" }}>
        <div>© {new Date().getFullYear()} Leonardo Biroqui Fisioterapia LTDA · CNPJ 49.174.272/0001-05</div>
        <div className="mono">Maringá, PR · 2026</div>
      </div>
    </div>
    <style>{`
      @media(max-width:780px){.fg{grid-template-columns:1fr 1fr !important}}
      @media(max-width:480px){.fg{grid-template-columns:1fr !important}}
    `}</style>
  </footer>
);

export default Footer;
