import imageFooter from '../../assets/backgrounds/details2.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="w-full border-t bg-transparent border-gray-800 flex flex-col md:flex-row items-center justify-between px-[26px] lg:px-[60px] py-5 md:py-0 md:h-[73px] gap-3 md:gap-0 bg-cover bg-center bg-no-repeat relative"
    >
      
      {/* Direitos Autorais */}
      <div className="text-gray-300 text-[12px] lg:text-[14px] text-center md:text-left z-10">
        &copy; {currentYear} <span className="font-medium text-white">Geovana Fisioterapia</span>. Todos os direitos reservados.
      </div>

      {/* Assinatura do Desenvolvedor */}
      <div className="text-gray-400 text-[11px] lg:text-[13px] flex items-center gap-1.5 z-10">
        Desenvolvido por{' '}
        <a
          href="https://www.feltecsolutions.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-white tracking-wider hover:text-[#159BE2] transition-colors duration-300"
          aria-label="Conheça a Feltec"
        >
          FELTEC SOLUTIONS
        </a>
      </div>
      
    </footer>
  );
};

export default Footer;