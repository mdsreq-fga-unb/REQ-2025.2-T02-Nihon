describe('Página de Orçamento (E2E)', () => {
  beforeEach(() => {
    // CORREÇÃO: Força uma resolução de Desktop (1280px largura)
    // para garantir que os itens com classe 'xl:flex' fiquem visíveis.
    cy.viewport(1280, 800)
    
    cy.visit('http://localhost:3000/orcamento')
  })

  it('deve carregar a página de orçamento', () => {
    cy.contains(/Orçamento|Cotação/i).should('exist')
  })

  it('deve ter opção de contato via WhatsApp (Conforme US05)', () => {
    // Agora que a tela é grande, o Cypress deve conseguir ver o botão
    cy.contains(/WhatsApp/i).should('be.visible')
  })

  it('deve exibir campos básicos se houver formulário', () => {
    cy.get('body').then(($body) => {
        if ($body.find('form').length > 0) {
            cy.get('input').should('exist')
        }
    })
  })
})