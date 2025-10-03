"use client";

import { SlArrowRight } from "react-icons/sl";
import { useRouter } from "next/navigation";

type RedirectProps = {
    title: string;
    url: string;
}

export default function Redirect( { title, url }: RedirectProps) {
    
    const router = useRouter();

    const handleClick = () => {
        router.push(url);
    };

    return(
        <div className="w-full">
            <div onClick={handleClick} className="flex items-center justify-between py-5 mx-15 transform transition duration-150 hover:scale-102">
                <h1 className="text-black text-[20px] font-bold">{title}</h1>
                <SlArrowRight  color="black" size={20}/>
            </div>
            <div className="h-1 bg-gray-400 rounded-full mx-5"></div>
        </div>
    );
}