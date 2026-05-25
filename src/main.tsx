import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import leo from "./assets/leo.png";
import clinicaFachada from "./assets/clinica_fachada.jpg";
import clinicaSala from "./assets/clinica_sala.jpg";
import clinicaEquipment from "./assets/clinica_equipment.jpg";

// Espelha o comportamento do bundle original: as imagens ficam disponíveis
// em window.__resources e os componentes as referenciam por id.
window.__resources = {
  leo,
  clinica_fachada: clinicaFachada,
  clinica_sala: clinicaSala,
  clinica_equipment: clinicaEquipment,
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);

// Scripts de pós-processamento (clinic pattern, FAQ/CTA polish, galeria mobile,
// lightbox, limpeza de travessões, ajustes mobile) — rodam após o mount,
// exatamente como no HTML original.
import("./enhancements.js");
