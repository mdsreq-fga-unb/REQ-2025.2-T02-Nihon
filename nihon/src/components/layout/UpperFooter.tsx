"use client"

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
const MotionLink = motion(Link);

export default function Upper_footer() {
    return (
      <div className="fixed top-0 left-0 w-full h-18 bg-white flex items-center justify-between px-6 z-50 shadow-xl gap-20">
        {/*groups nav and logo in one block */}
        <div className="flex items-center gap-15">
          <Image
            src="/logo/logoHorizontal.jpeg" 
            alt="Logo Horizontal"
            width={120}
            height={60}
          />
          <nav className="flex gap-20">
            <MotionLink
              href="/sobreNos"
              className="text-gray-600"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.1 }
              }}
            >
              Home
            </MotionLink>

            <MotionLink
              href="/home"
              className="text-gray-600"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.1 }
              }}
            >
              Sobre nós
            </MotionLink>
          </nav>
        </div>

        {/*rigth items*/}
        <div className="flex items-center gap-15 text-gray-500 text-2xl pr-8">
          <FaWhatsapp />
          <FaInstagram />
          <FaMapMarkerAlt />
        </div>
      </div>
    );
  }
  