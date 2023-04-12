import Sign from './singup';
const SignUP = new Sign();

describe("Pruebas de sección sign up", ()=>{
    beforeEach( function() { // Antes de cada prueba ejecuta el código siguiente:
        // Visitando el sitio web de pruebas
        cy.visit(Cypress.env("baseUrl"));
        cy.url().should('include', Cypress.env("baseUrl"))
        SignUP.buttonUser().click()
        SignUP.buttonCreate().click()
        
    });
it("Verificar la correcta creación de una cuenta", ()=>{
    const credentials = require('../../fixtures/example.json')

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
it("Verificar si es posible crear una cuenta con un correo ya existente", ()=>{
    const credentials = require('../../fixtures/example.json')

    SignUP.register().should('be.disabled')
    SignUP.inputUsername().type(credentials.user1)
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
    SignUP.VerifyUser().should('contain',credentials.user1)

})
it.only("Verificar si es posible crear una cuenta con un correo no válido", ()=>{
    const credentials = require('../../fixtures/example.json')
    
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
})