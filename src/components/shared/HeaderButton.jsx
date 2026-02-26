const HeaderButton = () => {
  return (
    <div className="ml-auto">
      <a
        href="https://api.whatsapp.com/send/?phone=5515981751563"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-jet rounded-full px-6 py-2 text-sm hover:bg-jet hover:text-white transition"
      >
        Fale comigo no whatsapp
      </a>
    </div>
  );
};

export default HeaderButton;