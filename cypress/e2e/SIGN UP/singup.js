class Sign{

    elements = {
        user : () => cy.get("#hrefUserIcon"),
        create : () => cy.get('a[class="create-new-account ng-scope"]'),
        buttonRegister : () => cy.get('#register_btnundefined'),
        boxUsername: () => cy.get('input[name="usernameRegisterPage"]'),
        boxEmail: () =>cy.get('input[name="emailRegisterPage"]'),
        boxPassword: () =>cy.get('input[name="passwordRegisterPage"]'),
        boxPassver: () =>cy.get('input[name="confirm_passwordRegisterPage"]'),
        boxName: () =>cy.get('input[name="first_nameRegisterPage"]'),
        boxLastname: () =>cy.get('input[name="last_nameRegisterPage"]'),
        boxPhone: () =>cy.get('input[name="phone_numberRegisterPage"]'),
        dropCountry: () =>cy.get('select[name="countryListboxRegisterPage"]'),
        boxCity: () =>cy.get('input[name="cityRegisterPage"]'),
        boxAddress: () => cy.get('input[name="addressRegisterPage"]'),
        boxState: () =>cy.get('input[name="state_/_province_/_regionRegisterPage"]'),
        boxPostal: () =>cy.get('input[name="postal_codeRegisterPage"]'),
        checkAgree: () =>cy.get('input[name="i_agree"]'),
        checkUSer: () =>cy.get('#menuUserLink', {timeout:4000})
    }

    buttonUser(){
        return this.elements.user();
    }
    buttonCreate(){
        return this.elements.create();
    }
    register(){
        return this.elements.buttonRegister();
    }
    inputUsername(){
        return this.elements.boxUsername();
    }
    inputEmail(){
        return this.elements.boxEmail();
    }
    inputPassword(){
        return this.elements.boxPassword();
    }
    inputPassver(){
        return this.elements.boxPassver();
    }
    inputName(){
        return this.elements.boxName();
    }
    inputLastname(){
        return this.elements.boxLastname();
    }
    inputPhone(){
        return this.elements.boxPhone();
    }
    selectCountry(){
        return this.elements.dropCountry();
    }
    inputCity(){
        return this.elements.boxCity();
    }
    inputAddress(){
        return this.elements.boxAddress();
    }
    inputState(){
        return this.elements.boxState();
    }
    inputPostal(){
        return this.elements.boxPostal();
    }
    VerifyAgree(){
        return this.elements.checkAgree();
    }
    VerifyUser(){
        return this.elements.checkUSer();
    }
}
export default Sign;