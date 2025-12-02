"use server"; 

import { supabaseAdmin } from "../../client";

const supabase_admin = supabaseAdmin();

export async function removeProduct(idproduto: number) {
  // 1️⃣ Pegar URLs dos arquivos relacionados
  const { data: urls, error: error1 } = await supabase_admin
    .from("imagem_produto")
    .select("url")
    .eq("idproduto", idproduto);

  if (error1) throw error1;

  // 2️⃣ Remover arquivos do Supabase Storage
  if (urls && urls.length > 0) {
    // Supondo que suas URLs são do tipo: "https://.../Produto/nomeDoArquivo.jpg"
    const paths = urls.map(u => {
      const parts = u.url.split("/Produto/"); 
      return parts[1]; // pega apenas o nome do arquivo
    }).filter(Boolean);

    if (paths.length > 0) {
      const { data: removeUrls, error: error2 } = await supabase_admin
        .storage
        .from("Produto")
        .remove(paths);

      if (error2) throw error2;
    }
  }

  // 3️⃣ Remover o produto da tabela
  const { data: removeProduct, error } = await supabase_admin
    .from("produto")
    .delete()
    .eq("idproduto", idproduto);

  if (error) throw error;

  return removeProduct;
}
