import { useState } from "react";

import NavbarContainer from "../Partials/NavbarContainer"
import BrandContainer from "../Partials/BrandContainer"
import BrandLogo from "../Partials/BrandLogo"
import BrandName from "../Partials/BrandName";
import DarkModeButton from "../Partials/DarkModeButton";
import Avatar from "../Partials/Avatar";
import AvatarMenu from "../Partials/AvatarMenu";
import AvatarEmail from "../Partials/AvatarEmail";
import AvatarItem from "../Partials/AvatarItem";
import AvatarSpacer from "../Partials/AvatarSpacer";
import AvatarButtonLogout from "../Partials/AvatarButtonLogout";

import { RxDashboard } from "react-icons/rx";

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