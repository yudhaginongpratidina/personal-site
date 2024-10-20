// LIB
import { Link } from "react-router-dom"

// TYPE
type LogoProps = {
    icon?: JSX.Element
    name: string
    to: string
    className?: string
}

// LOGO
export default function Logo(props: LogoProps) {

    // PROPS
    const { icon, name, to, className } = props

    // RENDER
    return (
        <Link to={to} className={`flex items-center gap-2.5 ${className}`}>
            { icon }
            <h1 className="text-lg font-bold">{ name }</h1>
        </Link>
    )
}