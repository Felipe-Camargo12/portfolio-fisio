import { useEffect, useState } from 'react';
import arrowLeft from '../assets/icons/arrowLeft.png';
import arrowRight from '../assets/icons/arrowRight.png';

const testimonials = [
    "Consegui automatizar processos que antes levavam horas, agora meu time está muito mais produtivo!",
    "O suporte da Feltec é incrível! Resolveram nossas dúvidas rapidamente e ajudaram a otimizar nosso sistema.",
    "As soluções de TI entregues foram além do esperado, conseguimos integrar nossos sistemas de forma prática e eficiente.",
    "Nossa empresa conseguiu modernizar toda a infraestrutura digital graças à consultoria da Feltec, estou muito satisfeito!"
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
    <section className="w-full flex flex-col justify-center items-center py-[100px] gap-[108px] bg-slate-300 lg:gap-[138px]">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-[20px] lg:text-[42px]">
          Satisfação dos clientes
        </h1>
        <div className="w-[80px] h-[1px] bg-jet lg:w-[160px]"></div>
      </div>
      <div className="w-[340px] flex items-center justify-between lg:w-[723px]">
        <img 
          src={arrowLeft}
          alt="leff arrow icon"
          className="w-[24px] h-[24px] cursor-pointer"
          onClick={prevTestimonial}
        />
        <p className="w-[212px] text-[14px] text-center lg:w-[560px] lg:text-[19px] transition-all duration-500 ease-in-out">
          {testimonials[currentIndex]}
        </p>
        <img
          src={arrowRight}
          alt="right arrow icon"
          className="w-[24px] h-[24px] cursor-pointer"
          onClick={nextTestimonial}
        />
      </div>
    </section>
  );
};

export default Testimonials;