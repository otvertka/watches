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

    // Секции внутри Home
    if (page === "Home" || page === "Latest arrivals") {
      if (location.pathname === "/") {
        const el = document.getElementById(lowerPage);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/", { state: { scrollTo: lowerPage } });
      }
      return;
    }

    // Обычная страница
    navigate("/" + lowerPage);
  };

  const isActive = selectedPage === page;

  return (
    <button
      onClick={handleClick}
      className={`
        nav-link
        uppercase tracking-wide
        transition-colors duration-300
        ${isActive ? "text-gray-600 active" : "text-gray-400 hover:text-gray-200"}
      `}
    >
      {page}
    </button>
  );
};

export default Link;
