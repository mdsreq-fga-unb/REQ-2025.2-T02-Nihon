import { editProductAction } from "./action";
import { ReturnProduct } from "@/components/adminPages/ProductButtons";
import Form from "@/components/adminPages/editProduct/EditProductForm";
import { fetchProductById, fetchImagesByProductId, fetchSupplierByProductId, fetchCategoriesByProductId } from "@/lib/supabase/products";

type Fornecedor = {
  idfornecedor: number;
  nome: string;
}

type Categoria = {
  idcategoria: number;
  nome: string;
}

export default async function Page({params}: {params: {idproduto : number}}) {
  const resolvedParams = await (params as any);
  const idproduto = Number(resolvedParams.idproduto);
  const product = await fetchProductById(idproduto);
  const { imagesUrls } = await fetchImagesByProductId(idproduto);
  const supplier: Fornecedor = {
    idfornecedor: product.idfornecedor,
    nome: (await fetchSupplierByProductId(idproduto)).nome
  }

  const categoryData = await fetchCategoriesByProductId(idproduto);

  const categories: Categoria[] = categoryData.map(c => ({
    idcategoria: c.idcategoria,
    nome: c.nome
  }));


  return (
    <div className="flex flex-col h-full w-full bg-[#FBFAFA]">
        
        <div className="flex pt-10 justify-between items-center">
            <h1 className="text-[35px] text-black pl-15 font-bold">Editar Produto</h1>
            <div className="pr-15">
            <ReturnProduct/>
            </div>
        </div>

        <div className="min-h-px w-full bg-gray-300 mt-10"></div>

        <Form action={editProductAction} product={product} images={imagesUrls} supplier={supplier} categories={categories}/>
    </div>
  );
}