// IMPORT LAYOUTS
import MainLayout from "../../Layouts/MainLayout"

// IMPORT FORM
import FormRegister from "./FormRegister"

// IMPORT LIBS
import { Link } from "react-router-dom"

// REGISTER PAGE
export default function Register() {
    return (
        <MainLayout>
            <div className="w-full min-h-screen flex flex-col gap-1 items-center justify-center bg-gray-100">
                <FormRegister />
                <Link to={"/login"} className="w-full max-w-md flex justify-center gap-0.5 text-sm font-medium">
                    I have an account ? <span className="hover:underline hover:underline-offset-4 text-blue-500">Login</span>
                </Link>
            </div>
        </MainLayout>
    )
}