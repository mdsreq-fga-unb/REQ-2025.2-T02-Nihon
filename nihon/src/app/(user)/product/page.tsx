import { fetchProductById, fetchSupplierById, fetchImagesByProductId } from "@/lib/supabase/products";
import Gallery from "./Gallery";
import SimilarProducts from "./SimilarProducts";
import { ProductInfo, ProductDescription } from "@/components/product/ProductInfo";
import { BackButton } from "@/components/product/BackButton";
import { redirect } from "next/navigation";
import { OrderButton } from "@/components/product/OrderButton";

type Product = {
  idproduto: number;
  idfornecedor: number;
  nome: string;
  tipo: string;
  status: boolean;
  descricao: string;
};

export default async function ProductDescriptionPage({ searchParams }: { searchParams: Promise<{ id: number }>}) {

  const { id } = await searchParams;

  if (!id) { 
    redirect("/");
  }
  
  const idproduto = Number(id);


  let product: Product | null = null;
  let supplierName: string | null = null;
  let error = "";
  let loading = true;
  let images: string[] = [];

  try {
    product = await fetchProductById(idproduto);
    supplierName = product ? (await fetchSupplierById(product.idfornecedor)).nome : null;
    images = (await fetchImagesByProductId(idproduto)).imagesUrls;
    if (!product) {
      error = "Produto não encontrado.";
    }
  } catch (e) {
    error = "Erro ao carregar produto.";
  } finally {
    loading = false;
  }


  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 sm:p-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        <BackButton/>

        {error && <div className="mb-4 text-red-600">{error}</div>}

        <div className="flex flex-col gap-5 justify-center items-center ">
          <div className="w-full bg-white rounded-lg p-6 shadow">
            <div className="">
              <Gallery images={images} />
            </div>
          </div>
            <OrderButton/>
            <ProductInfo nome={product?.nome} tipo={product?.tipo} statusProduto={product?.status} nomeFornecedor={supplierName} />
            <ProductDescription descricao={product?.descricao} />
        </div>


      </div>
    </div>
  );
}
