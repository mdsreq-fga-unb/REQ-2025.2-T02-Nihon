import { supabaseUser } from '../client';

const supabase_user = supabaseUser();


export const fetchAllProducts = async () => {
    const {data: products, error} = await supabase_user.from('produto').select('*');
    if (error) throw error;
    return products;
}

export const fetchSupplierById = async (idfornecedor: number) => { 
    const {data: supplier, error} = await supabase_user.from('fornecedor').select('*').eq('idfornecedor', idfornecedor).single();
    if (error) throw error;
    return supplier;
}

export const filterProductsByName = (products: any[] ,name: string) => {
    return products
        .filter(product => product.nome.toLowerCase().includes(name.toLowerCase()))
};

export const fetchCategories = async () => {
    const {data: categories, error} = await supabase_user.from('categoria').select('*');
    if (error) throw error;
    return categories;
}

export const fetchSuppliers = async () => {
    const {data: supplier, error} = await supabase_user.from('fornecedor').select('*');
    if (error) throw error;
    return supplier;
}
