export default class RegisterPage {
    get firstNameInput(){
        return cy.get('input[id="first-name"]');
    }
    get lastNameInput(){
        return cy.get('input[id="last-name"]');
    }
    get emailInput(){
        return cy.get('input[id="email"]');
    }
    get passwordInput(){
        return cy.get('input[id="password"]');
    }
    get passwordConfirmationInput(){
        return cy.get('input[id="password-confirmation"]');
    }
    get checkboxInput(){
        return cy.get('input[type="checkbox"]');
    }
    get submitButton(){
        return cy.get('button[type="submit"]');
    }
    get errorMessage(){
        return cy.get('.alert')
    }

}

export const registerPage = new RegisterPage();
