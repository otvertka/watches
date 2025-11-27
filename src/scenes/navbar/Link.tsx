import { SelectedPage } from "@/shared/types";
import { useLocation, useNavigate } from "react-router-dom";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const lowerPage = page.toLowerCase().replace(" ", "");
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = () => {
    setSelectedPage(page as SelectedPage);

    // Внутренние секции Home
    if (page === "Home" || page === "Latest arrivals") {
      if (location.pathname === "/") {
        const element = document.getElementById(lowerPage);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/", { state: { scrollTo: lowerPage } });
      }
      return;
    }

    // Отдельные страницы
    navigate("/" + lowerPage);
  };

  const isActive = selectedPage === page;

  return (
    <button
      onClick={handleClick}
      className={`
        nav-link
        uppercase tracking-wide
        transition-all duration-300
        ${isActive ? "text-white active" : "text-gray-400"}
        hover:text-gray-600
      `}
    >
      {page}
    </button>
  );
};

export default Link;
