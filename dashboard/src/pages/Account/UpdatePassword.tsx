import { useState } from "react"

// LAYOUT
import AccountLayout from '../../components/Layouts/AccountLayout'

export default function UpdatePassword() {
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false)

    const toggleShowPassword = (e: React.MouseEvent) => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }

    const toggleShowConfirmPassword = (e: React.MouseEvent) => {
        e.preventDefault()
        setShowConfirmPassword(!showConfirmPassword)
    }

    return (
        <AccountLayout title='Update Password'>
            <form className='w-full flex flex-col gap-4'>
                <div className="w-full flex flex-col gap-1.5">
                    <label htmlFor="password" className="font-medium text-sm text-white">Password</label>
                    <div className="w-full relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder={showPassword ? "Password" : "******"}
                            className="w-full p-2 bg-transparent outline-none border border-white text-white"
                        />
                        <button onClick={toggleShowPassword} className="absolute top-2 right-2 text-sm text-white">
                            {showPassword ? "hide" : "show"}
                        </button>
                    </div>
                </div>
                <div className="w-full flex flex-col gap-1.5">
                    <label htmlFor="password" className="font-medium text-sm text-white">Confirm Password</label>
                    <div className="w-full relative">
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            id="password"
                            placeholder={showConfirmPassword ? "Password" : "******"}
                            className="w-full p-2 bg-transparent outline-none border border-white text-white"
                        />
                        <button onClick={toggleShowConfirmPassword} className="absolute top-2 right-2 text-sm text-white">
                            {showConfirmPassword ? "hide" : "show"}
                        </button>
                    </div>
                </div>
                <button className="w-full p-2 bg-white hover:bg-gray-800 text-black hover:text-white duration-200">Update Password</button>
            </form>
        </AccountLayout>
    )
}