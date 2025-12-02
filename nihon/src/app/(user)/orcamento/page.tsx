import Link from "next/link";

export default function OrcamentoPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-xl w-full bg-white rounded-lg shadow p-6 text-center">
        <h1 className="text-2xl font-semibold mb-4">Fazer Orçamento</h1>
        <p className="mb-6 text-gray-700">Página placeholder — aqui você poderá preencher os dados para solicitar um orçamento.</p>
        <div className="flex justify-center gap-4">
          <Link href="/products" className="inline-block bg-red-500 text-white px-4 py-2 rounded">Voltar aos produtos</Link>
          <Link href="/" className="inline-block border border-gray-300 px-4 py-2 rounded">Ir para Home</Link>
        </div>
      </div>
    </div>
  );
}
