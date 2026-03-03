import { CheckCircle, Activity, HeartPulse, ShieldCheck, SmilePlus } from 'lucide-react';

const ResultsMobileCard = () => {
  return (
    <div className="flex flex-col gap-[30px] items-start w-[298px]">
      <div className="flex items-center gap-[10px]">
        <CheckCircle className="w-[32px] h-[32px] secondary" />
        <h1 className="text-[25px] font-bold text-gray-900">
          Por que fazer Fisio?
        </h1>
      </div>

      <div className="flex gap-[20px] items-center">
        <Activity className="w-[30px] h-[30px] secondary" />
        <p className="text-[16px] text-gray-700">
          Alívio de <span className="font-bold text-gray-900">dores</span>
        </p>
      </div>

      <div className="flex gap-[20px] items-center">
        <ShieldCheck className="w-[30px] h-[30px] secondary" />
        <p className="text-[16px] text-gray-700">
          Prevenção de <span className="font-bold text-gray-900">lesões e desgastes</span>
        </p>
      </div>

      <div className="flex gap-[20px] items-center">
        <HeartPulse className="w-[30px] h-[30px] secondary" />
        <p className="text-[16px] text-gray-700">
          Recuperação da <span className="font-bold text-gray-900">mobilidade e força</span>
        </p>
      </div>

      <div className="flex gap-[20px] items-center">
        <SmilePlus className="w-[30px] h-[30px] secondary" />
        <p className="text-[16px] text-gray-700">
          Mais <span className="font-bold text-gray-900">qualidade de vida</span>
        </p>
      </div>
    </div>
  );
};

export default ResultsMobileCard;