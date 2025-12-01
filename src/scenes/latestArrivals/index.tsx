import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion, easeOut } from "framer-motion";
import { allWatches } from '@/data/watches';
import CardWatch from "@/components/Cards/CardWatch";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } }
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const LatestArrivals = ({ setSelectedPage }: Props) => {
  const newArrivals = allWatches
    .filter((w) => w.isNewArrival)
    .slice(-8)
    .reverse();

  return (
    <section
      id="latestarrivals"
      className="mt-10 w-5/6 mx-auto flex justify-center"
    >
      <motion.div
        className="w-full max-w-[1200px] flex flex-col items-center"
        onViewportEnter={() => setSelectedPage(SelectedPage.LatestArrivals)}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: easeOut }}
        >
          <HText>Latest Arrivals</HText>
        </motion.div>

        <motion.div
          className="
            grid justify-center
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-4 
            gap-x-6 gap-y-10 mt-8
          "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {newArrivals.map((item) => (
            <motion.div key={item.id} variants={cardVariants}>
              <CardWatch item={item} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LatestArrivals;
