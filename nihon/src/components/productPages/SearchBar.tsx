"use client";

import { useState } from "react";
import { SlMagnifier } from "react-icons/sl";
import { useRouter } from "next/navigation";  

type SearchBarProps = {
  category?: boolean,
  categoryName?: string;
}

export default function SearchBar({ category, categoryName }: SearchBarProps) {
  let url = "/products";
  if(category) {
    url = `/${categoryName}/products`
  }
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
  const router = useRouter();

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault(); // evita reload da página
    if (!value.trim()) return;  // não faz nada se input vazio
  router.push(`${url}?productName=${encodeURIComponent(value)}`);
  };

  return (
    <div className="h-14 w-full bg-[#ED3135] flex items-center justify-center">
      {/* Container relativo para posicionar a lupa */}
      <form 
        className="relative h-[40px] w-full flex items-center justify-center" 
        onSubmit={handleSearch}
      >
        <div className="relative w-[200px] sm:w-[350px] md:w-[500px] lg:w-[600px] xl:w-[700px]">
          {/* Input */}
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Pesquisar..."
            className="
              h-[40px] w-[200px] sm:w-[350px] md:w-[500px] lg:w-[600px] xl:w-[700px]
              bg-white rounded-3xl
              outline-none
              pl-10 pr-4
              text-[13px] min-[375px]:text-[14.5px] min-[390px]:text-[16px] min-[405px]:text-[17.5px] min-[420px]:text-[19px]
              focus:ring-2 focus:ring-red-500
              placeholder:text-gray-400
              transition-all
            "
          />

          {/* Lupa dentro do input */}
          <SlMagnifier
            onClick={handleSearch}
            className={`
              absolute left-3 top-1/2 transform -translate-y-1/2
              text-gray-400 cursor-pointer
              text-[13px] min-[375px]:text-[14.5px] min-[390px]:text-[16px] min-[405px]:text-[17.5px] min-[420px]:text-[19px]
              transition-opacity duration-200
              ${isFocused || value ? "opacity-0" : "opacity-100"}
            `}
          />
        </div>
      </form>
    </div>
  );
}