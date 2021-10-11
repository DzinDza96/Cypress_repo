export default class LoginPage {
    get submitButton() {
        return cy.get('button[type="submit"]');
    }

    get loginButton() {
        return cy.get('a[href="/login"]')
    }

    get emailInput() {
        return cy.get('input[id="email"]')
    }

    get passwordInput() {
        return cy.get('input[id="password"]')
    }

    get logoutButton() {
        return cy.get('a[role="button "]')
    }
    get errorMesage() {
        return cy.get('p[class="alert alert-danger"]')
    }

    login(email,password) {
        this.loginButton.click();
        this.emailInput.type(email);
        this.passwordInput.type(password);
        this.submitButton.click();
    }
}

export const loginPage = new LoginPage();