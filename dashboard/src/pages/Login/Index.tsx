// IMPORT LAYOUTS
import MainLayout from "../../Layouts/MainLayout"

// IMPORT FORM
import FormLogin from "./FormLogin"

// LIBS
import { Link } from "react-router-dom"

// LOGIN PAGE
export default function Login() {
    return (
        <MainLayout>
            <div className="w-full min-h-screen flex flex-col gap-1 items-center justify-center bg-gray-100">
                <FormLogin />
                <Link to={"/register"} className="w-full max-w-md flex justify-center gap-0.5 text-sm font-medium">
                    I don{"'"}t have an account ? <span className="hover:underline hover:underline-offset-4 text-blue-500">Register</span>
                </Link>
            </div>
        </MainLayout>
    )
}