// PARTIALS
import Navbar from "../Partials/Navbar"
import Footer from "../Partials/Footer";
import Logo from "../Partials/Logo"

// ICONS
import { FaReact } from "react-icons/fa";

// MAIN LAYOUT
export default function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar fixed={true} container={true} className="bg-white" >
                <Logo
                    icon={<FaReact size={30} className="animate-spin duration-1000" />}
                    name="YUDHA DEV"
                    to={"/"}
                />
            </Navbar>
            {children}
            <Footer fixed={true} container={true} className="bg-white">
                <Logo
                    icon={<FaReact size={30} className="animate-spin duration-1000" />}
                    name="YUDHA DEV"
                    to={"/"}
                />
            </Footer>
        </>
    )
}