import { useState } from "react"
import { Link } from "react-router-dom"


export default function Register() {

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
        <div className="w-full min-h-screen select-none flex items-center justify-center bg-gray-700">

            {/* NAVBAR */}
            <nav className="w-full fixed top-0 z-10 bg-gray-800">
                <div className="w-full h-14 container box-border flex items-center justify-between">
                    <h1 className="text-lg font-semibold text-white">DASHBOARD V1</h1>
                    <div className="flex gap-2">
                        <Link to="/login" className="text-lg hover:underline hover:underline-offset-8 text-white">Login</Link>
                        <span className="text-lg text-white">|</span>
                        <Link to="/dashboard" className="text-lg hover:underline hover:underline-offset-8 text-white">Register</Link>
                    </div>
                </div>
            </nav>

            <form className="w-full px-4 max-w-sm flex flex-col gap-4">
                <div className="w-full flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-medium text-sm text-white">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="E-Mail"
                        className="w-full p-2 bg-transparent outline-none border border-white text-white"
                    />
                </div>
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
                <div className="w-full flex items-center">
                    <input type="checkbox" name="terms_and_conditions" id="terms_and_conditions" />
                    <label htmlFor="terms_and_conditions" className="ml-2 text-sm text-white">I accept terms and conditions</label>
                </div>
                <button className="w-full p-2 bg-white hover:bg-gray-800 text-black hover:text-white duration-200">Register</button>
                <Link to="/login" className="w-full text-center text-sm hover:underline hover:underline-offset-8 text-white">
                    I have an account
                </Link>
            </form>

            {/* FOOTER */}
            <footer className="w-full fixed bottom-0 z-10 bg-gray-800">
                <div className="w-full h-12 container box-border flex items-center justify-between">
                    <h1 className="text-sm font-semibold text-white">BUILD WITH ❤️</h1>
                    <h1 className="text-sm font-semibold text-white">DASHBOARD V1</h1>
                </div>
            </footer>

        </div>
    )
}