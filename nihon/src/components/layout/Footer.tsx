import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white shadow-xl border-t border-gray-200 px-6 py-10">
      <div className="container mx-auto xl:grid xl:grid-cols-4 gap-12 text-gray-700 text-sm">
        
        {/* Logo e descrição */}
        <div className="flex flex-col items-center xl:items-start">
          <Image
            src="/logo/NihonVertical.png" 
            alt="Logo Horizontal"
            width={160}
            height={80}
            className="mb-4"
          />
          <p className="text-center xl:text-left">
            Especializada em Tecnologia <br />
            para o Varejo
          </p>
          <div className="flex gap-4 mt-3 text-xl text-gray-600">
            <a href="https://www.instagram.com/nihon_automacao/" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="https://wa.me/5561999614440" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Links Úteis */}
        <div className="hidden xl:flex flex-col gap-2 items-start">
          <h3 className="font-semibold mb-2">Links Úteis</h3>
          <Link href="#" className="hover:text-gray-900">Pós venda</Link>
          <Link href="#" className="hover:text-gray-900">Política de privacidade</Link>
          <Link href="#" className="text-pink-600 hover:text-pink-700">
            Seja um parceiro de vendas
          </Link>
          <Link href="#" className="hover:text-gray-900">Projetos finalizados</Link>
          <Link href="#" className="hover:text-gray-900">Contatos</Link>
        </div>

        {/* Televendas */}
        <div className="hidden xl:flex flex-col gap-2 items-start">
          <h3 className="font-semibold mb-2">Televendas</h3>
          <p>Segunda a sexta (9 às 18hs), Sábado (9 às 13hs).</p>
          <p>
            Parcele em até 10 vezes sem juros nos cartões de <br />
            crédito, Visa ou Mastercard.
          </p>
          <p className="mt-2">
            Compre pelo telefone: <strong>(61) 2107-7575</strong>
          </p>
          <a
            href="https://wa.me/5561999614440"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 font-medium hover:text-green-700"
          >
            Dúvidas? Fale conosco pelo WhatsApp
          </a>
        </div>

        {/* Informações Importantes */}
        <div className="hidden xl:flex flex-col gap-2 items-start">
          <h3 className="font-semibold mb-2">Informações Importantes</h3>
          <p>As imagens dos produtos são meramente ilustrativas.</p>
          <p>
            Todos os preços e condições comerciais estão sujeitos a alteração sem aviso prévio.
          </p>
          <p>
            CND 13 Lt 11 Loja 01 - Taguatinga Norte <br />
            Brasília DF
          </p>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Nihon Automação. Todos os direitos reservados.
      </div>
    </footer>
  );
}
