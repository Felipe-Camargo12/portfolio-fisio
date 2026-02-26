const ServiceCard = ({ title, description, icon, customWidth }) => {
  return (
    <div className="flex flex-col items-center gap-[28px]">
      {/* Ícone enviado como prop */}
      <div className="w-[80px] h-[80px] flex items-center justify-center lg:w-[100px] lg:h-[100px] text-indigo-600">
        {icon}
      </div>

      <h2 className="text-[16px] font-bold lg:text-[20px]">{title}</h2>
      <p className={`text-[14px] ${customWidth} text-center`}>
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;

// PARA USAR IMANGES INVES DE ICONES
// const ServiceCard = ({ title, description, image, customWidth }) => {
//   return (
//     <div className="flex flex-col items-center gap-[28px]">
//       <img src={image} alt="retorno" className="w-[280px] h-[142px] lg:w-[362px] lg:h-[183px]" />
//       <h2 className="text-[16px] font-bold lg:text-[20px]">{title}</h2>
//       <p className={`text-[14px] ${customWidth} text-center`}>
//         {description}
//       </p>
//     </div>
//   );
// };

// export default ServiceCard;