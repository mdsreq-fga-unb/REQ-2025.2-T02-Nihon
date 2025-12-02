"use client";

import { useState, useEffect } from "react";
import Brand from "./Brand";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

type BrandSectionProps = {
  brands: any[] | null,
  productName: string | null,
  isOnBrandPage?: boolean;
};

export default function BrandSection({ brands, productName, isOnBrandPage }: BrandSectionProps) {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3); // padrão inicial (mobile)

  // Define quantos itens aparecem conforme o tamanho da tela
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width >= 1024) setVisibleCount(6); // desktop
      else if (width >= 640) setVisibleCount(5); // tablet
      else setVisibleCount(3); // mobile
    };

    handleResize(); // executa ao montar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Seleciona o grupo atual
  if(!brands) brands = [];
  
  const displayedBrands = brands.slice(startIndex, startIndex + visibleCount);

  const handleNext = () => {
    if (startIndex + visibleCount < brands.length) {
      setStartIndex(startIndex + visibleCount);
    }
  };

  const handlePrev = () => {
    if (startIndex - visibleCount >= 0) {
      setStartIndex(startIndex - visibleCount);
    }
  };

  // Condições
  const canGoLeft = startIndex > 0;
  const canGoRight = startIndex + visibleCount < brands.length;
  return (
    <div className="bg-white h-auto w-full max-w-7xl mx-auto rounded-3xl shadow-sm">
      <p className="text-black text-[13px] 
      min-[375px]:text-[14.5px] 
      min-[390px]:text-[16px] 
      min-[405px]:text-[17.5px] 
      min-[420px]:text-[19px]
      lg:text-[22px]
      xl:text-[24px]
      px-[25px] py-[25px]">Escolha a marca:</p>
      
      <div className="flex items-center justify-around pb-10">
        {/* Setinha esquerda */}
        <SlArrowLeft 
          onClick={canGoLeft ? handlePrev : undefined}
          className={`pl-[15px] text-[25px] 
            min-[375px]:text-[26.5px] 
            min-[390px]:text-[28px] 
            min-[405px]:text-[29.5px] 
            min-[420px]:text-[31px]   
            lg:text-[35px] 
            xl:text-[37px]
            transition ${
            canGoLeft ? "text-[#ED3135] cursor-pointer transition hover:scale-125" : "text-gray-300"
          }`}
        />

        {/* container fixo e flexível */}
        <div
          className={`
          flex justify-center  
          gap-[20px] w-60 
          min-[375px]:gap-[25px] min-[375px]:w-65
          min-[390px]:gap-[30px] min-[390px]:w-70 
          min-[405px]:gap-[35px] min-[405px]:w-75 
          min-[420px]:gap-[40px] min-[420px]:w-80
          sm:gap-[25px] sm:w-[500px] 
          md:gap-[24px] md:w-[600px] 
          lg:gap-[15px] lg:w-[800px]
          xl:gap-[32px] xl:w-[1000px] 
          overflow-visible transition-all duration-300
          `}
        >
          {displayedBrands.map((brand, index) => (
            <Brand key={startIndex + index} idfornecedor={brand.idfornecedor} name={brand.nome} productName={productName} isOnBrandPage={isOnBrandPage}/>
          ))}
        </div>
          

        {/* Setinha direita */}
        <SlArrowRight
          onClick={canGoRight ? handleNext : undefined}
          className={`
            pr-[15px] text-[25px] 
            min-[375px]:text-[26.5px] 
            min-[390px]:text-[28px] 
            min-[405px]:text-[29.5px] 
            min-[420px]:text-[31px]   
            lg:text-[35px] 
            xl:text-[37px]
            transition ${
            canGoRight ? "text-[#ED3135] cursor-pointer transition hover:scale-125" : "text-gray-300"
          }`}
        />
      </div>
    </div>
  );
}
