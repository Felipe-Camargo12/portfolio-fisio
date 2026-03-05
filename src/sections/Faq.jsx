import FaqCard from '../components/cards/FaqCard';

const Faq = () => {
  return (
    <section className="bg-seasalt w-full flex flex-col justify-center items-center py-20 gap-[80px]">
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-[20px] lg:text-[42px] text-primary">
          Dúvidas frequentes
        </h1>
        <div className="w-[80px] h-[1px] bg-jet lg:w-[160px]"></div>
      </div>

     <div className="flex flex-col items-start justify-center gap-[20px] lg:gap-[80px] lg:flex-row">
        {/* Primeira Coluna */}
        <div className="w-[350px] flex flex-col gap-[20px] items-center justify-center lg:w-[400px]">
          <FaqCard
            question="Como funciona o atendimento a domicílio?"
            answer="Levo todos os materiais e equipamentos necessários até a sua casa. Dessa forma, você realiza sua sessão de reabilitação ou aula de Pilates com conforto, segurança e toda a atenção no ambiente do seu próprio lar."
            customWidth="w-[280px] lg:w-[340px]"
          />
          <FaqCard
            question="O Pilates pode ajudar nas dores na coluna?"
            answer="Sim. O Pilates Solo trabalha o fortalecimento do core, melhora a flexibilidade e contribui para a correção postural, sendo um excelente aliado na prevenção e no tratamento de dores na coluna."
            customWidth="w-[280px] lg:w-[340px]"
          />
        </div>

        {/* Segunda Coluna */}
        <div className="w-[350px] flex flex-col gap-[20px] items-center justify-center lg:w-[400px]">
          <FaqCard
            question="Como faço para agendar a minha avaliação?"
            answer="Você pode entrar em contato pelo WhatsApp pelo botão aqui no site, para tirar dúvidas e agendar sua avaliação. A partir dela, definimos o melhor plano de tratamento para o seu caso."
            customWidth="w-[280px] lg:w-[340px]"
          />
          <FaqCard
            question="Preciso de encaminhamento médico para iniciar a fisioterapia?"
            answer="Nem sempre. Em muitos casos é possível iniciar a avaliação fisioterapêutica diretamente. Se houver necessidade, o paciente pode ser orientado a procurar avaliação médica complementar."
            customWidth="w-[280px] lg:w-[340px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Faq;