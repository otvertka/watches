const brands = [
    "ROLEX",
    "OMEGA",
    "AUDEMARS PIGUET",
    "PATEK PHILIPPE",
    "RICHARD MILLE",
    "BREITLING",
    "TUDOR",
    "VACHERON CONSTANTIN",
  ];
  
  const BrandsMarquee = () => {
    return (
      <div className="relative w-full overflow-hidden py-10 bg-black/40 backdrop-blur-md shadow-xl mt-10">
  
        {/* Левый fade */}
        <div className="fade-left" />
  
        {/* Правый fade */}
        <div className="fade-right" />
  
        {/* Центр glow */}
        <div className="center-glow" />
  
        <div className="marquee text-gray-300 text-2xl tracking-[0.3em] font-light whitespace-nowrap relative">
          {brands.map((b, i) => (
            <span key={i} className="mx-14 inline-block brand-item">
              {b}
            </span>
          ))}
  
          {brands.map((b, i) => (
            <span key={`copy-${i}`} className="mx-14 inline-block brand-item">
              {b}
            </span>
          ))}
        </div>
      </div>
    );
  };
  
  
  export default BrandsMarquee;
  
  