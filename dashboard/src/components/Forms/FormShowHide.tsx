// TYPE
type FormShowHideProps = {
    children: React.ReactNode
    isShow: boolean
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}
export default function FormShowHide(props : FormShowHideProps) {

    // PROPS
    const { children, onClick, isShow } = props

    // RENDER
    return (
        <div className="w-full relative">
            { children }
            <button onClick={onClick} className="text-sm absolute top-1/2 right-2 -translate-y-1/2">
                { isShow ? 'Hide' : 'Show' }
            </button>
        </div>
    )
}