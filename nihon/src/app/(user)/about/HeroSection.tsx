"use client";

import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import heroLogo from "@/../public/images/circuloNihon.png";

const HeroSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  
  return (
    <section ref={ref} className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className={`flex justify-center mb-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <img 
            src={heroLogo.src} 
            alt="Nihon Automação Logo" 
            className="w-64 h-64 object-contain hover-scale"
          />
        </div>
        <div className={`max-w-4xl mx-auto text-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl font-bold mb-6">Sobre a Nihon Automação</h1>
          <p className="text-lg text-foreground leading-relaxed">
            A Nihon Automação atua no mercado desde 1995, atendendo as regiões do Distrito Federal e Goiás. Com quase 30 anos de experiência, evoluímos de uma empresa focada em software e assistência técnica para nos tornarmos referência na venda de equipamentos para o setor comercial supermercadista.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
