import { useScrollY } from "../lib/hooks";
import { wapp } from "../lib/whatsapp";
import { I } from "../lib/icons";
import { Logo } from "../lib/Logo";

const Nav = () => {
  const y = useScrollY();
  const scrolled = y > 30;
  return (
    <nav className={`navshell ${scrolled ? "scrolled" : ""}`}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 0" }}>
        <a href="#top"><Logo compact={scrolled} white={!scrolled}/></a>
        <div className="navlinks" style={{ display: "flex", alignItems: "center", gap: 4 }}>
          {[["Equipe","#sobre"],["Tratamentos","#casos"],["Método","#processo"],["Depoimentos","#depoimentos"],["Localização","#local"]].map(([t,h]) => (
            <a key={h} href={h} style={{
              fontSize: 13, color: scrolled ? "var(--ink-2)" : "rgba(255, 255, 255, 0.85)", padding: "8px 14px", borderRadius: 999,
              transition: "all .3s var(--ease)", fontWeight: 500,
            }}
            onMouseEnter={e => { e.currentTarget.style.background = scrolled ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.08)"; e.currentTarget.style.color = scrolled ? "var(--ink)" : "#fff"; }}
            onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = scrolled ? "var(--ink-2)" : "rgba(255, 255, 255, 0.85)"; }}
            >{t}</a>
          ))}
          <a href={wapp("Olá, Leonardo! Gostaria de agendar uma sessão de fisioterapia.")} target="_blank" rel="noopener" className="btn btn-primary" style={{ marginLeft: 8, padding: "10px 18px", fontSize: 13 }}>
            <I.whats size={14}/> Agendar sessão
          </a>
        </div>
      </div>
      <style>{`@media(max-width:880px){.navlinks a:not(.btn){display:none}} @media(max-width:480px){.navshell .container{padding:10px 16px !important}} @media(max-width:640px){.navshell .btn{padding:9px 14px !important;font-size:12px !important}} @media(max-width:640px){.navshell svg{max-width:160px !important;height:auto !important}} @media(max-width:380px){.navshell .btn .nav-btn-text{display:none}}`}</style>
    </nav>
  );
};

export default Nav;
