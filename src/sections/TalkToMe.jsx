import ilustracao from '../assets/others/ilustracao-fisioterapia.png';
import ResultsDesktopCard from '../components/cards/desktop/ResultsDesktopCard';
import TalkToMeDesktopCard from '../components/cards/desktop/TalkToMeDesktopCard';
import ResultsMobileCard from '../components/cards/mobile/ResultsMobileCard';
import TalkToMeMobileCard from '../components/cards/mobile/TalkToMeMobileCard';

const TalkToMe = () => {
  return (
    <section className="w-full h-full flex items-center justify-center bg-seasalt">
      {/* MOBILE */}
      <div className="py-[80px] flex flex-col gap-[131px] items-center justify-center lg:hidden">
        <ResultsMobileCard />
        <img src={ilustracao} alt="Ilustração Fisioterapia" className="h-[375px] w-[375px]" />
        <TalkToMeMobileCard />
      </div>

      {/* DESKTOP */}
      <div className="hidden lg:w-full lg:h-[668px] lg:relative lg:flex lg:items-center lg:justify-center">
        <img src={ilustracao} alt="Ilustração Fisioterapia" className="absolute left-1/2 transform -translate-x-1/2 h-[375px] w-[375px]" />
        <ResultsDesktopCard />
        <TalkToMeDesktopCard />
      </div>
    </section>
  );
};

export default TalkToMe;