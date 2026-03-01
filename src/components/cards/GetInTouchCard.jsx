const GetInTouchCard = () => {
  const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5515981751563";

  return (
    <div className="relative w-[334px] h-[435px] lg:w-[653px] lg:h-[348px]">
      {/* Fundo do card */}
      <div className="w-[334px] h-[407px] bg-slate-50/80 shadow-xl absolute top-0 rounded-[20px] lg:w-[653px] lg:h-[319.5px] border border-gray-100/50">
        <div className="absolute top-[45px] left-[46px] w-[243px] text-center flex flex-col gap-[21px] lg:w-[528px] lg:left-[63px] lg:top-[34px] lg:gap-[26px]">
          <h1 className="text-[30px] font-bold leading-[36px] text-gray-900 lg:text-[42px] lg:leading-[45px]">
            Pronto para viver sem dor?
          </h1>
          <p className="text-[14px] leading-[17px] text-gray-600 lg:text-[16px] lg:leading-[22px]">
            O seu corpo foi feito para o movimento. Pare de adiar o seu bem-estar e dê o primeiro passo para uma recuperação completa, segura e guiada por uma especialista.
          </p>
          <p className="text-[14px] leading-[17px] font-medium text-gray-700 lg:text-[16px] lg:leading-[20px]">
            Agende sua avaliação agora mesmo e descubra o plano de tratamento ideal para você.
          </p>
        </div>
      </div>

      {/* Botão flutuante com o hover profissional e a cor da marca */}
      <div className="absolute w-full bottom-[-4px] flex items-center justify-center">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center justify-center 
            bg-gradient-to-r from-primary to-secondary 
            rounded-full px-[37px] py-[19px] 
            text-base font-bold text-white tracking-wide
            shadow-[0_4px_14px_0_rgba(0,31,63,0.39)]
            hover:shadow-[0_6px_20px_rgba(0,31,63,0.23)] 
            hover:-translate-y-1 hover:scale-105 
            transition-all duration-300 ease-in-out
          "
        >
          Agendar Minha Avaliação
        </a>
      </div>
    </div>
  );
};

export default GetInTouchCard;