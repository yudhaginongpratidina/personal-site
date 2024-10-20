type FooterProps = {
    children: React.ReactNode
    fixed: boolean
    container: boolean
    className?: string
}

export default function Footer(props: FooterProps) {

    const { children, fixed, container, className } = props

    return (
        <footer className={`w-full ${fixed ? 'fixed bottom-0 z-10' : ''} border-t shadow-sm ${className}`}>
            <div className={`w-full h-14 box-border ${container ? 'container' : ''} flex items-center justify-between`}>
                {children}
            </div>
        </footer>
    )
}