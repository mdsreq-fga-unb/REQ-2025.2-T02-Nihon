"use client"

import Footer from "@/components/layout/Footer";
import { usePathname } from "next/navigation";

export default function FooterToggle() {
  const pathname = usePathname() || "/";
  if (pathname.startsWith("/admin")) return null;
  return <Footer />;
}
