"use client";
import React, { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { supabaseUser } from "@/lib/supabase/client";
import NavLink from "./NavLinks";

export default function SideNav(props: any) {
  const router = useRouter();
  const supabase = useMemo(() => supabaseUser(), []);

  const [signingOut, setSigningOut] = useState(false);

  async function handleLogout() {
    try {
      setSigningOut(true);
      await supabase.auth.signOut();
    } catch (err) {
      console.warn("logout error:", err);
    } finally {
      setSigningOut(false);
      router.push("/auth/login");
    }
  }

  return (
    <div className="h-screen w-[400px] flex flex-col bg-white p-10 gap-10">
      <h1 className="text-[30px] font-bold text-[#ED3135]">Painel Admin</h1>
      <div className="flex flex-col gap-5">
        <NavLink />
      </div>


      {/*Refatorar com botao da react-icons*/}
      {/* botão de logout fixado ao final do menu lateral */}
      <div className="mt-auto px-4 py-4">
        <button
          type="button"
          onClick={handleLogout}
          disabled={signingOut}
          className="w-full flex h-12 items-center justify-center gap-2 px-3 py-2 rounded-xl bg-[#ED3135] text-white hover:bg-red-700 disabled:opacity-60 cursor-pointer transition hover:scale-105"
        >
          {/* ícone de logout (SVG inline) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>

          <span>{signingOut ? "Saindo..." : "Logout"}</span>
        </button>
      </div>

    </div>
  );
}