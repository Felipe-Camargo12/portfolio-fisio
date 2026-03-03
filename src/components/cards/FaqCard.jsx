import { useState } from 'react';
import plusIcon from '../../assets/icons/plusIcon.png';
import minusIcon from '../../assets/icons/minusIcon.png';

const FaqCard = ({ question, answer, customWidth }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="bg-slate-300 hover:bg-slate-200 transition-colors duration-200 cursor-pointer select-none rounded-[10px] flex justify-between items-start w-[350px] px-[20px] py-[22px] lg:w-[400px] lg:px-[25px] lg:py-[23px] group"
    >
      <div className={`${customWidth} text-left flex flex-col ${isOpen ? 'gap-[14px] lg:gap-[25px]' : 'gap-0'}`}>
        <p className={`text-[14px] lg:text-[16px] transition-all duration-200 ${isOpen ? 'font-bold text-gray-900' : 'text-gray-800 group-hover:text-black'}`}>
          {question}
        </p>
        
        {/* Adicionei uma leve animação de opacidade para a resposta aparecer de forma mais suave */}
        {isOpen && (
          <p className="text-[14px] text-gray-700 animate-[fadeIn_0.3s_ease-in-out]">
            {answer}
          </p>
        )}
      </div>

      <div className="flex-shrink-0 pt-1">
        <img
          src={isOpen ? minusIcon : plusIcon}
          alt={isOpen ? 'Fechar resposta' : 'Abrir resposta'}
          className="w-[20px] h-[20px] transition-transform duration-200 group-hover:scale-110"
        />
      </div>
    </div>
  );
};

export default FaqCard;