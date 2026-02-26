import legumesMobile from '../assets/backgrounds/bgMobile.jpg';
import legumesDesktop from '../assets/backgrounds/bgDesktop.jpg';
import GetInTouchCard from '../components/cards/GetInTouchCard';

const GetInTouch = () => {
  const isMobile = window.innerWidth < 1024;

  return (
    <section className="w-full flex justify-center items-center py-20 bg-no-repeat bg-cover" style={isMobile ? { backgroundImage: `url(${legumesMobile})` }: { backgroundImage: `url(${legumesDesktop})` }}>
      <GetInTouchCard />
    </section>
  );
};

export default GetInTouch;