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
            answer="Levo todos os materiais e aparelhos necessários até a sua casa. Assim, você realiza a sua reabilitação ou aula de Pilates com total conforto e segurança."
            customWidth="w-[280px] lg:w-[340px]"
          />
          <FaqCard
            question="Preciso de encaminhamento médico para iniciar a fisio?"
            answer="Não é obrigatório. Como profissional de primeiro contato, posso realizar sua avaliação clínica completa e traçar o melhor plano de tratamento para o seu caso."
            customWidth="w-[280px] lg:w-[340px]"
          />
        </div>

        {/* Segunda Coluna */}
        <div className="w-[350px] flex flex-col gap-[20px] items-center justify-center lg:w-[400px]">
          <FaqCard
            question="O Pilates Solo ajuda a tratar dores na coluna?"
            answer="Com certeza! Ele foca no fortalecimento do core, na flexibilidade e na correção postural, sendo um excelente aliado contra dores crônicas e tensões."
            customWidth="w-[280px] lg:w-[340px]"
          />
          <FaqCard
            question="Como faço para agendar minha avaliação?"
            answer="Basta clicar no botão do WhatsApp aqui no site. Vamos conversar rapidamente sobre sua queixa e encontrar o melhor horário para o seu atendimento em Sorocaba e região."
            customWidth="w-[280px] lg:w-[340px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Faq;