import { fetchAllProducts } from "@/lib/supabase/productPage";
import { filterProductsByName } from "@/lib/supabase/productPage";
import { fetchBrandsByProducts } from "@/lib/supabase/productPage";

import SearchBar from "@/components/productPages/SearchBar";
import BrandSection from "@/components/productPages/BrandSection";
import ProductSection from "@/components/productPages/ProductSection";
import Banner from "@/components/productPages/Banner";
import ChangePage from "@/components/productPages/ChangePage";
import { NotFound } from "@/components/productPages/NotFound";

export default async function Page({ searchParams }: { searchParams: { productName?: string, page?: string} }) {

  // aguarda searchParams antes de usar (resolve problema: "searchParams should be awaited")
  const params = await (searchParams as any);
  const productName = params?.productName ?? null;
  let page = Number(params?.page) || 1;
  if (page < 1) page = 1;

  let products = await fetchAllProducts();

  if (productName) {
    products = filterProductsByName(products ,productName);
  }

  const brands =  await fetchBrandsByProducts(products);
  const amountProducts = products ? products.length : 0;
  const amountBrands = brands ? brands.length : 0;

  // paginação: 12 itens por página
  const pageSize = 12;
  const totalPages = Math.max(1, Math.ceil(amountProducts / pageSize));
  if (page > totalPages) page = totalPages;

  // fatia os produtos para a página atual (sempre tenta preencher até 12)
  const startIndex = (page - 1) * pageSize;
  const pageItems = (products || []).slice(startIndex, startIndex + pageSize);


  return(
    <div className="h-auto w-full bg-[#F2F2F2]">
      <SearchBar/>
      {amountBrands && amountProducts ? (
      <>
        <div className="py-6 mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12">
          <BrandSection brands={brands} productName={productName}/>
        </div>

        <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-12">
          {/* seção superior (até 8 itens) */}
          <ProductSection products={pageItems} />
        </div>

        <div className="flex flex-col justify-center items-center gap-5 pt-5">
          <ChangePage actualPage={page} lastPage={totalPages} productName={productName}/>
          <Banner/>
        </div>

      </>) :
      (<>
        <NotFound/>
      </>)}
    </div>
  );
}