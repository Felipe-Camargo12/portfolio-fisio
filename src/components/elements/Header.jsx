import { useState } from "react";
import menuIcon from "../../assets/icons/ic_round-menu.png";
import whatsappIcon from "../../assets/icons/whatsapp.png";
import logo from "../../assets/icons/fisio.png";
import instagramIcon from "../../assets/icons/instagram.png";
import HeaderButton from "../shared/HeaderButton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5515981751563";
  const INSTA_URL = "https://www.instagram.com/gesantos.fisio/";

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-lg">
      
      {/* --- MOBILE --- */}
      <div className="relative flex items-center justify-between px-7 h-20 lg:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="z-10">
          <img src={menuIcon} alt="Menu" className="w-6 h-6" />
        </button>

        {/* Logo Centralizada (Tamanho original h-12) */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <a href="/">
            <img src={logo} alt="Logo" className="h-14 w-auto" />
          </a>
        </div>

        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="z-10">
          <img src={whatsappIcon} alt="WhatsApp" className="w-7 h-7" />
        </a>
      </div>

      {/* --- DESKTOP --- */}
      <div className="hidden lg:flex relative items-center h-20 px-7">
        
        {/* 1. LADO ESQUERDO: Ícones e Nome (Estilos Restaurados) */}
        <div className="flex items-center justify-between flex-1 z-10 pr-24">
          <div className="flex items-center gap-7">
            <a
              href={INSTA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="outline-none transition-all duration-300 ease-out hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,80,158)] focus:scale-110 focus:drop-shadow-[0_0_10px_rgba(255,80,158)]"
            >
              <img src={instagramIcon} alt="Instagram" className="w-6 h-6 block" />
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="outline-none transition-all duration-300 ease-out hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(50,248,122)] focus:scale-110 focus:drop-shadow-[0_0_10px_rgba(50,248,122)]"
            >
              <img src={whatsappIcon} alt="WhatsApp" className="w-7 h-7 block" />
            </a>
          </div>
          
          <a href="#sobre" className="text-sm text-black hover:underline whitespace-nowrap">
            Geovana Santos Fisioterapeuta
          </a>
        </div>

        {/* 2. LOGO: CENTRO ABSOLUTO (Estilo original h-12) */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <a href="/" className="pointer-events-auto">
            <img src={logo} alt="Logo" className="h-16 w-auto" />
          </a>
        </div>

        {/* 3. LADO DIREITO: Nav e Botão (Estilos Restaurados) */}
        <div className="flex items-center justify-between flex-1 z-10 pl-24">
          <nav className="flex gap-8 text-black text-sm">
            <a href="#servicos" className="hover:underline">Serviços</a>
            <a href="#contato" className="hover:underline">Contatos</a>
          </nav>
          
          <div className="hidden min-[1200px]:block ml-auto">
            <HeaderButton />
          </div>
        </div>
      </div>

      {/* Menu Dropdown Mobile (Visual original) */}
      {isOpen && (
        <nav className="lg:hidden absolute top-full left-0 w-44 h-screen bg-white shadow-lg py-4 px-7">
          <ul className="flex flex-col space-y-4 text-black">
            <li><a href="#sobre" onClick={() => setIsOpen(false)}>Sobre mim</a></li>
            <li><a href="#servicos" onClick={() => setIsOpen(false)}>Meus Serviços</a></li>
            <li><a href="#contato" onClick={() => setIsOpen(false)}>Contato</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;