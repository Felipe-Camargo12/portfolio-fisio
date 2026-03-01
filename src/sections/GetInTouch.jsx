import Mobile from '../assets/backgrounds/bannerMb.png';
import Desktop from '../assets/backgrounds/banner.png';
import GetInTouchCard from '../components/cards/GetInTouchCard';

const GetInTouch = () => {
  const isMobile = window.innerWidth < 1024;

  return (
    <section className="w-full flex justify-center items-center py-20 bg-no-repeat bg-cover" style={isMobile ? { backgroundImage: `url(${Mobile})` }: { backgroundImage: `url(${Desktop})` }}>
      <GetInTouchCard />
    </section>
  );
};

export default GetInTouch;