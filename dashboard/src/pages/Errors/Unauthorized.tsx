export default function Unauthorized(){
    return (
        <main className="w-full min-h-screen flex items-center justify-center">
            <div className="w-full flex items-center justify-center gap-2">
                <span className="text-xl font-medium">401</span>
                <span>|</span>
                <span className="text-lg font-medium">Unauthorized</span>
            </div>
        </main>
    )
}