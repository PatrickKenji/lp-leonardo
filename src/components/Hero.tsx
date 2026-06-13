import { useScrollY, useMouse } from "../lib/hooks";
import { wapp } from "../lib/whatsapp";
import { I } from "../lib/icons";

// Hero v7 — logo animado float, sem foto
const Hero = () => {
  const y = useScrollY();
  const m = useMouse();
  const p = Math.min(y / 600, 1);

  return (
    <header id="top" className="hero-wrap">

      {/* fundo mesh */}
      <div className="hero-bg"/>

      {/* area principal */}
      <div className="hero-inner">

        {/* LOGO ANIMADO — direita */}
        <div className="hero-logo-col">
          <div className="hero-logo-scene" style={{
            transform: `translateX(${(m.x - 0.5) * 28}px) translateY(${(m.y - 0.5) * 14 + y * 0.07}px)`,
            transition: "transform .6s var(--ease-out)",
          }}>
            {/* glow pulsante atras do logo */}
            <div className="logo-glow"/>
            {/* sombra base */}
            <div className="logo-shadow"/>

            {/* SVG DO LOGO — 3 layers com float independente */}
            <svg
              viewBox="0 0 204.07068 175"
              className="logo-svg"
              fill="none"
              aria-hidden="true"
            >
              {/* layer back — curva esquerda — flutua mais devagar */}
              <g className="logo-layer logo-layer-back">
                <path
                  transform="matrix(1,0,0,-1,0,169.34203)"
                  d="M111.31934 165.4964C106.19182 170.62392 97.878459 170.62392 92.75094 165.4964L15.382568 88.12803C-5.127522 67.61794-5.127523 34.364503 15.382566 13.854416L27.954928 1.282043 46.52334 19.850464 33.95098 32.42282C23.695935 42.67787 23.695918 59.304567 33.950967 69.559619L120.603549 156.2122 111.31934 165.4964Z"
                  fill="var(--accent)"
                  opacity="0.55"
                />
              </g>

              {/* layer front — peca direita — flutua mais rapido */}
              <g className="logo-layer logo-layer-front">
                <path
                  transform="matrix(1,0,0,-1,0,98.83788)"
                  d="M188.68816 17.623658 176.50266 29.809166 157.93425 11.240768 170.11975-.944748C180.3748-11.199791 180.37482-27.826516 170.11977-38.08156L157.74083-50.46051 176.30924-69.0289 188.68816-56.64998C209.19824-36.139879 209.19824-2.886436 188.68816 17.623658Z"
                  fill="var(--accent)"
                  opacity="0.75"
                />
              </g>

              {/* layer mid — forma principal — flutua na velocidade base */}
              <g className="logo-layer logo-layer-mid">
                <path
                  transform="matrix(1,0,0,-1,0,150.58007)"
                  d="M133.17511 124.878238 151.74352 106.30983 120.796169 75.36248 154.83824 41.320405C159.96578 36.19288 159.96578 27.879509 154.83824 22.751992L111.51196-20.574295C106.38444-25.701813 98.071079-25.701813 92.94355-20.574295L49.617269 22.751992C44.489744 27.879509 44.489744 36.19287 49.617269 41.320398L133.17511 124.878238ZM126.985637 32.0362 102.22775 56.794076 77.46988 32.036195 102.22775 7.27832 126.985637 32.0362Z"
                  fill="var(--accent)"
                  fillRule="evenodd"
                />
              </g>
            </svg>
          </div>
        </div>

        {/* CONTEUDO — esquerda */}
        <div className="hero-content" style={{
          transform: `translateY(${p * -18}px)`,
          transition: "transform .7s var(--ease-out)",
        }}>
          <h1 className="display hero-h1 reveal">
            <span className="hero-line-wrap">
              <span style={{ display:"inline-block", transform:`translateY(${p*-8}px)`, transition:"transform .7s var(--ease-out)" }}>
                Avaliação
              </span>
            </span>
            <span className="hero-line-wrap">
              <span className="serif hero-accent" style={{
                transform:`translateX(${(m.x-0.5)*7}px)`,
                transition:"transform .5s var(--ease-out)",
              }}>individualizada</span>
            </span>
            <span className="hero-line-wrap">
              <span style={{ display:"inline-block", transform:`translateY(${p*-4}px)`, transition:"transform .8s var(--ease-out)" }}>
                que trata a causa.
              </span>
            </span>
          </h1>

          <div className="hero-sep"/>

          <p className="hero-sub reveal reveal-1">Antes de qualquer protocolo, eu identifico a origem real do problema — força, mobilidade, padrão de movimento, carga de treino — e construo com você um plano claro de recuperação.</p>

          <div className="hero-ctas reveal reveal-2">
            <a href={wapp("Olá, Leonardo! Quero agendar minha avaliação.")} target="_blank" rel="noopener" className="btn btn-primary btn-lg">
              <I.whats/> Agendar avaliação
            </a>
            <a href="#processo" className="btn btn-ghost btn-lg">
              Como funciona <I.down/>
            </a>
          </div>
        </div>
      </div>


      <style>{`
        /* ── WRAP ─────────────────────────────────────── */
        .hero-wrap {
          position: relative; overflow: hidden;
          display: flex; flex-direction: column;
          background:
            radial-gradient(ellipse at 72% 55%, rgba(0,102,255,0.09) 0%, transparent 50%),
            radial-gradient(ellipse at 12% 30%, rgba(120,170,255,0.07) 0%, transparent 42%),
            linear-gradient(160deg, #ffffff 0%, #f3f6fe 50%, #eaeffb 100%);
        }
        .hero-bg {
          position:absolute; inset:0; pointer-events:none; z-index:0;
          background: radial-gradient(ellipse at 70% 90%, rgba(0,102,255,0.06), transparent 45%);
        }

        /* ── INNER GRID ───────────────────────────────── */
        .hero-inner {
          flex:1; display:grid; grid-template-columns:1fr 1fr;
          position:relative; z-index:2;
          max-width:1440px; margin:0 auto; width:100%;
          padding:0 80px;
          align-items:center;
        }

        /* ── LOGO ─────────────────────────────────────── */
        .hero-logo-col {
          display:flex; align-items:center; justify-content:center;
          padding: 140px 0 80px;
          order: 2;
        }
        .hero-logo-scene {
          position:relative; display:flex;
          align-items:center; justify-content:center;
        }
        .logo-glow {
          position:absolute; inset:-60px;
          background: radial-gradient(ellipse at 50% 50%, rgba(0,102,255,0.18), transparent 65%);
          filter:blur(30px);
          animation: logo-glow-pulse 3.5s ease-in-out infinite;
        }
        .logo-shadow {
          position:absolute; bottom:-32px; left:50%;
          transform:translateX(-50%);
          width:60%; height:20px;
          background: radial-gradient(ellipse at 50% 50%, rgba(0,102,255,0.18), transparent 70%);
          filter:blur(12px);
          animation: logo-shadow-pulse 4s ease-in-out infinite;
        }
        .logo-svg {
          width: clamp(200px, 22vw, 320px);
          height: auto;
          display:block;
          filter: drop-shadow(0 16px 40px rgba(0,102,255,0.20));
          animation: logo-float-main 4s ease-in-out infinite;
        }

        /* layers independentes */
        .logo-layer { transform-box:fill-box; transform-origin:center; }
        .logo-layer-back  { animation: logo-layer-b 5.2s ease-in-out infinite; }
        .logo-layer-mid   { animation: logo-layer-m 4s   ease-in-out infinite; }
        .logo-layer-front { animation: logo-layer-f 3.4s ease-in-out infinite 0.4s; }

        /* ── KEYFRAMES ────────────────────────────────── */
        @keyframes logo-float-main {
          0%,100% { transform: translateY(0px) rotate(-0.6deg); }
          50%     { transform: translateY(-22px) rotate(0.6deg); }
        }
        @keyframes logo-layer-b {
          0%,100% { transform: translateY(0px); }
          50%     { transform: translateY(-6px); }
        }
        @keyframes logo-layer-m {
          0%,100% { transform: translateY(0px); }
          50%     { transform: translateY(-10px); }
        }
        @keyframes logo-layer-f {
          0%,100% { transform: translateY(0px); }
          50%     { transform: translateY(-14px); }
        }
        @keyframes logo-glow-pulse {
          0%,100% { opacity:0.7; transform:scale(1); }
          50%     { opacity:1;   transform:scale(1.12); }
        }
        @keyframes logo-shadow-pulse {
          0%,100% { opacity:0.5; transform:translateX(-50%) scaleX(1); }
          50%     { opacity:0.2; transform:translateX(-50%) scaleX(0.75); }
        }

        /* ── CONTENT ──────────────────────────────────── */
        .hero-content {
          padding: 140px 48px 80px 0;
          order: 1;
        }
        .hero-h1 {
          font-size:clamp(48px,5.6vw,90px);
          line-height:.96; letter-spacing:-.04em;
          margin:0; font-weight:700; color:var(--ink-1);
        }
        .hero-line-wrap { display:block; overflow:hidden; }
        .hero-accent {
          display:inline-block;
          font-style:italic; font-weight:400; color:var(--accent);
        }
        .hero-sep {
          width:40px; height:1px; margin:28px 0;
          background:linear-gradient(90deg,var(--accent),transparent); opacity:.5;
        }
        .hero-sub {
          font-size:17px; line-height:1.65; color:var(--ink-2);
          margin:0; max-width:420px;
        }
        .hero-ctas { display:flex; gap:12px; margin-top:32px; flex-wrap:wrap; }



        /* ── MOBILE ───────────────────────────────────── */
        @media(max-width:768px){
          .hero-inner {
            grid-template-columns:1fr !important;
            padding:0 24px !important;
          }
          .hero-logo-col {
            order:1 !important;
            padding:100px 0 32px !important;
          }
          .logo-svg { width:clamp(140px,42vw,200px) !important; }
          .hero-content {
            order:2 !important;
            padding:0 0 60px !important;
          }
          .hero-h1 { font-size:clamp(40px,11vw,62px) !important; }
          .hero-sub { max-width:100% !important; }

        }
      `}</style>
    </header>
  );
};

export default Hero;
