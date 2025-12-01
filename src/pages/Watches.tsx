
import type {Variants} from "framer-motion";
import React, { useMemo, useState, useEffect } from "react";
import CardWatch from "@/components/Cards/CardWatch";
import FiltersPanel from "@/components/FiltersPanel";
import { allWatches } from "@/data/watches";
import { motion, easeOut } from "framer-motion";

export type FiltersType = {
  search: string;
  brand: string;
  sort: "default" | "new" | "price-asc" | "price-desc";
};

// Вспомогательная функция: разбиваем массив на ряды
const chunkArray = <T,>(arr: T[], size: number): T[][] => {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const rowVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

const Watches: React.FC = () => {
  const [filters, setFilters] = useState<FiltersType>({
    search: "",
    brand: "All",
    sort: "default",
  });

  const [columns, setColumns] = useState<number>(4);

  // Динамическое определение колонок по ширине окна
  const updateColumns = () => {
    const w = window.innerWidth;
    if (w < 480) setColumns(1);
    else if (w < 768) setColumns(2);
    else setColumns(4);
  };

  useEffect(() => {
    updateColumns(); // при монтировании
    window.addEventListener("resize", updateColumns); // при ресайзе
    return () => window.removeEventListener("resize", updateColumns);
  }, []);

  const filtered = useMemo(() => {
    const base = allWatches.slice();
    const byRef = base.filter((w) =>
      w.details.reference.toLowerCase().includes(filters.search.trim().toLowerCase())
    );
    const byBrand = filters.brand === "All" ? byRef : byRef.filter((w) => w.brand === filters.brand);

    let result = byBrand.slice();
    if (filters.sort === "price-asc") result.sort((a, b) => a.price - b.price);
    else if (filters.sort === "price-desc") result.sort((a, b) => b.price - a.price);
    else if (filters.sort === "new") result.sort((a, b) => Number(b.isNewArrival) - Number(a.isNewArrival));

    return result;
  }, [filters]);

  const rows = chunkArray(filtered, columns);

  return (
    <section className="mt-44 w-5/6 mx-auto flex flex-col items-center">
      <h1 className="text-3xl mb-4">All Watches</h1>
      <FiltersPanel filters={filters} setFilters={setFilters} />

      <div className="flex flex-col gap-8 mt-8 w-full">
        {rows.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center`}
            variants={rowVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {row.map((item) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
              >
                <CardWatch item={item} />
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Watches;
