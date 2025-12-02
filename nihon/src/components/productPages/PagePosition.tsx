"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


type PagePositionProps = {
    actualPosition: number,
    pagePosition: number,
    productName: string | null;
}

export default function PagePosition({ actualPosition, pagePosition, productName }: PagePositionProps) {
    
    if(pagePosition === actualPosition) {
        return(
        <div className="bg-[#ED3135]  
        h-8 w-8 
        text-[12px] 
        min-[375px]:text-[16px] 
        md:h-10 md:w-10 md:text-[18px]
        lg:h-12 lg:w-12 lg:text-[20px]
        shadow-[2px_4px_10px_rgba(0,0,0,0.2)]
        rounded-full flex items-center justify-center scale-125
        transition-all duration-150">
            <p className="text-white">{pagePosition}</p>
        </div>
    );
    } else {
        let url = usePathname();
        if(productName) {
            url = `${url}?productName=${productName}&page=${pagePosition}`;
        } else {
            url = `${url}?page=${pagePosition}`;
        }
        return(
            <Link href={url}>
            <div className="bg-white 
            h-8 w-8 
            text-[14px] 
            min-[375px]:text-[16px]  
            md:h-10 md:w-10 md:text-[18px]
            lg:h-12 lg:w-12 lg:text-[20px]
            shadow-[2px_4px_10px_rgba(0,0,0,0.2)]
            rounded-full flex items-center justify-center
            transition-all duration-150">   
                <p className="text-[#ED3135]">{pagePosition}</p>
            </div>
            </Link>
        );
    }
}