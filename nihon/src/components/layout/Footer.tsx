import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-200 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Logo / Nome do Projeto */}
        <div className="text-lg font-semibold">
          Nihon<span className="text-red-500">Automação</span>
        </div>

        {/* Navegação rápida */}
        <nav className="flex gap-6 text-sm">
          <Link href="/" className="hover:text-red-400">Início</Link>
          <Link href="/produtos" className="hover:text-red-400">Produtos</Link>
          <Link href="/projetos" className="hover:text-red-400">Projetos</Link>
          <Link href="/contato" className="hover:text-red-400">Contato</Link>
        </nav>

        {/* Direitos autorais */}
        <div className="text-xs text-gray-400">
          © {new Date().getFullYear()} Nihon. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}