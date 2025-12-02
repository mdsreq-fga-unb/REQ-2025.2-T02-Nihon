"use client"

import Header from "@/components/layout/Header";
import { usePathname } from "next/navigation";

export default function HeaderToggle() {
  const pathname = usePathname() || "/";
  if (pathname.startsWith("/admin")) return null;
  return <Header />;
}
