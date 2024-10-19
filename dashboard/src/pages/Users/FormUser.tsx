// IMPORT UI
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import Label from "../../UI/Label";
import Select from "../../UI/select";

// LIBS REACT
import { useState } from "react";

// TYPE
type FormUserProps = {
    name: string
}

export default function FormUser(props: FormUserProps) {

    // PROPS
    const { name } = props

    // STATE
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const [role, setRole] = useState<string>("")

    // ROLES
    const roles = [
        { id: 1, value: "admin", name: "Admin" },
        { id: 2, value: "user", name: "User" }
    ]

    // HANDLERS
    const handleCreateUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.table({ email, password, confirmPassword, role })
    }

    const handleUpdateUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.table({ email, password, confirmPassword, role })
    }

    return (
        <form onSubmit={name === "create" ? handleCreateUser : handleUpdateUser} className="w-full max-w-screen-sm flex flex-col gap-2.5">
            <div className="w-full flex flex-col gap-1.5">
                <Label
                    htmlFor="email"
                    name="Email"
                    className="text-sm font-medium"
                />
                <Input
                    id="email"
                    type="email"
                    placeholder="user@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white"
                />
            </div>
            <div className="w-full flex flex-col gap-1.5">
                <Label
                    htmlFor="password"
                    name="Password"
                    className="text-sm font-medium"
                />
                <Input
                    id="password"
                    type="password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-white"
                />
            </div>
            <div className="w-full flex flex-col gap-1.5">
                <Label
                    htmlFor="confirmPassword"
                    name="Confirm Password"
                    className="text-sm font-medium"
                />
                <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="********"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="bg-white"
                />
            </div>
            <div className="w-full flex flex-col gap-1.5">
                <Label
                    htmlFor="role"
                    name="Role"
                    className="text-sm font-medium"
                />
                <Select
                    id="role"
                    className="bg-white"
                    options={roles}
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                />
            </div>
            <Button
                type="submit"
                name={name === "create" ? "Create User" : "Update User"}
                className="bg-black hover:bg-gray-800 text-white"
            />
        </form>
    )
}