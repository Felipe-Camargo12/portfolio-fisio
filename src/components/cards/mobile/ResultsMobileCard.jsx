import pesinho from '../../../assets/icons/pesinho.png';
import balanca from '../../../assets/icons/balanca.png';
import maca from '../../../assets/icons/maca.png';
import garfinho from '../../../assets/icons/garfinho.png';
import check from '../../../assets/icons/check.png';

const ResultsMobileCard = () => {
  return (
    <div className="flex flex-col gap-[30px] items-start w-[298px]">
      <div className="flex items-center gap-[10px]">
        <h1 className="text-[25px]">
            Qualitativos
        </h1>
        <img src={check} alt="check icon" className="w-[40px] h-[40px]" />
      </div>

      <div className="flex gap-[20px] items-center">
        <img src={pesinho} alt="ícone de pesinho" className="w-[30px] h-[30px]" />
        <p className="text-[16px]">
          Lorem <span className="font-bold">ipsum</span>
        </p>
      </div>

      <div className="flex gap-[20px] items-center">
        <img src={balanca} alt="ícone de pesinho" className="w-[30px] h-[30px]" />
        <p className="text-[16px]">
          Lorem ipsum <span className="font-bold">dolor sit amet</span>
        </p>
      </div>

      <div className="flex gap-[20px] items-center">
        <img src={maca} alt="ícone de pesinho" className="w-[30px] h-[30px]" />
        <p className="text-[16px]">
          Lorem ipsum <span className="font-bold">amet</span>
        </p>
      </div>

      <div className="flex gap-[20px] items-center">
        <img src={garfinho} alt="ícone de pesinho" className="w-[30px] h-[30px]" />
        <p className="text-[16px]">
          Lorem <span className="font-bold">ipsum</span>
        </p>
      </div>
    </div>
  );
};

export default ResultsMobileCard;