import React from 'react'

describe('Meu Primeiro Teste', () => {
  it('deve renderizar um texto simples', () => {
    // Monta um elemento HTML simples na tela de teste
    cy.mount(<h1>Olá, Nihon!</h1>)
    
    // Verifica se o texto existe
    cy.get('h1').should('contains.text', 'Olá, Nihon!')
  })
})