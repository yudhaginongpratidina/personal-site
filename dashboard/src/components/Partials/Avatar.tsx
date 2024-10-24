import { FaUser } from "react-icons/fa";

type AvatarProps = {
    isActive: boolean
    onClick: (e: React.MouseEvent) => void;
}

export default function Avatar(props : AvatarProps){

    const { isActive, onClick} = props

    return (
        <button onClick={onClick} className={`border border-gray-500 rounded p-1 ${isActive ? 'bg-black' : 'bg-white'}`} >
            <FaUser size={20} className={` ${isActive ? 'text-white' : 'text-black'}`}/>
        </button>
    )
}