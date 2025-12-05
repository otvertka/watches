import type { Watch } from "@/shared/types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import type React from "react";

interface CardWatchProps {
  item: Watch;
}

const CardWatch: React.FC<CardWatchProps> = ({ item }) => {
  return (
    <div className="relative group cursor-pointer select-none">
      <Link to={`/watches/${item.id}`}>
        {/* Карточка */}
        <div className="
          flex flex-col p-4 items-center justify-between 
          bg-black shadow-sm
          text-center overflow-hidden
          max-w-[276px] xs:max-w-[330px]
          h-[360px] xs:h-[460px] 
          transition-all duration-300
        ">
          

          <motion.img
            src={item.mainImage}
            alt={`${item.brand} ${item.model}`}
            className="
              h-64 w-full object-cover rounded-md mb-3
              transition-transform duration-500 ease-[cubic-bezier(.33,.11,.02,.99)]
              group-hover:scale-[1.06]
            "
          />


          <motion.h3
            className="text-lg font-semibold text-gray-300 
                      transition-all duration-300 group-hover:text-gray-100"
          >
            {item.brand}
          </motion.h3>


          <motion.p
            className="
              text-center text-sm font-medium text-gray-500 
              line-clamp-2 h-[40px]
              transition-all duration-300
              group-hover:-translate-y-[4px] group-hover:text-gray-300
            "
          >
            {item.model}
          </motion.p>


          <div className="
            mt-2 text-lg font-semibold text-gray-200
            transition-all duration-300 group-hover:text-white
          ">
            CHF {item.price.toLocaleString()}
          </div>
        </div>

        <motion.div
          className="
            absolute inset-0 
            bg-black/40 backdrop-blur-[2px]
            opacity-0 group-hover:opacity-100
            rounded-xl z-20 
            flex items-center justify-center
            text-white text-[17px] tracking-wide
            font-medium transition-opacity duration-300
          "
        >
          View details
        </motion.div>
      </Link>
    </div>
  );
};

export default CardWatch;
