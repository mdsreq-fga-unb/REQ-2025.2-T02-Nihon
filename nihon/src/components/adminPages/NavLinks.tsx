"use client";

import { BsBoxSeam, BsChatLeft } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from "clsx";

const links = [
  { name: 'Produtos', href: '/auth/admin/products', icon: BsBoxSeam },
 /* { name: 'Projetos Finalizados', href: '/auth/admin/successCases', childrenHref: '', icon: CgFileDocument },
  { name: 'Orçamentos', href: '/auth/admin/orders', childrenHref: '', icon: BsChatLeft  } */
];

export default function NavLink() {
    const pathname = usePathname();
    return(
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return(
                <Link key={link.name} href={link.href} className={clsx("flex gap-2 h-12 w-[300px] items-center pl-5 rounded-xl text-gray-500 ", 
                    {'bg-[#ED3135] text-white': pathname.includes(link.href)}, {' transition hover:scale-105 hover:bg-red-200': !pathname.includes(link.href)})}>
                    <LinkIcon className="w-6"/>
                    <p className="font-bold">{link.name}</p>
                 </Link>)
            })}
        </>
    );
}
