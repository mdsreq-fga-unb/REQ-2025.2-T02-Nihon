"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

export default function UpperFooter() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollY + 10) {
        // scroll pra baixo → esconde
        setShow(false);
      } else if (currentScroll < lastScrollY - 10) {
        // scroll pra cima → mostra
        setShow(true);
      }
      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-[72px] z-50 bg-white shadow-md flex items-center justify-between px-6 transition-transform duration-300 transform-gpu will-change-transform`}
      style={{ transform: show ? "translateY(0)" : "translateY(-100%)" }}
    >
      {/* Logo + nav */}
      <div className="flex items-center gap-8 h-full">
        <Image
          src="/logo/logoHorizontal.jpeg"
          alt="Logo Horizontal"
          width={120}
          height={60}
        />
        <nav className="flex gap-6 text-sm items-center h-full">
          <Link href="/about" className="text-gray-500 hover:text-gray-800">
            Sobre Nós
          </Link>
          <Link href="/" className="text-gray-500 hover:text-gray-800">
            Home
          </Link>
        </nav>
      </div>

      {/* Ícones */}
      <div className="flex items-center gap-6 text-gray-500 text-2xl h-full">
        <FaWhatsapp className="cursor-pointer hover:text-green-500" />
        <FaInstagram className="cursor-pointer hover:text-pink-500" />
        <FaMapMarkerAlt className="cursor-pointer hover:text-red-500" />
      </div>
    </div>
  );
}
