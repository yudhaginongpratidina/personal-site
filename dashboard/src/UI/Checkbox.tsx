type CheckboxProps = {
    id: string
    checked: boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string
}

export default function Checkbox(props : CheckboxProps) {

    const { id, checked, onChange, className } = props

    return (
        <input 
            type="checkbox" 
            name={id}
            id={id}
            checked={checked}
            onChange={onChange}
            className={`w-4 h-4 rounded ${className}`}
        />
    )
}