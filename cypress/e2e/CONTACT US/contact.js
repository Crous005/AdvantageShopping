class contactUs{
    elements = {
        buttonSend : () => cy.get('#send_btnundefined'),
        boxCategory : () => cy.get("select[name='categoryListboxContactUs']"),
        boxProducts : () => cy.get('select[name="productListboxContactUs"]'),
        boxEmail: () => cy.get('input[name="emailContactUs"]'),
        textSubject: () =>cy.get('textarea[name="subjectTextareaContactUs"]'),
        message: () =>cy.get('a[class="a-button ng-binding"]'),
        errorMessage: () =>cy.get('label[class=" invalid center"]'),
    }
    clickSend(){
        return this.elements.buttonSend();
    }
    selectCategory(){
        return this.elements.boxCategory();
    }
    selectProduct(){
        return this.elements.boxProducts();
    }
    inputEmail(){
        return this.elements.boxEmail();
    }
    writeSubject(){
        return this.elements.textSubject();
    }
    messageSent(){
        return this.elements.message();
    }
    invalidCenter(){
        return this.elements.errorMessage();
    }
}

export default contactUs;