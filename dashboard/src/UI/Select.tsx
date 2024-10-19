// TYPE OPTION
type OptionProps = {
    id: number
    value: string
    name: string
}

// TYPE SELECT
type SelectProps = {
    id: string
    className?: string
    options: OptionProps[]
    value?: string
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

// UI SELECT
export default function Select(props: SelectProps) {

    // PROPS
    const { id, className, options } = props

    return (
        <select
            id={id}
            value={props.value}
            onChange={props.onChange}
            className={`w-full p-2.5 outline-none border rounded bg-transparent focus:border-black ${className}`}
        >
            <option value={""} className="text-gray-400">--- Select ---</option>
            {options?.map((option) => (
                <option key={option.id} value={option.value}>
                    {option.name}
                </option>
            ))}
        </select>        
    )
}