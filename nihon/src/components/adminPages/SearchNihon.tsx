"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";  
import { CiSearch } from "react-icons/ci";
 

export default function SearchBar() {

  let url = usePathname();

  const [value, setValue] = useState("");
  const router = useRouter();

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault(); // evita reload da página
    if (!value.trim()) return;  // não faz nada se input vazio
    router.push(`${url}?productName=${encodeURIComponent(value)}`);
  };

  return (
    <form onSubmit={handleSearch} className="relative h-[40px] w-full flex items-center justify-center">
      <div className="flex items-center border border-gray-300 rounded-full px-3 py-2 w-full  bg-white shadow-sm">
        <CiSearch className="text-gray-400 w-5 h-5 mr-2" />
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Buscar por nome do produto"
          className="w-full text-gray-500 placeholder-gray-400 focus:outline-none"
        />
      </div>
    </form>
  );
}
