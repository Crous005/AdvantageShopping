import addCart from "./add";
const cartShop = new addCart();

describe("Functionality ADD CART tests", ()=>{
    beforeEach(()=>{
        cy.GetWeb()
        cy.LogIn()
})
it("Verify the successful payment of a product with correct data in MasterCredit", ()=>{
    const credentials = require('../../fixtures/example.json')

    cartShop.buttonspeakers().click()
    cartShop.selectSpeaker20().click()
    cartShop.buttonAdd2Cart().click()
    cartShop.clickIconCart().click()
    cartShop.verifyProduct().should('contain','BOSE SOUNDLINK BLUETOOTH SPEAKER III')
    
    cartShop.checkOutBtn().click({force: true})
    cartShop.nextBtn().click()
    cartShop.Creditbtn().click()
    cartShop.inputCreditCard().type("{selectall}{backspace}"+ credentials.creditcard, {force:true})
    cartShop.inputCvv().type("{selectall}{backspace}"+ credentials.cvv, {force:true})
    cartShop.inputCardHolder().type("{selectall}{backspace}"+ credentials.name, {force:true})
    cartShop.SaveManualPay().uncheck({force: true})
    cartShop.ManualPay().click({force: true})
    cartShop.verifyBuy().should('be.visible')
    })
 it("Verify the non-payment of a product with incorrect data in the CVV number in MasterCredit", ()=>{
    const credentials = require('../../fixtures/example.json')
    
    cartShop.buttonspeakers().click()
    cartShop.selectSpeaker20().click()
    cartShop.buttonAdd2Cart().click()
    cartShop.clickIconCart().click()
    cartShop.verifyProduct().should('contain','BOSE SOUNDLINK BLUETOOTH SPEAKER III')
    
    cartShop.checkOutBtn().click()
    cartShop.nextBtn().click()
    cartShop.Creditbtn().click()
    cartShop.inputCreditCard().type("{selectall}{backspace}"+credentials.creditcard, {force:true})
    cartShop.inputCvv().type("{selectall}{backspace}"+credentials.cvvfail, {force:true})
    cartShop.inputCardHolder().type("{selectall}{backspace}"+credentials.name, {force:true})
    cartShop.SaveManualPay().uncheck({force: true})
    cartShop.ManualPay().should('be.disabled')
    })   
it("Verify the non-payment of a product with incorrect data in the card number in MasterCredit", ()=>{
    const credentials = require('../../fixtures/example.json')
    
    cartShop.buttonspeakers().click()
    cartShop.selectSpeaker20().click()
    cartShop.buttonAdd2Cart().click()
    cartShop.clickIconCart().click()
    cartShop.verifyProduct().should('contain','BOSE SOUNDLINK BLUETOOTH SPEAKER III')
    
    cartShop.checkOutBtn().click()
    cartShop.nextBtn().click()
    cartShop.Creditbtn().click()
    cartShop.inputCreditCard().type("{selectall}{backspace}"+credentials.creditfail, {force:true})
    cartShop.inputCvv().type("{selectall}{backspace}"+credentials.cvv, {force:true})
    cartShop.inputCardHolder().type("{selectall}{backspace}"+credentials.name, {force:true})
    cartShop.SaveManualPay().uncheck({force: true})
    cartShop.ManualPay().should('be.disabled')
    })    
})