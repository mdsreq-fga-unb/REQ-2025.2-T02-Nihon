import { FaWarehouse, FaStore, FaRegStar, FaCreditCard } from "react-icons/fa";

export function Infos() {
    return(
    <div className="w-full flex flex-wrap items-center justify-center pt-5 xl:pt-10 md:gap-5 lg:gap-20 xl:gap-40">
            <div className="flex flex-col items-center h-[100px] w-[180px] sm:w-[160px]">
                <FaWarehouse className="text-[#E21414] text-2xl xl:text-5xl mb-2" />
                <p className="text-gray-500 text-center text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]">Estoque próprio</p>
            </div>
            <div className="flex flex-col items-center h-[100px]  w-[180px] sm:w-[160px]">
                <FaStore className="text-[#E21414] text-2xl xl:text-5xl mb-2" />
                <p className="text-gray-500 text-center text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]">Mais de 200 lojas montadas</p>
            </div>
            <div className="flex flex-col items-center h-[100px] w-[180px] sm:w-[160px]">
                <FaRegStar className="text-[#E21414] text-2xl xl:text-5xl mb-2" />
                <p className="text-gray-500 text-center text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]">28 anos de mercado</p>
            </div>
            <div className="flex flex-col items-center h-[100px] w-[180px] sm:w-[160px]">
                <FaCreditCard className="text-[#E21414] text-2xl xl:text-5xl mb-2" />
                <p className="text-gray-500 text-center text-[10px] md:text-[12px] lg:text-[14px] xl:text-[16px]">Pagamento facilitado</p>
            </div>
      </div>
    );
}