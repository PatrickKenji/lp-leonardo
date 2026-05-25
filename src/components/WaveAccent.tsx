import type { CSSProperties } from "react";

type WaveAccentProps = { pos?: "top" | "bottom" | "corner-tr"; h?: number };

// WaveAccent — ondas orgânicas animadas
const WaveAccent = ({ pos = "bottom", h = 110 }: WaveAccentProps) => {
  const layers = [
    { d:"M0,72 C200,18 400,126 600,72 C800,18 1000,126 1200,72 C1400,18 1600,126 1800,72 C2000,18 2200,126 2400,72 L2400,130 L0,130 Z", c:"#1239c4", dur:"26s", rev:false, op:0.82 },
    { d:"M0,86 C180,38 420,122 600,86 C780,50 1020,118 1200,86 C1380,54 1620,116 1800,86 C1980,56 2220,114 2400,86 L2400,130 L0,130 Z", c:"#1a4de0", dur:"18s", rev:true,  op:0.66 },
    { d:"M0,100 C160,66 440,120 600,100 C760,80 1040,116 1200,100 C1360,84 1640,114 1800,100 C1960,86 2240,112 2400,100 L2400,130 L0,130 Z", c:"#137dff", dur:"12s", rev:false, op:0.92 },
  ];

  // corner-tr:
  //   - container GRANDE ancorado no canto top-right
  //   - transformOrigin "100% 0%" = pivota no canto superior-direito
  //   - rotate(-22deg) → faixa de ondas entra na diagonal pelo canto
  //   - SEM overflow:hidden aqui → a seção (já tem overflow:hidden) faz o recorte
  const wrapStyle: CSSProperties = pos === "top" ? {
    position:"absolute", top:0, left:0, right:0, height:h,
    pointerEvents:"none", overflow:"hidden", zIndex:1,
    transform:"scaleY(-1)",
  } : pos === "corner-tr" ? {
    position:"absolute",
    top: 0,
    right: 0,
    width: "min(720px, 58vw)",
    height: "min(640px, 52vw)",
    pointerEvents:"none",
    zIndex: 1,
    transform: "rotate(-22deg)",
    transformOrigin: "100% 0%",
  } : {
    position:"absolute", bottom:0, left:0, right:0, height:h,
    pointerEvents:"none", overflow:"hidden", zIndex:1,
  };

  return (
    <div style={wrapStyle} aria-hidden="true">
      {layers.map(({ d, c, dur, rev, op }, i) => (
        <svg key={i} viewBox="0 0 2400 130" preserveAspectRatio="none"
          style={{
            position:"absolute",
            bottom: pos === "top" ? "auto" : 0,
            top: pos === "top" ? 0 : "auto",
            width:"200%", height:"100%",
            fill:c, opacity:op,
            animation:"waFlow linear infinite",
            animationDuration:dur,
            animationDirection: rev ? "reverse" : "normal",
          }}>
          <path d={d}/>
        </svg>
      ))}
    </div>
  );
};

export default WaveAccent;

if (typeof document !== "undefined" && !document.getElementById("wa-css")) {
  const s = document.createElement("style");
  s.id = "wa-css";
  s.textContent = "@keyframes waFlow{from{transform:translateX(0)}to{transform:translateX(-50%)}}";
  document.head.appendChild(s);
}
