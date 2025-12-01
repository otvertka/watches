type Props = {
    isOpen: boolean;
    toggle: () => void;
  };
  
  const BurgerButton = ({ isOpen, toggle }: Props) => {
    return (
      <button
        onClick={toggle}
        className="relative w-8 h-8 flex flex-col justify-between items-center z-50 group"
      >
        <span
          className={`block w-full h-[3px] bg-white rounded transition-all duration-300 
          ${isOpen ? "rotate-45 translate-y-[9px]" : ""}`}
        ></span>
  
        <span
          className={`block w-full h-[3px] bg-white rounded transition-all duration-300
          ${isOpen ? "opacity-0" : ""}`}
        ></span>
  
        <span
          className={`block w-full h-[3px] bg-white rounded transition-all duration-300
          ${isOpen ? "-rotate-45 -translate-y-[9px]" : ""}`}
        ></span>
      </button>
    );
  };
  
  export default BurgerButton;
  