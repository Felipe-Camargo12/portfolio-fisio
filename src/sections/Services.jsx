import { Home, Activity, HeartHandshake, Stethoscope, HandHeart } from "lucide-react";
import ServiceCard from "../components/cards/ServiceCard";

const Services = () => {
  return (
    <section id="servicos" className="w-full flex flex-col justify-center items-center py-20 gap-[75px] lg:gap-[80px]">
      {/* Título da seção */}
      <div className="flex flex-col gap-4 justify-center items-center">
        <h1 className="text-[20px] lg:text-[42px] font-bold">
          Meus Serviços
        </h1>
        <div className="w-[80px] h-[1px] bg-jet lg:w-[160px]"></div>
      </div>

      {/* Primeira linha de serviços */}
      <div className="flex flex-col items-start justify-center gap-[75px] lg:flex-row">
        <ServiceCard
          title="Atendimento a Domicílio"
          description="Levo o tratamento até você. Conforto e praticidade para realizar sua reabilitação no seu próprio ambiente, com total segurança."
          icon={<Home className="w-12 h-12 text-[#ed1a1a]" />}
          customWidth="w-[268px] lg:w-[314px]"
        />

        <ServiceCard
          title="Pilates Solo"
          description="Exercícios focados no fortalecimento muscular, flexibilidade, controle da respiração e correção postural para prevenção e tratamento de lesões."
          icon={<Activity className="w-12 h-12 text-[#ed1a1a]" />}
          customWidth="w-[280px] lg:w-[362px]"
        />

        <ServiceCard
          title="Geriatria"
          description="Fisioterapia especializada na terceira idade, focada em manter a independência funcional, melhorar o equilíbrio e garantir qualidade de vida."
          icon={<HeartHandshake className="w-12 h-12 text-[#ed1a1a]" />}
          customWidth="w-[285px] lg:w-[362px]"
        />
      </div>

      {/* Segunda linha de serviços */}
      <div className="flex flex-col items-start justify-center gap-[75px] lg:flex-row">
        <ServiceCard
          title="Reabilitação Pós-Operatório"
          description="Acompanhamento dedicado para uma recuperação cirúrgica segura e eficaz, focando na restauração dos movimentos e alívio da dor."
          icon={<Stethoscope className="w-12 h-12 text-[#ed1a1a]" />}
          customWidth="w-[260px] lg:w-[308px]"
        />

        <ServiceCard
          title="Terapia Manual"
          description="Técnicas manuais específicas para tratar disfunções articulares e musculares, promovendo relaxamento, mobilidade e alívio imediato de tensões."
          icon={<HandHeart className="w-12 h-12 text-[#ed1a1a]" />}
          customWidth="w-[280px] lg:w-[362px]"
        />
      </div>
    </section>
  );
};

export default Services;