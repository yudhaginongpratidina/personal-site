import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

type HamburgerButtonProps = {
    isActive: boolean
    onClick: (e: React.MouseEvent) => void;
    className?: string
}

export default function HamburgerButton(props : HamburgerButtonProps) {

    const { isActive, onClick, className } = props

    return (
        <button onClick={onClick} className={`md:hidden ${className}`}>
            { isActive ? <IoMdClose size={24} /> : <GiHamburgerMenu size={24} />}
        </button>
    )
}