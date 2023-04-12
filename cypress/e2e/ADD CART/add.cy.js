import AddCart from "./add";
const CartShop = new AddCart();

describe("Pruebas del componente add cart", ()=>{
    beforeEach(()=>{
        cy.LogIn()
}) 
it("Validar que todo el proceso de compra de un producto funcione correctamente", ()=>{
    CartShop.buttonspeakers().click()
    CartShop.selectSpeaker20().click()
    CartShop.selectTitle().should('contain', 'SPEAKER')
    CartShop.selectColorGray().click()
    CartShop.buttonAdd2Cart().click()
    CartShop.clickIconCart().click()
    CartShop.verifyProduct().should('contain','BOSE SOUNDLINK BLUETOOTH SPEAKER III')

})
it("Validar que todo el proceso de compra de un producto se pueda modificar la cantidad de productos", ()=>{
    CartShop.buttonspeakers().click()
    CartShop.selectSpeaker20().click()
    CartShop.selectTitle().should('contain', 'SPEAKER')
    CartShop.selectColorGray().click()
    CartShop.selectQuantity().type(3)
    CartShop.buttonAdd2Cart().click()
    CartShop.clickIconCart().click()
    CartShop.verifyProduct().should('contain','BOSE SOUNDLINK BLUETOOTH SPEAKER III')
    CartShop.removeAllProduct()
})

it("Validar que todo el proceso de compra de un producto se pueda modificar la cantidad en el carrito", ()=>{
    CartShop.buttonspeakers().click()
    CartShop.selectSpeaker20().click()
    CartShop.selectTitle().should('contain', 'SPEAKER')
    CartShop.selectColorGray().click()
    CartShop.selectQuantity().type(3)
    CartShop.buttonAdd2Cart().click()
    CartShop.clickIconCart().click()
    CartShop.editCart().click()
    CartShop.decreaseProduct({force: true}).click()
    CartShop.buttonAdd2Cart({force: true}).click()
    CartShop.verifyProduct().should('contain','BOSE SOUNDLINK BLUETOOTH SPEAKER III')
    CartShop.removeAllProduct()
})
it("Validar que al dar click en el botón remove de un producto este se elimine", ()=>{
    CartShop.buttonspeakers().click()
    CartShop.selectSpeaker20().click()
    CartShop.selectTitle().should('contain', 'SPEAKER')
    CartShop.selectColorGray().click()
    CartShop.selectQuantity().type(3)
    CartShop.buttonAdd2Cart().click()
    CartShop.clickIconCart().click()
    CartShop.removeProduct().click()
    CartShop.emptyProduct().should('contain','Your shopping cart is empty')
})
it("Validar que se pueden agregar más de 1 producto al carrito", ()=>{
    CartShop.buttonspeakers().click()
    CartShop.selectSpeaker20().click()
    CartShop.selectColorGray().click()
    CartShop.buttonAdd2Cart().click()

    CartShop.buttonHome().click()
    CartShop.buttonMice().click()
    CartShop.selectMice31().click()
    CartShop.selectQuantity().type(3,{force:true})
    CartShop.buttonAdd2Cart().click({ force: true })
    CartShop.clickIconCart().click()
    CartShop.verifyProduct().should('contain','LOGITECH G502 PROTEUS CORE')

})
it("Validar del pago de producto con datos correctos en SafePay", ()=>{
const credentials = require('../../fixtures/example.json')

    CartShop.buttonspeakers().click()
    CartShop.selectSpeaker20().click()
    CartShop.buttonAdd2Cart().click()
    CartShop.clickIconCart().click()
    CartShop.verifyProduct().should('contain','BOSE SOUNDLINK BLUETOOTH SPEAKER III')

    CartShop.checkOutBtn().click()
    CartShop.nextBtn().click()
    CartShop.checkSafePay().click()
    CartShop.inputUsarSafe().type("{selectall}{backspace}"+credentials.name)
    CartShop.inputPassSafe().type("{selectall}{backspace}"+credentials.pass)
    CartShop.SafePayBtn().click().should('be.enabled')
    CartShop.verifyBuy().should('be.visible')

})
it("Validar la no realización de pago de producto con datos incorrectos en SafePay", ()=>{
const credentials = require('../../fixtures/example.json') 

    CartShop.buttonspeakers().click()
    CartShop.selectSpeaker20().click()
    CartShop.buttonAdd2Cart().click()
    CartShop.clickIconCart().click()
    CartShop.verifyProduct().should('contain','BOSE SOUNDLINK BLUETOOTH SPEAKER III')

    CartShop.checkOutBtn().click()
    CartShop.nextBtn().click()
    CartShop.checkSafePay().click()
    CartShop.inputUsarSafe().type("{selectall}{backspace}"+credentials.name1)
    CartShop.inputPassSafe().type("{selectall}{backspace}"+credentials.pass1)
    CartShop.SafePayBtn().should('be.disabled')
})
it.only("Validar del pago de producto con datos correctos en MasterCredit", ()=>{
    const credentials = require('../../fixtures/example.json')
    
        CartShop.buttonspeakers().click()
        CartShop.selectSpeaker20().click()
        CartShop.buttonAdd2Cart().click()
        CartShop.clickIconCart().click()
        CartShop.verifyProduct().should('contain','BOSE SOUNDLINK BLUETOOTH SPEAKER III')
    
        CartShop.checkOutBtn().click()
        CartShop.nextBtn().click()
        CartShop.Creditbtn().click()
        CartShop.inputCreditCard().type("{selectall}{backspace}"+ credentials.creditcard, {force:true})
        CartShop.inputCvv().type("{selectall}{backspace}"+ credentials.cvv, {force:true})
        CartShop.inputCardHolder().type("{selectall}{backspace}"+ credentials.name, {force:true})
        CartShop.ManualPay().click({force: true})
        CartShop.verifyBuy().should('be.visible')

    })
 it("Validar la no realización de pago de producto con datos incorrectos en MasterCredit", ()=>{
    const credentials = require('../../fixtures/example.json')
    
        CartShop.buttonspeakers().click()
        CartShop.selectSpeaker20().click()
        CartShop.buttonAdd2Cart().click()
        CartShop.clickIconCart().click()
        CartShop.verifyProduct().should('contain','BOSE SOUNDLINK BLUETOOTH SPEAKER III')
    
        CartShop.checkOutBtn().click()
        CartShop.nextBtn().click()
        CartShop.Creditbtn().click()
        CartShop.inputCreditCard().type("{selectall}{backspace}"+credentials.creditfail, {force:true})
        CartShop.inputCvv().type("{selectall}{backspace}"+credentials.cvvfail, {force:true})
        CartShop.inputCardHolder().type("{selectall}{backspace}"+credentials.name, {force:true})
        CartShop.ManualPay().should('be.disabled')
    })   
    
})
