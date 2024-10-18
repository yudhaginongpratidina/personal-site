// ICON
import { LiaQrcodeSolid } from "react-icons/lia";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// TYPE
type SayHelloProps = {
    name: string;
}

// SAY HELLO
export default function SayHello(props: SayHelloProps) {

    // PROPS
    const { name } = props;

    // STATE VISIBILITY
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // SET TIMEOUT UNTUK MENAMPILAN KOMPONEN
        const timer = setTimeout(() => { setIsVisible(true);}, 1000); // 1000ms = 1 DETIK
        return () => clearTimeout(timer); // CLEAR TIMEOUT
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}                                     // Awal: transparan dan sedikit di bawah
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}     // Animasi saat muncul
            transition={{ duration: 0.5 }}                                      // Durasi transisi
            className="w-full h-[150px] md:h-[250px] p-4 box-border rounded flex md:hidden items-center justify-between bg-gray-800"
        >
            <div className="h-full flex flex-col justify-between">
                <div className="flex flex-col gap-2.5">
                    <span className="w-fit p-0.5 px-1.5 rounded text-md font-medium bg-white">Active</span>
                    <span className="text-sm text-white">2024.10.01.00001</span>
                </div>
                <h1 className="text-lg uppercase text-white">HI {name}</h1>
            </div>
            <LiaQrcodeSolid className="w-28 h-28 text-white" />
        </motion.div>
    );
}
