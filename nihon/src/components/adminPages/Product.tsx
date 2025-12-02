import StatusButton from "./StatusButton";
import { EditProduct, RemoveProduct } from "./ProductButtons";
import { fetchSupplierById } from "@/lib/supabase/admin/userClient-product";

type Product = {
    nome:string,
    idproduto: number,
    idfornecedor: number,
    status: boolean;
}

type ProductProps = {
    product: Product;
}

export default async function Product({product}: ProductProps) {
    const supplier = await fetchSupplierById(product.idfornecedor);
    return(
        <div className="h-[120px] w-full flex justify-between bg-white border border-gray-300 rounded-3xl px-10 text-black">
            <div className="flex flex-col justify-center gap-2">

                <h1 className="text-[22.5px] pr-5">{product.nome}</h1>
                <p className="text-[12.5px] text-gray-600">Fornecedor: {supplier.nome}</p>
            </div>
            <div className="flex justify-center items-center gap-3">
                <div className="flex justify-center items-center gap-2">
                    <p className="text-gray-600">Status:</p>
                    <StatusButton state={product.status}/>
                </div>
                <EditProduct idproduto={product.idproduto}/>
                <RemoveProduct idproduto={product.idproduto}/>
            </div>
        </div>
    );
}