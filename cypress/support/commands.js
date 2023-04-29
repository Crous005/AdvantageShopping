Cypress.Commands.add("GetWeb", ()=>{
    cy.visit(Cypress.env("baseUrl"))
    cy.url().should('include', Cypress.env("baseUrl"))
})  
Cypress.Commands.add("LogIn", ()=>{   
    cy.get("#hrefUserIcon").click()
    cy.get('input[name="username"]').type("wiwili")
    cy.get('input[name="password"]').type("Bc3105")
    cy.get('#sign_in_btnundefined').click()
    cy.get('#menuUserLink', {timeout:4000}).should('contain','wiwili')
})  
Cypress.Commands.add("removeFirst", ()=>{
            cy.get('a[class="remove red ng-scope"]').first().click()
});
