"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const PHONE_NUMBER = "(61) 2107-7575";
  const PHONE_TEL = "tel:+556121077575";

  const navLinks = [
    { href: "/", text: "Início" },
    { href: "/about", text: "Sobre Nós" },
    { href: "/products", text: "Produtos" },
  ];

  const socialLinks = [
    { href: "https://wa.me/5561999614440", icon: FaWhatsapp, hoverColor: "hover:text-green-500", label: "WhatsApp" },
    { href: PHONE_TEL, icon: FaPhoneAlt, hoverColor: "hover:text-blue-600", label: "Telefone", text: PHONE_NUMBER },
    { href: "https://www.instagram.com/nihon_automacao/", icon: FaInstagram, hoverColor: "hover:text-pink-500", label: "Instagram" },
    { href: "https://maps.app.goo.gl/FEQ8GMZE9YFSNDoA9", icon: FaMapMarkerAlt, hoverColor: "hover:text-red-500", label: "Location" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-[70px] lg:h-[90px] px-6">
          {/* Logo */}
          <Link href="/" onClick={handleLinkClick}>
            <Image
              src="/logo/logoHorizontal.jpeg"
              alt="Nihon Automação Logo"
              width={140}
              height={40}
              className="object-contain max-h-[40px] lg:max-h-[60px]"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-bold text-gray-600 hover:text-primary transition-colors"
              >
                {link.text}
              </Link>
            ))}
          </nav>

          {/* Desktop Social Icons + Phone (phone shows number) */}
          <div className="hidden xl:flex items-center gap-5 text-gray-500 h-full">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <Link key={social.label} href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={social.label} className="flex items-center gap-2">
                  <Icon className={`w-6 h-6 transition-colors ${social.hoverColor}`} />
                  {social.text && <span className="text-sm font-medium text-gray-700 select-none">{social.text}</span>}
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <button onClick={toggleMenu} aria-label="Toggle Menu" className="cursor-pointer">
              {isOpen ? <FiX className="h-7 w-7 text-gray-800 " /> : <FiMenu className="h-7 w-7 text-primary " />}
            </button>
          </div>
        </div>
      </header>

      {/* --- Mobile Menu --- */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-20 backdrop-blur-sm xl:hidden transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleMenu}
      />

      {/* Menu Panel */}
      <div className={`fixed top-0 right-0 h-full w-4/5 max-w-sm z-50 bg-white xl:hidden transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-5">
          <button onClick={toggleMenu} aria-label="Close Menu">
            <FiX className="h-8 w-8 text-gray-800" />
          </button>
        </div>
        <nav className="flex flex-col items-center gap-8 text-xl font-medium mt-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-gray-800 font-bold hover:text-primary transition-colors"
            >
              {link.text}
            </Link>
          ))}
        </nav>

        {/* Mobile phone action (visible and clickable) */}
        <div className="mt-8 px-6 w-full cursor-pointer">
          <a href={PHONE_TEL} className="w-full flex items-center justify-center gap-3 bg-[#ED3135] text-white py-3 rounded-md hover:bg-red-700 transition-colors" onClick={handleLinkClick} aria-label="Ligar para a empresa">
            <FaPhoneAlt className="w-5 h-5" />
            <span className="font-semibold">{PHONE_NUMBER}</span>
          </a>
        </div>

        <div className="flex justify-center items-center gap-8 text-gray-600 text-3xl mt-8">
          {socialLinks.filter(s => !s.text).map((social) => (
            <Link key={social.label} href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined} onClick={handleLinkClick} aria-label={social.label}>
              <social.icon className={`transition-colors ${social.hoverColor}`} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;