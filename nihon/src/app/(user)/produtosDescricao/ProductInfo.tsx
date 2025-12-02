"use client"
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
// Importando cada ícone de um arquivo individual para não quebrar o build
import { FaPhoneAlt } from "@react-icons/all-files/fa/FaPhoneAlt";
import { FaArrowLeft } from "@react-icons/all-files/fa/FaArrowLeft";
import { createClient } from "@/lib/supabase/client";

export default function ProductInfo({ product, loading }: { product: any, loading: boolean }) {
  const supabase = useMemo(() => createClient(), []);
  const router = useRouter();
  const [fornecedorNome, setFornecedorNome] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    async function loadFornecedor() {
      if (!product?.raw?.idfornecedor) {
        setFornecedorNome(null);
        return;
      }
      try {
        const res = await supabase
          .from("fornecedor")
          .select("nome")
          .eq("idfornecedor", product.raw.idfornecedor)
          .maybeSingle();
        const { data, error } = res as any;
        if (!mounted) return;
        if (error) {
          console.warn("Erro fornecedor:", error);
          setFornecedorNome(null);
        } else {
          setFornecedorNome(data?.nome ?? null);
        }
      } catch (e) {
        console.error(e);
        if (mounted) setFornecedorNome(null);
      }
    }
    loadFornecedor();
    return () => { mounted = false; };
  }, [product, supabase]);

  if (loading) return <div className="p-4">Carregando...</div>;

  if (!product) return <div className="p-4 text-gray-600">Produto não encontrado.</div>;

  // volta no histórico se possível, senão vai para listagem 
  function handleBack() {
    try {
      if (typeof window !== "undefined" && window.history.length > 1) {
        router.back();
      } else {
        router.push("/products");
      }
    } catch {
      router.push("/products");
    }
  }

  return (
    <div className="relative">
      {/* Back button */}
      <button
        onClick={handleBack}
        aria-label="Voltar para lista de produtos"
        className="fixed left-4 md:left-8 top-24 md:top-28 z-50 bg-white border border-gray-200 rounded-full p-3 shadow-md hover:shadow-lg transition-all flex items-center justify-center w-12 h-12 md:w-14 md:h-14"
        title="Voltar para produtos"
      >
        <FaArrowLeft className="w-6 h-6 md:w-8 md:h-8 text-gray-800" />
      </button>

      {/* Page content */}
      <h1 className="text-2xl font-bold mb-3">{product.title}</h1>

      <div className="mb-6">
        <button
          type="button"
          className="w-full md:w-auto bg-red-600 hover:bg-red-700 text-white font-bold text-lg px-6 py-3 rounded-lg shadow-md transition-colors"
        >
          Fazer Orçamento
        </button>
      </div>

      <div className="bg-white border rounded-lg p-4 mb-4 shadow-sm">
        <h3 className="font-semibold mb-2">Características do Produto</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          <li><strong>Tipo:</strong> {product.tipo ?? "—"}</li>
          <li><strong>Fornecedor:</strong> {fornecedorNome ?? (product.raw?.nomefornecedor ?? "—")}</li>
          <li><strong>Status:</strong> {product.status ? "Disponível em estoque" : "Indisponível"}</li>
        </ul>
      </div>

      <div className="bg-white border rounded-lg p-4 shadow-sm">
        <h3 className="font-semibold mb-2">Descrição do Produto</h3>
        <p className="text-sm text-gray-700">{product.description || product.raw?.descricao || "Sem descrição disponível."}</p>
      </div>
    </div>
  );
}
