# REACT COMPONENT - FORM LINK

```tsx
import { Link } from "react-router-dom";

export default function FormLink({href, children} : {href: string, children: React.ReactNode}) {
    return (
        <Link to={href} className="text-sm text-blue-500 hover:underline hover:underline-offset-8">
            { children }
        </Link>
    )
}
```