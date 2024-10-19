// LIBS
import { motion } from "framer-motion";

// SUB PARTIALS ASIDE
import HamburgerClose from "./HamburgerClose";
import HeaderAside from "./HeaderAside";
import ItemAside from "./ItemAside";

// ICONS
import { FaUsers } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa6";
import { FaSquareUpwork } from "react-icons/fa6";
import { RiMessageFill } from "react-icons/ri";
import { SiReaddotcv } from "react-icons/si";
import { CgProfile } from "react-icons/cg";
import { MdPassword } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { AiFillDelete } from "react-icons/ai";

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
            className="w-[300px] min-h-screen h-full fixed top-0 left-0 z-20 box-border border-r-2 shadow overflow-y-scroll bg-white"
        >
            <HamburgerClose isOpen={isOpen} onClick={onClick} />

            {/* MASTER - START */}
            <HeaderAside name="MASTER" />
            <ItemAside name="Users" icon={<FaUsers className="w-6 h-6" />} />
            <ItemAside name="Roles" icon={<FaUserTie className="w-6 h-6" />} />
            {/* MASTER - END */}

            {/* MANAGEMENT - START */}
            <HeaderAside name="MANAGEMENT" />
            <ItemAside name="Portfolio" icon={<FaSquareUpwork className="w-6 h-6" />} />
            <ItemAside name="Message" icon={<RiMessageFill className="w-6 h-6" />} />
            {/* MANAGEMENT - END */}

            {/* ACCOUNT - START */}
            <HeaderAside name="ACCOUNT" />
            <ItemAside name="Profile" icon={<CgProfile className="w-6 h-6" />} />
            <ItemAside name="Curiculum Vitae" icon={<SiReaddotcv className="w-6 h-6" />} />
            <ItemAside name="Change Password" icon={<MdPassword className="w-6 h-6" />} />
            <ItemAside name="Delete Account" icon={<AiFillDelete className="w-6 h-6" />} />
            <ItemAside name="Logout" icon={<RiLogoutBoxRLine className="w-6 h-6" />} />
            {/* ACCOUNT - END */}
        </motion.aside>
    );
}
