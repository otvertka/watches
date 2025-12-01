import Footer from "@/scenes/footer";
import Navbar from "@/scenes/navbar"
import { SelectedPage } from "@/shared/types";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";



const RootLayout = () => {
    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  
    useEffect(()=>{
      const handleScroll = () => {
        if (window.scrollY === 0) {
          setIsTopOfPage(true);
          setSelectedPage(SelectedPage.Home)
        }
        if (window.screenY !== 0) setIsTopOfPage(false);
      }
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll) 
    },[])
  return (
    <div className="app bg-gray-300 min-h-screen flex flex-col">
    <Navbar 
      isTopOfPage = {isTopOfPage}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}/>
      <div className="flex-grow">

    <Outlet/>
      </div>
    <Footer/>
  </div>
  )
}

export default RootLayout