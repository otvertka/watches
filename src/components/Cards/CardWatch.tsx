import type { Watch } from "@/shared/types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type React from "react";

interface CardWatchProps {
  item: Watch;
}

const CardWatch: React.FC<CardWatchProps> = ({ item }) => {
  return (
    <motion.div
      className="relative group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link to={`/watches/${item.id}`}>
        {/* Карточка */}
        <div className="flex flex-col p-4 bg-black rounded-lg shadow-lg text-center overflow-hidden relative">
          <motion.img
            src={item.mainImage}
            alt={`${item.brand} ${item.model}`}
            className="h-64 w-full object-cover rounded-md mb-3"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />

          <motion.h3
            className="text-lg font-semibold text-gray-400"
            initial={{ y: 0, opacity: 0.8 }}
            whileHover={{ y: -10, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {item.brand}
          </motion.h3>

          <motion.p
            className="text-sm text-gray-500"
            initial={{ y: 0, opacity: 0.8 }}
            whileHover={{ y: -10, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {item.model}
          </motion.p>

          <motion.div
            className="mt-2 text-lg font-semibold"
            initial={{ y: 0, opacity: 0.8 }}
            whileHover={{ y: -10, opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            CHF {item.price.toLocaleString()}
          </motion.div>
        </div>

        {/* Overlay */}
        <motion.div
          className="
            absolute inset-0 
            bg-black bg-opacity-60 
            backdrop-blur-sm
            rounded-lg 
            flex items-center justify-center
            text-white text-md font-semibold 
            z-20
          "
          initial={{ opacity: 0, y: -20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          View details
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default CardWatch;
// import type { Watch } from "@/shared/types";
// import { motion, useMotionValue, useTransform } from "framer-motion";
// import { Link } from "react-router-dom";
// import type React from "react";

// interface CardWatchProps {
//   item: Watch;
// }

// const CardWatch: React.FC<CardWatchProps> = ({ item }) => {
//   const x = useMotionValue(0);
//   const y = useMotionValue(0);

//   // Наклон по оси X/Y
//   const rotateX = useTransform(y, [0, 300], [10, -10]);
//   const rotateY = useTransform(x, [0, 300], [-10, 10]);

//   return (
//     <motion.div
//       className="relative cursor-pointer perspective-1000"
//       style={{ rotateX, rotateY }}
//       onMouseMove={(e) => {
//         const rect = e.currentTarget.getBoundingClientRect();
//         x.set(e.clientX - rect.left - rect.width / 2);
//         y.set(e.clientY - rect.top - rect.height / 2);
//       }}
//       onMouseLeave={() => {
//         x.set(0);
//         y.set(0);
//       }}
//     >
//       <Link to="#" onClick={(e) => e.preventDefault()}>
//         {/* Карточка */}
//         <motion.div
//           className="flex flex-col p-4 border border-gray-200 rounded-lg shadow-lg text-center overflow-hidden relative bg-white"
//           whileHover={{ scale: 1.05 }}
//           transition={{ type: "spring", stiffness: 300, damping: 20 }}
//         >
//           <motion.img
//             src={item.mainImage}
//             alt={`${item.brand} ${item.model}`}
//             className="h-64 w-full object-cover rounded-md mb-3"
//             whileHover={{ scale: 1.08 }}
//             transition={{ duration: 0.3 }}
//           />

//           <motion.h3
//             className="text-lg font-semibold text-gray-400"
//             whileHover={{ y: -8, opacity: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             {item.brand}
//           </motion.h3>

//           <motion.p
//             className="text-sm text-gray-500"
//             whileHover={{ y: -6, opacity: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             {item.model}
//           </motion.p>

//           <motion.div
//             className="mt-2 text-lg font-semibold"
//             whileHover={{ y: -6, opacity: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             CHF {item.price.toLocaleString()}
//           </motion.div>
//         </motion.div>

//         {/* Overlay с плавным slide-in сверху */}
//         <motion.div
//           className="
//             absolute inset-0 
//             bg-black bg-opacity-60 
//             backdrop-blur-sm
//             rounded-lg 
//             flex items-center justify-center
//             z-20
//           "
//           initial={{ opacity: 0, y: -50 }}
//           whileHover={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.3 }}
//         >
//           <motion.span
//             className="text-xl font-bold text-white"
//             initial={{ scale: 0.8, opacity: 0 }}
//             whileHover={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.3 }}
//           >
//             View details
//           </motion.span>
//         </motion.div>
//       </Link>
//     </motion.div>
//   );
// };

// export default CardWatch;
