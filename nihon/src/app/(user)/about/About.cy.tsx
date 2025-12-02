import React from 'react'
import About from './page'
// Importamos os tipos internos do Next.js para simular o roteador
import { AppRouterContext, AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

describe('<About /> Page', () => {
  
  let mockRouter: AppRouterInstance;

  // O beforeEach garante que o "Roteador Falso" seja recriado limpo antes de cada teste
  beforeEach(() => {
    mockRouter = {
      back: cy.stub(),
      forward: cy.stub(),
      // Damos o apelido 'routerPush' para vigiar se essa função foi chamada depois
      push: cy.stub().as('routerPush'), 
      replace: cy.stub(),
      refresh: cy.stub(),
      prefetch: cy.stub(),
      // @ts-ignore: Ignora propriedades obrigatórias que não vamos usar no teste
      ...{} 
    };
  });

  // Teste 1: Renderização Básica
  it('deve renderizar a página Sobre Nós sem erros', () => {
    cy.mount(
      <AppRouterContext.Provider value={mockRouter}>
        <About />
      </AppRouterContext.Provider>
    )
  })

  // Teste 2: Estrutura Visual
  it('deve ter o fundo branco e ocupar largura total', () => {
    cy.mount(
      <AppRouterContext.Provider value={mockRouter}>
        <About />
      </AppRouterContext.Provider>
    )
    cy.get('div.bg-white').should('exist')
  })

  // Teste 3: Conteúdo do Rodapé/Redirect
  it('deve exibir o link de redirecionamento para Produtos', () => {
    cy.mount(
      <AppRouterContext.Provider value={mockRouter}>
        <About />
      </AppRouterContext.Provider>
    )
    cy.contains('Nossos Produtos').should('be.visible')
  })

  // Teste 4: Integração com Componentes Filhos (HeroSection)
  it('deve conseguir carregar as seções filhas (ex: Hero)', () => {
    cy.mount(
      <AppRouterContext.Provider value={mockRouter}>
        <About />
      </AppRouterContext.Provider>
    )
    // Procura pelo H1 que sabemos que está dentro do HeroSection
    cy.get('h1').should('exist') 
  })

  // Teste 5: Interação (O teste novo!)
  it('deve tentar redirecionar para a home ao clicar em Nossos Produtos', () => {
    cy.mount(
      <AppRouterContext.Provider value={mockRouter}>
        <About />
      </AppRouterContext.Provider>
    )

    // 1. Simula o clique do usuário no texto "Nossos Produtos"
    cy.contains('Nossos Produtos').click()

    // 2. Verifica se a função 'push' do roteador foi chamada com a URL '/'
    cy.get('@routerPush').should('have.been.calledWith', '/')
  })
})