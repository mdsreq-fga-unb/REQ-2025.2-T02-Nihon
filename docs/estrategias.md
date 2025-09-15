# 3 Estratégias de Engenharia de Software

## 3.1 Estratégia Priorizada
- **Abordagem:** Ágil
  
- **Ciclo de Vida:** Ágil
  
- **Processo:** ScrumXP  

## 3.2 Quadro Comparativo

O quadro a seguir tem a finalidade de justificar a escolha da estratégia tomada apresentando um comparativo entre as características do processo escolhido **ScrumXP** e o processo que se alinha com a mesma abordagem e ciclo de vida definidos, o **FDD**. Vale ressaltar que ambos os processos possuem foco em práticas técnicas específicas, e o ScrumXP utiliza o framework ágil Scrum para organizar e coordenar o trabalho.

| **Características** | **ScrumXP** | **FDD** |
|----------------------|-------------|---------|
| **Abordagem Geral** | Ciclo de vida ágil, priorizando valor para o cliente em pequenas entregas contínuas. Ideal para projetos de curta duração, com feedback rápido e adaptação constante. | Foco em modelagem e planejamento detalhado antes de construir, podendo atrasar a primeira entrega funcional. |
| **Estrutura de Processos** | Simples e leve: papéis claros (PO, SM, Time), backlog priorizado e sprints curtas (2 semanas) que entregam incrementos de valor. | Estrutura formal com 5 fases (modelagem de domínio, lista de funcionalidades, planejamento, design, build), exigindo mais tempo antes de gerar resultados visíveis. |
| **Flexibilidade de Requisitos** | Alta — backlog pode ser re-planejado a cada sprint, permitindo que o cliente reoriente prioridades de forma contínua. | Menor — mudanças no escopo podem gerar retrabalho, pois impactam toda a lista de funcionalidades planejada. |
| **Colaboração com Cliente** | Envolvimento frequente em cada sprint review, garantindo que o produto final esteja alinhado às expectativas e identidade da Nihon. | Participação do cliente concentrada principalmente na fase inicial, com menos feedback contínuo. |
| **Complexidade do Processo** | Baixa — fácil para equipes universitárias compreenderem e adotarem rapidamente. | Moderada/alta — exige maior disciplina na modelagem e planejamento antes de iniciar a construção. |
| **Qualidade Técnica** | Fortemente apoiada por práticas do XP (integração contínua, refatoração, pair programming), melhorando o aprendizado e a manutenibilidade do código. | Boa qualidade técnica, mas menos orientada a práticas colaborativas e de melhoria contínua. |
| **Risco de Projeto** | Reduzido — o cliente vê resultados cedo, permitindo corrigir a direção rapidamente e evitar desperdício. | Maior — se a modelagem inicial não for bem-feita, pode gerar atrasos ou funcionalidades que não atendem ao cliente. |
| **Adaptação ao Projeto da Nihon** | Excelente — permite entregas incrementais que já fortalecem a presença digital da Nihon e mostram valor desde os primeiros sprints. | Pode atrasar a entrega de algo funcional, o que não é ideal para o objetivo de reposicionar a empresa rapidamente no digital. |
| **Controle de Qualidade** | Revisado a cada sprint, com testes automatizados e integração contínua garantindo estabilidade. | Revisões mais espaçadas, podendo acumular problemas antes da fase de build. |
| **Escalabilidade** | Fácil de adaptar conforme a equipe cresce, bastando organizar papéis e backlog. | Mais difícil de escalar sem rever toda a modelagem inicial. |
| **Suporte a Equipes de Desenvolvimento** | Focado em colaboração e auto-organização, o que é motivador para uma equipe pequena e em aprendizado. | Processo mais rígido, que pode reduzir a autonomia da equipe. |

## 3.3 Justificativa
Com base nas características do projeto e nos desafios enfrentados pela Nihon Automação, a escolha do processo **ScrumXP** é a mais adequada pelos seguintes motivos:

1. **Adaptação ao Nível de Conhecimento da Equipe**
 
   O principal desafio do projeto é o nível técnico da equipe, que é formada por estudantes com pouca experiência profissional. O ScrumXP é ideal para este cenário, pois suas práticas, como *pair programming* (programação em par) e propriedade coletiva do código, incentivam a colaboração constante, a troca de conhecimento e o aprendizado contínuo. Isso ajuda a mitigar os riscos associados à inexperiência e a manter a equipe motivada.

3. **Entregas Rápidas e Foco no Valor para o Negócio**
 
   A Nihon Automação precisa estabelecer sua presença digital de forma ágil para competir no mercado. O ScrumXP, com seus ciclos curtos (sprints de duas semanas), permite a entrega incremental de funcionalidades. Isso significa que a Nihon poderá ver partes funcionais do site, como a página inicial e os casos de sucesso, muito antes do fim do projeto, proporcionando uma percepção de progresso e permitindo a validação contínua para garantir que a solução agregue valor real ao negócio.

4. **Alta Qualidade Técnica e Manutenibilidade**
  
   A solução exige a integração entre diferentes tecnologias (Next.JS, Node.js, Supabase) e precisa ser facilmente gerenciável pela equipe da Nihon através de um painel administrativo. As práticas de engenharia do XP (*Extreme Programming*), como testes contínuos e integração contínua, são focadas em garantir a qualidade técnica do código desde o início. Isso resulta em um produto final mais robusto, com menos erros e mais fácil de manter e atualizar no futuro.

6. **Flexibilidade e Envolvimento do Cliente**
 
   O projeto busca traduzir a identidade da Nihon para o ambiente digital, o que exige um alinhamento constante com o cliente. A abordagem do Scrum, com reuniões de validação periódicas (a cada 3 semanas, conforme planejado), garante que o cliente participe ativamente do processo. Essa colaboração permite fazer ajustes rápidos com base no feedback, assegurando que o produto final atenda plenamente às expectativas e necessidades da empresa.
