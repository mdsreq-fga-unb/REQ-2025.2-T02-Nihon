
"use client"
import React, { useEffect, useState, useContext } from "react";
import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";

type ProductInfoProps = {   
        nome: string | undefined,
        tipo: string | undefined, 
        statusProduto: boolean | undefined, 
        nomeFornecedor: string | null;
}

export function ProductInfo({nome, tipo, statusProduto, nomeFornecedor}: ProductInfoProps) {
        return(
        <div className="w-full bg-white border rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold mb-2">Características do Produto</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                    <li><strong>Nome:</strong> {nome ?? "—"}</li>
                    <li><strong>Tipo:</strong> {tipo ?? "—"}</li>
                    <li><strong>Fornecedor:</strong> {nomeFornecedor ?? "—"}</li>
                    <li><strong>Status:</strong> {statusProduto ? "Disponível em estoque" : "Indisponível"}</li>
                </ul>
        </div>

        );
}

export function ProductDescription({ descricao }: { descricao: string | undefined }) {  
        return(
        <div className="w-full bg-white border rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold mb-2">Descrição do Produto</h3>
                <p className="text-sm text-gray-700">{descricao ?? "Sem descrição disponível."}</p>
        </div>
            );
}

// Default client-facing wrapper used by some pages/tests which expect
// a `product` and `loading` props (matches app/(user)/produtosDescricao/ProductInfo)
export default function ProductInfoClient({ product, loading }: { product: any, loading: boolean }) {
    const router: any = useContext(AppRouterContext) ?? {};
    const [fornecedorNome, setFornecedorNome] = useState<string | null>(null);

    useEffect(() => {
        let mounted = true;
        async function loadFornecedor() {
            if (!product?.raw?.idfornecedor) {
                setFornecedorNome(null);
                return;
            }
            try {
                const res = await fetch(`/rest/v1/fornecedor?idfornecedor=eq.${product.raw.idfornecedor}`);
                const data = await res.json();
                if (!mounted) return;
                setFornecedorNome(Array.isArray(data) ? (data[0]?.nome ?? null) : (data?.nome ?? null));
            } catch (e) {
                if (mounted) setFornecedorNome(null);
            }
        }
        loadFornecedor();
        return () => { mounted = false; };
    }, [product]);

    if (loading) return <div className="p-4">Carregando...</div>;
    if (!product) return <div className="p-4 text-gray-600">Produto não encontrado.</div>;

    function handleBack() {
        try {
            if (typeof window !== "undefined" && window.history.length > 1) {
                router.back();
            } else {
                router.push?.("/products");
            }
        } catch {
            router.push?.("/products");
        }
    }

    return (
        <div className="relative">
            <button
                onClick={handleBack}
                aria-label="Voltar para lista de produtos"
                className="fixed left-4 md:left-8 top-24 md:top-28 z-50 bg-white border border-gray-200 rounded-full p-3 shadow-md hover:shadow-lg transition-all flex items-center justify-center w-12 h-12 md:w-14 md:h-14"
                title="Voltar para produtos"
            >
                ←
            </button>

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