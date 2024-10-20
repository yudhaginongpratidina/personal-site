// TYPE
type FormProps = {
    children: React.ReactNode
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    direction: "column" | "row"
    gap: string
    className?: string
}

// FORM
export default function Form(props : FormProps) {

    // PROPS
    const { onSubmit, direction , children, gap, className } = props

    // RENDER
    return (
        <form 
            onSubmit={onSubmit} 
            className={`w-full flex ${direction === "column" ? "flex-col" : ""} ${direction === "row" ? "flex-row" : ""} ${gap} ${className}`}
        >
            { children }
        </form>        
    )
}