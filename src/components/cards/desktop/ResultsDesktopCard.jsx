import { CheckCircle, Activity, HeartPulse, ShieldCheck, SmilePlus } from 'lucide-react';

const ResultsDesktopCard = () => {
  return (
    <div className="flex flex-col gap-6 xl:gap-[38px] items-start w-full max-w-[420px] xl:max-w-[505px] z-10">
      <div className="flex items-center gap-4 xl:gap-[20px]">
        <CheckCircle className="w-8 h-8 xl:w-[40px] xl:h-[40px] text-secondary flex-shrink-0" />
        <h1 className="text-3xl xl:text-[40px] font-bold text-primary leading-tight">
          Por que fazer Fisio?
        </h1>
      </div>

      <div className="flex gap-4 xl:gap-[30px] items-center">
        <Activity className="w-8 h-8 xl:w-[40px] xl:h-[40px] text-secondary flex-shrink-0" />
        <p className="text-lg xl:text-[20px] text-gray-700">
          Alívio de <span className="font-bold text-gray-900">dores</span>
        </p>
      </div>

      <div className="flex gap-4 xl:gap-[30px] items-center">
        <ShieldCheck className="w-8 h-8 xl:w-[40px] xl:h-[40px] text-secondary flex-shrink-0" />
        <p className="text-lg xl:text-[20px] text-gray-700">
          Prevenção de <span className="font-bold text-gray-900">lesões e desgastes</span>
        </p>
      </div>

       <div className="flex gap-4 xl:gap-[30px] items-center">
        <HeartPulse className="w-8 h-8 xl:w-[40px] xl:h-[40px] text-secondary flex-shrink-0" />
        <p className="text-lg xl:text-[20px] text-gray-700">
          Recuperação da <span className="font-bold text-gray-900">mobilidade e força</span>
        </p>
      </div>

      <div className="flex gap-4 xl:gap-[30px] items-center">
        <SmilePlus className="w-8 h-8 xl:w-[40px] xl:h-[40px] text-secondary flex-shrink-0" />
        <p className="text-lg xl:text-[20px] text-gray-700">
          Mais <span className="font-bold text-gray-900">qualidade de vida</span>
        </p>
      </div>
    </div>
  );
};

export default ResultsDesktopCard;