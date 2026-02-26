const TalkToMeDesktopCard = () => {
    const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=";
  
    return (
      <div className="absolute w-1/2 right-0 flex items-start pl-[210px]">
        <div className="relative w-[408px] h-[376px]">
          <div className="bg-zinc-300/80 absolute top-0 rounded-[20px] w-[408px] h-[356px]">
            <div className="absolute text-center flex flex-col w-[356px] left-[26px] top-[38px] gap-[26px]">
              <h1 className="text font-bold text-[44px] leading-[45px]">
                Argumentação
              </h1>
              <p className="text-[16px] leading-[20px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porta laoreet nisi, vel ullamcorper arcu pulvinar ac.
              </p>
              <p className="text-[16px] leading-[20px]">
                onec id lorem eget lectus iaculis tempor. Pellentesque diam nisl, tincidunt nec arcu in, consectetur tincidunt urna.
              </p>
            </div>
          </div>
          <div className="absolute bottom-[10px] left-[104.75px]">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-zinc-400 to-zinc-500 rounded-full px-[37px] py-[19.5px] text-sm text-black hover:from-jet hover:to-jet hover:text-white transition"
            >
              Falar conosco!
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default TalkToMeDesktopCard;