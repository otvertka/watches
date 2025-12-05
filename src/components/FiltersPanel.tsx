import { allWatches } from "@/data/watches";
import type { FiltersType } from "@/shared/types";
import React, { useMemo } from "react";

type Props = {
  filters: FiltersType;
  setFilters: React.Dispatch<React.SetStateAction<FiltersType>>;
};

const FiltersPanel: React.FC<Props> = ({ filters, setFilters }) => {
    const brands = ["All", "Rolex", "Patek Philippe", "AP", "Omega"];

  return (
    <div className="flex flex-wrap gap-4 items-center justify-around mt-6">


      <select
        className="px-3 py-2 rounded bg-neutral-500 text-white outline-none"
        value={filters.brand}
        onChange={(e) => setFilters((prev) => ({ ...prev, brand: e.target.value }))}
      >
        {brands.map((b) => (
            <option key={b} value={b}>
            {b}
          </option>
        ))}
      </select>

      <select
        className="px-3 py-2 rounded bg-neutral-500 text-white outline-none"
        value={filters.sort}
        onChange={(e) =>
            setFilters((prev) => ({ ...prev, sort: e.target.value as FiltersType["sort"] }))
        }
      >
        <option value="default">All</option>
        <option value="new">New arrivals</option>
        <option value="price-asc">Price ↑</option>
        <option value="price-desc">Price ↓</option>
      </select>


<input
  className="px-3 py-2 rounded bg-neutral-500 text-white outline-none"
  placeholder="Search by reference ..."
  value={filters.search}
  onChange={(e) =>
    setFilters((prev) => ({ ...prev, search: e.target.value }))
  }
/>
    </div>
  );
};

export default FiltersPanel;
