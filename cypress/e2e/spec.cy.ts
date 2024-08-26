describe('My First Test', () => {
  it('Visits the initial project page', () => {
    cy.visit('/')
    cy.contains('ng-app')
  })

  it('Visits the initial project page', () => {
    cy.visit('/items')
    cy.get('app-search input').first().type('tomato')
    cy.get('app-grid tbody').find('tr').should('have.length', 1)
  })

  it('add item ...', () => {
    const title = 'Robert'+Date.now();
    cy.visit('/items')
    cy.contains('send').click();
    cy.contains('add').click();
    cy.get('#add-form input').eq(0).type(title)
    cy.get('#add-form input').eq(1).type('123')
    cy.get('#add-form input').eq(2).type('friend')
    cy.get('#add-form button').click();
    cy.get('app-search input').first().type(title)
    cy.get('app-grid tbody').find('tr').should('have.length', 1)
    cy.get('app-grid tbody').find('button').contains('remove').click();
  })

})
