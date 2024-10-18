// IMPORT LAYOUT
import MainLayout from "../../Layouts/MainLayout"

// ICONS
import { FaUserLarge } from "react-icons/fa6";
import { FaUserCog } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

// SUB COMPONENTS
import SayHello from "./SayHello"
import PanelDashboard from "./PanelDashboard"

// DASHBOARD PAGE
export default function Dashboard(){
    return (
        <MainLayout>
            <div className="w-full min-h-screen pt-16 px-4 pb-16 flex flex-col gap-2.5 bg-gray-100">
                <SayHello name="user" />
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                    <PanelDashboard 
                        count={10} 
                        name="User" 
                        icon={<FaUserLarge className="w-10 h-10" />}
                    />
                    <PanelDashboard 
                        count={4} 
                        name="Role Permission" 
                        icon={<FaUserCog className="w-10 h-10" />}
                    />
                    <PanelDashboard 
                        count={15} 
                        name="Message" 
                        icon={<FaMessage className="w-10 h-10" />}
                    />
                </div>
            </div>
        </MainLayout>
    )
}