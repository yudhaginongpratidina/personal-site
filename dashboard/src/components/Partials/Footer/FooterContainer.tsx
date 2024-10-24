export default function FooterContainer({fixed, children} : {fixed: boolean, children: React.ReactNode}) {
    return (
        <footer className={`w-full ${fixed ? 'fixed bottom-0 z-10' : ''} border-t shadow-sm bg-white`}>
            { children }
        </footer>
    )
}