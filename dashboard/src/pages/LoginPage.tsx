import { useState } from "react";

import AuthLayout from "../components/Layouts/AuthLayout";

import Form from "../components/Forms/Form";
import FormHeader from "../components/Forms/FormHeader";
import FormHeading from "../components/Forms/FormHeading";
import FormDescription from "../components/Forms/FormDescription";
import FormContent from "../components/Forms/FormContent";
import FormControl from "../components/Forms/FormControl";
import FormLabel from "../components/Forms/FormLabel";
import FormInput from "../components/Forms/FormInput";
import FormShowHide from "../components/Forms/FormShowHide";
import FormCheckbox from "../components/Forms/FormCheckbox";
import FormButton from "../components/Forms/FormButton";
import FormFooter from "../components/Forms/FormFooter";
import FormLink from "../components/Forms/FormLink";

export default function LoginPage() {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleShowPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setShowPassword(!showPassword);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(email, password, rememberMe);
    };

    return (
        <AuthLayout>
            <Form onSubmit={handleSubmit} direction="column" gap="gap-4" className="max-w-md rounded-md p-4 bg-white">
            <FormHeader>
                    <FormHeading>Login</FormHeading>
                    <FormDescription>Enter your credentials</FormDescription>
                </FormHeader>
                <FormContent>
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
                            />
                        </FormShowHide>
                    </FormControl>
                    <FormControl direction="row" gap="gap-1.5">
                        <FormCheckbox required={true} checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} id="remember" className={"w-4 h-4"} />
                        <FormLabel htmlFor="remember" required={false}>Remember me</FormLabel>
                    </FormControl>
                    <FormButton type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white">Login</FormButton>
                </FormContent>
                <FormFooter className="border-t p-4">
                    <FormLink href={"/register"} >I don't have an account ?</FormLink>
                </FormFooter>
            </Form>
        </AuthLayout>
    );
}