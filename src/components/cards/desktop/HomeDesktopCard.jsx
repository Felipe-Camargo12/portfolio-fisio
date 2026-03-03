import HomeButton from '../../shared/HomeButton';

const HomeDesktopCard = () => {
  return (
    <div className="flex flex-col items-center text-center gap-7 rounded-xl p-5">
      <p className="text-[22px] text-white">CREFITO-60.520.561/0001</p>

      <h1 className="text-[52px] font-light text-white leading-snug">
        <span className="font-bold">Fisioterapeuta</span><br />
        Geovana Santos
      </h1>

      <p className="text-[22px] text-white">
        Reabilitação e Movimento <br />
        com Propósito.
      </p>

      <HomeButton />
    </div>
  );
};

export default HomeDesktopCard;