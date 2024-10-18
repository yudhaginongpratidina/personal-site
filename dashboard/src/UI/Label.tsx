type LabelProps = {
    htmlFor: string,
    name: string,
    className?: string
}

export default function Label(props: LabelProps) {
    const { htmlFor, name, className } = props

    return (
        <label htmlFor={htmlFor} className={`w-full text-sm font-medium ${className}`}> 
            { name } 
        </label>
    )
}