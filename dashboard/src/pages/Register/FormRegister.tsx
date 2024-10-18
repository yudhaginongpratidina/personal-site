// IMPORT UI
import Button from "../../UI/Button";
import Input from "../../UI/Input";
import Label from "../../UI/Label";
import Checkbox from "../../UI/Checkbox";

// LIBS REACT
import { useState } from "react";

// FORM REGISTER
export default function FormRegister(){

    // STATE
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [confirmPassword, setConfirmPassword] = useState<string>("")
    const [acceptTerms, setAcceptTerms] = useState<boolean>(false)

    // HANDLERS
    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.table({ email, password, confirmPassword, acceptTerms })
    }

    return (
        <form onSubmit={handleRegister} className="w-full p-4 max-w-md flex flex-col gap-4">
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
                    name="confirmPassword"
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
            <div className="w-full flex items-center gap-1.5">
                <Checkbox
                    id="acceptTerms"
                    checked={acceptTerms}
                    onChange={() => setAcceptTerms(!acceptTerms)}
                    className="bg-white"
                />
                <Label
                    htmlFor="acceptTerms"
                    name="I accept the terms and conditions"
                    className="text-sm font-medium"
                />
            </div>
            <Button
                type="submit"
                name="Login"
                className="bg-black hover:bg-gray-800 text-white"
            />
        </form>
    )
}