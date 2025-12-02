import { supabaseAdmin } from "../client";
import { randomUUID } from "crypto";

const supabase_admin = supabaseAdmin();

const insertProduct = async (product: {
    idfornecedor: number;
    nome: string;
    tipo: string;
    descricao: string;
}) => {
    const { data, error } = await supabase_admin
        .from('produto')
        .insert([product])
        .select(); // ← garante que retorna o id

    if (error) throw error;
    return data;
};

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

async function insertProductOnCategory(idproduto: number, idcategoria: number) {
    const { data, error } = await supabase_admin
        .from('produtos_categorias').insert([{
            idproduto,
            idcategoria
        }]);    
    if (error) throw error;
    return data;
}


export const insertNewProduct = async (
  product: {
    idfornecedor: number;
    nome: string;
    tipo: string;
    descricao: string;
  },
  product_images: {
    first_image: File;
    other_images: File[];
  },
  idcategorias: number[]
) => {
  try {
    // insere o produto
    const data = await insertProduct(product);
    const idproduto = data![0].idproduto;

    // primeira imagem
    const first = insertImage(idproduto, product_images.first_image, 1);

    // outras imagens
    const others = product_images.other_images.map((file, index) =>
      insertImage(idproduto, file, index + 2)
    );

    const imageResults = await Promise.all([first, ...others]);

    // categorias
    const categories = idcategorias.map((id) =>
      insertProductOnCategory(idproduto, id)
    );

    const categoryResults = await Promise.all(categories);

    return {
      produto: data,
      images: imageResults,
      categorias: categoryResults
    };

  } catch (error) {
    throw error;
  }
};
