import { supabaseUser, supabaseUserClientSide } from './client';

const supabase = supabaseUser();
const supaba_client_side = supabaseUserClientSide();


export const fetchAllProducts = async () => {
    const {data: products, error} = await supabase.from('produto').select('*').eq('status', true);
    if (error) throw error;
    return products;
}

export const fetchProductsByCategory = async (name: string) => {
    const { data: idCategory, error: categoryError } = await supabase.from('categoria').select('idcategoria').eq('nome', name);
    if(categoryError) throw categoryError;

    const { data: idProducts, error: idProductsError } = await supabase.from('produtos_categorias').select('idproduto').eq('idcategoria', idCategory?.[0].idcategoria);
    if(idProductsError) throw idProductsError;

    const {data: products, error: errorProcuts} = await supabase.from('produto').select('*').in('idproduto', idProducts?.map(item => item.idproduto) || []);
    if (errorProcuts) throw errorProcuts;
    return products;
}

export const filterProductsByName = (products: any[] ,name: string) => {
    return products
        .filter(product => product.nome.toLowerCase().includes(name.toLowerCase()))
};

export const fetchBrandsByProducts = async (products: any[]) => {
        const {data: brands, error} = await supabase.from('fornecedor').select('*').in('idfornecedor', products?.map(item => item.idfornecedor) || []);
        if(error) throw error;
        return brands; 
}

export const filterProductsByBrand = async (products: any[], name: string) => {
  const {data, error} = await supabase.from('fornecedor').select('idfornecedor').eq('nome', name).single();
  if(error) throw error;
  return products
        .filter(product => product.idfornecedor === data?.idfornecedor)
}

export const fetchFirstImageOfProduct = async (idproduto: number) => {
  const { data, error } = await supabase
    .from("imagem_produto")
    .select("url")
    .eq("idproduto", idproduto)
    .eq("posicao", 1)
    .single(); // garante que vem só um resultado

  if (error) throw error;
  return data?.url || null;
};

export async function fetchBrandImage(idfornecedor: number) {
    const { data, error } = await supaba_client_side
      .from("imagem_fornecedor")
      .select("url")
      .eq("idfornecedor", idfornecedor)
      .single();
    if (error) throw error;
    return data?.url || null;
}