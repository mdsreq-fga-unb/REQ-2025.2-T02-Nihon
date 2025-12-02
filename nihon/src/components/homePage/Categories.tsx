"use client";

import Link from "next/link";

import { motion } from "framer-motion";


export function Categories() {
      const categories = [
        "Bar e Restaurante",
        "Mobiliário Comercial",
        "Suprimentos",
    ];

    return(
            <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 text-gray-700 pt-6 md:pt-10">
                      {categories.map((category, index) => (
                        <motion.div
                          key={index}
                              className="flex items-center"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: index * 0.1 }}
                            >
                              <Link href={`/${encodeURIComponent(categories[index])}/products`}>
                                <p className="hover:text-[#E21414] cursor-pointer transition-colors text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]">
                                  {category}
                                </p>
                              </Link>
                                {index !== categories.length - 1 && (
                                  <span className="mx-4 text-gray-400">|</span>
                                )}
                              
                            </motion.div>
                          ))}
                      </div>
    );
}