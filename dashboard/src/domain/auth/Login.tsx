import React, { useState } from "react"

export default function Login() {

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [remember, setRemember] = useState<boolean>(false)

    const [isSuccess, setIsSuccess] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')

    const handleShowPassword = (e: React.MouseEvent) => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()

        if (email === 'user@gmail.com') {
            setIsSuccess(false)
            setIsError(true)
            setMessage('Email not registered')
        } else if (email === 'user1@gmail.com' && password !== 'user1') {
            setIsSuccess(false)
            setIsError(true)
            setMessage('Password is incorrect')
        } else if (email === 'user1@gmail.com' && password === 'user1') {
            setIsError(false)
            setIsSuccess(true)
            setMessage('Login Successfully')
        }

        console.table({ email, password, remember })
    }

    return (
        <div className="w-full min-h-screen flex justify-center items-center select-none bg-gray-200">
            <div className="w-full max-w-screen-sm p-4 rounded bg-white">

                {isError &&
                    <div className={`w-full p-2.5 rounded bg-red-500 text-white mb-6 animate-pulse`}>
                        <span className="text-sm"> {message} </span>
                    </div>
                }

                {isSuccess &&
                    <div className={`w-full p-2.5 rounded bg-green-500 text-white mb-6 animate-pulse`}>
                        <span className="text-sm"> {message} </span>
                    </div>
                }

                <form onSubmit={handleLogin} className="w-full flex flex-col gap-4 mb-6">
                    <input
                        type="email"
                        placeholder="user@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2.5 border-2 rounded outline-none focus:border-blue-500"
                    />
                    <div className="w-full relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder={showPassword ? 'Password' : '********'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-2.5 border-2 rounded outline-none focus:border-blue-500"
                        />
                        <button onClick={handleShowPassword} className="text-sm absolute top-1/2 right-2.5 -translate-y-1/2">
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                    <div className="flex items-center gap-2.5">
                        <input
                            type="checkbox"
                            name="remember"
                            id="remember"
                            checked={remember}
                            onChange={(e) => setRemember(e.target.checked)}
                            className="w-4 h-4 rounded"
                        />
                        <label htmlFor="remember">Remember me</label>
                    </div>
                    <button className="w-full p-2.5 border-2 rounded bg-blue-500 hover:bg-blue-600 text-white">LOGIN</button>
                </form>
                <div className="w-full flex justify-center mb-6">
                    <p className="text-md">I dont have an account? <a href="register" className="text-blue-500">Register</a></p>
                </div>
            </div>
        </div>
    )
}