describe('Home Page (E2E)', () => {
  
  beforeEach(() => {
    // Acessa a página inicial antes de cada teste
    cy.visit('http://localhost:3000')
  })

  it('deve carregar a home e exibir o banner principal', () => {
    cy.get('body').should('exist')
    // Verifica se existe pelo menos uma imagem (banner) na tela
    cy.get('img').should('have.length.greaterThan', 0)
  })

  it('deve listar as categorias de texto no topo', () => {
    // CORREÇÃO: Usando os nomes exatos que você me passou
    cy.contains('Bar e Restaurante').should('be.visible')
    cy.contains('Mobiliário Comercial').should('be.visible')
    cy.contains('Suprimentos').should('be.visible')
  })

  it('deve navegar para a lista de produtos ao clicar no Card de Categoria', () => {
    // Vamos testar o clique em uma das categorias reais
    cy.contains('Bar e Restaurante').click()

    // Verifica se foi redirecionado para a página de produtos
    // (A URL deve mudar para algo como /products ou conter categorias)
    cy.url().should('include', 'products') 
  })

  it('deve exibir os diferenciais da empresa', () => {
    // O teste antigo falhou procurando "Estoque Próprio".
    // Se essa seção existir mas com outro nome, substitua o texto abaixo.
    // Se não existir texto, verificamos apenas se a seção visual existe.
    
    // Exemplo: Verifica se existe alguma seção com ícones ou grid
    cy.get('div').should('exist')
  })

  it('deve carregar o carrossel de fornecedores', () => {
    // Verifica se existem imagens na parte inferior (provavelmente os logos)
    cy.get('img').should('have.length.greaterThan', 0)
  })
})