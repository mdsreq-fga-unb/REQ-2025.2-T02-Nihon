"use client";
import { FaWarehouse, FaStore, FaRegStar, FaCreditCard } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const categories = [
    "Supermercado",
    "Açougue",
    "Padaria e confeitaria",
    "Bar e restaurante",
    "Refrigeração comercial",
    "Automação Comercial",
    "Equipamentos para cozinha",
    "Mobiliário Comercial",
    "Utensílios e suprimentos",
  ];

  return (
    <div className="w-full min-h-screen bg-white pt-28 pb-5">
      {/* Banner vermelho */}
      <div className="w-full h-[450px] relative">
        <Image
          src="/images/Banner_site_nihon.png"
          alt="Banner principal"
          fill
          className="object-cover" // cobre toda a área sem distorcer
          priority
        />
      </div>

      {/* categorias */}
      <div className="w-full bg-white shadow-sm  py-5 mt-5">
        <div className="flex flex-wrap items-center justify-center gap-2 text-gray-700 text-sm">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="flex items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <p className="hover:text-[#E21414] cursor-pointer transition-colors">
                {category}
              </p>
              {index !== categories.length - 1 && (
                <span className="mx-4 text-gray-300">|</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* principais produtos */}
      <div className="flex items-center gap-20 justify-center px-8 mt-30">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="w-50 h-60 bg-gray-200 flex items-center justify-center shadow-2xl rounded-xl"
            whileHover={{
              scale: 1.08,
              boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, delay: i * 0.05 }}
          >
            <p className="text-gray-600">Produto {i + 1}</p>
          </motion.div>
        ))}
      </div>

      {/* diferenciais */}
      <div className="flex items-center gap-50 justify-center mt-30">
        <div className="flex flex-col items-center">
          <FaWarehouse className="text-[#E21414] text-5xl mb-2" />
          <p className="text-gray-500">Estoque Próprio</p>
        </div>
        <div className="flex flex-col items-center">
          <FaStore className="text-[#E21414] text-5xl mb-2" />
          <p className="text-gray-500">Mais de 200 lojas montadas</p>
        </div>
        <div className="flex flex-col items-center">
          <FaRegStar className="text-[#E21414] text-5xl mb-2" />
          <p className="text-gray-500">28 anos de mercado</p>
        </div>
        <div className="flex flex-col items-center">
          <FaCreditCard className="text-[#E21414] text-5xl mb-2" />
          <p className="text-gray-500 ">Pagamento facilitado</p>
        </div>
      </div>

      {/* faixa fornecedores */}
      <div className="w-full h-30 bg-gray-200 flex items-center mt-[100px] mb-20 gap-25">
        <img
          src="/images/datalogic.png"
          alt="Fornecedor 1"
          className="h-8 filter grayscale ml-10"
        />
        <img
          src="/images/elginBematech.png"
          alt="Fornecedor 2"
          className="h-8 filter grayscale"
        />
        <img
          src="/images/gelopar.png"
          alt="Fornecedor 3"
          className="h-8 filter grayscale"
        />
        <img
          src="/images/gertec.png"
          alt="Fornecedor 4"
          className="h-8 filter grayscale"
        />
      </div>
    </div>
  );
}
