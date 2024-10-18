type ButtonProps = {
    type?: 'button' | 'reset' | 'submit'; 
    name: string
    className?: string
}

export default function Button(props: ButtonProps) {

    const { type, name, className } = props

    return (
        <button type={type} className={`w-full p-2.5 rounded border ${className}`}>
            { name }
        </button>
    )
}