import heroLogo from "@/../public/images/circuloNihon.png";
import Image from "next/image";

export function NotFound() {
    return(
    <div className="w-full flex flex-col justify-center items-center gap-10 py-20 md:py-30 lg:py-60 xl:py-20 md:gap-20 2xl:gap-30 2xl:py-30">
          <Image
            width={100}
            height={100}
            src={heroLogo.src} 
            alt="Nihon Automação Logo" 
            className="rounded-full md:hidden"
          />
          <Image
            width={150}
            height={150}
            src={heroLogo.src} 
            alt="Nihon Automação Logo" 
            className="rounded-full hidden md:block lg:hidden"
          />
          <Image
            width={175}
            height={175}
            src={heroLogo.src} 
            alt="Nihon Automação Logo" 
            className="rounded-full hidden lg:block xl:hidden"
          />
          <Image
            width={200}
            height={200}
            src={heroLogo.src} 
            alt="Nihon Automação Logo" 
            className="rounded-full hidden xl:block  2xl:hidden"
          />
          <Image
            width={225}
            height={225}
            src={heroLogo.src} 
            alt="Nihon Automação Logo" 
            className="rounded-full hidden 2xl:block"
          />
        <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-20 xl:mx-35 2xl:mx-45">
            <div className="w-full p-5 md:p-10 bg-white rounded-xl">
                <h1 className="font-bold text-xl md:text-3xl lg:text-4xl">Nenhum produto encontrado...</h1>
                <div className="p-2"></div>
                <p className="md:text-xl lg:text-2xl">A Nihon Automação Comercial lamenta por você não ter conseguido encontrar o produto desejado, caso queira entrar em contato conosco é só ligar, mandar um email ou uma mensagem no WhatsApp!</p>
            </div>
        </div>
    </div>
    );
}