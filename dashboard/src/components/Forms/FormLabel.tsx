// TYPE
type FormLabelProps = {
    htmlFor: string
    children: React.ReactNode
    required: boolean
    className?: string
}

// FORM LABEL
export default function FormLabel(props : FormLabelProps) {

    // PROPS
    const { htmlFor, children, required, className } = props

    // RENDER
    return (
        <label htmlFor={htmlFor} className={`w-full flex items-center gap-0.5 text-sm ${className}`}>
            <span>{children} { required && <span className="text-red-500">*</span> }</span>
        </label>
    )
}