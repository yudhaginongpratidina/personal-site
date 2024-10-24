# REACT COMPONENT - FORM INPUT

## TYPE

```tsx
type FormInputProps = {
    id : string
    type : "text" | "password" | "email"
    placeholder : string
    required : boolean
    value : string
    onChange : (event : React.ChangeEvent<HTMLInputElement>) => void
    autoComplete? : "on" | "off"
    className? : string
}
```

## COMPONENT

```tsx
export default function FormInput(props : FormInputProps) {
    const { id,type, placeholder, required, value, onChange, autoComplete, className } = props
    return (
        <input 
            id={id}
            name={id}
            type={type}
            placeholder={placeholder}
            required={required}
            value={value}
            onChange={onChange}
            autoComplete={autoComplete}
            className={`w-full p-2 rounded-md outline-none border bg-transparent bg-gray-50 focus:border-blue-500 ring-0 ${className}`}
        />
    )
}
```