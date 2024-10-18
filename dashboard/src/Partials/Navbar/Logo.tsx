// IMPORT ICON
import { RxDashboard } from "react-icons/rx";

// LIBS
import { useLocation } from "react-router-dom";

export default function Logo() {

    // PATHNAME
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <div className="flex items-center gap-2">
            {pathname === "/login" || pathname === "/register" ? (
                <>
                    <RxDashboard className="w-6 h-6" />
                    <h1 className="hidden md:block font-semibold text-lg">DASHBOARD</h1>
                </>
            ) : null}
        </div>
    )
}