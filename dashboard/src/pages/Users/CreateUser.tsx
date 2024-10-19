// IMPORT LAYOUT
import MainLayout from "../../Layouts/MainLayout"

// FORM USER
import FormUser from "./FormUser"

// CREATE USER PAGE
export default function CreateUser() {
    return (
        <MainLayout>
            <div className="w-full min-h-screen pt-16 px-4 pb-16 flex flex-col gap-2.5 bg-gray-100">
                <div className="w-full h-14 box-border flex items-center justify-between border-b-2 border-gray-800">
                    <h1 className="text-lg font-medium">CREATE USER</h1>
                </div>
                <FormUser name="create" />
            </div>
        </MainLayout>
    )
}