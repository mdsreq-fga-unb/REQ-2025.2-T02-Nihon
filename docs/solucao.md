| Versão | Data | Descrição  | Autor    |   
| :-----: | :----: | :----------: | :------------: |
| 1.0 | 01/09/2025 | Versão inicial | [Yasmin Dayrell](https://github.com/YasminDayrell), [Guilherme Flyan](https://github.com/GFlyan)|
| 1.1 | 05/09/2025 | Correção após orientações | [Yasmin Dayrell](https://github.com/YasminDayrell), [Guilherme Flyan](https://github.com/GFlyan)|
| 1.2 | 08/09/2025 | Versão corrigida após devolutiva | Todos os membros da equipe|

# 2 SOLUÇÃO PROPOSTA

## 2.1 Objetivos do Produto

### Objetivo Geral
O objetivo principal é ampliar o alcance da empresa para novos públicos e consolidar o relacionamento com clientes já existentes por meio de uma nova plataforma digital. 

### Objetivos Específicos e Indicadores

| Código | Objetivo Específico                                                                 | Indicador de Sucesso                                                             |
|--------|-------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| **OE1** | Atrair novos clientes, principalmente o público mais jovem.                        | Aumento em 20% da carteira de clientes.                                          |
| **OE2** | Permitir que clientes possam, de forma rápida, entender o que a Nihon faz e os produtos que ela vende. | Aumento em 10% da procura e interesse de compra dos produtos da Nihon.            |
| **OE3** | Facilitar a comunicação com a empresa por meios digitais.                          | Crescimento de 8% do número de empresas que entram em contato pelo meio digital. |
| **OE4** | Auxiliar usuários a ter acesso aos sites dos fornecedores e informações de fábrica do produto. | Redução de 30% das reclamações de clientes após a compra do produto.              |
| **OE5** | Fidelizar clientes mostrando casos de sucesso.                                     | Crescimento de 5% nas vendas de clientes já cadastrados.                         |
| **OE6** | Ter um catálogo de produtos de acordo com o estoque.                               | Redução em 70% dos cancelamentos de pedidos por indisponibilidade de estoque.    |

---

## 2.2 Características da Solução

A solução será uma **aplicação web institucional**, com funcionalidades de apoio digital, desenvolvida para transmitir a identidade da Nihon Automação de forma moderna, simples e acessível. O design será minimalista, inspirado em interfaces limpas e intuitivas, visando atender tanto clientes mais velhos (com usabilidade simplificada) quanto jovens empreendedores (com uma experiência moderna e fluida).

### Principais características do produto

- **Estética moderna e intuitiva (OE1):** visual atrativo para novos clientes jovens, sem comprometer a usabilidade para clientes mais velhos.

- **Exibição dos principais nichos de atuação (OE2):** destaque claro para segmentos atendidos, com listagem objetiva dos principais produtos por nicho.  

- **Encaminhamento de clientes para contato (OE3):** acesso rápido a canais diretos como e-mail e WhatsApp.

- **Exibição de fornecedores parceiros (OE4):** apresentação de informações relevantes e links para sites oficiais.

- **Exibição de casos de sucesso (OE5):** exibição dos principais clientes já atendidos e projetos bem sucedidos.
  
- **Painel administrativo (OE6):** área para que a própria equipe da Nihon possa atualizar produtos, fornecedores e casos de sucesso, permitindo que o site esteja de acordo com o estoque e situação atual da empresa.

2.3 Tecnologias a Serem Utilizadas

Frontend:
Next.js: Será responsável por renderizar as páginas de categorias, produtos e projetos, tanto para usuários comuns quanto para o administrador.

Backend:
API Routes do Next.js: O backend será implementado dentro do próprio projeto Next.js, usando rotas serverless.

Database:
Supabase: Banco de dados PostgreSQL gerenciado na nuvem.

Deploy:
Vercel: Plataforma de hospedagem que suporta Next.js nativamente, incluindo SSR, API Routes e CDN global. Será responsável por colocar frontend e backend no ar de forma integrada, com deploy contínuo a partir do GitHub.

# 2.4 Pesquisa de Mercado e Análise Competitiva

Compreende-se como principais concorrentes da Nihon Automação no mercado de automação a **Etitec Soluções Inteligentes**, localizada em Brasília, e a **Catral**, localizada em Goiás. Ambas as concorrentes já possuem plataformas de e-commerce na web; entretanto, ambas apresentam pontos negativos:

- **Etitec Soluções Inteligentes:** possui pouca variedade em seu catálogo de produtos e não apresenta informações sobre casos de projetos bem-sucedidos, focando apenas na venda de produtos.
    
- **Catral:** também não apresenta informações sobre projetos de sucesso, mantendo o foco apenas na venda de produtos.  

### Diferenciais da Solução da Nihon
A proposta da Nihon Automação se diferencia por:

- **Atendimento consultivo:** a solução não é um e-commerce tradicional, mas sim uma plataforma com foco no atendimento direto ao cliente, aproveitando a expertise da equipe da Nihon para aumentar a confiança do público.
    
- **Catálogo amplo e administrável:** o estoque de produtos da Nihon, similar ou até maior que o da concorrência, poderá ser totalmente administrado de forma intuitiva pelos administradores da empresa.
    
- **Visibilidade de projetos realizados:** a plataforma destacará projetos bem-sucedidos, reforçando a confiança e o compromisso da Nihon junto aos clientes.  

---

# 2.5 Análise de Viabilidade

A viabilidade do projeto é considerada **média**, tendo em vista que a equipe de desenvolvimento ainda não possui grande experiência com projetos desse porte nem com as tecnologias escolhidas (**Next.js, Node.js + Express.js e Supabase**). Por outro lado, a equipe demonstra **alta motivação** para desenvolver a solução.  

A integração entre o frontend e o banco de dados será realizada por meio de uma **API RESTful**, garantindo comunicação simplificada entre as partes do sistema.  

O prazo estimado para desenvolvimento do projeto é de **três meses**, divididos em **7 sprints** de duas semanas cada.  
Cada sprint terá entregas específicas relacionadas ao andamento do projeto, desde a definição da visão do produto até a entrega das funcionalidades previstas nos objetivos específicos.  

O cronograma é considerado um desafio, pois a equipe é formada por universitários que, além da carga elevada de disciplinas, também participam de programas de estágio.  

---

# 2.6 Impacto da Solução

A nova aplicação web trará uma série de benefícios para a Nihon Automação:

- **Aumento de clientes e atração do público jovem:** a plataforma permitirá que a empresa seja descoberta por empreendedores mais jovens, que utilizam a internet como principal meio de busca, ampliando a base de clientes e fortalecendo a marca no ambiente digital.

- **Construção de uma presença digital estratégica:** a solução apresentará de forma clara e organizada os setores de atuação e o portfólio da Nihon, transmitindo confiança e reforçando sua identidade no ambiente online.

- **Melhoria da conversão e geração de confiança:** a exibição de um catálogo de produtos atualizado, aliado à apresentação de projetos bem-sucedidos, facilitará a tomada de decisão dos clientes, aumentando o interesse de compra e a taxa de conversão.  
