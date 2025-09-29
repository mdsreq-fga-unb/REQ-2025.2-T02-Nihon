import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white shadow-xl border-t border-gray-200 px-6 py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-80">
        
        {/* Logo e endereço */}
        <div className="flex flex-col items-center md:items-start text-gray-600">
          <Image
            src="/logo/logoHorizontal.jpeg" // coloque o path da sua logo aqui
            alt="Logo Horizontal"
            width={140}
            height={70}
            className="mb-3"
          />
          <p className="text-sm text-center md:text-left">
            QI 07 Lote 27/28 Taguatinga Norte <br />
            Brasília - DF
          </p>
        </div>

        {/* Links Úteis */}
        <nav className="flex flex-col items-center md:items-start gap-2 text-sm text-gray-600">
          <Link href="#" className="hover:text-gray-800">Pós Venda</Link>
          <Link href="#" className="hover:text-gray-800">Política de Privacidade</Link>
          <Link href="#" className="hover:text-gray-800">Projetos Finalizados</Link>
          <Link href="#" className="hover:text-gray-800">Contatos</Link>
        </nav>

        {/* Televendas e WhatsApp */}
        <div className="text-gray-600 text-sm text-center md:text-left">
          <p><strong>Televendas:</strong> (61)</p>
          <p>Segunda a Sexta-Feira</p>
          <p>7:45 às 17:00hs</p>
          <p className="mt-2">
            Parcele em até 6 vezes nos cartões <br />
            Visa ou Mastercard.
          </p>
          <a
            href="https://wa.me/seu-numero"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 justify-center md:justify-start mt-3 text-green-500 hover:text-green-600"
          >
            <FaWhatsapp /> Fale conosco
          </a>
        </div>
      </div>

      {/* Linha inferior */}
      <div className="border-t border-gray-300 mt-6 pt-4 text-center text-xs text-gray-500">
        <p>
          As imagens dos produtos são meramente ilustrativas. <br />
          Todos os preços e condições comerciais estão sujeitos a alteração sem aviso prévio.
        </p>
        <p className="mt-2">
          © {new Date().getFullYear()} Nihon. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
