import ilustracao from "../assets/others/ilustracao-fisioterapia2.png";
import ResultsDesktopCard from "../components/cards/desktop/ResultsDesktopCard";
import ResultsMobileCard from "../components/cards/mobile/ResultsMobileCard";

const TalkToMe = () => {
  return (
    <section className="w-full h-full flex items-center justify-center bg-seasalt overflow-hidden">
      {/* MOBILE */}
      <div className="py-[80px] flex flex-col gap-[20px] items-center justify-center lg:hidden">
        <ResultsMobileCard />
        <img
          src={ilustracao}
          alt="Ilustração Fisioterapia"
          className="w-[400px] max-w-[90vw] aspect-[1519/1310] object-contain"
        />
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:w-full lg:max-w-[1200px] lg:h-[668px] lg:flex lg:flex-row lg:items-center lg:justify-between gap-[50px] xl:gap-[100px] px-8">
        
        {/* Card na Esquerda */}
        <ResultsDesktopCard />
        
        {/* Imagem na Direita */}
        <img
          src={ilustracao}
          alt="Ilustração Fisioterapia"
          className="w-[340px] xl:w-[420px] aspect-[1519/1310] object-contain"
        />
        
      </div>
    </section>
  );
};

export default TalkToMe;