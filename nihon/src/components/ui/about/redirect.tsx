"use client";

// Mudamos de 'sl/SlArrowRight' para 'fa/FaArrowRight' que é garantido
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
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
        <div className="w-full overflow-y-hidden">
            <div onClick={handleClick} className="flex items-center justify-between py-5 mx-15 transform transition duration-150 hover:scale-102">
                <h1 className="text-secondary text-[20px] font-bold">{title}</h1>
                {/* Atualizamos o componente aqui também */}
                <FaArrowRight color="white" />
            </div>
        </div>
    );
}