import { CheckCircle, Activity, HeartPulse, ShieldCheck, SmilePlus } from 'lucide-react';

const ResultsDesktopCard = () => {
  return (
    <div className="absolute w-1/2 left-0 flex justify-end pr-[120px]">
      <div className="flex flex-col gap-[38px] items-start w-[505px]">
        <div className="flex items-center gap-[20px]">
          <CheckCircle className="w-[40px] h-[40px] text-secondary" />
          <h1 className="text-[40px] font-bold text-gray-900">
            Por que fazer Fisio?
          </h1>
        </div>

        <div className="flex gap-[30px] items-center">
          <Activity className="w-[40px] h-[40px] text-secondary" />
          <p className="text-[20px] text-gray-700">
            Alívio de <span className="font-bold text-gray-900">dores</span>
          </p>
        </div>

        <div className="flex gap-[30px] items-center">
          <HeartPulse className="w-[40px] h-[40px] text-secondary" />
          <p className="text-[20px] text-gray-700">
            Recuperação da <span className="font-bold text-gray-900">mobilidade e força</span>
          </p>
        </div>

        <div className="flex gap-[30px] items-center">
          <ShieldCheck className="w-[40px] h-[40px] text-secondary" />
          <p className="text-[20px] text-gray-700">
            Prevenção de <span className="font-bold text-gray-900">lesões e desgastes</span>
          </p>
        </div>

        <div className="flex gap-[30px] items-center">
          <SmilePlus className="w-[40px] h-[40px] text-secondary" />
          <p className="text-[20px] text-gray-700">
            Mais <span className="font-bold text-gray-900">qualidade de vida</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResultsDesktopCard;