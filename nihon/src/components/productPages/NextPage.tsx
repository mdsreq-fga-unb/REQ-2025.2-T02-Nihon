"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NextPageProps = {
    actualPosition: number,
    lastPosition: number,
    nextPage: number | null,
    productName: string | null;
}

export default function NextPage({ actualPosition, lastPosition, nextPage, productName }: NextPageProps) {
    if(lastPosition === actualPosition || !nextPage) {
        return(
        <div className="bg-gray-200 
        h-[30px] w-[70px] text-[8px]
        min-[375px]:w-[75px] min-[375px]:text-[9.5px]
        min-[390px]:w-[85px] min-[390px]:text-[11px]
        md:h-[35px] md:w-[100px] md:text-[12.5px]
        lg:h-[40px] lg:w-[120px] lg:text-[14px] 
        shadow-[2px_4px_10px_rgba(0,0,0,0.2)] rounded-full flex items-center text-nowrap justify-center">
            <p className="text-[#ED3135]">Próxima Página</p>
        </div>
    );
    } else {
        let url = usePathname();
        if(productName) {
            url = `${url}?productName=${productName}&page=${nextPage}`;
        } else {
            url = `${url}?page=${nextPage}`;
        }
        return(
            <Link href ={url}>
            <div className="bg-[#ED3135] 
                h-[30px] w-[70px] text-[8px]
                min-[375px]:w-[75px] min-[375px]:text-[9.5px]
                min-[390px]:w-[85px] min-[390px]:text-[11px]
                md:h-[35px] md:w-[100px] md:text-[12.5px]
                lg:h-[40px] lg:w-[120px] lg:text-[14px] 
                shadow-[2px_4px_10px_rgba(0,0,0,0.2)] rounded-full text-nowrap flex items-center justify-center transition hover:scale-110 duration-150">
                <p className="text-white">Próxima Página</p>
            </div>
            </Link>
        );
        
    }
}