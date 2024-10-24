export default function AvatarItem({children} : {children: React.ReactNode}) {
    return (
        <div className="w-full px-4">
            <h1 className="text-sm px-2 py-1.5 rounded hover:bg-gray-100">
                { children }
            </h1>
        </div>
    )
}