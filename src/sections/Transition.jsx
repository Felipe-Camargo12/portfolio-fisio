import onda from '../assets/backgrounds/waveDown.png';

const Transition = () => {
  return (
    <section className="w-full h-[150px] lg:h-[289px] relative bg-transparent">
      <img src={onda} alt="Onda" className="absolute top-0 left-0 w-full object-contain pointer-events-none" />
    </section>
  );
};

export default Transition;