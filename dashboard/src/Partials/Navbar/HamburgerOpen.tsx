// IMPORT ICONS
import { ImMenu } from "react-icons/im";
import { IoCloseSharp } from "react-icons/io5";

// LIB
import { useLocation } from "react-router-dom";

// TYPE
type HamburgerOpenProps = {
    isOpen: boolean
    onClick: (e: React.MouseEvent) => void;
}

export default function HamburgerOpen(props : HamburgerOpenProps) {

    // PROPS
    const { isOpen, onClick } = props

    // PATHNAME
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <>
            {pathname !== "/login" && pathname !== "/register" ? (
                <button onClick={onClick}>
                    {isOpen ? <IoCloseSharp className="w-6 h-6" /> : <ImMenu className="w-6 h-6" />}
                </button>
            ) : null}
        </>
    )
}