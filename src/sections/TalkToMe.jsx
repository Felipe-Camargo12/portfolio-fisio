import ilustracao from "../assets/others/ilustracao-fisioterapia2.png";
import ResultsDesktopCard from "../components/cards/desktop/ResultsDesktopCard";
import TalkToMeDesktopCard from "../components/cards/desktop/TalkToMeDesktopCard";
import ResultsMobileCard from "../components/cards/mobile/ResultsMobileCard";
import TalkToMeMobileCard from "../components/cards/mobile/TalkToMeMobileCard";

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
        <TalkToMeMobileCard />
      </div>

      {/* DESKTOP */}
      {/* O gap define a distância exata entre o card da esquerda e o card da direita */}
      <div className="hidden lg:w-full lg:h-[668px] lg:relative lg:flex lg:items-center lg:justify-center gap-[280px] xl:gap-[380px] [@media(min-width:1020px)_and_(max-width:1200px)]:gap-[100px] px-8">
        
        {/* A imagem fica solta e perfeitamente centralizada entre os cards */}
        <img
          src={ilustracao}
          alt="Ilustração Fisioterapia"
          className="absolute left-1/2 transform -translate-x-1/2 w-[340px] xl:w-[420px] aspect-[1519/1310] object-contain -z-10 [@media(min-width:1020px)_and_(max-width:1200px)]:hidden"
        />
        
        <ResultsDesktopCard />
        <TalkToMeDesktopCard />
      </div>
    </section>
  );
};

export default TalkToMe;