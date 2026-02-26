import FaqCard from '../components/cards/FaqCard';

const Faq = () => {
  return (
    <section className="bg-seasalt w-full flex flex-col justify-center items-center py-20 gap-[80px]">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-[20px] lg:text-[42px]">
          Dúvidas frequentes
        </h1>
        <div className="w-[80px] h-[1px] bg-jet lg:w-[160px]"></div>
      </div>

      <div className="flex flex-col items-start justify-center gap-[20px] lg:gap-[80px] lg:flex-row">
        <div className="w-[350px] flex flex-col gap-[20px] items-center justify-center lg:w-[400px]">
          <FaqCard
            question="Como contratar a Feltec?"
            answer="Entre em contato pelo nosso formulário online ou WhatsApp para receber um orçamento personalizado."
            customWidth="w-[238px] lg:w-[280px]"
          />
          <FaqCard
            question="Quais tecnologias a Feltec utiliza?"
            answer="Trabalhamos com soluções modernas em React, Next.js, TypeScript, automação industrial e IoT para otimizar processos."
            customWidth="w-[276px] lg:w-[280px]"
          />
        </div>

        <div className="w-[350px] flex flex-col gap-[20px] items-center justify-center lg:w-[400px]">
          <FaqCard
            question="A Feltec oferece suporte técnico?"
            answer="Sim! Temos atendimento especializado via chat, e-mail ou WhatsApp, garantindo que sua solução funcione sempre."
            customWidth="w-[240px] lg:w-[300px]"
          />
          <FaqCard
            question="Qual é o endereço da Feltec?"
            answer="Rua da Inovação, 123, Centro Tecnológico, Sorocaba/SP. Estamos próximos à Estação de Pesquisa e Desenvolvimento."
            customWidth="w-[262px] lg:w-[320px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Faq;