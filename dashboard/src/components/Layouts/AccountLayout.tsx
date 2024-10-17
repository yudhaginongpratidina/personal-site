export default function AccountLayout({ title, children }: { title: string, children: React.ReactNode }) {
    return (
        <>
            {/* NAVBAR */}
            <nav className="w-full fixed top-0 z-10 bg-gray-800">
                <div className="w-full h-14 container box-border flex items-center justify-between">
                    <h1 className="text-lg font-semibold text-white">DASHBOARD</h1>
                </div>
            </nav>

            <div className="w-full min-h-screen pt-14 bg-gray-700">
                <div className="w-full container">
                    <div className="w-full h-14 border-b flex items-center">
                        <h1 className="text-lg font-semibold uppercase text-white">{title}</h1>
                    </div>
                    <div className="w-full py-4">
                        {children}
                    </div>
                </div>
            </div>

            {/* FOOTER */}
            <footer className="w-full fixed bottom-0 z-10 bg-gray-800">
                <div className="w-full h-12 container box-border flex items-center justify-between">
                    <h1 className="text-sm font-semibold text-white">BUILD WITH ❤️</h1>
                    <h1 className="text-sm font-semibold text-white">DASHBOARD V1</h1>
                </div>
            </footer>
        </>
    )
}