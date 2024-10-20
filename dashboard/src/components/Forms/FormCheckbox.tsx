// TYPE
type FormCheckboxProps = {
    id : string
    required: boolean
    checked: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string
}

// FORM CHECKBOX
export default function FormCheckbox(props : FormCheckboxProps) {

    // PROPS
    const { id, required, checked, onChange, className } = props

    // RENDER
    return (
        <input 
            type="checkbox" 
            name={id} 
            id={id}
            checked={checked}
            onChange={onChange}
            required={required}
            className={`${className}`}
        />
    )
}