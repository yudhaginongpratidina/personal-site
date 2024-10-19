export default function Navbar({children}: {children: React.ReactNode}) {
    return (
        <nav className="w-full px-6 box-border border-b-2 border-blue-500 bg-white shadow-md select-none">
            <div className="w-full h-14 container flex items-center justify-between">
                { children }
            </div>
        </nav>
    )
}
