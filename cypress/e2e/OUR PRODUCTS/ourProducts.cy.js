import productPO from "./ourproductPO";
const OurProduct = new productPO();

describe("Pruebas de la sección our product", ()=>{
   beforeEach(()=>{
    cy.LogIn()
})
it("Verify that upon selecting a product, the correct elements are displayed", ()=>{
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
it("Verify that the product filter accurately discriminates products based on user selection", ()=>{
    OurProduct.buttonspeakers().click()
    OurProduct.selectAccordionWeight().click()
    OurProduct.selectWeight().click()
    OurProduct.selectSpeaker21().click()
    OurProduct.VerifyWeight().should('contain','1.26 lb')
})
it.only("Verify that the selected item's color matches the one that has been chosen", ()=>{
    OurProduct.buttonspeakers().click()
    OurProduct.selectSpeaker25().click()
    OurProduct.selectColorRed().click({force: true})
    OurProduct.verifyimage().click().should('have.attr', 'ng-src', '/catalog/fetchImage?image_id=4702');
})
})