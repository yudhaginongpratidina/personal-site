# REACT COMPONENT - FORM SHOW-HIDE

## TYPE

```tsx
type FormShowHideProps = {
    children: React.ReactNode
    isShow: boolean
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}
```

## COMPONENT

```tsx
export default function FormShowHide(props : FormShowHideProps) {
    const { children, onClick, isShow } = props
    return (
        <div className="w-full relative">
            { children }
            <button onClick={onClick} className="text-xs absolute top-1/2 right-2 -translate-y-1/2">
                { isShow ? 'Hide' : 'Show' }
            </button>
        </div>
    )
}
```