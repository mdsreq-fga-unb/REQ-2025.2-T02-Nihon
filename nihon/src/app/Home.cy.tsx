import React from 'react'
import Home from './(user)/page' // Importa o arquivo page.tsx que está NESTA mesma pasta (app)

describe('<Home />', () => {
  
  it('deve renderizar a página Home corretamente', () => {
    // 1. ARRANGE: Monta a página na tela de teste
    cy.mount(<Home />)

    // 2. ASSERT: Verifica os elementos principais (baseado no seu protótipo)
    
    // Verifica se o nome da empresa está visível
    cy.contains('Nihon Automação').should('be.visible')

    // Verifica se o Banner principal está lá
    cy.contains('TUDO QUE VOCÊ PRECISA').should('be.visible')
    
    // Verifica a barra de pesquisa (procurando por um 'input')
    cy.get('input').should('be.visible')
  })

  it('deve exibir os nichos de mercado', () => {
    cy.mount(<Home />)
    // Verifica se os cards de nicho existem
    cy.contains('Padarias').should('be.visible')
    cy.contains('Supermercados').should('be.visible')
  })
})