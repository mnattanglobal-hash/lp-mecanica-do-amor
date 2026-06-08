import Hero from "./components/sections/Hero";
import Dor from "./components/sections/Dor";
import Tese from "./components/sections/Tese";
import OQueRecebe from "./components/sections/OQueRecebe";
import Prova from "./components/sections/Prova";
import Depoimentos from "./components/sections/Depoimentos";
import Oferta from "./components/sections/Oferta";
import ParaQuem from "./components/sections/ParaQuem";
import Faq from "./components/sections/Faq";
import CtaFinal from "./components/sections/CtaFinal";

export default function App() {
  return (
    <main>
      <Hero />
      <Dor />
      <Tese />
      <OQueRecebe />
      <Prova />
      <Depoimentos />
      <Oferta />
      <ParaQuem />
      <Faq />
      <CtaFinal />
    </main>
  );
}
