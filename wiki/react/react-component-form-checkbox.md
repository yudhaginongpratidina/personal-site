# REACT COMPONENT FORM CHECKBOX

## TYPE

```tsx
type FormCheckboxProps = {
    id : string
    required: boolean
    checked: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string
}
```

## COMPONENT

```tsx
export default function FormCheckbox(props : FormCheckboxProps) {
    const { id, required, checked, onChange, className } = props
    return (
        <input 
            type="checkbox" 
            name={id} 
            id={id}
            checked={checked}
            onChange={onChange}
            required={required}
            className={`w-4 h-4 ${className}`}
        />
    )
}
```