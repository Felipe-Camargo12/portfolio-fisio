import pesinho from '../../../assets/icons/pesinho.png';
import balanca from '../../../assets/icons/balanca.png';
import maca from '../../../assets/icons/maca.png';
import garfinho from '../../../assets/icons/garfinho.png';
import check from '../../../assets/icons/check.png';

const ResultsDesktopCard = () => {
  return (
    <div className="absolute w-1/2 left-0 flex justify-end pr-[120px]">
      <div className="flex flex-col gap-[38px] items-start w-[505px]">
        <div className="flex items-center gap-[20px]">
          <h1 className="text-[40px]">
            Qualitativos
          </h1>
          <img src={check} alt="check icon" className="w-[40px] h-[40px]" />
        </div>

        <div className="flex gap-[30px] items-center">
          <img src={pesinho} alt="ícone de pesinho" className="w-[40px] h-[40px]" />
          <p className="text-[20px]">
            Lorem <span className="font-bold">ipsum</span>
          </p>
        </div>

        <div className="flex gap-[30px] items-center">
          <img src={balanca} alt="ícone de pesinho" className="w-[40px] h-[40px]" />
          <p className="text-[20px]">
            Lorem ipsum <span className="font-bold">dolor sit amet</span>
          </p>
        </div>

        <div className="flex gap-[30px] items-center">
          <img src={maca} alt="ícone de pesinho" className="w-[40px] h-[40px]" />
          <p className="text-[20px]">
            Lorem ipsum <span className="font-bold">amet</span>
          </p>
        </div>

        <div className="flex gap-[30px] items-center">
          <img src={garfinho} alt="ícone de pesinho" className="w-[40px] h-[40px]" />
          <p className="text-[20px]">
            Lorem <span className="font-bold">ipsum</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultsDesktopCard;