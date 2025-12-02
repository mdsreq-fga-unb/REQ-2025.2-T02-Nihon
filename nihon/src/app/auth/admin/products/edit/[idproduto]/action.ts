"use server";

import { editProductFull } from "@/lib/supabase/admin/editProduct/adminClient-product";

type ImageFinal = { type: "file"; file: File } | { type: "url"; url: string };

export async function editProductAction(formData: FormData) {
  const idproduto = Number(formData.get("idproduto"));
  const nome = (formData.get("nome") as string)?.trim();
  const tipo = (formData.get("tipo") as string)?.trim();
  const status = formData.get("status") === "true";
  const descricao = (formData.get("descricao") as string)?.trim();

  const idfornecedor = Number(formData.get("fornecedor"));
  const idcategorias = formData.getAll("categorias").map((x) => Number(x));

  // ---------------- VALIDAÇÕES ----------------
  if (!idproduto || Number.isNaN(idproduto)) return console.error("Erro: Produto inválido.");
  if (!nome) return console.error("Erro: Nome do produto é obrigatório.");
  if (!tipo) return console.error("Erro: Tipo do produto é obrigatório.");
  if (!descricao) return console.error("Erro: Descrição do produto é obrigatória.");
  if (!idfornecedor || Number.isNaN(idfornecedor)) return console.error("Erro: Fornecedor é obrigatório.");
  if (idcategorias.length === 0) return console.error("Erro: Pelo menos 1 categoria deve ser selecionada.");

  // ---------------- TRATAMENTO DAS IMAGENS ----------------
  const imagesJsonRaw = formData.get("images_json");
  if (!imagesJsonRaw) return console.error("Erro: Dados das imagens não encontrados.");

  const imagesFinal = JSON.parse(imagesJsonRaw.toString()) as ImageFinal[];
  if (!imagesFinal.length) return console.error("Erro: Nenhuma imagem enviada.");

  // Separa os arquivos File que vieram do formData
  const filesFromFormData = formData.getAll("files") as File[];
  let fileIndex = 0;

  // Reconstrói mixedImages na ordem correta
  const mixedImages: (File | string)[] = imagesFinal.map((img) => {
    if (img.type === "file") {
      const nextFile = filesFromFormData[fileIndex++];
      if (!nextFile) throw new Error("Arquivo esperado não encontrado.");
      return nextFile;
    } else {
      return img.url;
    }
  });

  // ---------------- CHAMA O BACKEND ----------------
  await editProductFull(
    {
      idproduto,
      idfornecedor,
      nome,
      tipo,
      status,
      descricao,
    },
    {
      first_image: mixedImages[0] ?? null,
      other_images: mixedImages.slice(1),
    },
    idcategorias
  );

  console.log("Produto editado com sucesso!");
}