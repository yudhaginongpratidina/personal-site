# REACT COMPONENT - AVATAR MENU

```tsx
export default function AvatarMenu({children, className, isActive} : {children: React.ReactNode, className?: string, isActive: boolean}) {
    return (
        <div className={`${isActive ? 'block' : 'hidden'} flex flex-col gap-2 py-2 rounded-md shadow-md bg-white border w-[250px] ${className}`}>
            { children }
        </div>
    )
}
```