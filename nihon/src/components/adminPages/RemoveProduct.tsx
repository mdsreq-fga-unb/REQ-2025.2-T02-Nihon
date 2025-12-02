"use client";

import React, { useState } from "react";
import { removeProduct } from "@/lib/supabase/admin/removeProduct/adminClient-product";
import { useRouter } from "next/navigation";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  idproduto: number;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, idproduto }) => {
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    if (!isOpen) return null;

    const handleClick = async () => {
        setLoading(true); // começa o loading
        try {
            await removeProduct(idproduto);
            onClose();
            router.refresh();
        } catch (err) {
            console.error(err);
            alert("Erro ao remover produto!");
            setLoading(false); // se der erro, volta os botões
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 overflow-auto p-4">
            <div
                className="bg-white rounded-2xl w-full max-w-md p-6 relative shadow-xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Título */}
                {title && (
                    <h2 className="text-center text-lg font-bold mb-3">{title}</h2>
                )}

                {/* Conteúdo */}
                <div className="text-center text-gray-700 mb-6">{children}</div>

                {/* Botões ou Loading */}
                <div className="flex justify-center gap-15">
                    {loading ? (
                        <div className="h-10 w-30 flex items-center justify-center border border-red-600 rounded-2xl">
                            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-red-600"></div>
                        </div>
                    ) : (
                        <>
                            <button
                                className="px-10 py-2 bg-[#ED3135] text-white rounded-lg shadow cursor-pointer hover:bg-red-600 transition hover:scale-105"
                                onClick={handleClick}
                            >
                                Sim
                            </button>
                            <button
                                className="px-10 py-2 bg-white text-gray-800 border border-gray-300 rounded-lg shadow cursor-pointer hover:bg-gray-100 transition hover:scale-105"
                                onClick={onClose}
                            >
                                Não
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
