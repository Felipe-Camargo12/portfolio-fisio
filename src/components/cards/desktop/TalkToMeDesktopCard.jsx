const TalkToMeDesktopCard = () => {
  const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5515981751563";

  return (
    <div className="relative w-full max-w-[360px] xl:max-w-[408px] z-10">
      
      {/* Fundo do Card e Conteúdo */}
      <div className="bg-slate-50 shadow-xl border border-gray-100 rounded-[20px] w-full px-6 py-8 xl:px-[26px] xl:pt-[24px] xl:pb-[48px] flex flex-col text-center gap-4 xl:gap-[26px]">
        <h1 className="font-bold text-3xl xl:text-[44px] xl:leading-[45px] text-gray-900">
          Recupere seu bem-estar
        </h1>
        <p className="text-sm xl:text-[16px] xl:leading-[22px] text-gray-600">
          A fisioterapia devolve a liberdade para o seu corpo, permitindo que você volte a fazer o que ama com total segurança.
        </p>
        <p className="text-sm xl:text-[16px] xl:leading-[22px] font-medium text-gray-700">
          Cada tratamento é único e focado na sua necessidade. Não espere a dor piorar para buscar ajuda especializada.
        </p>
      </div>

      {/* Botão Flutuante */}
      <div className="absolute -bottom-[24px] xl:-bottom-[28px] w-full flex justify-center">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center justify-center 
            bg-gradient-to-r from-primary to-secondary
            rounded-full px-6 py-3 xl:px-[37px] xl:py-[19px] 
            text-sm xl:text-base font-bold text-white tracking-wide
            shadow-[0_4px_14px_0_rgba(0,31,63,0.39)]
            hover:shadow-[0_6px_20px_rgba(0,31,63,0.23)]  
            hover:-translate-y-1 hover:scale-105 
            transition-all duration-300 ease-in-out
          "
        >
          Falar com a Geovana!
        </a>
      </div>

    </div>
  );
};

export default TalkToMeDesktopCard;