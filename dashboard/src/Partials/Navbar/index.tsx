// IMPORT SUB PARTIALS NAVBAR
import Logo from "./Logo"
import HamburgerOpen from "./HamburgerOpen"
import LogoutButton from "./LogoutButton"

// TYPE
type NavbarProps = {
    isOpen: boolean
    onClick: (e: React.MouseEvent) => void; 
}

export default function Navbar(props: NavbarProps) {

    // PROPS
    const { isOpen, onClick } = props

    // NAVBAR
    return (
        <nav className="w-full fixed top-0 z-10 h-14 px-6 box-border border-b shadow-md flex items-center justify-between bg-white">
            <div className="flex items-center">
                <HamburgerOpen onClick={onClick} isOpen={isOpen} />
                <Logo />
            </div>
            <LogoutButton />
        </nav>
    )
}