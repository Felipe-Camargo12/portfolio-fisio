const TalkToMeMobileCard = () => {
  const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=";

  return (
    <div className="relative w-[334px] h-[385px]">
      <div className="w-[334px] h-[357px] bg-slate-300/80 absolute top-0 rounded-[20px]">
        <div className="absolute top-[45px] left-[46px] w-[243px] text-center flex flex-col gap-[21px]">
          <h1 className="text-[30px] font-bold leading-[36px]">
            Argumentação
          </h1>
          <p className="text-[14px] leading-[17px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta laoreet nisi, vel ullamcorper arcu pulvinar ac.
          </p>
          <p className="text-[14px] leading-[17px]">
            onec id lorem eget lectus iaculis tempor. Pellentesque diam nisl, tincidunt nec arcu in, consectetur tincidunt urna.
          </p>
        </div>
      </div>
      <div className="absolute bottom-[19.5px] left-[67.75px]">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-zinc-400 to-zinc-600 rounded-full px-[37px] py-[19.5px] text-sm text-black hover:from-jet hover:to-jet hover:text-white transition"
        >
          Falar conosco!
        </a>
      </div>
    </div>
  );
};

export default TalkToMeMobileCard;