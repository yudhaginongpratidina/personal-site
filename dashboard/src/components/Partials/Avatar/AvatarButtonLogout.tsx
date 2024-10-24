import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function AvatarButtonLogout() {

    const [isActive, setIsActive] = useState<boolean>(false)

    const navigate = useNavigate()

    const handleLogout = () => {
        navigate('/login')
    }

    return (
        <>
            <button onClick={() => setIsActive(!isActive)} className="w-full flex items-start px-4">
                <h1 className="w-full text-start text-sm py-1.5 px-2  rounded hover:bg-rose-500 hover:text-white">Log Out</h1>
            </button>

            {isActive && (
                <div className="w-full min-h-screen flex items-center justify-center fixed z-50 top-0 left-0 bg-black bg-opacity-10">
                    <div className="w-full max-w-screen-sm bg-white rounded-md">
                        <div className="w-full p-4 border-b">
                            <h1 className="text-xl font-medium">ARE YOU SURE?</h1>
                        </div>
                        <div className="w-full p-4">
                            <p className="text-justify text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Eligendi debitis omnis repudiandae provident? Vero, delectus!
                            </p>
                        </div>
                        <div className="w-full p-4 border-t flex justify-end items-center gap-2">
                            <button onClick={handleLogout} className="bg-rose-500 text-white py-2 px-2.5 rounded-md text-sm">Yes, I am sure</button>
                            <button onClick={() => setIsActive(!isActive)} className="bg-black text-white py-2 px-2.5 rounded-md text-sm">No, cancel</button>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}