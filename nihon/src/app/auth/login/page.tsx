"use client";

import { useState } from "react";
import Image from "next/image";
import { loginAction } from "./action"; 
import PasswordToggle from "@/components/adminPages/PasswordToggle";

export default function Page() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center relative">
      <div className="fixed left-0 top-0 bottom-0 w-8 sm:w-10 bg-[#E30613] z-10" />
      <div className="fixed right-0 top-0 bottom-0 w-8 sm:w-10 bg-[#E30613] z-10" />

      <div className="w-full max-w-5xl mx-6 relative z-20">
        <div className="flex">
          <div className="flex-1 flex items-center justify-center">
            <div className="w-full max-w-2xl bg-gray-100 rounded-sm shadow-md py-12 px-8 sm:px-16">
              <div className="flex flex-col items-center">
                <div className="w-28 h-28 mb-6">
                  <Image
                    src="/images/circuloNihon-noBackground.png"
                    alt="logo nihon"
                    width={112}
                    height={112}
                    className="object-contain"
                  />
                </div>

                <h1 className="text-xl sm:text-2xl text-gray-700 font-black mb-6">
                  Administrativo
                </h1>

                {/* FORM COM SERVER ACTION */}
                <form
                  className="w-full max-w-sm"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const form = e.currentTarget;
                    const formData = new FormData(form);
                    setLoading(true);
                    try {
                      await loginAction(formData);
                    } finally {
                      setLoading(false);
                    }
                  }}
                >
                  <label className="block text-sm text-gray-600 mb-2">Usuário:</label>
                  <input
                    type="text"
                    name="username"
                    className="w-full mb-4 px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E30613]"
                  />

                  <label className="block text-sm text-gray-600 mb-2">Senha:</label>
                  <PasswordToggle
                    name="password"
                    placeholder=""
                    className="w-full mb-2 px-4 py-2 rounded-full border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#E30613]"
                  />

                  <div className="flex justify-center py-5">
                    <button
                      type="submit"
                      disabled={loading}
                      className={`h-12 px-6 rounded-full flex justify-center items-center shadow-md transition ${
                        loading
                          ? "bg-white border-2 border-red-600 cursor-not-allowed"
                          : "bg-[#E30613] text-white hover:scale-105 cursor-pointer"
                      }`}
                    >
                      {loading ? (
                        <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-red-600"></div>
                      ) : (
                        "Entrar"
                      )}
                    </button>
                  </div>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
