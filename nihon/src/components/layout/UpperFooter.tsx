import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";


export default function Upper_footer() {
    return (
      <div className="fixed top-0 left-0 w-full h-18 bg-white flex items-center justify-between px-6 z-50 shadow-xl">
        {/*groups nav and logo in one block */}
        <div className="flex items-center gap-15">
          <Image
            src="/logo/logoHorizontal.jpeg" 
            alt="Logo Horizontal"
            width={120}
            height={60}
          />
          <nav className="flex gap-15 text-sm ">
            <Link href="/about" className="text-gray-500">Sobre Nós</Link>
            <Link href="/home" className="text-gray-500">Home</Link>
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
  