// IMPORT ICONS
import { ImMenu } from "react-icons/im";
import { IoCloseSharp } from "react-icons/io5";

// LIB
import { useLocation } from "react-router-dom";

// TYPE
type HamburgerCloseProps = {
    isOpen: boolean
    onClick: (e: React.MouseEvent) => void;
}

export default function HamburgerClose(props : HamburgerCloseProps) {

    // PROPS
    const { isOpen, onClick } = props

    // PATHNAME
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <>
            {pathname !== "/login" && pathname !== "/register" ? (
                <button onClick={onClick} className="w-full h-14 px-4 flex items-center justify-between border-b shadow-md bg-black text-white">
                    <h1 className="font-semibold text-lg">DASHBOARD</h1>
                    {isOpen ? <IoCloseSharp className="w-6 h-6" /> : <ImMenu className="w-6 h-6" />}
                </button>
            ) : null}
        </>
    )
}