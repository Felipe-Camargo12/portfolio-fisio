const GetInTouchCard = () => {
  const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=5515981751563";

  return (
    <div className="relative w-full max-w-[400px] bg-white rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.15)] border border-slate-100 flex flex-col items-center text-center px-6 pt-12 pb-16 sm:pb-24 lg:px-12 lg:pt-12 lg:pb-16 transition-all hover:shadow-[0_8px_30px_rgb(0,0,0,0.30)]">
      <h2
        id="get-in-touch-heading"
        className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight tracking-tight mb-5 text-balance"
      >
        Vamos tratar a causa da sua dor?
      </h2>

      <p className="text-sm sm:text-base lg:text-lg text-slate-500 mb-4 leading-relaxed text-balance">
        O seu corpo foi feito para o movimento. Cada tratamento é único e focado
        na sua necessidade. Não espere a dor piorar para buscar ajuda
        especializada.
      </p>

      <p className="text-sm sm:text-base font-semibold text-slate-800 leading-relaxed text-balance">
        Agende sua avaliação agora mesmo e descubra o plano de tratamento ideal
        para você.
      </p>

      {/* Botão flutuante - Agora com tamanhos responsivos */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar avaliação pelo WhatsApp"
        className="
          absolute -bottom-6 sm:-bottom-7 lg:-bottom-8 left-1/2 -translate-x-1/2
          inline-flex items-center justify-center 
          gap-2 sm:gap-3
          bg-[#001F3F] hover:bg-[#002b5e] text-white
          rounded-full 
          px-5 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5
          text-sm sm:text-[15px] lg:text-base font-semibold tracking-wide whitespace-nowrap
          shadow-[0_10px_25px_rgba(0,31,63,0.3)]
          hover:shadow-[0_15px_35px_rgba(0,31,63,0.45)] 
          hover:-translate-y-[calc(15%)] hover:scale-105 
          focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#001F3F]/30
          transition-all duration-300 ease-out
          group
        "
      >
        {/* Ícone SVG responsivo */}
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110 group-hover:rotate-12"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.634.852 5.08 2.33 7.085l-1.572 5.752 5.882-1.543a11.967 11.967 0 005.391 1.28c6.646 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zm0 22.052a9.982 9.982 0 01-5.1-1.391l-.365-.217-3.792.994 1.011-3.696-.238-.379A9.972 9.972 0 012.052 12.03c0-5.513 4.487-10 10-10 5.514 0 10 4.487 10 10s-4.486 9.992-10 9.992zm5.485-7.493c-.301-.151-1.78-.88-2.056-.98-.276-.1-.477-.151-.678.151-.201.301-.778.98-.954 1.18-.176.2-.351.226-.653.076-.301-.151-1.27-.468-2.422-1.494-.897-.8-1.504-1.787-1.68-2.088-.176-.301-.019-.464.132-.614.135-.135.301-.351.452-.527.151-.176.201-.301.301-.502.1-.201.05-.376-.025-.527-.076-.151-.678-1.631-.93-2.233-.245-.586-.494-.506-.678-.515-.176-.008-.376-.008-.578-.008-.2 0-.527.076-.803.376-.276.301-1.054 1.03-1.054 2.511 0 1.48 1.079 2.91 1.23 3.111.151.2 2.122 3.238 5.14 4.542 2.454 1.06 2.964.88 3.516.83.553-.05 1.78-.728 2.031-1.432.251-.704.251-1.306.176-1.432-.075-.126-.276-.201-.578-.351z" />
        </svg>
        Agendar Minha Avaliação
      </a>
    </div>
  );
};

export default GetInTouchCard;
