import useMediaQuery from '@/hooks/useMediaQuery';
import ActionButton from '@/shared/ActionButton';
import { SelectedPage } from '@/shared/types';
import HomeCarousel from '@/assets/carous.jpg';
import { motion } from 'framer-motion';
import LatestArrivals from '../latestArrivals';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section id="home" className="py-24">
      <motion.div
        className="flex flex-col md:flex-row mx-auto py-20 w-5/6 h-5/6 bg-black items-center justify-around text-center gap-4"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* LEFT — IMAGE */}
        <div>
          <img alt="carousel" src={HomeCarousel} />
        </div>

        {/* RIGHT — TEXT */}
        <div className="flex flex-col gap-4">
          <h1 className="uppercase text-white">Brand Name</h1>
          <div>----------------</div>
          <h3 className="text-white">showroom open by appointment</h3>

          <ActionButton setSelectedPage={setSelectedPage}>
            The collection
          </ActionButton>
        </div>
      </motion.div>

      <LatestArrivals setSelectedPage={setSelectedPage} />
    </section>
  );
};

export default Home;
