
import { fetchFirstImageOfProduct } from "@/lib/supabase/productPage";
import Link from "next/link";

type ProductProps = {
  name: string;
  idproduto: number;
};

export default async function Product({ name, idproduto }: ProductProps) {

  const urlImage= await fetchFirstImageOfProduct(idproduto);
      
  return (
    <div className="
      flex flex-col 
      py-2
      w-[130px] 
      min-[375px]:w-[138px] 
      min-[390px]:w-[146px]
      min-[405px]:w-[154px]
      min-[420px]:w-[162px]
      md:w-[200px]
      lg:w-[280px]
      xl:w-[250px]
      ">
    

      <Link href={`/product?id=${idproduto}`}>
        
      <div className="
          h-[130px] w-[130px]
          min-[375px]:h-[138px] min-[375px]:w-[138px]
          min-[390px]:h-[146px] min-[390px]:w-[146px] 
          min-[405px]:h-[154px] min-[405px]:w-[154px]
          min-[420px]:h-[162px] min-[420px]:w-[162px]
          md:h-[200px] md:w-[200px]
          lg:h-[280px] lg:w-[280px]
          xl:h-[250px] xl:w-[250px]
          bg-cover 
          bg-center
          shadow-[2px_4px_10px_rgba(0,0,0,0.2)]
          rounded-3xl
          transition-transform hover:scale-105 cursor-pointer
        "
        style={{ backgroundImage: `url(${urlImage || ''})` }}
      ></div>

      </Link>
      <p className="
      text-center 
      text-nowrap 
      overflow-hidden 
      overflow-ellipsis 
      text-[10px] 
      min-[375px]:text-[11.5px] 
      min-[390px]:text-[13px] 
      min-[405px]:text-[14.5px] 
      min-[420px]:text-[16px] 
      md:text-[18px]
      lg:text-[20px]
      xl:text-[22px]
      py-3  
      text-black 
      w-[130px]
      min-[375px]:w-[138px] 
      min-[390px]:w-[146px]  
      min-[405px]:w-[154px] 
      min-[420px]:w-[162px] 
      md:w-[200px]
      lg:w-[280px]
      xl:w-[250px]
      ">
        {name}
      </p>

      <div className="
      flex 
      justify-center 
      items-center 
      w-full">
        <Link href={`/product?id=${idproduto}`}>
            <button className="
                flex 
                items-center 
                justify-center 
                px-[10px] py-[5px] text-[8px]
                min-[375px]:px-[12.5px] min-[375px]:py-[7.5px] min-[375px]:text-[9.5px]
                min-[390px]:text-[10.5px]
                md:px-[20px] md:py-[10px] md:text-[12px]
                lg:px-[25px] lg:py-[12.5px] lg:text-[14px]
                rounded-full
                text-nowrap
                shadow-[2px_4px_10px_rgba(0,0,0,0.2)]
                bg-[#ED3135]
                text-white
                transition-transform hover:scale-105
                cursor-pointer
              ">
              Saiba mais
            </button>
        </Link>
      </div>
    </div>
  );
}
