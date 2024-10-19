// TYPE
type HeaderAsideProps = {
    name: string
}

// HEADER ASIDE
export default function HeaderAside(props : HeaderAsideProps) {

    // PROPS
    const { name } = props

    return (
        <div className="w-full h-14 box-border px-4 flex items-center border-y bg-white">
            <h1 className="text-md font-medium">{ name }</h1>
        </div>
    )
}