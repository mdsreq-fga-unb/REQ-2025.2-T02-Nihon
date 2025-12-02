describe('Página Sobre Nós (E2E)', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/about')
  })

  it('deve exibir informações institucionais (RF I.1)', () => {
    cy.get('h1').should('exist')
    // Verifica se tem texto descrevendo a empresa
    cy.get('p').should('have.length.greaterThan', 0)
  })

  it('deve ter botão para voltar aos produtos ou home', () => {
    cy.get('a').should('have.length.greaterThan', 0)
  })
})