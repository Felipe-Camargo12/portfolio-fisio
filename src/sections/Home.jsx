import { useEffect, useState } from 'react';
import bg from '../assets/backgrounds/bg.jpg';
import Mobile from '../assets/backgrounds/heroMobile.png';
import Desktop from '../assets/backgrounds/hero.png';
import onda from '../assets/backgrounds/waveUp.png';
import HomeMobileCard from '../components/cards/mobile/HomeMobileCard';
import HomeDesktopCard from '../components/cards/desktop/HomeDesktopCard';

const Home = () => {
  // Estado para controlar a visualização
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      // Atualiza o estado se a tela mudar
      setIsMobile(window.innerWidth < 1024);
      
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    handleResize(); // Executa na primeira renderização
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className={`${isMobile ? 'w-full max-h-[704px] pt-20' : 'w-full min-h-screen pt-20'}`}>
      
      {isMobile ? (
        /* MOBILE - Só é renderizado se a tela for menor que 1024px */
        <div 
          className="w-full flex flex-col max-h-[625px]"
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
      ) : (
        /* DESKTOP - Só é renderizado se a tela for maior ou igual a 1024px */
        <div className="w-full h-[calc(100vh-80px)] relative bg-no-repeat bg-cover bg-right flex" style={{ backgroundImage: `url(${Desktop})` }}>
          <div className="w-1/2 h-2/2 flex items-center justify-center absolute left-0">
            <HomeDesktopCard />
          </div>
          <img src={onda} alt="Onda" className="absolute bottom-0 left-0 w-full object-contain pointer-events-none" /> 
        </div>
      )}

    </section>
  );
};

export default Home;