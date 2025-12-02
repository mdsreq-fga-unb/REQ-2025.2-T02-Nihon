"use client";

import { useState } from "react";

import { FaRegEdit, FaRegTrashAlt, FaArrowLeft  } from "react-icons/fa";
import Link from "next/link";

import { Modal } from "./RemoveProduct";


export function AddProduct() {
    return(
        <Link href="/auth/admin/products/add">
            <button className="flex bg-[#ED3135] gap-1 h-[50px] w-[300px] rounded-xl text-[20px] justify-center items-center transition hover:scale-105 cursor-pointer">
                <p className="flex justify-center items-center text-white">+ Adicionar Produto</p>
            </button>
        </Link>
    );
}

type EditProductProps = {
    idproduto: number;
}

export function EditProduct({idproduto}: EditProductProps) {
    return(
        <Link href={`/auth/admin/products/edit/${idproduto}`}>
            <button className="h-10 w-10 rounded-xl border border-gray-300 cursor-pointer flex pl-[13px] transition hover:scale-105">
                <FaRegEdit/>
            </button> 
        </Link>
    );
}

export function RemoveProduct({idproduto}: {idproduto: number}) {
    const [modal, setModal] = useState(false);

    return(
        <>
        <button  onClick={() => setModal(true)} className="h-10 w-10 rounded-xl border border-gray-300 cursor-pointer flex justify-center items-center text-[#ED3135]  transition hover:scale-105">
            <FaRegTrashAlt/>
        </button>
        <Modal
            isOpen={modal}
            onClose={() => setModal(false)}
            title="Tem certeza de que deseja excluir este item? "
            idproduto={idproduto}
            >
            <p className="text-[#ED3135]">Esta ação é permanente e não poderá ser desfeita.</p>
        </Modal> 
      </>
    );
}

export function ReturnProduct() {
    return(
        <Link href="/auth/admin/products">
            <button className="h-15 w-15 rounded-xl border border-gray-300 cursor-pointer flex justify-center items-center text-black transition hover:scale-105">
                <FaArrowLeft size={25}/>
            </button> 
        </Link>
    );
}