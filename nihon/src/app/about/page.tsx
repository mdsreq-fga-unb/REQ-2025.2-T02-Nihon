import CardExperienceText from "@/components/ui/about/cardExperienceText";
import CardExperienceImg from "@/components/ui/about/cardExperienceImg";
import LongCardExperience from "@/components/ui/about/longCardExperience";
import CardValues from "@/components/ui/about/cardValues";
import Redirect from "@/components/ui/about/redirect";

import Image from "next/image";

export default function About() {

  //Alterar
  const urlCardValue = "/images/circuloNihon.png";
  const titleCardValue = "Lorem";
  const textCardValue = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam natus nostrum incidunt. Corrupti vitae sit odit aliquam quibusdam quae eligendi consequatur recusandae mollitia, officiis doloremque facere hic ducimus sed aut! ";

  return(
    <div className="w-full h-full bg-white block items-center overflow-x-hidden">

      <div className="h-auto w-full bg-white">
        <div className="flex items-center justify-center py-20">
          <div className="h-60 w-60 bg-[url('/images/circuloNihon.png')] bg-cover bg-center rounded-full drop-shadow-[10px_10px_5px_rgba(0,0,0,0.25)]"></div>
        </div>
        <div className="flex items-center">
        <div className="pb-20">
          <h1 className="text-black text-center text-[35px] font-bold">Sobre a Nihon Automação</h1>
          <p className="text-black mx-80 pt-5 text-[16px] text-center">A Nihon Automação atua no mercado desde 1995, atendendo as regiões do Distrito Federal e Goiás. Com quase 30 anos de experiência, evoluímos de uma empresa focada em software e assistência técnica para nos tornarmos referência na venda de equipamentos para o setor comercial supermercadista.</p>
        </div>
      </div>
      </div>


      <div className="h-auto w-screen bg-[#E21414]">
        <h1 className="text-center text-[35px] pt-20 font-bold">Nossa Experiência</h1>
        <p className=" text-center mx-80 pt-15 text-[20px]">Atendemos desde pequenos comércios até grandes redes de padarias, açougues e supermercados, como o Dia a Dia, Super Adega e Supermercados Tatico. Nossa principal atividade é a venda de grandes projetos, onde não apenas oferecemos produtos, mas fornecemos soluções completas e compartilhamos nosso conhecimento especializado no setor.</p>
        
        <div className="py-15 mx-55 justify-between flex">
          <CardExperienceText h1="30" h2="Anos" h3="de experiência no mercado"/>
          <CardExperienceText h1="+100" h2="Empresas" h3="atendidas com excelência"/>
          <CardExperienceImg urlImage="/images/silhuetaGoias.png" h2="Atendimento" h3="realizado no Goiás e DF"/>
          <CardExperienceImg urlImage="/images/silhuetaQualidade.png" h2="Qualidade" h3="garantida em cada projeto"/>
        </div>

        <div className="mx-65 pb-20 justify-between flex">
          <LongCardExperience urlImage="/images/silhuetaCaixa.png" title="Grandes Projetos" text="Especialistas em vendas de grandes projetos, oferecendo múltiplos produtos e soluções integradas para nossos clientes em uma única negociação."/>
          <LongCardExperience urlImage="/images/silhuetaEquipe.png" title="Atendimento Personalizado" text="Nossos vendedores fornecem consultoria especializada, compartilhando conhecimento profundo do setor para garantir as melhores soluções."/>
        </div>
      </div>

      <div className="h-auto w-full bg-white">
        <h1 className="text-center text-[30px] pt-20 font-bold text-black">Nossos Valores</h1>
        <div className="flex items-center justify-center pt-10 pb-20">
            {/*Alterar*/}
            <CardValues url={urlCardValue} title={titleCardValue} text={textCardValue}/>
            <CardValues url={urlCardValue} title={titleCardValue} text={textCardValue}/>
            <CardValues url={urlCardValue} title={titleCardValue} text={textCardValue}/>
        </div>
      </div>

      <div className="h-auto w-full bg-gray-100 ">

        <h1 className="text-center text-[30px] pt-20 font-bold text-black">Localização</h1>
        
        
        <div className="flex items-center justify-center py-10">
          <Image 
            src="/images/nihonFaixada.jpg" 
            alt="Faixada Nihon" 
            width={900} 
            height={400}  
            className="rounded-3xl drop-shadow-xl"
          />
        </div>

        {/*Alterar*/}
        <p className="text-justify text-black mx-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        
        
        <div className="mx-80 pt-10 pb-20">
          <div className="rounded-3xl overflow-hidden h-[400px] w-full drop-shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.8859180695445!2d-48.071419500000005!3d-15.8099683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3a48ea655c27%3A0x6c8f98a2ac4b67f0!2sNihon%20Automa%C3%A7%C3%A3o%20Comercial!5e0!3m2!1spt-BR!2sbr!4v1759370127641!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>


      <div className="bg-white h-auto w-full">
        {/*Alterar URL*/}
        <Redirect title="Nossos Produtos" url="/"/>
      </div>
    </div>
  );
}
