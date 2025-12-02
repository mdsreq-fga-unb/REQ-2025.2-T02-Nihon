import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Sua configuração atual (mantida)
  allowedDevOrigins: ['local-origin.dev', '*.local-origin.dev'],

  // A correção para o erro do Cypress com react-icons
  transpilePackages: ['react-icons'],
}

export default nextConfig;
