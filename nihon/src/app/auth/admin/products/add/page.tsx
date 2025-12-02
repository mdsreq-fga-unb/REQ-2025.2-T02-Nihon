import { insertNewProductAction } from "./actions";
import { ReturnProduct } from "@/components/adminPages/ProductButtons";
import Form from "@/components/adminPages/Form";


export default function Page() {
  return (
    <div className="flex flex-col h-full w-full bg-[#FBFAFA]">
        
        <div className="flex pt-10 justify-between items-center">
            <h1 className="text-[35px] text-black pl-15 font-bold">Adicionar Produtos</h1>
            <div className="pr-15">
            <ReturnProduct/>
            </div>
        </div>

        <div className="min-h-px w-full bg-gray-300 mt-10"></div>

        <Form action={insertNewProductAction}/>
    </div>
  );
}
