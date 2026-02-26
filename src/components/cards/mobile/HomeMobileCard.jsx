import HomeButton from '../../shared/HomeButton';

const HomeMobileCard = () => {
  return (
    <div className="flex flex-col items-center gap-7">
      <p className="text-sm text-black">CNPJ-60.520.561/0001-43</p>

      <h1 className="text-xl font-normal text-black leading-snug">
        <span className="font-bold">Fisioterapeuta</span><br />
        Geovana Santos
      </h1>

      <p className="text-sm text-black leading-snug">
        Reabilitação e Movimento <br />
        com Propósito.
      </p>

      <HomeButton />
    </div>
  );
};

export default HomeMobileCard;