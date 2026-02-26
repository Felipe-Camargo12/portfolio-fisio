import { useEffect } from 'react';
import bg from '../assets/backgrounds/bg.jpg';
import Mobile from '../assets/backgrounds/heroMobile.png';
import Desktop from '../assets/backgrounds/hero.png';
import onda from '../assets/backgrounds/waveUp.png';
import HomeMobileCard from '../components/cards/mobile/HomeMobileCard';
import HomeDesktopCard from '../components/cards/desktop/HomeDesktopCard';

const Home = () => {
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);

  const isMobile = window.innerWidth < 1024;

<section className={`${isMobile ? 'bg-red-200' : 'bg-blue-200'} w-full pt-20 ${isMobile ? '' : 'min-h-screen'}`}></section>

  return (
    <section className={`${isMobile ? 'w-full max-h-[704px] pt-20' : 'w-full min-h-screen pt-20'}`}>
      {/* MOBILE */}
      <div 
        className="w-full lg:hidden flex flex-col max-h-[625px]"
        style={{ height: 'calc(var(--vh, 1vh) * 100 - 80px)' }}
      >
        {/* Primeira metade */}
        <div className="h-1/2 w-full flex items-center justify-center text-center" style={{ backgroundImage: `url(${bg})` }}>
          <HomeMobileCard />
        </div>

        {/* Segunda metade */}
        <div className="relative h-1/2 w-full bg-no-repeat bg-cover bg-right" style={{ backgroundImage: `url(${Mobile})` }}>
          <img src={onda} alt="Onda" className="absolute bottom-0 left-0 w-full object-contain pointer-events-none" />
        </div>
      </div>

      {/* DESKTOP */}
      <div className="w-full h-[calc(100vh-80px)] hidden lg:flex relative bg-no-repeat bg-cover bg-right" style={{ backgroundImage: `url(${Desktop})` }}>
        <div className="w-1/2 flex items-center justify-center absolut left-0">
          <HomeDesktopCard />
        </div>
         <img src={onda} alt="Onda" className="absolute bottom-0 left-0 w-full object-contain pointer-events-none" /> 
      </div>
    </section>
  );
};

export default Home;