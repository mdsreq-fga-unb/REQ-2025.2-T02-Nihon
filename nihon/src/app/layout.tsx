import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nihon Automação",
  description: "A Nihon Automação é especializada em tecnologia para o varejo há mais de 30 anos, oferecendo soluções completas para otimizar processos, aumentar a eficiência operacional e impulsionar o crescimento do seu negócio. Atuamos com automação comercial, mobiliário, suprimentos e equipamentos para diversos segmentos do varejo.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Ensure mobile devices use the correct viewport scaling */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <main className="bg-white">
          {children}
        </main>
      </body>
    </html>
  );
}
