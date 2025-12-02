"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export function CategoriesCarousel() {
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const square_categories = [
    "SUPERMERCADO",
    "AÇOUGUE",
    "PADARIA",
    "REFRIGERAÇÃO",
    "AUTOMAÇÃO COMERCIAL",
    "UTENSÍLIOS"
  ];

  const square_categories_ref = [
    "Supermercado",
    "Açougue",
    "Padaria e Confeitaria",
    "Refrigeração Comercial",
    "Automação Comercial",
    "Utensílios"
  ];

  const square_categories_img = [
    "/images/mercado.png",
    "/images/acougue.png",
    "/images/padaria.png",
    "/images/refrigeracao.png",
    "/images/automacao.png",
    "/images/utensilio.png"
  ];

  useEffect(() => {
    if (!carouselRef.current) return;

    const children = carouselRef.current.children;
    const middleIndex = Math.floor(children.length / 2);
    const middleItem = children[middleIndex] as HTMLElement;

    carouselRef.current.scrollTo({
      left:
        middleItem.offsetLeft -
        carouselRef.current.offsetWidth / 2 +
        middleItem.offsetWidth / 2,
      behavior: "smooth",
    });
  }, []);

  return (
    <div
      ref={carouselRef}
      className="
        py-6 md:p-10
        w-full flex 
        gap-5 
        md:gap-15
        lg:gap-20
        2xl:gap-x-50
        items-center justify-center
        flex-wrap
        snap-x snap-mandatory
        px-4
        sm:justify-center
      "
    >
      {square_categories.map((cat, i) => (
        <Link key={i} href={`/${encodeURIComponent(square_categories_ref[i])}/products`}>
          <motion.div
            className="
              w-[150px] h-[170px]
              min-[375px]:w-[160px] min-[375px]:h-[180px]
              min-[390px]:w-[165px] min-[390px]:h-[185px]
              min-[405px]:w-[175px] min-[405px]:h-[195px]
              min-[420px]:w-[180px] min-[420px]:h-[200px]
              lg:w-[230px] lg:h-[250px]
              xl:w-[280px] xl:h-[300px] 
              bg-gray-200 flex flex-col items-center justify-center 
              shadow-md rounded-xl transition hover:scale-105
              snap-center
            "
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: i * 0.05 }}
          >
            <p className="text-gray-600 text-[12px] lg:text-[14px] xl:text-[16px] text-center">
              {cat}
            </p>

            <img
              src={square_categories_img[i]}
              alt={square_categories_img[i]}
              className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] xl:w-[160px] xl:h-[160px] object-contain"
            />
          </motion.div>
        </Link>
      ))}
    </div>
  );
}
