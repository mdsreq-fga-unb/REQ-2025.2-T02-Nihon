"use server";

import { insertNewProduct } from "@/lib/supabase/admin/adminClient-product";

export async function insertNewProductAction(formData: FormData) {
  const nome = (formData.get("nome") as string)?.trim();
  const tipo = (formData.get("tipo") as string)?.trim();
  const descricao = (formData.get("descricao") as string)?.trim();

  const idfornecedor = Number(formData.get("fornecedor"));
  const idcategorias = formData.getAll("categorias").map((x) => Number(x));

  const files = formData.getAll("images") as File[];

  // ------------------------------------------------------------------------
  // VALIDACÕES
  // ------------------------------------------------------------------------

  if (!nome) {
    console.error("Erro: Nome do produto é obrigatório.");
    return;
  }

  if (!tipo) {
    console.error("Erro: Tipo do produto é obrigatório.");
    return;
  }

  if (!descricao) {
    console.error("Erro: Descrição do produto é obrigatória.");
    return;
  }

  if (!idfornecedor || Number.isNaN(idfornecedor)) {
    console.error("Erro: Fornecedor é obrigatório.");
    return;
  }

  if (idcategorias.length === 0) {
    console.error("Erro: Pelo menos 1 categoria deve ser selecionada.");
    return;
  }

  if (files.length === 0) {
    console.error("Erro: Pelo menos 1 imagem deve ser enviada.");
    return;
  }

  // ------------------------------------------------------------------------
  // ORGANIZAÇÃO DAS IMAGENS
  // ------------------------------------------------------------------------

  const productImages = {
    first_image: files[0] || null,
    other_images: files.slice(1),
  };

  // ------------------------------------------------------------------------
  // INSERT FINAL
  // ------------------------------------------------------------------------

  await insertNewProduct(
    {
      idfornecedor,
      nome,
      tipo,
      descricao,
    },
    productImages,
    idcategorias
  );

  console.log("Produto criado!");
}
