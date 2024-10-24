import { useState } from "react";


import { RxDashboard } from "react-icons/rx";
import Avatar from "../Partials/Avatar/Avatar";
import AvatarButtonLogout from "../Partials/Avatar/AvatarButtonLogout";
import AvatarEmail from "../Partials/Avatar/AvatarEmail";
import AvatarItem from "../Partials/Avatar/AvatarItem";
import AvatarMenu from "../Partials/Avatar/AvatarMenu";
import AvatarSpacer from "../Partials/Avatar/AvatarSpacer";
import BrandContainer from "../Partials/Brand/BrandContainer";
import BrandLogo from "../Partials/Brand/BrandLogo";
import BrandName from "../Partials/Brand/BrandName";
import NavbarContainer from "../Partials/Navbar/NavbarContainer";
import DarkModeButton from "../Partials/Others/DarkModeButton";

export default function AdminLayout({ children }: { children: React.ReactNode }) {

    const [showAvatar, setShowAvatar] = useState<boolean>(false);

    return (
        <>
            <NavbarContainer fixed={true}>
                <div className="w-full px-6 h-14 flex items-center justify-between">
                    <BrandContainer>
                        <BrandLogo>
                            <RxDashboard className="w-6 h-6" />
                        </BrandLogo>
                        <BrandName>
                            DASHBOARD
                        </BrandName>
                    </BrandContainer>
                    <div className="flex items-center gap-1.5">
                        <DarkModeButton/>
                        <Avatar isActive={showAvatar} onClick={() => setShowAvatar(!showAvatar)} />
                        <AvatarMenu isActive={showAvatar} className="absolute right-0 top-16 z-10">
                            <AvatarEmail />
                            <AvatarSpacer />
                            <AvatarItem>Profile</AvatarItem>
                            <AvatarItem>Update Password</AvatarItem>
                            <AvatarItem>Settings</AvatarItem>
                            <AvatarSpacer />
                            <AvatarButtonLogout />
                        </AvatarMenu>
                    </div>
                </div>
            </NavbarContainer>
            <main className="w-full min-h-screen py-16 px-6">
                {children}
            </main>
        </>
    )
}