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
      <div className="w-full overflow-hidden py-8 bg-black">
        <div className="marquee whitespace-nowrap text-gray-400 text-xl tracking-widest">
          {brands.map((b, i) => (
            <span key={i} className="mx-10 inline-block">
              {b}
            </span>
          ))}
          {brands.map((b, i) => (
            <span key={`copy-${i}`} className="mx-10 inline-block">
              {b}
            </span>
          ))}
        </div>
      </div>
    );
  };
  
  export default BrandsMarquee;
  