import Geovana from "../assets/others/geovana.png";
import GetInTouchCard from "../components/cards/GetInTouchCard";

const GetInTouch = () => {
  return (
    <section
      aria-labelledby="get-in-touch-heading"
      className="relative w-full flex justify-center items-center py-20 lg:py-32 bg-slate-50 overflow-hidden"
    >
      {/* Elemento de background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-full bg-gradient-to-b from-white to-transparent opacity-50 pointer-events-none"></div>

      {/* Container principal */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-8 flex flex-col lg:flex-row items-center justify-center">
        
        {/* Lado Esquerdo: Card Textual */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:pr-10 xl:pr-16 shrink-0 z-10">
          <GetInTouchCard />
        </div>

        {/* Linha Divisória Central */}
        <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[180px] w-[1px] bg-jet"></div>

        {/* Lado Direito: Imagem com Efeito 3D */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:pl-10 xl:pl-16 mt-16 lg:mt-0 z-10">
          
          {/* Wrapper do Efeito 3D */}
          <div className="relative w-[280px] h-[380px] sm:w-[320px] sm:h-[440px] lg:w-[400px] lg:h-[480px] group">
            
            {/* Wrapper Interno */}
            <div className="absolute inset-0 w-full h-full flex items-end justify-center transition-transform duration-500 ease-out group-hover:-translate-y-2">
              
              {/* O Bloco de Fundo (Primary) */}
              <div className="absolute bottom-0 w-full h-[85%] bg-[#0A192F] rounded-[40px] shadow-xl shadow-black/10"></div>

              {/* A Imagem PNG (Pessoa) */}
              <img
                src={Geovana}
                alt="Retrato da Dra. Geovana Santos sorrindo"
                loading="lazy"
                className="relative z-10 w-full h-auto object-contain 
                           drop-shadow-[0_20px_20px_rgba(0,0,0,0.35)] scale-[1.06]
                           origin-bottom transition-transform duration-500 ease-out
                           group-hover:scale-[1.12]"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default GetInTouch;