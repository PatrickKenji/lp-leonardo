import { useReveal } from "./lib/hooks";
import { wapp } from "./lib/whatsapp";
import { I } from "./lib/icons";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Tecnicas from "./components/Tecnicas";
import Processo from "./components/Processo";
import Pacotes from "./components/Pacotes";
import Depoimentos from "./components/Depoimentos";
import About from "./components/About";
import Local from "./components/Local";
import FAQ from "./components/FAQ";
import CtaFinal from "./components/CtaFinal";
import Footer from "./components/Footer";
import BookingModal from "./components/BookingModal";

const App = () => {
  useReveal();
  return (
    <>
      <Nav />
      <Hero />
      <Processo />
      <Tecnicas />
      <Pacotes />
      <Depoimentos />
      <About />
      <Local />
      <FAQ />
      <CtaFinal />
      <Footer />
      <a
        href={wapp("Olá Leonardo, vim pelo site!")}
        target="_blank"
        rel="noopener"
        aria-label="WhatsApp"
        className="fab"
      >
        <I.whats size={24} />
      </a>
      <BookingModal />
    </>
  );
};

export default App;
