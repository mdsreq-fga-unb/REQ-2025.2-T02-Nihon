import { Award, Heart, Bike } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

const ValuesSection = () => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });
  const values = [
    {
      icon: Award,
      title: "Excelência em Qualidade",
      description: "Na Nihon Automação, priorizamos a excelência em todos os nossos produtos e serviços, garantindo que cada solução atenda aos mais altos padrões de qualidade para nossos clientes no setor supermercadista."
    },
    {
      icon: Heart,
      title: "Atendimento Personalizado",
      description: "Oferecemos atendimento personalizado e consultoria especializada, entendendo as necessidades específicas de cada cliente para fornecer soluções sob medida que impulsionam o sucesso e a eficiência dos negócios."
    },
    {
      icon: Bike,
      title: "Inovação Tecnológica",
      description: "Investimos continuamente em inovação tecnológica para oferecer equipamentos de ponta que otimizam processos, aumentam a eficiência operacional e acompanham as tendências do mercado."
    }
  ];

  return (
    <section id="values" ref={ref} className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>Nossos valores</h2>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => (
            <Card key={index} className={`bg-card border-border hover-scale group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: `${index * 100 + 200}ms` }}>
              <CardContent className="pt-8 pb-6 px-6 text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
