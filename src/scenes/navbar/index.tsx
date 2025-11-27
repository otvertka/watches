import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"; 
import Link from "./Link";
import type { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";

import Logo from "@/assets/watch_logo.png"


type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage:(value: SelectedPage)=> void;
}

const Navbar = ({isTopOfPage,selectedPage, setSelectedPage}: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const navbarBackground = isTopOfPage ? "" : "bg-black drop-shadow";

return (
    <nav>
        <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                {/* left side */}

                    <img alt="logo" src={Logo} className="w-6 h-6"/>

                    {/* right side */}
                    {isAboveMediumScreens ? (

                        <div className={`${flexBetween} w-full`}>
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            <Link 
                                page ="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                                <Link 
                                    page ="Latest arrivals"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                    />
                            <Link 
                                page ="Watches"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                            <Link 
                                page ="Disoveries"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                            <Link 
                                page ="About us"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                            <Link 
                                page ="Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                        </div>
                            <div className={`${flexBetween} gap-2`}>
                                <a href="#">FB</a>
                                <a href="#">INSTAGRAM</a>
                            </div>
                    </div>)
                    : (
                        <button 
                            className="rounded-full bg-black p-2"
                            onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                            <Bars3Icon className="h-6 w-6 text-white"/>
                        </button>
                    )}
            </div>
        </div>

        {/* MOBILE MENU MODAL */}
        {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-gray-100 drop-shadow-xl">
                {/* CLOSE ICON */}
                <div className="flex justify-end p-12">
                    <button onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className="h-6 w-6 text-gray-400"/>
                    </button>
                </div>

                {/* MENU ITEMS */}
                <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                            <Link 
                                page ="Home"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                                <Link 
                                    page ="Latest arrivals"
                                    selectedPage={selectedPage}
                                    setSelectedPage={setSelectedPage}
                                    />
                            <Link 
                                page ="Watches"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                            <Link 
                                page ="Disoveries"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                            <Link 
                                page ="About us"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                            <Link 
                                page ="Contact"
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                />
                        </div>
                            <div className="flex justify-center gap-4 pt-20">
                                <a href="#">FB</a>
                                <a href="#">INSTAGRAM</a>
                            </div>
                    </div>
        )}
    </nav>
  )
}
export default Navbar;