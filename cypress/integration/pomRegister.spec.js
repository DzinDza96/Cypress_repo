import { registerPage } from "../page_objects/registerPage";
const faker = require('faker');
let randomUserData = {
    firstNameR: faker.name.findName(),
    lastNameR: faker.name.lastName(),
    emailR: faker.internet.email(),
    passwordR: faker.internet.password(),
} 

describe('registerTest', () => {
    beforeEach('visit link', () => {
        cy.visit('/register')
    })
    it('register with invalid data', () => {
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/register'
        ).as('errorM')
        registerPage.firstNameInput.type('Kornjaca')
        registerPage.lastNameInput.type('Ralf')
        registerPage.emailInput.type('nesto@com')
        registerPage.passwordInput.type('da')
        registerPage.passwordConfirmationInput.type('ne')
        registerPage.submitButton.click()
        cy.wait('@errorM').then((interception) => {
            expect(interception.response.body.message).eq("The given data was invalid.")
        })
        registerPage.errorMessage.contains('The email must be a valid email address.').should('be.visible')
        registerPage.errorMessage.contains('The password must be at least 8 characters.').should('be.visible')
        registerPage.errorMessage.contains('The terms and conditions must be accepted.').should('be.visible')

    })
    it('register with valid data', () => {
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/register'
        ).as('validReg')
        registerPage.firstNameInput.type(randomUserData.firstNameR)
        registerPage.lastNameInput.type(randomUserData.lastNameR)
        registerPage.emailInput.type(randomUserData.emailR)
        registerPage.passwordInput.type(randomUserData.passwordR)
        registerPage.passwordConfirmationInput.type(randomUserData.passwordR)
        registerPage.checkboxInput.check()
        registerPage.submitButton.click()
        cy.wait('@validReg').then((interception) => {
            expect(interception.response.statusCode).eq(200)
            expect(interception.response.body.token_type).eq("bearer")
        })
    })
})
