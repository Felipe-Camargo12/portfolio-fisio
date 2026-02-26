import { useState } from 'react';
import plusIcon from '../../assets/icons/plusIcon.png';
import minusIcon from '../../assets/icons/minusIcon.png';

const FaqCard = ({ question, answer, customWidth }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
      <div className="bg-slate-300 rounded-[10px] flex justify-between items-start w-[350px] px-[20px] py-[22px] lg:w-[400px] lg:px-[25px] lg:py-[23px]">
        <div className={`${customWidth} text-left ${isOpen ? 'flex flex-col gap-[14px] lg:gap-[25px]' : ''}`}>
          <p className={`text-[14px] lg:text-[16px] ${isOpen ? 'font-bold' : ''}`}>{question}</p>
          {isOpen && (
            <p className="text-[14px]">{answer}</p>
          )}
        </div>
        <img
          onClick={() => setIsOpen(!isOpen)}
          src={isOpen ? minusIcon : plusIcon}
          alt={isOpen ? 'Fechar resposta' : 'Abrir resposta'}
          className="w-[20px] h-[20px] cursor-pointer"
        />
      </div>
  );
};

export default FaqCard;