// LIBS
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// ICONS
import { IoIosArrowForward } from "react-icons/io";

// TYPE
type PanelDashboardProps = {
    count: number;
    name: string;
    icon: JSX.Element;
}

export default function PanelDashboard(props: PanelDashboardProps) {
    // PROPS
    const { count, name, icon } = props;

    // STATE VISIBILITY
    const [isVisible, setIsVisible] = useState(false);
    const [currentCount, setCurrentCount] = useState(0); // State untuk menghitung

    useEffect(() => {
        // SET TIMEOUT UNTUK MENAMPILAN KOMPONEN
        const timer = setTimeout(() => { setIsVisible(true); }, 1000); // 1000ms = 1 DETIK
        return () => clearTimeout(timer); // CLEAR TIMEOUT
    }, []);

    useEffect(() => {
        if (isVisible) {
            const duration = 2000;                          // Durasi total animasi (2 detik)
            const incrementTime = duration / count;         // Waktu untuk setiap increment

            const interval = setInterval(() => {
                setCurrentCount((prev) => {
                    if (prev < count) { return prev + 1;}   // Increment count
                    clearInterval(interval);                // Clear interval ketika mencapai count
                    return prev;
                });
            }, incrementTime);

            return () => clearInterval(interval); // Cleanup interval
        }
    }, [isVisible, count]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}                                     // Awal: transparan dan sedikit di bawah
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}     // Animasi saat muncul
            transition={{ duration: 0.5 }}                                      // Durasi transisi 
            className="w-full h-[150px] box-border border-l-4 flex flex-col justify-between rounded shadow border-l-gray-800 bg-white"
        >
            <div className="w-full p-4 flex flex-col gap-2.5">
                <div className="flex items-center gap-2">
                    {icon}
                    <motion.span
                        key={currentCount}                      // Gunakan key untuk meng-trigger animasi setiap perubahan
                        initial={{ opacity: 0, scale: 0.5 }}    // Awal: transparan dan kecil
                        animate={{ opacity: 1, scale: 1 }}      // Animasi saat muncul
                        transition={{ duration: 0.3 }}          // Durasi transisi
                        className="text-3xl font-medium"
                    >
                        {currentCount}
                    </motion.span>
                </div>
                <h2 className="text-lg font-medium">{name}</h2>
            </div>
            <div className="w-full h-9 p-4 border-t flex items-center justify-between hover:cursor-pointer">
                <span className="text-sm font-bold">View Details</span>
                <IoIosArrowForward className="w-4 h-4" />
            </div>
        </motion.div>
    );
}
