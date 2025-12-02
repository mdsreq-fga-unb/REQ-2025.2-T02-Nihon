"use client";
import { Package, Users, TrendingUp, Award } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const ExperienceSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  
  return (
    <section id="experience" ref={ref} className="relative bg-primary text-primary-foreground py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center max-w-4xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Nossa Experiência</h2>
          <p className="text-lg leading-relaxed opacity-95">
            Atendemos desde pequenos comércios até grandes redes de padarias, açougues e supermercados, como o Dia a Dia, Super Adega e Supermercados Tatico. Nossa principal atividade é a venda de grandes projetos, onde não apenas oferecemos produtos, mas fornecemos soluções completas e compartilhamos nosso conhecimento especializado no setor.
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          <div className={`bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/25 transition-all duration-700 hover:scale-105 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-6xl font-bold mb-2">30</div>
            <div className="text-xl font-semibold mb-3">Anos</div>
            <p className="text-sm opacity-90">
              de experiência no mercado
            </p>
          </div>
          
          <div className={`bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/25 transition-all duration-700 hover:scale-105 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-6xl font-bold mb-2">+40</div>
            <div className="text-xl font-semibold mb-3">Empresas</div>
            <p className="text-sm opacity-90">
              atendidas com excelência
            </p>
          </div>
          
          <div className={`bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/25 transition-all duration-700 hover:scale-105 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <TrendingUp className="w-12 h-12 mx-auto mb-4" strokeWidth={1.5} />
            <div className="text-xl font-semibold mb-3">Crescimento</div>
            <p className="text-sm opacity-90">
              Contínuo e sustentável
            </p>
          </div>
          
          <div className={`bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/25 transition-all duration-700 hover:scale-105 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Award className="w-12 h-12 mx-auto mb-4" strokeWidth={1.5} />
            <div className="text-xl font-semibold mb-3">Qualidade</div>
            <p className="text-sm opacity-90">
              Garantida em cada projeto
            </p>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className={`bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-4 rounded-xl">
                <Package className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Grandes Projetos</h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  Especialistas em vendas de grandes projetos, oferecendo múltiplos produtos e soluções integradas para nossos clientes em uma única negociação.
                </p>
              </div>
            </div>
          </div>
          
          <div className={`bg-white/20 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-4 rounded-xl">
                <Users className="w-8 h-8" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Atendimento Personalizado</h3>
                <p className="text-sm opacity-90 leading-relaxed">
                  Nossos vendedores fornecem consultoria especializada, compartilhando conhecimento profundo do setor para garantir as melhores soluções.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
