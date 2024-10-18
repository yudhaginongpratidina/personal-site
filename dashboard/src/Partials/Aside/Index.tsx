// SUB PARTIALS ASIDE
import HamburgerClose from "./HamburgerClose";
import { motion } from "framer-motion"; // Import motion

// TYPE
type AsideProps = {
    isOpen: boolean;
    onClick: (e: React.MouseEvent) => void;
}

// PARTIAL ASIDE
export default function Aside(props: AsideProps) {
    const { isOpen, onClick } = props;

    return (
        <motion.aside
            initial={{ x: '-100%', opacity: 0 }}                            // Animasi awal: di luar layar dan transparan
            animate={{ x: isOpen ? 0 : '-100%', opacity: isOpen ? 1 : 0 }}  // Animasi saat terbuka/tutup
            transition={{ type: 'tween', duration: 0.3 }}                   // Jenis transisi dan durasi
            className="w-[300px] min-h-screen fixed top-0 left-0 z-20 box-border border-r-2 shadow bg-white"
        >
            <HamburgerClose isOpen={isOpen} onClick={onClick} />
        </motion.aside>
    );
}
