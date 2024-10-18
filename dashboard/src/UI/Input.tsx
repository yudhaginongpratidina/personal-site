type InputProps = {
    id: string
    type: string
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string
    className?: string
}

export default function Input(props: InputProps) {

    const { id, type, value, onChange, placeholder, className } = props

    return (
        <input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            name={id}
            placeholder={placeholder}
            className={`w-full p-2.5 outline-none border rounded bg-transparent focus:border-black ${className}`}
        />
    )
}