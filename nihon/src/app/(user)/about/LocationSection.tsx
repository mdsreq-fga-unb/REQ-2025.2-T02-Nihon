"use client";
import nihonStoreImage from "@/../public/images/nihonFaixada.jpg";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { MapPin, Clock, Phone, Mail } from "lucide-react";

const LocationSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      content: "St. Qi QI 7 1° andar Loja 01/02 Lote 27/28 - Taguatinga Norte, Brasília - DF, 72135-070",
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      content: "Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "(61) 99961-4440",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "contato@nihonautomacao.com.br",
    },
  ];

  return (
    <>
      <div id="location" ref={ref} className="bg-primary py-12 relative overflow-hidden">
        <div className="container mx-auto px-auto relative z-10">
          <div className="text-center">
            {/* <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4`}>
              <MapPin className="w-8 h-8 text-white" />
            </div> */}
          <h2
            className={`text-3xl font-bold text-white text-center transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Nossa Localização
          </h2>
          </div>
        </div>
      </div>

      <section  className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          
          {/* Seção da Imagem e Descrição */}
          <div className="max-w-7xl mx-auto mb-16">
            <div
              className={`flex flex-col lg:flex-row items-center gap-12 transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {/* Imagem da Fachada */}
              <div className="lg:w-1/2">
                <div className="rounded-2xl overflow-hidden shadow-lg hover-scale">
                  <img
                    src={nihonStoreImage.src}
                    alt="Fachada da Nihon Automação"
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>

              {/* Descrição */}
              <div className="lg:w-1/2 space-y-6">
                <h3 className="text-2xl font-bold text-primary">Visite Nossa Sede</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Nossa sede está estrategicamente localizada em Taguatinga Norte,
                  proporcionando fácil acesso para atender toda a região do Distrito
                  Federal e Goiás com excelência e agilidade.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Com instalações modernas e uma equipe especializada, oferecemos 
                  atendimento personalizado e consultoria técnica para todas as 
                  suas necessidades em automação comercial.
                </p>
              </div>
            </div>
          </div>

          {/* Cards de Informações - Layout Horizontal */}
          <div className="max-w-7xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-center mb-12">Informações de Contato</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center text-center p-6 bg-card rounded-lg border transition-all duration-700 hover:shadow-md hover:border-black/10 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{info.title}</h4>
                  <p className="text-muted-foreground text-sm">{info.content}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Mapa */}
          <div
            className={`max-w-7xl mx-auto transition-all duration-700 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-2xl font-bold text-center mb-8">Como Chegar</h3>
            <div className="rounded-2xl overflow-hidden shadow-lg h-96 hover-scale">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.8859180695445!2d-48.071419500000005!3d-15.8099683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3a48ea655c27%3A0x6c8f98a2ac4b67f0!2sNihon%20Automa%C3%A7%C3%A7%C3%A3o%20Comercial!5e0!3m2!1spt-BR!2sbr!4v1759370127641!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Nihon Automação"
                className="grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LocationSection;
