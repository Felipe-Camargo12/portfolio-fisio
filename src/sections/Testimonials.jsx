import { useEffect, useState } from 'react';
import arrowLeft from '../assets/icons/arrowLeft.png';
import arrowRight from '../assets/icons/arrowRight.png';

const testimonials = [
  {
    text: "Geovana é excelente maravilhosa 😍👏👏👏",
    name: "— Dirce Siqueira"
  },
  {
    text: "Fiz aula de pilates com a Geovana por 6 meses, ela é uma excelente profissional! Muito atenciosa e comprometida com o que faz.",
    name: "— Liliam Gonçalves"
  },
  {
    text: "Melhor fisio de todas ❤️❤️❤️",
    name: "— Anne Karoline Vitorino"
  },
  {
    text: "A Geovanna une técnica e motivação, suas aulas são desafiadoras e divertidas, ela corrige cada movimento sempre com muita atenção. Nota 10.",
    name: "— Antônia Aparecida Calderan Siqueira"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 7000);

    return () => clearInterval(interval); // limpar ao desmontar
  }, []);

  return (
    <section className="w-full flex flex-col justify-center items-center py-[100px] gap-[40px] bg-slate-50 lg:gap-[30px]">
      
      {/* Título da seção */}
      <div className="flex flex-col gap-4 justify-center items-center text-center">
        <h1 className="text-[20px] font-bold text-gray-900 lg:text-[42px]">
          O que dizem os pacientes
        </h1>
        <div className="w-[80px] h-[2px] bg-secondary lg:w-[160px]"></div>
      </div>
      
      {/* Carrossel */}
      <div className="w-[340px] flex items-center justify-between lg:w-[800px]">
        
        <button onClick={prevTestimonial} className="hover:scale-110 transition-transform">
          <img 
            src={arrowLeft} 
            alt="Seta para a esquerda" 
            className="w-[28px] h-[28px] cursor-pointer lg:w-[32px] lg:h-[32px]" 
          />
        </button>
        
        <div className="flex flex-col items-center gap-4 w-[250px] lg:w-[600px] min-h-[140px] justify-center">
          <p className="text-[15px] italic text-center text-gray-700 lg:text-[22px] transition-opacity duration-500 ease-in-out">
            "{testimonials[currentIndex].text}"
          </p>
          <span className="text-[14px] font-semibold text-secondary lg:text-[16px]">
            {testimonials[currentIndex].name}
          </span>
        </div>

        <button onClick={nextTestimonial} className="hover:scale-110 transition-transform">
          <img 
            src={arrowRight} 
            alt="Seta para a direita" 
            className="w-[28px] h-[28px] cursor-pointer lg:w-[32px] lg:h-[32px]" 
          />
        </button>
        
      </div>
    </section>
  );
};

export default Testimonials;