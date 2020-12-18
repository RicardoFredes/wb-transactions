import transactions from '../../__tests__/mocks/transactions.json'

const url = 'http://localhost:5000/'
const apiUrl = 'https://warren-transactions-api.herokuapp.com/api/transactions'

const makeFetchResponse = response => cy.intercept({ method: 'GET', url: apiUrl }, response)

describe('Página de transações', () => {
  context('Retorno da api:', () => {
    it('Ao demorar, deve mostrar uma mensagem de carregamento', () => {
      makeFetchResponse(
        async () =>
          new Promise(resolve => {
            setTimeout(() => resolve([]), 10000)
          })
      )
      cy.visit(url)
      cy.get('[data-bi=status-notification]').contains('Só um instante')
    })
    it('Se array vazio, deve mostrar uma mensagem de estado vazio', () => {
      makeFetchResponse([])
      cy.visit(url)
      cy.get('[data-bi=status-notification]').contains('não tem transações')
    })
    it('Se formato for inválido, deve mostrar uma mensagem de erro', () => {
      makeFetchResponse('invalid_format')
      cy.visit(url)
      cy.get('[data-bi=status-notification]').contains('não foi possível consultar os dados')
    })
    context('Dados válidos, deve mostrar:', () => {
      beforeEach(() => {
        makeFetchResponse(transactions)
        cy.visit(url)
      })
      it('Filtros', () => {
        cy.get('#filter input')
        cy.get('#filter select')
        cy.get('#filter button')
      })
      it('Tabela de transações', () => {
        cy.get('table > thead th')
        cy.contains('Data')
        cy.contains('Título')
        cy.contains('Descrição')
        cy.contains('Status')
        cy.contains('Valor')
        cy.get('table > tbody > tr').should('have.length', 5)
      })
    })
  })
  context('Filtros', () => {
    context('Pesquisar por título', () => {
      it('Se termo não encontrado, mostrar mensagem de não encontrado', () => {
        cy.get('#filter input').clear().type('filtrar por transação que não existe')
        cy.get('[data-bi=status-notification]').contains('Nenhuma transação encontrada')
      })
      it('Se termo encontrado, mostrar os resultados filtrados', () => {
        cy.get('#filter input').clear().type('resgate')
        cy.get('table > tbody > tr').should('have.length', 1)

        cy.get('#filter input').clear().type('deposito')
        cy.get('table > tbody > tr').should('have.length', 2)
      })
      it('Limpar campo ao clicar em limpar filtros', () => {
        cy.get('#filter button').click()
      })
    })
    context('Filtrar por status', () => {
      it('Ao selecionar Solicitado, deve mostrar somente transações com esse status', () => {
        cy.get('#filter select').select('Solicitado')
        cy.get('table > tbody > tr').should('have.length', 3).contains('Solicitado')
      })
      it('Ao selecionar Processando, deve mostrar somente transações com esse status', () => {
        cy.get('#filter select').select('Processando')
        cy.get('table > tbody > tr').should('have.length', 1).contains('Processando')
      })
      it('Ao selecionar Concluído, deve mostrar somente transações com esse status', () => {
        cy.get('#filter select').select('Concluído')
        cy.get('table > tbody > tr').should('have.length', 1).contains('Concluído')
      })
      it('Limpar campo ao clicar em limpar filtros', () => {
        cy.get('#filter button').click()
      })
    })
    context('Combinar filtros', () => {
      it('Mostrar resultados com os dois filtros aplicados', () => {
        cy.get('#filter select').select('Solicitado')
        cy.get('#filter input').clear().type('deposito')
        cy.get('table > tbody > tr').should('have.length', 1)
        cy.get('#filter button').click()
      })
    })
  })
  context('Modal', () => {
    it('Ao clicar sobre uma transação deve abrir uma modal com os seus detalhers', () => {
      cy.get('table > tbody > tr').first().click()
      cy.get('.modal')
    })
    it('A modal deve exibir detalhes da transação', () => {
      cy.get('.modal')
      cy.contains('Movimentação interna')
      cy.contains('Férias')
      cy.contains('Conta Warren')
      cy.contains('R$ 172.513,46')
      cy.get('.modal .steps > span.completed').contains('Solicitado')
      cy.get('.modal .steps > span:not(.completed)')
      cy.contains('Processando')
      cy.contains('Concluído')
    })
    it('Ao clicar fora da modal, ela deve fechar', () => {
      cy.get('.modal').click()
      cy.get('body').find('.modal').should('have.length', 0)
    })
  })
})
