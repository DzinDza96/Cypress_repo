import { registerPage } from "../page_objects/registerPage";

describe('registerTest', () => {
    beforeEach('visit link', () => {
        cy.visit('/register')
    })
    it('register with invalid data', () => {
        registerPage.firstNameInput.type('Kornjaca')
        registerPage.lastNameInput.type('Ralf')
        registerPage.emailInput.type('nesto@com')
        registerPage.passwordInput.type('da')
        registerPage.passwordConfirmationInput.type('ne')
        registerPage.submitButton.click()
        registerPage.errorMessage.contains('The email must be a valid email address.').should('be.visible')
        registerPage.errorMessage.contains('The password must be at least 8 characters.').should('be.visible')
        registerPage.errorMessage.contains('The terms and conditions must be accepted.').should('be.visible')

    })
    it('register with valid data', () => {
        registerPage.firstNameInput.type('Kornjaca')
        registerPage.lastNameInput.type('Ralf')
        registerPage.emailInput.type('cowabunga@tmnt.com')
        registerPage.passwordInput.type('test12345')
        registerPage.passwordConfirmationInput.type('test12345')
        registerPage.checkboxInput.check()
        registerPage.submitButton.click()
    })
})