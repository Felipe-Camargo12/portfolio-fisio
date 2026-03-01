const TalkToMeDesktopCard = () => {
  const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5515981751563";

  return (
    <div className="absolute w-1/2 right-0 flex items-start pl-[210px]">
      <div className="relative w-[408px] h-[376px]">
        <div className="bg-slate-50 shadow-xl border border-gray-100 absolute top-0 rounded-[20px] w-[408px] h-[356px]">
          <div className="absolute text-center flex flex-col w-[356px] left-[26px] top-[18px] bottom-[38px] gap-[26px]">
            <h1 className="font-bold text-[44px] leading-[45px] text-gray-900">
              Recupere seu bem-estar
            </h1>
            <p className="text-[16px] leading-[22px] text-gray-600">
              A fisioterapia devolve a liberdade para o seu corpo, permitindo que você volte a fazer o que ama com total segurança.
            </p>
            <p className="text-[16px] leading-[22px] font-medium text-gray-700">
              Cada tratamento é único e focado na sua necessidade. Não espere a dor piorar para buscar ajuda especializada.
            </p>
          </div>
        </div>
        <div className="absolute bottom-[-10px] w-full flex justify-center">
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
            Falar com a Geovana!
          </a>
        </div>
      </div>
    </div>
  );
};

export default TalkToMeDesktopCard;