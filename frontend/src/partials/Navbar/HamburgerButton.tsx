import { ImMenu } from "react-icons/im";
import { RiCloseLine } from "react-icons/ri";
import { motion } from "framer-motion";

export default function HamburgerButton({ onClick, isOpen }: { onClick: (e: React.MouseEvent) => void, isOpen: boolean }) {
    return (
        <button onClick={onClick} className="md:hidden">
            {isOpen 
                ? (
                    <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 180 }}
                        transition={{ duration: 0.5 }}
                    >
                        <RiCloseLine className="w-6 h-6" />
                    </motion.div>
                ) 
                : (
                    <motion.div
                        initial={{ rotate: 180 }}
                        animate={{ rotate: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <ImMenu className="w-6 h-6" />
                    </motion.div>
                )
            }
        </button>
    )
}
