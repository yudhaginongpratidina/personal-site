// TYPE
type ItemAsideProps = {
    name: string
    icon?: JSX.Element
}

// ITEM ASIDE
export default function ItemAside(props: ItemAsideProps) {

    // PROPS
    const { name, icon } = props

    return (
        <div className="w-full h-14 box-border px-4 border-y flex items-center gap-2.5 bg-gray-800 hover:bg-gray-700 text-white">
            { icon }
            <h1 className="text-md font-medium">{ name }</h1>
        </div>
    )
}