import Section1 from '@/components/home/section1';
import Section2 from '@/components/home/section2';
import Section3 from '@/components/home/section3';

const Home = () => {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth ">
      <div className="snap-start h-screen">
        <Section1 />
      </div>
      <div className="snap-start h-screen">
        <Section2 />
      </div>
      <div className="snap-start h-screen">
        <Section3 />
      </div>
    </div>
  );
};

export default Home;
