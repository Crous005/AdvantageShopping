import ProductPO from "./ourproductPO";
const OurProduct = new ProductPO();

describe("Pruebas de la sección our product", ()=>{
   beforeEach(()=>{
    cy.LogIn()
})
it("Verificar que al ingresar al producto de su elección, entre de manera correcta y muestre estos elementos", ()=>{
    OurProduct.buttonspeakers().click()
    OurProduct.selectSpeaker20().click()
    OurProduct.selectTitle().should('contain', 'SPEAKER')
    OurProduct.goBack()
    OurProduct.selectSpeaker25().click()
    OurProduct.selectTitle().should('contain', 'SPEAKER')
    OurProduct.goBack()
    OurProduct.selectSpeaker23().click()
    OurProduct.selectTitle().should('contain', 'SPEAKER')
}) 
it.only("Verificar que el filtro de pesos distribuya los productos", ()=>{
    OurProduct.buttonspeakers().click()
    OurProduct.selectAccordionWeight().click()
    OurProduct.selectWeight().click()
    OurProduct.selectSpeaker21().click()
    OurProduct.VerifyWeight().should('contain','1.26 lb')
})
})