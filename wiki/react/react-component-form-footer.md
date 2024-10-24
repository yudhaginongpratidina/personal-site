# REACT COMPONENT FORM FOOTER

## TYPE

```tsx
type FormFooterProps = {
    children: React.ReactNode
    className?: string
}
```

## COMPONENT

```tsx
export default function FormFooter(props: FormFooterProps) {
    const { children, className } = props

    return (
        <div className={`w-full flex items-center justify-center border-t p-4 border-blue-500 ${className}`}>
            { children }
        </div>
    )
}
```