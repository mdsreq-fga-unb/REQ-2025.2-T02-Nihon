"use client"
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { supabaseUser } from "@/lib/supabase/client";

export default function SimilarProducts({ product }: { product?: any }) {
  const supabase = useMemo(() => supabaseUser(), []);
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!product) return;
    let mounted = true;
    async function loadSimilar() {
      setLoading(true);
      try {
        // pega categorias do produto
        const rel = await supabase
          .from("produtos_categorias")
          .select("idcategoria")
          .eq("idproduto", product.id);
        const { data: cats, error: relErr } = rel as any;
        if (relErr || !cats || !cats.length) {
          setItems([]);
          setLoading(false);
          return;
        }
        const catIds = cats.map((c: any) => c.idcategoria);

        // pega produtos na(s) mesma(s) categoria(s)
        const rels = await supabase
          .from("produtos_categorias")
          .select("idproduto")
          .in("idcategoria", catIds);
        const { data: relsData } = rels as any;
        const produtoIds = Array.from(new Set((relsData || []).map((r: any) => r.idproduto)))
          .filter((id: any) => id && id !== product.id)
          .slice(0, 8);

        if (produtoIds.length === 0) {
          setItems([]);
          setLoading(false);
          return;
        }

        // busca dados básicos dos produtos
        const prods = await supabase
          .from("produto")
          .select("idproduto, nome")
          .in("idproduto", produtoIds)
          .limit(8);
        const { data: produtosData } = prods as any;
        if (!mounted) return;
        setItems(produtosData || []);
      } catch (e) {
        console.error("Erro similar:", e);
        if (mounted) setItems([]);
      } finally {
        if (mounted) setLoading(false);
      }
    }
    loadSimilar();
    return () => { mounted = false; };
  }, [product, supabase]);

  if (!product) return null;
  if (loading) return <div className="mt-6">Carregando produtos semelhantes...</div>;
  if (!items.length) return <div className="mt-6 text-gray-600">Nenhum produto semelhante encontrado.</div>;

  return (
    <div className="mt-6">
      <h3 className="font-semibold mb-4">Produtos Semelhantes</h3>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {items.map((it: any) => (
          <Link key={it.idproduto} href={`/produtosDescricao?id=${it.idproduto}`} className="w-36 shrink-0">
            <div className="bg-white border rounded-lg p-3 text-center">
              {/* sem imagem armazenada; use placeholder. Se tiver imagem, ajuste para buscar imagem de imagem_produto */}
              <div className="h-24 mb-2 flex items-center justify-center bg-gray-50 rounded">
                <Image src="/images/placeholder.png" alt={it.nome} width={120} height={80} className="object-contain" />
              </div>
              <div className="text-sm text-gray-700">{it.nome ?? "Produto"}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
