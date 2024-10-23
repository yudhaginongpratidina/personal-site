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
        <div className={`w-full flex items-center justify-center border-t p-4 border-blue-500 ${className}`}>
            { children }
        </div>
    )
}