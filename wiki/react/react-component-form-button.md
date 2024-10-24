# REACT COMPONENT FORM BUTTON

## TYPE

```tsx
type FormButtonProps = {
    type : "button" | "submit" | "reset"
    children: React.ReactNode
    className?: string
}
```

## COMPONENT

```tsx
export default function FormButon(props : FormButtonProps) {
    const { type, children, className } = props
    return (
        <button type={type} className={`p-2 rounded-md flex items-center justify-center ${className}`}>
            { children }
        </button>
    )
}
```