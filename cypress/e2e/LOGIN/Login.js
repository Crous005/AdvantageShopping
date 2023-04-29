class log{
    elements = {
        userIcon : () => cy.get("#hrefUserIcon"),
        signOut : () => cy.get('.option.roboto-medium.ng-scope[translate="Sign_out"]'),
        userN : () =>cy.get('input[name="username"]'),
        passW : () =>cy.get('input[name="password"]'),
        signIn : () =>cy.get('#sign_in_btnundefined'),
        userLink : () =>cy.get('#menuUserLink'),
        passF : () =>cy.get('a[class="forgot-Passwowd ng-scope"]'),
        body : () =>cy.get('body')
    }
    buttonUser(){
        return this.elements.userIcon();
    }
    selectSignOut(){
        return this.elements.signOut();
    }
    selectUserBox(){
    return this.elements.userN();
    }
    selectPassBox(){
        return this.elements.passW();
    }
    buttonSingIn(){
        return this.elements.signIn();
    }
    verifyUser(){
        return this.elements.userLink();
    }
    passwordForget(){
        return this.elements.passF();
    }   
    getBody(){
        return this.elements.body();
    }  
}
export default log;