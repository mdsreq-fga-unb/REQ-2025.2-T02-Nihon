"use client";

import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";

export function BackButton() {
    const router = useRouter();

    return (
        <button
        onClick={() => router.back()}
        aria-label="Voltar para lista de produtos"
    className="fixed left-4 bottom-4 md:left-8 md:bottom-8 z-50 bg-white border border-gray-200 rounded-full p-3 shadow-md hover:shadow-lg transition-all flex items-center justify-center w-12 h-12 md:w-14 md:h-14 cursor-pointer"
        title="Voltar para produtos"
      >
        <FaArrowLeft className="w-6 h-6 md:w-8 md:h-8 text-gray-800" />
      </button>
    );
}