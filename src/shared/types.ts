export enum SelectedPage {
    Home ="home",
    LatestArrivals ="latestarrivals",
    Watches = "watches",
    Discoveries = "discoveries",
    AboutUs = "aboutus",
    Contact ="contact"
  }

  export interface WatchDetails {
    movement: string;
    case: string;
    braceletType: string;
    year: number;
    condition: string;
    box: boolean;
    warranty: boolean;
    diameter: number;
    reference: string;
  }
  
  export interface Watch {
    id: string;
    brand: string;
    model: string;
    price: number;
    
    mainImage: string;
    images: string[];
  
    description: string;
    details: WatchDetails;
  
    isNewArrival?: boolean;
  }

// Типы фильтров
export type FiltersType = {
  search: string; // ищем только по reference
  brand: string;  // 'All' или имя бренда
  sort: "default" | "new" | "price-asc" | "price-desc";
};