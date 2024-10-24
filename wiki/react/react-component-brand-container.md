# REACT COMPONENT - BRAND CONTAINER

```tsx
export default function BrandContainer({children} : {children: React.ReactNode}) {
    return (
        <div className="flex items-center gap-1.5">
            { children }
        </div>
    )
}
```