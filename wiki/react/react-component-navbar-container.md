# REACT COMPONENT - NAVBAR CONTAINER

```tsx
export default function NavbarContainer({fixed, children} : {fixed: boolean, children: React.ReactNode}) {
    return (
        <nav className={`w-full border-b shadow-md bg-white ${fixed ? 'fixed top-0 z-10' : ''}`}>
            { children }
        </nav>
    )
}
```