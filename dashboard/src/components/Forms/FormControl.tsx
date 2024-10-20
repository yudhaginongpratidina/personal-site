// TYPE
type FormControlProps = {
    children: React.ReactNode
    gap: string
    direction: "column" | "row"
    className?: string
}

// FORM CONTROL
export default function FormControl(props : FormControlProps) {

    // PROPS
    const { children, direction, gap, className } = props

    // RENDER
    return (
        <div className={`w-full flex ${direction === "column" ? "flex-col" : ""} ${direction === "row" ? "flex-row items-center" : ""} ${gap} ${className}`}>
            { children }
        </div>
    )
}