import instagramIcon from '../../../assets/icons/Instagram_Logo_bolder.png';
import whatsappIcon from '../../../assets/icons/WhatsApp_logo.png';

const AboutMeDesktopCard = () => {
  const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=";
  const INSTA_URL = "https://www.instagram.com/";

  return (
    <div className="flex flex-col gap-[30px] items-center">
      <div className="flex flex-col text-center text-primary">
        <p className="text-[20px]">Olá! Eu sou a</p>
        <h1 className="font-light text-[45px]">
          Fisioterapeuta <br />
          <span className="font-bold">Geovana Santos</span>
        </h1>
      </div>

      <p className="text-[16px] w-[430px] text-justify leading-snug">
        Formada pela Universidade Paulista UNIP de Sorocaba e atualmente cursando pós graduação em traumato-ortopedia. 
        Possuo formação e atuação em Pilates, além de trabalhar com fisioterapia voltada à geriatria e gerontologia.
        
        Ao longo da minha prática ajudei diversas pessoas a recuperar movimentos, reduzir dores crônicas, <span className="font-bold"> conquistando 
        independência nas atividades diárias e melhorar a qualidade de vida.</span>
      </p>

      {/* <div className="flex gap-7">
        <a href={INSTA_URL} target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" className="w-5 h-5" />
        </a>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
        </a>
      </div> */}
    </div>
  );
};

export default AboutMeDesktopCard;