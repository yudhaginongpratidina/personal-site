// IMPORT PARTIALS
import Navbar from "../Partials/Navbar"
import Aside from "../Partials/Aside/Index"
import Footer from "../Partials/Footer"

// LIBS
import { useState } from "react"

export default function MainLayout({ children }: { children: React.ReactNode }) {

    // STATE
    const [isOpen, setIsOpen] = useState(false)

    // HANDLERS
    const handleHamburger = (e: React.MouseEvent) => {
        e.preventDefault()
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Navbar isOpen={isOpen} onClick={handleHamburger} />
            <Aside isOpen={isOpen} onClick={handleHamburger} />
            {children}
            <Footer />
        </>
    )
}