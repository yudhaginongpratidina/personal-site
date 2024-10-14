import React, { useState } from "react"

export default function Register() {

    const [fullName, setFullName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [confirmPassword, setConfirmPassword] = useState<string>('')
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [accept, setAccept] = useState<boolean>(false)

    const [isSuccess, setIsSuccess] = useState<boolean>(false)
    const [isError, setIsError] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')

    const handleShowPassword = (e: React.MouseEvent) => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault()

        try {
            if (email === 'user@gmail.com') {
                setIsSuccess(false)
                setIsError(true)
                setMessage('Email already exists')
            }
            else if (password !== confirmPassword) {
                setIsSuccess(false)
                setIsError(true)
                setMessage('Password not match')
            } else {
                setIsError(false)
                setIsSuccess(true)
                setMessage('Register Successfully')
            }
            console.table({ fullName, email, password, confirmPassword, accept })
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="w-full min-h-screen flex justify-center items-center select-none bg-gray-200">
            <div className="w-full max-w-screen-sm p-4 rounded bg-white">
                <h1 className="text-2xl font-semibold mb-6">REGISTER</h1>

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

                <form onSubmit={handleRegister} className="w-full flex flex-col gap-4 mb-6">
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full p-2.5 border-2 rounded outline-none focus:border-blue-500"
                    />
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
                    <div className="w-full relative">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder={showPassword ? 'Password' : '********'}
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full p-2.5 border-2 rounded outline-none focus:border-blue-500"
                        />
                        <button onClick={handleShowPassword} className="text-sm absolute top-1/2 right-2.5 -translate-y-1/2">
                            {showPassword ? 'Hide' : 'Show'}
                        </button>
                    </div>
                    <div className="flex items-center gap-2.5">
                        <input
                            type="checkbox"
                            name="accept"
                            id="accept"
                            checked={accept}
                            onChange={() => setAccept(!accept)}
                            className="w-4 h-4 rounded"
                        />
                        <label htmlFor="accept">I accept the <a href="#" className="text-blue-500">terms and conditions</a></label>
                    </div>
                    <button className="w-full p-2.5 border-2 rounded bg-blue-500 hover:bg-blue-600 text-white">REGISTER</button>
                </form>
                <div className="w-full flex justify-center mb-6">
                    <p className="text-md">Already have an account? <a href="/login" className="text-blue-500">Login</a></p>
                </div>
            </div>
        </div>
    )
}