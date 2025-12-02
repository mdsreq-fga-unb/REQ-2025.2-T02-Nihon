import Link from "next/link";

export default function Form() {
    return(
        <form action="" className="flex flex-col justify-center items-center">
            <label htmlFor="" about="User"  className="text-black">Usuário:</label>
            <input type="text" className="bg-white "/>
            <label htmlFor="" about="Password" className="text-black">Senha:</label>
            <input type="text" name="" id="" className="bg-white"/>
            <Link href="/auth/admin/products" className="text-[#ED3135]">Esqueci minha senha</Link>
            <Link href="/auth/admin/products">
                <div className="bg-[#ED3135] text-black">
                    Entrar        
                </div>
            </Link>
        </form>
    );
}