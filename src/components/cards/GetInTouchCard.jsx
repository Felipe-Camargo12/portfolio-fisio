const GetInTouchCard = () => {
  const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=";

  return (
    <div className="relative w-[334px] h-[435px] lg:w-[653px] lg:h-[348px]">
        <div className="w-[334px] h-[407px] bg-slate-400/80 absolute top-0 rounded-[20px] lg:w-[653px] lg:h-[319.5px]">
          <div className="absolute top-[45px] left-[46px] w-[243px] text-center flex flex-col gap-[21px] lg:w-[528px] lg:left-[63px] lg:top-[34px] lg:gap-[26px]">
            <h1 className="text-[30px] font-bold leading-[36px] lg:text-[44px] lg:leading-[45px]">
              Texto persuasivo, descrição concisa
            </h1>
            <p className="text-[14px] leading-[17px] lg:text-[16px] lg:leading-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta laoreet nisi, vel ullamcorper arcu pulvinar ac.
            </p>
            <p className="text-[14px] leading-[17px] lg:text-[16px] lg:leading-[20px]">
              Nulla urna mi, efficitur id nisi in, accumsan blandit enim.
            </p>
          </div>
        </div>
        <div className="absolute bottom-[19.5px] left-[45px] lg:left-[204px]">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-zinc-400 to-zinc-600 rounded-full px-[37px] py-[19.5px] text-sm text-black hover:from-jet hover:to-jet hover:text-white transition"
          >
            Começar minha jornada
          </a>
        </div>
      </div>
  );
};

export default GetInTouchCard;