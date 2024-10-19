import { FaCode } from "react-icons/fa";

export default function FooterBrand({ name } : { name: string; }){
    return (
        <div className="flex items-center gap-2">
            <FaCode className="w-6 h-6 text-blue-500" />
            <h1 className="text-sm font-bold">{name}</h1>
        </div>
    )
}