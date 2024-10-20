// TYPE
type FormHeadingProps = {
    title: string
    titleColor?: string
    description?: string
    descriptionColor?: string
    className?: string
}

// FORM HEADING
export default function FormHeading(props: FormHeadingProps) {

    // PROPS
    const { title, titleColor, description, descriptionColor, className } = props

    // RENDER
    return (
        <div className={`w-full flex flex-col ${className}`}>
            <h1 className={`text-2xl font-medium ${titleColor}`}>{title}</h1>
            <p className={`text-lg ${descriptionColor}`}>{description}</p>
        </div>
    )
}