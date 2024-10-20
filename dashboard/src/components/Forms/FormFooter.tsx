// TYPE
type FormFooterProps = {
    children: React.ReactNode
    className?: string
}

export default function FormFooter(props: FormFooterProps) {

    // PROPS
    const { children, className } = props

    // RENDER
    return (
        <div className={`w-full flex items-center justify-center ${className}`}>
            { children }
        </div>
    )
}