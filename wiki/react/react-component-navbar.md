# REACT COMPONENT NAVBAR

```tsx
type NavbarProps = {
    children: React.ReactNode
    fixed: boolean
    container: boolean
    className?: string
}

export default function Navbar(props: NavbarProps) {

    const { children, fixed, container, className } = props

    return (
        <nav className={`w-full ${fixed ? 'fixed top-0 z-10' : ''} border-b shadow-sm ${className}`}>
            <div className={`w-full h-14 box-border ${container ? 'container' : ''} flex items-center justify-between`}>
                {children}
            </div>
        </nav>
    )
}
```