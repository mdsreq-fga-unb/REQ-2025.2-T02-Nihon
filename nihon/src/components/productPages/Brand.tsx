"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchBrandImage } from "@/lib/supabase/productPage";

type BrandProps = {
  name: string;
  idfornecedor: number;
  productName: string | null;
  isOnBrandPage?: boolean;
};

export default function Brand({
  name,
  idfornecedor,
  productName,
  isOnBrandPage,
}: BrandProps) {
  const path = usePathname();

  let url = `${path}/${name}`;
  if (productName) {
    url = `${path}/${name}?productName=${encodeURIComponent(productName)}`;
  }

  const [brandImageUrl, setBrandImageUrl] = useState<string | null>(null);

  useEffect(() => {
    const loadBrandImage = async () => {
      try {
        const imageUrl = await fetchBrandImage(idfornecedor);
        if (!imageUrl) return;
        setBrandImageUrl(imageUrl);
      } catch (err) {
        console.error("Erro ao buscar imagem:", err);
      }
    };

    loadBrandImage();
  }, [idfornecedor]);

  if (isOnBrandPage) {
    return (
      <div
        className="
          bg-white
          rounded-full
          shadow-xl
          cursor-pointer

          w-[64px] h-[64px]
          min-[375px]:w-[67px] min-[375px]:h-[67px]
          min-[390px]:w-[70px] min-[390px]:h-[70px]
          min-[405px]:w-[73px] min-[405px]:h-[73px] 
          min-[420px]:w-[76px] min-[420px]:h-[76px]
          sm:w-[79px] sm:h-[79px]
          md:w-[100px] md:h-[100px]
          lg:w-[120px] lg:h-[120px]
          xl:w-[140px] xl:h-[140px]
          flex 
          items-center
          justify-center
        "
      >
        {brandImageUrl && (
          <img
            src={brandImageUrl}
            alt={`Logo ${name}`}
            className="w-full h-full object-cover rounded-full"
          />
        )}
      </div>
    );
  }

  return (
    <Link href={url}>
      <div
        className="
        bg-white
          rounded-full
          shadow-xl
          transition-transform
          hover:scale-110
          cursor-pointer

          w-[64px] h-[64px]
          min-[375px]:w-[67px] min-[375px]:h-[67px]
          min-[390px]:w-[70px] min-[390px]:h-[70px]
          min-[405px]:w-[73px] min-[405px]:h-[73px] 
          min-[420px]:w-[76px] min-[420px]:h-[76px]
          sm:w-[79px] sm:h-[79px]
          md:w-[100px] md:h-[100px]
          lg:w-[120px] lg:h-[120px]
          xl:w-[140px] xl:h-[140px]
          text-white
          flex
          items-center
          justify-center
        "
      >
        {brandImageUrl && (
          <img
            src={brandImageUrl}
            alt={`Logo ${name}`}
            className="w-full h-full object-cover rounded-full"
          />
        )}
      </div>
    </Link>
  );
}
