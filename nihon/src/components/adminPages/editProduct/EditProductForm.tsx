"use client";

import { useState } from "react";
import { SelectCategory, SelectSupplier, SelectStatus } from "@/components/adminPages/editProduct/Select";
import ImageUploader from "@/components/adminPages/editProduct/ImageUploader";
import { useRouter } from "next/navigation";

type Product = {
  idproduto: number;
  idfornecedor: number;
  nome: string;
  tipo: string;
  status: boolean;
  descricao: string;
}

type Fornecedor = {
  idfornecedor: number;
  nome: string;
}

type Categoria = {
  idcategoria: number;
  nome: string;
}

type Props = {
  action: (formData: FormData) => Promise<void>;
  product: Product;
  images:  string[];
  supplier: Fornecedor;
  categories: Categoria[];
};

export default function Form({ action, product, images, supplier, categories }: Props) {

    const [nome, setNome] = useState(product.nome);
    const [tipo, setTipo] = useState(product.tipo);
    const [descricao, setDescricao] = useState(product.descricao);
    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true); // mostra spinner

        const form = e.currentTarget;
        const formData = new FormData(form);

        // Recupera os arquivos do ImageUploader
        const imagesJson = formData.get("images_json") as string;
        const imagesArray: { type: "file"; file?: File; url?: string }[] = JSON.parse(imagesJson);

        // Adiciona arquivos reais ao FormData
        imagesArray.forEach((img) => {
            if (img.type === "file" && img.file) {
                formData.append("images", img.file); // nome usado no server action
            }
        });

        await action(formData);

        router.push("/auth/admin/products");
    };

  return (
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex flex-col h-full w-full overflow-hidden">

        <div className="h-dvh max-w-full border border-gray-300 m-15 rounded-3xl text-black flex">
            <div className="w-full p-10 flex flex-col justify-center">

            {/* Nome */}
            <div className="flex flex-col">
                <h1>Nome do Produto</h1>
                <input 
                name="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="h-10 w-full border border-gray-300 focus:outline-none rounded-3xl px-5 py-1.5"
                />
            </div>

            <div className="flex items-center justify-between gap-1">
                {/* Tipo */}
                <div className="w-[250px]">
                    <h1>Tipo</h1>
                    <input 
                    name="tipo"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                    className="h-10 w-full border border-gray-300 focus:outline-none rounded-3xl px-5 py-1.5"
                    />
                </div>
                {/* Status */}
                <div className="w-[250px]">
                    <h1>Status</h1>
                    <SelectStatus name="status" initialState={product.status}/>
                </div>
            </div>

            {/* Marca + Categorias */}
            <div className="flex items-center justify-between gap-1">
                <div className="w-[250px]">
                    <h1>Marca</h1>
                    <SelectSupplier name="fornecedor" supplier={supplier}/>
                </div>
                <div className="w-[250px]">
                    <h1>Verticais</h1>
                    <SelectCategory name="categorias" categories={categories}/>
                </div>
            </div>

            {/* Descrição */}
            <div>
                <h1>Descrição</h1>
                <textarea 
                name="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                className="h-40 w-full border border-gray-300 focus:outline-none rounded-3xl px-5 py-1.5 resize-none"
                />
            </div>
            </div>

            {/* Coluna direita */}
            <div className="w-full p-10 flex flex-col justify-center gap-5">
            <div>
                <h1>Imagens</h1>
                <ImageUploader imagesURL={images} />
            </div>

            <div className="flex justify-end">
                {loading ? (
                    // Spinner vermelho
                    <div className="h-14 w-40 flex items-center justify-center border border-red-600 rounded-2xl">
                        <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-red-600"></div>
                    </div>
                ) : (
                    <button 
                        type="submit"
                        className="bg-[#ED3135] h-14 w-40 text-[20px] text-white rounded-2xl transition hover:scale-105 cursor-pointer"
                    >
                        Confirmar
                    </button>
                )}
            </div>
            </div>

        </div>
        <input type="hidden" name="idproduto" value={product.idproduto} />
      </form>
  );
}
