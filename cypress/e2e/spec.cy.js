describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')

    // Enter email
    cy.get('#email').type('test@kabindra.com')
    //Verify that the value of amail has been updated
    cy.get('#email').should('have.value','test@kabindra.com')

    //Enter password
    cy.get('#password').type('password')
    cy.get('#password').should('have.value','password')

    cy.get('.btn').click()
  })
})