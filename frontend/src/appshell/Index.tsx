// CLIENT COMPONENTS
"use client";

// LIBS
import { useState } from "react";

// PARTIALS
import Navbar from "@/partials/Navbar/Index"
import Brand from "@/partials/Navbar/Brand"
import HamburgerButton from "@/partials/Navbar/HamburgerButton"
import Footer from "@/partials/Footer/Index";
import FooterBrand from "@/partials/Footer/FooterBrand";

export default function AppShell({children}: {children: React.ReactNode}) {

    // STATE AND HANDLER HAMBURGER BUTTON
    const [isOpen, setIsOpen] = useState(false);

    const handleHamburgerClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    }

    // RENDER
    return (
        <>
            <Navbar>
                <Brand name="YUDHA - DEV" />
                <HamburgerButton onClick={handleHamburgerClick} isOpen={isOpen} />
            </Navbar>
            {children}
            <Footer>
                <FooterBrand name="YUDHA - DEV" />
            </Footer>
        </>
    )
}