import AddCart from "../e2e/ADD CART/add";
const CartShop = new AddCart();

Cypress.Commands.add("LogIn", ()=>{
    cy.visit(Cypress.env("baseUrl"))
    cy.url().should('include', Cypress.env("baseUrl"))
    cy.get("#hrefUserIcon").click()
    cy.get('input[name="username"]').type("wiwili")
    cy.get('input[name="password"]').type("Bc3105")
    cy.get('#sign_in_btnundefined').click()
    cy.get('#menuUserLink', {timeout:4000}).should('contain','wiwili')
})  
Cypress.Commands.add("removeAll", ()=>{
            cy.get('a[class="remove red ng-scope"]').click({multiple:true})
});
