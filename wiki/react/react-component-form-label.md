# REACT COMPONENT - FORM LABEL

## TYPE

```tsx
type FormLabelProps = {
    htmlFor: string
    children: React.ReactNode
    required: boolean
    className?: string
}
```

## COMPONENT

```tsx
export default function FormLabel(props : FormLabelProps) {
    const { htmlFor, children, required, className } = props
    return (
        <label htmlFor={htmlFor} className={`w-full flex items-center gap-0.5 text-sm ${className}`}>
            <span>{children} { required && <span className="text-red-500">*</span> }</span>
        </label>
    )
}
```