import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { allWatches } from '@/data/watches';
import CardWatch from "@/components/Cards/CardWatch";
import ActionButton from "@/shared/ActionButton";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
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
    <section id="latestarrivals" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.LatestArrivals)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>Latest Arrivals</HText>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {newArrivals.map((item) => (
            <CardWatch key={item.id} item={item} />
          ))}
        </motion.div>

        <ActionButton setSelectedPage={setSelectedPage}>
          All Watches
        </ActionButton>
      </motion.div>
    </section>
  );
};

export default LatestArrivals;
