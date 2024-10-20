// LIBS
import { useState } from "react";

// PARTIALS
import Navbar from "../Partials/Navbar"
import Footer from "../Partials/Footer"
import Logo from "../Partials/Logo"
import HamburgerButton from "../Partials/HamburgerButton";
import DarkModeButton from "../Partials/DarkModeButton";

// ICONS
import { FaReact } from "react-icons/fa";

// MAIN LAYOUT
export default function MainLayout({ children }: { children: React.ReactNode }) {

    // STATE
    const [isHamburgerButtonActive, setIsHamburgerButtonActive] = useState(false)

    // HANDLERS
    const toggleHamburgerButton = (e: React.MouseEvent) => {
        e.preventDefault()
        setIsHamburgerButtonActive(!isHamburgerButtonActive)
    }
    
    // RENDER
    return (
        <>
            <Navbar fixed={true} container={true} className="bg-white dark:bg-black" >
                <Logo icon={<FaReact size={30} className="animate-spin duration-1000" />} name="YUDHA DEV" to={"/"}/>
                <div className="flex items-center gap-2.5">
                    <DarkModeButton />
                    <HamburgerButton isActive={isHamburgerButtonActive} onClick={toggleHamburgerButton} className="border border-gray-500 p-1" />
                </div>
            </Navbar>
            <main className="w-full min-h-screen py-14">
                {children}
            </main>
            <Footer fixed={true} container={true} className="bg-white">
                <Logo icon={<FaReact size={30} className="animate-spin duration-1000" />} name="YUDHA DEV" to={"/"}/>
            </Footer>
        </>
    )
}