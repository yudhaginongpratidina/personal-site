import BrandContainer from "../Partials/Brand/BrandContainer";
import BrandLogo from "../Partials/Brand/BrandLogo";
import BrandName from "../Partials/Brand/BrandName";
import FooterContainer from "../Partials/Footer/FooterContainer";
import FooterVersion from "../Partials/Footer/FooterVersion";
import NavbarContainer from "../Partials/Navbar/NavbarContainer";
import DarkModeButton from "../Partials/Others/DarkModeButton";

import { RxDashboard } from "react-icons/rx";

export default function AuthLayout({children} : {children: React.ReactNode}) {
    return (
        <>
            <NavbarContainer fixed={true}>
                <div className="w-full container h-14 flex items-center justify-between">
                    <BrandContainer>
                        <BrandLogo>
                            <RxDashboard className="w-6 h-6" />
                        </BrandLogo>
                        <BrandName> DASHBOARD </BrandName>
                    </BrandContainer>
                    <DarkModeButton/>
                </div>
            </NavbarContainer>
            <MainContent >
                {children}
            </MainContent>
            <FooterContainer fixed={true}>
                <FooterVersion/>
            </FooterContainer>
        </>
    )
}

const MainContent = ({children} : {children: React.ReactNode}) => {
    return (
        <main className="w-full px-4 h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-800 duration-200">
            {children}
        </main>
    )
}