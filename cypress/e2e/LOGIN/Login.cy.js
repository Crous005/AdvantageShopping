import log from "./Login";
const LetLogIn = new log();
const credentials = require('../../fixtures/example.json');

describe("Functionality LOG IN test", ()=> {
    beforeEach(()=>{
        cy.GetWeb()
}) 
  it("Verify that the user or customer can log in to their existing account on the website", ()=>{
    LetLogIn.buttonUser().click()
    LetLogIn.selectUserBox().click().type(credentials.userC)
    LetLogIn.selectPassBox().click().type(credentials.passWord)
    LetLogIn.buttonSingIn().click()
    LetLogIn.verifyUser().should('contain', credentials.userC)
  })    
  it("Verify that clicking on Sign Out completely closes the session of the active account", ()=>{
    cy.LogIn()
    LetLogIn.buttonUser().click()
    LetLogIn.selectSignOut().click()
    LetLogIn.verifyUser().should("be.visible")
  })
  it("Verify that the user or customer can sign out and sign in to an existing account:", ()=>{
    cy.LogIn()
    LetLogIn.buttonUser().click()
    LetLogIn.selectSignOut().click()
    LetLogIn.verifyUser().should("be.visible")
    cy.wait(5000)
    LetLogIn.buttonUser().click()
    LetLogIn.selectUserBox().click().type(credentials.userC)
    LetLogIn.selectPassBox().click().type(credentials.passWord)
    LetLogIn.buttonSingIn().click()
    LetLogIn.verifyUser().should('contain', credentials.userC)
  })
  it("Verify the correct functioning of the Forgot your password? button", ()=>{
    LetLogIn.buttonUser().click()
    LetLogIn.selectUserBox().click().type(credentials.userC)
    LetLogIn.passwordForget().click()
    LetLogIn.getBody().should('not.have.descendants', '.new-element')
  })
})

