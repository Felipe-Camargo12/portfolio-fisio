import { useEffect, useState } from 'react';
import arrowLeft from '../assets/icons/arrowLeft.png';
import arrowRight from '../assets/icons/arrowRight.png';

const testimonials = [
  {
    text: "Cheguei com dores crônicas nas costas que me acompanhavam há anos. Com a terapia manual, já me sinto uma nova pessoa. Excelente profissional!",
    name: "— Maria Fernandes"
  },
  {
    text: "A reabilitação do meu pós-operatório não poderia ter sido em mãos melhores. O cuidado e o conhecimento da Geovana me deram muita segurança.",
    name: "— Carlos Eduardo"
  },
  {
    text: "Fazer as sessões de Pilates no conforto de casa mudou minha rotina. Minha postura melhorou 100% e as dores sumiram. Recomendo de olhos fechados!",
    name: "— Juliana Costa"
  },
  {
    text: "O atendimento domiciliar tem sido fundamental para a recuperação do meu pai. A paciência e dedicação no atendimento geriátrico são inspiradoras.",
    name: "— Roberto Almeida"
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
    <section className="w-full flex flex-col justify-center items-center py-[100px] gap-[80px] bg-slate-50 lg:gap-[100px]">
      
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