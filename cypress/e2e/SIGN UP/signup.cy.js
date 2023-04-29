import Sign from './singup';
const SignUP = new Sign();
const credentials = require('../../fixtures/example.json')


describe("Pruebas de sección sign up", ()=>{
    beforeEach( function() { // Antes de cada prueba ejecuta el código siguiente:
        // Visitando el sitio web de pruebas
        cy.visit(Cypress.env("baseUrl"));
        cy.url().should('include', Cypress.env("baseUrl"))
        SignUP.buttonUser().click()
        SignUP.buttonCreate().click()
        SignUP.register().should('be.disabled')
        
    });
it("Verify that the REGISTER button is disabled when attempting to create a new account:", ()=>{
    SignUP.register().should('be.disabled')
    })
it("Verify the correct creation of an account in AdvantageDEMO with all credentials following these criteria:", ()=>{

    SignUP.register().should('be.disabled')
    SignUP.inputUsername().type(credentials.user)
    SignUP.inputEmail().type(credentials.email)
    SignUP.inputPassword().type(credentials.pass)
    SignUP.inputPassver().type(credentials.passw, {force:true})
    SignUP.inputName().type(credentials.name)
    SignUP.inputLastname().type(credentials.lname)
    SignUP.inputPhone().type(credentials.phone)
    SignUP.selectCountry().select('Colombia')
    SignUP.inputCity().type(credentials.city)
    SignUP.inputAddress().type(credentials.address)
    SignUP.inputState().type(credentials.state, {force:true})
    SignUP.inputPostal().type(credentials.postal)
    SignUP.VerifyAgree().click()
    SignUP.register().should('be.enabled').click()
    SignUP.VerifyUser().should('contain',credentials.user)
        
})
it("Verify that it is not possible to create an account with an already existing email address", ()=>{

    SignUP.register().should('be.disabled')
    SignUP.inputUsername().type(credentials.user)
    SignUP.inputEmail().type(credentials.email)
    SignUP.inputPassword().type(credentials.pass1)
    SignUP.inputPassver().type(credentials.passw1, {force:true})
    SignUP.inputName().type(credentials.name)
    SignUP.inputLastname().type(credentials.lname)
    SignUP.inputPhone().type(credentials.phone)
    SignUP.selectCountry().select('Colombia')
    SignUP.inputCity().type(credentials.city)
    SignUP.inputAddress().type(credentials.address)
    SignUP.inputState().type(credentials.state, {force:true})
    SignUP.inputPostal().type(credentials.postal)
    SignUP.VerifyAgree().click()
    SignUP.register().should('be.enabled').click()
    SignUP.VerifyUser().should('contain',credentials.user)


})
it("Verify that it is not possible to create an account with an invalid email address", ()=>{
    
    SignUP.register().should('be.disabled')
    SignUP.inputUsername().type(credentials.user2)
    SignUP.inputEmail().type(credentials.email1)
    SignUP.inputPassword().type(credentials.pass1)
    SignUP.inputPassver().type(credentials.passw1, {force:true})
    SignUP.inputName().type(credentials.name)
    SignUP.inputLastname().type(credentials.lname)
    SignUP.inputPhone().type(credentials.phone)
    SignUP.selectCountry().select('Colombia')
    SignUP.inputCity().type(credentials.city)
    SignUP.inputAddress().type(credentials.address)
    SignUP.inputState().type(credentials.state, {force:true})
    SignUP.inputPostal().type(credentials.postal)
    SignUP.VerifyAgree().click()
    SignUP.register().should('be.disabled')
})
it("verify that it's not possible to create an account without accepting the terms and conditions checkbox", () =>{
    
    SignUP.inputUsername().type(credentials.user)
    SignUP.inputEmail().type(credentials.email)
    SignUP.inputPassword().type(credentials.pass)
    SignUP.inputPassver().type(credentials.passw, {force:true})
    SignUP.inputName().type(credentials.name)
    SignUP.inputLastname().type(credentials.lname)
    SignUP.inputPhone().type(credentials.phone)
    SignUP.selectCountry().select('Colombia')
    SignUP.inputCity().type(credentials.city)
    SignUP.inputAddress().type(credentials.address)
    SignUP.inputState().type(credentials.state, {force:true})
    SignUP.inputPostal().type(credentials.postal)
    SignUP.register().should('be.disabled')
})
})