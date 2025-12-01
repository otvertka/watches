import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types';
import { motion } from 'framer-motion';
import LatestArrivals from '../latestArrivals';

import { useNavigate } from "react-router-dom";
import BrandsMarquee from '@/components/BrandsMarquee';
import HomeGallery from '@/components/HomeGallerey';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navigate = useNavigate();

  return (
    <section id="home" className="py-24">

      <motion.div
        className="
          mx-auto w-5/6
          flex flex-col md:flex-row
          items-center justify-between
          gap-12 py-20
        "
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >

        {/* LEFT — GALLERY (always first visually) */}
        <div className="flex justify-center w-full md:w-1/2">
          <HomeGallery />
        </div>

        {/* RIGHT — TEXT + BUTTON */}
        <div className="
          flex flex-col items-center md:items-start
          text-center md:text-left gap-4 md:w-1/2
        ">
          <h1 className="uppercase text-white text-3xl tracking-wide">
            Brand Name
          </h1>

          <div className="text-gray-500">——————</div>

          <h3 className="text-white text-lg">
            showroom open by appointment
          </h3>

          {/* BUTTON */}
          <div className="mt-4">
            <button
              onClick={() => navigate("/watches")}
              className="px-8 py-3 bg-white text-black rounded-md hover:bg-gray-200 transition"
            >
              The collection
            </button>
          </div>
        </div>
      </motion.div>

      <BrandsMarquee />

      <LatestArrivals setSelectedPage={setSelectedPage} />
      {/* <Footer /> */}
    </section>
  );
};

export default Home;
