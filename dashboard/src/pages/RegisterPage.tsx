// LIB
import { useState } from "react";

// AUTH LAYOUT
import AuthLayout from "../components/Layouts/AuthLayout";

// FORM
import Form from "../components/Forms/Form";
import FormContent from "../components/Forms/FormContent";
import FormControl from "../components/Forms/FormControl";
import FormLabel from "../components/Forms/FormLabel";
import FormInput from "../components/Forms/FormInput";
import FormShowHide from "../components/Forms/FormShowHide";
import FormCheckbox from "../components/Forms/FormCheckbox";
import FormButton from "../components/Forms/FormButton";

// LOGIN PAGE
export default function RegisterPage() {
    // STATE
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [terms, setTerms] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    // HANDLER
    const handleShowPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, password, terms);
    };

    // CLASSNAME
    const classInput = "border focus:border-blue-500 ring-0";
    const classButton = "w-full p-3 bg-blue-500 hover:bg-blue-600 text-white";

    return (
        <AuthLayout title="Register" description="Create a new account" footerLink="/login" footerLinkText="I have an account ?">
            <Form onSubmit={handleSubmit} direction="column" gap="gap-4" className="max-w-md">
                <FormContent gap="gap-3" className="p-4">
                    <FormControl direction="column" gap="gap-1.5">
                        <FormLabel htmlFor="email" required={true}>Email</FormLabel>
                        <FormInput
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            autoComplete="off"
                            required={true}
                            value={email}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                            className={classInput}
                        />
                    </FormControl>
                    <FormControl direction="column" gap="gap-1.5">
                        <FormLabel htmlFor="password" required={true}>Password</FormLabel>
                        <FormShowHide isShow={showPassword} onClick={handleShowPassword}>
                            <FormInput
                                id="password"
                                type={showPassword ? "text" : "password"}
                                placeholder={showPassword ? "Enter your password" : "********"}
                                autoComplete="off"
                                required={true}
                                value={password}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                                className={classInput}
                            />
                        </FormShowHide>
                    </FormControl>
                    <FormControl direction="row" gap="gap-1.5">
                        <FormCheckbox required={true} checked={terms} onChange={() => setTerms(!terms)} id="terms" className={"w-4 h-4"} />
                        <FormLabel htmlFor="terms" required={false}>I accept terms and conditions</FormLabel>
                    </FormControl>
                    <FormButton type="submit" className={classButton}>Register</FormButton>
                </FormContent>
            </Form>
        </AuthLayout>
    );
}