# REACT COMPONENT - FORM HEADING

```tsx
export default function FormHeading({children} : {children: React.ReactNode}) {
    return (
        <h1 className="text-2xl font-medium">
            { children }
        </h1>
    )
}
```