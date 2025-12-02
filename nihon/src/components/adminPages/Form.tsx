"use client";

import { useState } from "react";

import { SelectCategory, SelectSupplier } from "@/components/adminPages/Select";
import ImageUploader from "@/components/adminPages/ImageUploader";

type Props = {
  action: (formData: FormData) => Promise<void>;
};

export default function Form({ action }: Props) {
  const [resetKey, setResetKey] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    setLoading(true);
    try {
      await action(formData);
      form.reset();
      setResetKey((prev) => prev + 1);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="flex flex-col h-full w-full overflow-hidden"
    >
      <div className="h-dvh max-w-full border border-gray-300 m-15 rounded-3xl text-black flex">
        <div className="w-full p-10 flex flex-col justify-center">
          {/* Nome */}
          <div className="flex flex-col">
            <h1>Nome do Produto</h1>
            <input
              name="nome"
              className="h-10 w-full border border-gray-300 focus:outline-none rounded-3xl px-5 py-1.5"
            />
          </div>

          {/* Tipo */}
          <div>
            <h1>Tipo</h1>
            <input
              name="tipo"
              className="h-10 w-full border border-gray-300 focus:outline-none rounded-3xl px-5 py-1.5"
            />
          </div>

          {/* Marca + Categorias */}
          <div className="flex items-center justify-between gap-1">
            <div className="w-[250px]">
              <h1>Marca</h1>
              <SelectSupplier name="fornecedor" resetKey={resetKey} />
            </div>
            <div className="w-[250px]">
              <h1>Verticais</h1>
              <SelectCategory name="categorias" resetKey={resetKey} />
            </div>
          </div>

          {/* Descrição */}
          <div>
            <h1>Descrição</h1>
            <textarea
              name="descricao"
              className="h-40 w-full border border-gray-300 focus:outline-none rounded-3xl px-5 py-1.5 resize-none"
            />
          </div>
        </div>

        {/* Coluna direita */}
        <div className="w-full p-10 flex flex-col justify-center gap-5">
          <div>
            <h1>Imagens</h1>
            <ImageUploader resetKey={resetKey} />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={loading}
              className={`h-14 w-40 text-[20px] rounded-2xl flex justify-center items-center transition ${
                loading
                  ? "bg-white border-2 border-red-600 cursor-not-allowed"
                  : "bg-[#ED3135] text-white hover:scale-105 cursor-pointer"
              }`}
            >
              {loading ? (
                <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-red-600"></div>
              ) : (
                "+ Adicionar"
              )}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
