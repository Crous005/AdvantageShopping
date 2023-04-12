class AddCart{
    elements = {
        speakersProduct : () => cy.get("#speakersTxt"),
        speaker20 : () => cy.get("#20"),
        speakerTitle : () => cy.get("#Description >.roboto-regular"),
        colorGraySpeaker: () => cy.get('span[title="GRAY"]'),
        add2Cart: () =>cy.get('button[name="save_to_cart"]'),
        iconCart: () =>cy.get('#menuCart'),
        verProduct: () =>cy.get('label[class="roboto-regular productName ng-binding"]'),
        quantityProduct: () =>cy.get('input[name="quantity"]', {force:true}),
        edtCart: () =>cy.get('a[class="edit ng-scope"]'),
        lessProduct: () =>cy.get('div[class="minus"]'),
        eliminateProduct: () =>cy.get('a[class="remove red ng-scope"]'),
        noProduct: () =>cy.get('label[class="roboto-bold ng-scope"]'),
        backHome: ()=>cy.get('span[class="logoDemo roboto-light ng-binding"]'),
        miceProduct: () => cy.get("#miceTxt"),
        mice31 : () => cy.get("#31"),
        removeAll : () => cy.removeAll(),

        checkbtn:()=>cy.get('#checkOutButton'),
        next:()=>cy.get('#next_btn'),
        safePay:()=>cy.get('input[name="safepay"]'),
        usarSafe:()=>cy.get('input[name="safepay_username"]'),
        passSafe:()=>cy.get('input[name="safepay_password"]'),
        cardFail:()=>cy.get('label[data-ng-click="labelClicked()"]').contains("Invalid card number"),
        btnSafe:()=>cy.get('#pay_now_btn_SAFEPAY'),
        spanBuy:()=>cy.get('span[translate="Thank_you_for_buying_with_Advantage"]'),
        checkCD:()=>cy.get('input[name="masterCredit"]'),
        creditCard:()=>cy.get("#creditCard"),
        cvvNumber:()=>cy.get('input[name="cvv_number"]'),
        cardHolder:()=>cy.get('input[name="cardholder_name"]'),
        btnManual:()=>cy.get('#pay_now_btn_ManualPayment'),
    }
    buttonspeakers(){
        return this.elements.speakersProduct();
    }
    selectSpeaker20(){
        return this.elements.speaker20();
    }
    selectTitle(){
    return this.elements.speakerTitle();
    }
    selectColorGray(){
        return this.elements.colorGraySpeaker();
    }
    buttonAdd2Cart(){
        return this.elements.add2Cart();
    }
    clickIconCart(){
        return this.elements.iconCart();
    }
    verifyProduct(){
        return this.elements.verProduct();
    }
    selectQuantity(){
        return this.elements.quantityProduct();
    }
    editCart(){
        return this.elements.edtCart();
    }
    decreaseProduct(){
        return this.elements.lessProduct();
    }
    removeProduct(){
        return this.elements.eliminateProduct();
    }
    emptyProduct(){
        return this.elements.noProduct();
    }
    buttonHome(){
        return this.elements.backHome();
    }
    buttonMice(){
        return this.elements.miceProduct();
    }
    selectMice31(){
        return this.elements.mice31();
    }
    removeAllProduct(){
        return this.elements.removeAll();
    }
    checkOutBtn(){
        return this.elements.checkbtn();
    }
    nextBtn(){
        return this.elements.next();
    }
    checkSafePay(){
        return this.elements.safePay();
    }
    inputUsarSafe(){
        return this.elements.usarSafe();
    }
    inputPassSafe(){
        return this.elements.passSafe();
    }
    spanCardFailSave(){
        return this.elements.cardFail();
    }
    SafePayBtn(){
        return this.elements.btnSafe();
    }
    verifyBuy(){
        return this.elements.spanBuy();
    }
    Creditbtn(){
        return this.elements.checkCD();
    }
    inputCreditCard(){
        return this.elements.creditCard();
    }
    inputCvv(){
        return this.elements.cvvNumber();
    }
    inputCardHolder(){
        return this.elements.cardHolder();
    }
    ManualPay(){
        return this.elements.btnManual();
    }
}
export default AddCart;