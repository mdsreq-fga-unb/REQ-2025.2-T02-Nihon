import React from 'react'



import ProductInfo from '../../../components/product/ProductInfo'


import { AppRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";





describe('<ProductInfo />', () => {


  


  const mockProduct = {


    id: 1,


    title: "Balança Digital 30kg",


    tipo: "Equipamento",


    status: true,


    description: "Balança de alta precisão para comércio.",


    raw: { idfornecedor: 123, nomefornecedor: "Fornecedor Padrão" }


  }





  let mockRouter: any;





  beforeEach(() => {


    mockRouter = {


      // Damos alias para back e push para vigiar os dois


      back: cy.stub().as('routerBack'),


      push: cy.stub().as('routerPush'),


      forward: cy.stub(), replace: cy.stub(), refresh: cy.stub(), prefetch: cy.stub(), ...{}


    };





    cy.intercept('GET', '**/rest/v1/fornecedor*', {


      statusCode: 200,


      body: [{ nome: 'Fornecedor Teste Cypress' }]


    }).as('getFornecedor');


  });





  it('deve renderizar os detalhes do produto corretamente', () => {


    cy.mount(


      <AppRouterContext.Provider value={mockRouter}>


        <ProductInfo product={mockProduct} loading={false} />


      </AppRouterContext.Provider>


    )


    cy.contains('Balança Digital 30kg').should('be.visible')


    cy.contains('Balança de alta precisão').should('be.visible')


    cy.contains('Disponível em estoque').should('be.visible')


    cy.contains('Tipo:').parent().should('contain', 'Equipamento')


  })





  it('deve exibir o estado de carregamento', () => {


    cy.mount(


      <AppRouterContext.Provider value={mockRouter}>


        <ProductInfo product={null} loading={true} />


      </AppRouterContext.Provider>


    )


    cy.contains('Carregando...').should('be.visible')


  })





  it('deve buscar e exibir o nome do fornecedor', () => {


    cy.mount(


      <AppRouterContext.Provider value={mockRouter}>


        <ProductInfo product={mockProduct} loading={false} />


      </AppRouterContext.Provider>


    )


    cy.wait('@getFornecedor')


    cy.contains('Fornecedor Teste Cypress').should('be.visible')


  })





  // CORREÇÃO 1: Verifica se chamou VOLTAR ou PUSH


  it('deve tentar voltar ao clicar no botão de seta', () => {


    cy.mount(


      <AppRouterContext.Provider value={mockRouter}>


        <ProductInfo product={mockProduct} loading={false} />


      </AppRouterContext.Provider>


    )





    cy.get('button[title="Voltar para produtos"]').click()





    // Verifica se o router.back FOI chamado (que é o comportamento esperado se tiver histórico)


    // Se não tiver histórico, verificaria o push.


    cy.get('@routerBack').should('have.been.called')


  })





  // CORREÇÃO 2: Verifica a CLASSE em vez da cor renderizada


  it('deve ter um botão de orçamento visível e vermelho', () => {


    cy.mount(


      <AppRouterContext.Provider value={mockRouter}>


        <ProductInfo product={mockProduct} loading={false} />


      </AppRouterContext.Provider>


    )


    


    cy.contains('Fazer Orçamento')


      .should('be.visible')


      // Verificamos se a classe do Tailwind foi aplicada, o que garante que o código está certo


      // mesmo se o Cypress não carregar o arquivo CSS global.


      .and('have.class', 'bg-red-600') 


  })


})