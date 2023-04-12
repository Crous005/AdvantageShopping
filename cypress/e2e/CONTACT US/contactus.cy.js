import contactUs from "./contact";
const Contact = new contactUs();

describe("Pruebas de sección Contact Us", ()=>{
    beforeEach(()=>{
        cy.LogIn()
})   
it("Validar que al tratar de contactarse con empresa, te genere un mensaje de enviado el mensaje", ()=>{
    Contact.clickSend().should('be.disabled')
    Contact.selectCategory().select("Laptops")
    Contact.selectProduct().select("HP Chromebook 14 G1(ES)")
    Contact.inputEmail().type("cdmpo@gil.com")
    Contact.writeSubject().type("im really interested in the weight and the processor that this version have")
    Contact.clickSend().click().should('be.enabled')
    Contact.messageSent().should('contain','CONTINUE SHOPPING')
})
it("Validar que al tratar de contactarse con empresa con un correo no válido, no permita enviar el mensaje", ()=>{ //revisar, acepta cualquier escrito en el correo
    Contact.clickSend().should('be.disabled')
    Contact.selectCategory().select("Laptops")
    Contact.selectProduct().select("HP Chromebook 14 G1(ES)")
    Contact.inputEmail().type("cdmpogilcom")
    Contact.writeSubject().type("im really interested in the weight and the processor that this version have")
    Contact.clickSend().click().should('be.enabled')
    Contact.invalidCenter().should('contain','Invalid e-mail address.')
}) 
})
