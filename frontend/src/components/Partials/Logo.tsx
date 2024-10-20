import { Link } from "react-router-dom"

type LogoProps = {
    icon?: JSX.Element
    name: string
    to: string
    className?: string
}

export default function Logo(props: LogoProps) {

    const { icon, name, to, className } = props

    return (
        <Link to={to} className={`flex items-center gap-2.5 ${className}`}>
            { icon }
            <h1 className="text-lg font-bold">{ name }</h1>
        </Link>
    )
}