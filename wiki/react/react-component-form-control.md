# REACT COMPONENT FORM CONTROL

## TYPE

```tsx
type FormControlProps = {
    children: React.ReactNode
    gap: string
    direction: "column" | "row"
    className?: string
}
```

## COMPONENT

```tsx
export default function FormControl(props : FormControlProps) {
    const { children, direction, gap, className } = props
    return (
        <div className={`w-full flex ${direction === "column" ? "flex-col" : ""} ${direction === "row" ? "flex-row items-center" : ""} ${gap} ${className}`}>
            { children }
        </div>
    )
}
```