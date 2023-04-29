import addCart from "./add";
const cartShop = new addCart();
const credentials = require('../../fixtures/example.json')

describe("Functionality ADD CART tests", ()=>{
    beforeEach(()=>{
        cy.GetWeb()
        cy.LogIn()
})
it("Verify product payment with correct information in SafePay", ()=>{

    cartShop.buttonspeakers().click()
    cartShop.selectSpeaker20().click()
    cartShop.buttonAdd2Cart().click()
    cartShop.clickIconCart().click()
    cartShop.verifyProduct().should('contain','BOSE SOUNDLINK BLUETOOTH SPEAKER III')

    cartShop.checkOutBtn().click({force: true})
    cartShop.nextBtn().click({force: true})
    cartShop.checkSafePay().click()
    cartShop.inputUsarSafe().type("{selectall}{backspace}"+credentials.name)
    cartShop.inputPassSafe().type("{selectall}{backspace}"+credentials.pass)
    cartShop.SaveManualPay().uncheck({force: true})
    cartShop.SafePayBtn().click().should('be.enabled')
    cartShop.verifyBuy().should('be.visible')

})
it("Verify the non-payment of a product with incorrect data in SafePay", ()=>{

    cartShop.buttonspeakers().click()
    cartShop.selectSpeaker20().click()
    cartShop.buttonAdd2Cart().click()
    cartShop.clickIconCart().click()
    cartShop.verifyProduct().should('contain','BOSE SOUNDLINK BLUETOOTH SPEAKER III')

    cartShop.checkOutBtn().click()
    cartShop.nextBtn().click()
    cartShop.checkSafePay().click()
    cartShop.inputUsarSafe().type("{selectall}{backspace}"+credentials.name1)
    cartShop.inputPassSafe().type("{selectall}{backspace}"+credentials.pass1)
    cartShop.SafePayBtn().should('be.disabled')
})
})