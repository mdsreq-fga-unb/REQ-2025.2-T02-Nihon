import Image from "next/image";

export default function About() {
  return(
    <div className="w-full h-full bg-white block items-center overflow-x-hidden">
      <div className="h-150 w-screen bg-white">
        <div className="flex items-center justify-center py-20">
          <div className="h-60 w-60 bg-[url('../../public/images/circuloNihon.png')] bg-cover bg-center rounded-full drop-shadow-[10px_10px_5px_rgba(0,0,0,0.25)]"></div>
        </div>
        <h1 className="text-black text-center text-[35px] font-bold">Sobre a Nihon Automação</h1>
        <p className="text-black px-80 py-5 text-[16px] text-center">A Nihon Automação atua no mercado desde 1995, atendendo as regiões do Distrito Federal e Goiás. Com quase 30 anos de experiência, evoluímos de uma empresa focada em software e assistência técnica para nos tornarmos referência na venda de equipamentos para o setor comercial supermercadista.</p>
      </div>
      <div className="h-235 w-screen bg-[#E21414]">
        <h1 className="text-center text-[35px] pt-20 font-bold">Nossa Experiência</h1>
        <p className=" text-center px-80 pt-15 text-[20px]">Atendemos desde pequenos comércios até grandes redes de padarias, açougues e supermercados, como o Dia a Dia, Super Adega e Supermercados Tatico. Nossa principal atividade é a venda de grandes projetos, onde não apenas oferecemos produtos, mas fornecemos soluções completas e compartilhamos nosso conhecimento especializado no setor.</p>
        <div className="py-15 px-55 justify-between flex">

          <div className=" h-50 w-60 bg-[#df2424] text-center rounded-3xl">            
              <h1 className="pt-5 text-[60px] font-bold">30</h1>
              <h2 className="text-[19px] font-bold">Anos</h2>
              <h3 className="pt-3 text-[13px]">de experiência no mercado</h3>
          </div>

          <div className=" h-50 w-60 bg-[#df2424] text-center rounded-3xl">
              <h1 className="pt-5 text-[60px] font-bold">+100</h1>
              <h2 className="text-[19px] font-bold">Empresas</h2>
              <h3 className="pt-3 text-[13px]">atendidas com excelência</h3>
          </div>

          <div className=" h-50 w-60 bg-[#df2424] text-center rounded-3xl">
            <div className="flex justify-center items-center pt-8">
              <Image 
                src="/images/silhuetaGoias.png" 
                alt="Goiás e DF" 
                width={80}   // w-60 ≈ 240px
                height={80}  // h-60 ≈ 240px
                className=""
              />
            </div>
              <h2 className="text-[19px] font-bold">Atendimento</h2>
              <h3 className="pt-3 text-[13px]">realizado no Goiás e DF</h3>
          </div>

          <div className=" h-50 w-60 bg-[#df2424] text-center rounded-3xl">
            <div className="flex justify-center items-center pt-8">
              <Image 
                src="/images/silhuetaQualidade.png" 
                alt="Selo de Qualidade" 
                width={80}   // w-60 ≈ 240px
                height={80}  // h-60 ≈ 240px
                className=""
              />
            </div>
              <h2 className="text-[19px] font-bold">Qualidade</h2>
              <h3 className="pt-3 text-[13px]">garantida em cada projeto</h3>
          </div>
        </div>

        <div className=" px-65 justify-between flex">
          <div className=" h-50 w-120 bg-[#E61414] rounded-3xl shadow-[0_0_0.3px_#ffffff] flex pt-10 pl-10">
            <div className=" h-20 w-20 bg-[#df2424] flex rounded-3xl items-center justify-center">
                <Image 
                  src="/images/silhuetaCaixa.png" 
                  alt="Grandes Projetos" 
                  width={30}   // w-60 ≈ 240px
                  height={30}  // h-60 ≈ 240px
                  className=""
                />
            </div>
            <div className="pl-10">
              <h2 className="text-[19px] font-bold">Grandes Projetos</h2>
              <h3 className="pt-3 text-[13px] w-75">Especialistas em vendas de grandes projetos, oferecendo múltiplos produtos e soluções integradas para nossos clientes em uma única negociação.</h3>
            </div>
          </div>

          <div className=" h-50 w-120 bg-[#E61414] rounded-3xl shadow-[0_0_0.3px_#ffffff] flex pt-10 pl-10">
            <div className=" h-20 w-20 bg-[#df2424] flex rounded-3xl items-center justify-center">
                <Image 
                  src="/images/silhuetaEquipe.png" 
                  alt="Equipe" 
                  width={30}   // w-60 ≈ 240px
                  height={30}  // h-60 ≈ 240px
                  className=""
                />
            </div>
            <div className="pl-10">
              <h2 className="text-[19px] font-bold">Atendimento Personalizado</h2>
              <h3 className="pt-3 text-[13px] w-75">Nossos vendedores fornecem consultoria especializada, compartilhando conhecimento profundo do setor para garantir as melhores soluções.</h3>
            </div>
          </div>
        </div>

      </div>
      <div className="h-150 w-screen bg-white">
        <h1 className="text-center text-[30px] pt-20 font-bold text-black">Nossos Valores</h1>
        <div className="flex items-center justify-center pt-10">
          <div className="h-15 w-15  bg-black"></div>
        </div>
      </div>

      <div className="h-340 w-screen bg-gray-100 ">
        <h1 className="text-center text-[30px] pt-20 font-bold text-black">Localização</h1>
        <div className="flex items-center justify-center py-10">
          <Image 
            src="/images/nihonFaixada.jpg" 
            alt="Faixada Nihon" 
            width={900}   // w-60 ≈ 240px
            height={400}  // h-60 ≈ 240px
            className="rounded-2xl drop-shadow-xl"
          />
        </div>
        <p className="text-justify text-black px-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div className="px-80 py-10"> {/* Padding externo */}
          <div className="rounded-2xl overflow-hidden h-[400px] w-full drop-shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.8859180695445!2d-48.071419500000005!3d-15.8099683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3a48ea655c27%3A0x6c8f98a2ac4b67f0!2sNihon%20Automa%C3%A7%C3%A3o%20Comercial!5e0!3m2!1spt-BR!2sbr!4v1759370127641!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="bg-white h-60 w-full"></div>
    </div>
  );
}
