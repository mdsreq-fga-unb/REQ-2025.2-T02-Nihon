import { supabaseAdmin } from "../../client";
import { randomUUID } from "crypto";

const supabase_admin = supabaseAdmin();

const editProduct = async (product: {
    idproduto: number;
    idfornecedor: number;
    nome: string;
    tipo: string;
    status: boolean;
    descricao: string;
}) => {
    const { data, error } = await supabase_admin
        .from('produto')
        .update({"idfornecedor": product.idfornecedor, "nome": product.nome, "tipo": product.tipo, "status": product.status, "descricao": product.descricao})
        .eq("idproduto", product.idproduto); 

    if (error) throw error;
    return data;
};

async function updateProductCategories(idproduto: number, newCategories: number[]) {
  // Remove antigas
  const { error: deleteError } = await supabase_admin
    .from("produtos_categorias")
    .delete()
    .eq("idproduto", idproduto);

  if (deleteError) throw deleteError;

  // Insere novas
  const inserts = newCategories.map((idcategoria) =>
    supabase_admin.from("produtos_categorias").insert({ idcategoria, idproduto })
  );

  await Promise.all(inserts);
}

async function insertImageOnBucket(file: File) {
  const ext = file.name.split(".").pop();
  const fileName = `${randomUUID()}.${ext}`;

  const { data, error } = await supabase_admin.storage
    .from("Produto")
    .upload(fileName, file);

  if (error) throw error;

  const { data: publicData } = await supabase_admin.storage
    .from("Produto")
    .getPublicUrl(fileName);

  return publicData.publicUrl;
}

async function insertImage(idproduto: number, file: File, posicao: number) {
    const url = await insertImageOnBucket(file);

    const { data, error } = await supabase_admin
        .from('imagem_produto')
        .insert([{
            idproduto,
            url,
            posicao
        }]);

    if (error) throw error;
    return data;
}

async function updateProductImages(idproduto: number, images: (File | string)[]) {
  // 1️⃣ Pega URLs antigas do produto
  const { data: oldImages } = await supabase_admin
    .from("imagem_produto")
    .select("url")
    .eq("idproduto", idproduto);

  const oldUrls = oldImages?.map(img => img.url) || [];

  // 2️⃣ Identifica URLs antigas que NÃO serão reaproveitadas
  const urlsToKeep = images.filter(item => typeof item === "string") as string[];
  const urlsToDelete = oldUrls.filter(url => !urlsToKeep.includes(url));

  // 3️⃣ Remove do bucket somente as imagens que não serão reaproveitadas
  if (urlsToDelete.length > 0) {
    const oldFiles = urlsToDelete.map(url => url.split("/").pop()!);
    await supabase_admin.storage.from("Produto").remove(oldFiles);
  }

  // 4️⃣ Deleta todas as entradas da tabela para esse produto
  const { error: deleteError } = await supabase_admin
    .from("imagem_produto")
    .delete()
    .eq("idproduto", idproduto);
  if (deleteError) throw deleteError;

  // 5️⃣ Insere novamente na ordem do vetor
  const uploads = images.map(async (item, i) => {
    let url: string;

    if (item instanceof File) {
      // Novo arquivo → upload no bucket
      const ext = item.name.split(".").pop();
      const fileName = `${randomUUID()}.${ext}`;

      const { error } = await supabase_admin.storage
        .from("Produto")
        .upload(fileName, item);
      if (error) throw error;

      const { data: publicData } = await supabase_admin.storage
        .from("Produto")
        .getPublicUrl(fileName);
      url = publicData.publicUrl;
    } else {
      // URL antiga → reaproveita
      url = item;
    }

    // Insere no banco com a posição correta
    const { error } = await supabase_admin
      .from("imagem_produto")
      .insert([{ idproduto, url, posicao: i + 1 }]);
    if (error) throw error;

    return url;
  });

  return Promise.all(uploads);
}


export const editProductFull = async (
  product: {
    idproduto: number;
    idfornecedor: number;
    nome: string;
    tipo: string;
    status: boolean;
    descricao: string;
  },
  product_images: { first_image: File | string; other_images: (File | string)[] },
  idcategorias: number[]
) => {
  // 1️⃣ Atualiza produto
  await editProduct(product);

  // 2️⃣ Atualiza categorias
  await updateProductCategories(product.idproduto, idcategorias);

    // 3️⃣ Converte para vetor misto (primeira imagem + outras)
  const mixedImages: (File | string)[] = [
    ...(product_images.first_image ? [product_images.first_image] : []),
    ...product_images.other_images
  ];

  // 4️⃣ Atualiza imagens
  await updateProductImages(product.idproduto, mixedImages);

  return { message: "Produto editado com sucesso!" };
};
