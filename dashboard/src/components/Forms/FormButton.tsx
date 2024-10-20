// TYPE
type FormButtonProps = {
    type : "button" | "submit" | "reset"
    children: React.ReactNode
    className?: string
}

// FORM BUTTON
export default function FormButon(props : FormButtonProps) {

    // PROPS
    const { type, children, className } = props

    // RENDER
    return (
        <button type={type} className={`w-full p-3 flex items-center justify-center ${className}`}>
            { children }
        </button>
    )
}