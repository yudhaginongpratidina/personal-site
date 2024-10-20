// LIB
import { Link } from "react-router-dom";

// PARTIALS
import Navbar from "../Partials/Navbar"
import Logo from "../Partials/Logo"

// ICON
import { RxDashboard } from "react-icons/rx";

// COMPONENT FORM
import FormHeading from "../Forms/FormHeading";
import FormFooter from "../Forms/FormFooter";

// TYPE
type AuthLayoutProps = {
    children: React.ReactNode
    title: string
    description: string
    footerLink: string
    footerLinkText: string
}

// AUTH LAYOUT
export default function AuthLayout(props: AuthLayoutProps) {

    // PROPS
    const { children, title, description, footerLink, footerLinkText } = props

    // RENDER
    return (
        <>
            <Navbar fixed={true} container={true}>
                <Logo icon={<RxDashboard size={24} />} name="DASHBOARD" to="/login" />
            </Navbar>
            <main className="w-full px-4 h-screen flex flex-col items-center justify-center bg-gray-100">
                <FormHeading title={title} titleColor="text-gray-900" description={description} descriptionColor="text-gray-500" className="p-4 border-b"/>
                {children}
                <FormFooter className="border-t p-4">
                    <Link to={footerLink} className="text-blue-500 hover:underline hover:underline-offset-8">{footerLinkText}</Link>
                </FormFooter>
            </main>
        </>
    )
}