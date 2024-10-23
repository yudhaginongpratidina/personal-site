export default function FormHeader({children} : {children: React.ReactNode}) {
    return (
        <div className="w-full flex flex-col gap-2 py-2.5 border-b border-blue-500">
            { children }
        </div>
    )
}