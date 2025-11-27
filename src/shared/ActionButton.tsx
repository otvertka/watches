import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types"
import type React from "react"

type Props = {
    children: React.ReactNode;
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink
        className="rounded-md bg-gray-500 px-10 py-2 hover:bg-gray-700 text-black"
        onClick={()=> setSelectedPage(SelectedPage.Contact)}
        href={`#${SelectedPage.Contact}`}
    >
        {children}
    </AnchorLink>
  )
}

export default ActionButton