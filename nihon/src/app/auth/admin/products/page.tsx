import SearchBar from "@/components/adminPages/SearchNihon";
import {AddProduct} from "@/components/adminPages/ProductButtons";
import Product from "@/components/adminPages/Product";
import { fetchAllProducts, filterProductsByName } from "@/lib/supabase/admin/userClient-product";

export default async function Page({ searchParams }: { searchParams: { productName?: string }}) {
    const params = await (searchParams as any);
    const productName = params?.productName ?? null;
    let products = await fetchAllProducts();
    if(productName)
        products = filterProductsByName(products ,productName);
    
    return(
        <div className="flex flex-col min-h-screen w-full bg-[#FBFAFA]">
            <div className="flex items-center justify-between pt-10">
                <h1 className="text-[35px] text-black pl-15 font-bold">Produtos</h1>
                <div className="pr-15">
                    <AddProduct />
                </div>
            </div>
            <div className="h-px w-full bg-gray-300 mt-10"/>
            <div className="px-15">
                <div className="pt-5">
                    <SearchBar/>
                </div>
                <div className="py-10 flex flex-col gap-10">
                    {products.map((product) => (
                        <Product key={product.idproduto} product={product}/>
                    ))}
                </div>
            </div>
        </div>
    );
}