# REACT COMPONENT FORM

## TYPE

```tsx
type FormProps = {
    children: React.ReactNode
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
    direction: "column" | "row"
    gap: string
    className?: string
}
```

## COMPONENT

```tsx
export default function Form(props : FormProps) {
    const { onSubmit, direction , children, gap, className } = props
    return (
        <form 
            onSubmit={onSubmit} 
            className={`w-full flex ${direction === "column" ? "flex-col" : ""} ${direction === "row" ? "flex-row" : ""} ${gap} ${className}`}
        >
            { children }
        </form>        
    )
}
```

## PARAMETER

- `children`: React.ReactNode
- `onSubmit`: (event: React.FormEvent<HTMLFormElement>) => void
- `direction`: "column" | "row"
- `gap`: string
- `className`: string