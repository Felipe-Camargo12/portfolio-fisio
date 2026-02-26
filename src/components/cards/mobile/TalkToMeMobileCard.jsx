const TalkToMeMobileCard = () => {
  const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5515981751563";

  return (
    <div className="relative w-[334px] h-[385px]">
      <div className="w-[334px] h-[357px] bg-slate-50 shadow-xl border border-gray-100 absolute top-0 rounded-[20px]">
        <div className="absolute top-[45px] left-[46px] w-[243px] text-center flex flex-col gap-[21px]">
          <h1 className="text-[30px] font-bold leading-[36px] text-gray-900">
            Recupere seu bem-estar
          </h1>
          <p className="text-[14px] leading-[17px] text-gray-600">
            A dor não precisa ser uma companheira diária. A fisioterapia devolve a liberdade para o seu corpo, permitindo que você volte a fazer o que ama.
          </p>
          <p className="text-[14px] leading-[17px] font-medium text-gray-700">
            Cada tratamento é único. Não espere a dor piorar para buscar ajuda especializada.
          </p>
        </div>
      </div>
      <div className="absolute bottom-[19.5px] w-full flex justify-center">
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
  );
};

export default TalkToMeMobileCard;