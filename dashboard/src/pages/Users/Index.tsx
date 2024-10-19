// IMPORT LAYOUT
import MainLayout from "../../Layouts/MainLayout"

// IMPORT LIBS
import { Link } from "react-router-dom"

// USERS PAGE
export default function Users(){
    return (
        <MainLayout>
            <div className="w-full min-h-screen pt-16 px-4 pb-16 flex flex-col gap-2.5 bg-gray-100">
                
                <div className="w-full h-14 box-border flex items-center justify-between border-b-2 border-gray-800">
                    <h1 className="text-lg font-medium">USERS</h1>
                    <Link to={"/users/create"} className="w-fit py-1.5 px-1.5 rounded text-sm font-medium bg-black hover:bg-gray-800 text-white">
                        Add New
                    </Link>
                </div>

            </div>
        </MainLayout>
    )
}