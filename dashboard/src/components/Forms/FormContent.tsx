// TYPE
type FormContentProps = {
    children: React.ReactNode
    gap: string
    className?: string
}

// FORM CONTENT
export default function FormContent(props : FormContentProps) {

    // PROPS
    const { children, gap, className } = props

    // RENDER
    return (
        <div className={`w-full flex flex-col ${gap} ${className}`}>
            { children }
        </div>
    )
}