import React, { useState } from 'react';
import menuIcon from '../../assets/icons/ic_round-menu.png';
import whatsappIcon from '../../assets/icons/WhatsApp_logo.png';
import logo from '../../assets/icons/fisio.png';
import instagramIcon from '../../assets/icons/Instagram_Logo_bolder.png';
import HeaderButton from '../shared/HeaderButton';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5515981751563";
  const INSTA_URL = "https://www.instagram.com/gesantos.fisio/";

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-lg">
      {/* MOBILE */}
      <div className="flex items-center justify-between px-7 h-20 lg:hidden">
        {/* Botão menu */}
        <button onClick={() => setIsOpen(!isOpen)}>
          <img src={menuIcon} alt="Menu" className="w-5 h-5" />
        </button>

        {/* Logo */}
        <a href="/">
          <img src={logo} alt="Logo" className="h-12" />
        </a>

        {/* Botão WhatsApp */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5" />
        </a>
      </div>

      {/* Menu Dropdown */}
      {isOpen && (
        <nav className="lg:hidden absolute top-full left-0 w-44 h-screen bg-white shadow-lg py-4 px-7">
          <ul className="flex flex-col space-y-4 text-black">
            <li><a href="#sobre">Sobre mim</a></li>
            <li><a href="#servicos">Meus Serviços</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      )}

      {/* DESKTOP */}
      <div className="hidden lg:flex relative items-center h-20 px-7">
        {/* Redes sociais */}
        <div className="flex items-center gap-7">
          {/* Link do Instagram */}
          <a
            href={INSTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              outline-none transition-all duration-300 ease-out 
              
              {/* Estado: Hover */}
              hover:scale-110 
              hover:drop-shadow-[0_0_10px_rgba(255,80,158)] 
              
              {/* Estado: Focus (Teclado) - Mesmo efeito */}
              focus:scale-110 
              focus:drop-shadow-[0_0_10px_rgba(255,80,158)] 
            "
          >
            <img src={instagramIcon} alt="Instagram" className="w-5 h-5 block" />
          </a>

          {/* Link do WhatsApp */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              outline-none transition-all duration-300 ease-out 
              
              {/* Estado: Hover */}
              hover:scale-110 
              hover:drop-shadow-[0_0_10px_rgba(50,248,122)] 
              
              {/* Estado: Focus (Teclado) - Mesmo efeito */}
              focus:scale-110 
              focus:drop-shadow-[0_0_10px_rgba(50,248,122)]
            "
          >
            <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5 block" />
          </a>
        </div>

        {/* Logo + Navegação */}
        <div className="absolute left-48/100 transform -translate-x-48/100 flex items-center gap-12">
          <a href="#sobre" className="text-sm hover:underline">Geovana Santos Fisioterapeuta</a>
          <a href="/">
            <img src={logo} alt="Logo" className="h-12" />
          </a>
          <nav className="flex gap-8 text-black text-sm">
            <a href="#servicos" className="hover:underline">Serviços</a>
            <a href="#contato" className="hover:underline">Contatos</a>
          </nav>
        </div>

        {/* Botão de agendamento */}
        <HeaderButton />
      </div>
    </header>
  );
};

export default Header;