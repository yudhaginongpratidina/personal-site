// TYPE
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

// FORM INPUT
export default function FormInput(props : FormInputProps) {

    // PROPS
    const { id,type, placeholder, required, value, onChange, autoComplete, className } = props

    // RENDER
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
            className={`w-full p-3 outline-none ${className}`}
        />
    )
}