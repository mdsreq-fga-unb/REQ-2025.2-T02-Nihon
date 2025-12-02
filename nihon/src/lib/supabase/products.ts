import { supabaseUser } from "./client";

const supabase_user = supabaseUser();

type Product = {
  idproduto: number;
  idfornecedor: number;
  nome: string;
  tipo: string;
  status: boolean;
  descricao: string;
}

export async function fetchCategoriesByProductId(idproduto: number) {

  const { data: categoryIds, error: error1 } = await supabase_user.from("produtos_categorias").select("idcategoria").eq("idproduto", idproduto);

  if (error1) {
    throw new Error(error1.message);
  }

  if (!categoryIds || categoryIds.length === 0) {
    return []; 
  }

  const ids = categoryIds.map(c => c.idcategoria);

  const { data: categories, error: error2 } = await supabase_user.from("categoria").select("*").in("idcategoria", ids); 

  if (error2) {
    throw new Error(error2.message);
  }

  return categories; 
}

export async function fetchProductById(idproduto: number) {
    const { data: Product, error } = await supabase_user.from("produto").select("*").eq("idproduto", idproduto).single();
    if (error) {
        throw new Error(error.message);
    }
    return Product as Product;
}

export async function fetchSupplierByProductId(idproduto: number) {
  const { data , error } = await supabase_user
        .from("produto")
        .select("idfornecedor")
        .eq("idproduto", idproduto)
        .single();
    if (error) {
        throw new Error(error.message);
    }
    const idfornecedor = data.idfornecedor; // ✅ extrai o número

    const { data: Supplier, error: error2 } = await supabase_user
        .from("fornecedor")
        .select("nome")
        .eq("idfornecedor", idfornecedor)
        .single();
    if (error2) {
        throw new Error(error2.message);
    }
    return Supplier;
}

export async function fetchSupplierById(idfornecedor: number) {
    const { data: Supplier, error } = await supabase_user
        .from("fornecedor")
        .select("*")
        .eq("idfornecedor", idfornecedor)
        .single();
    if (error) {
        throw new Error(error.message);
    }
    return Supplier;
}

type ProductImage = {
  imagesUrls: string[];
};

export async function fetchImagesByProductId(idproduto: number): Promise<ProductImage> {
  // Buscar imagem principal (posicao = 1)
  const { data: mainImage, error: errorMain } = await supabase_user
    .from("imagem_produto")
    .select("url")
    .eq("idproduto", idproduto)
    .eq("posicao", 1)
    .single();

  // Buscar demais imagens ordenadas
  const { data: otherImages, error: errorOthers } = await supabase_user
    .from("imagem_produto")
    .select("url")
    .eq("idproduto", idproduto)
    .neq("posicao", 1)
    .order("posicao", { ascending: true });

  // Erros
  if (errorMain && errorMain.code !== "PGRST116") {
    // PGRST116 = nenhuma linha encontrada -> ok, pode não ter imagem principal
    throw new Error(errorMain.message);
  }

  if (errorOthers) {
    throw new Error(errorOthers.message);
  }

  // Criar array final
  const imagesUrls: string[] = [
    ...(mainImage?.url ? [mainImage.url] : []),
    ...(otherImages ? otherImages.map(img => img.url) : []),
  ];

  return { imagesUrls };
}