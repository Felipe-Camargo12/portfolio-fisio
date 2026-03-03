const HeaderButton = () => {
  return (
    <div className="ml-auto">
      <a
        href="https://api.whatsapp.com/send/?phone=5515981751563"
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex items-center justify-center 
          bg-gradient-to-r from-[#001F3F] to-[#004080] 
          rounded-full px-6 py-2 
          text-sm text-white tracking-wide
          shadow-[0_4px_14px_0_rgba(0,31,63,0.39)]
          hover:shadow-[0_6px_20px_rgba(0,31,63,0.23)] 
          hover:-translate-y-1 hover:scale-100
          transition-all duration-300 ease-in-out
          
        "
      >
        Fale comigo no whatsapp
      </a>
    </div>
  );
};

export default HeaderButton;