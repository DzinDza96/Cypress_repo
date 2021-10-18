/// <reference types="Cypress"/>
const faker = require('faker');
import { vScrum } from "../page_objects/vScrum_Register"
import { credentials } from "../fixtures/user_data.json"
let randomUserData = {
    email: faker.internet.email(),
    password: faker.internet.password()
}

describe("Register page", () => {
    beforeEach('Visit base url', () => {
        randomUserData.email = faker.internet.email()
        cy.intercept('GET', 'https://cypress-api.vivifyscrum-stage.com/api/v2/pricing-plans/1'
        ).as('register')
        cy.visit('https://cypress-api.vivifyscrum-stage.com/pricing')
        vScrum.freeSingUpBtn.click({force: true});
        cy.wait('@register').then((interception) => {
            expect(interception.response.statusCode).eq(200)
            vScrum.header1.should('be.visible')
        })
    })

    it('Regster/all empty fields', () => {
        vScrum.submitBtn.click()
        vScrum.errorMessage.should('have.text', 'The email field must be a valid email')
    })

    it('Register/empty email address field', () => {
        vScrum.register('a', randomUserData.password, credentials.numberOfUsers)
        vScrum.emailInput.clear()
        vScrum.submitBtn.click()
        vScrum.errorMessage.should('have.text', 'The email field must be a valid email')
    })

    it('Register/email address missing "@"', () => {
        vScrum.register('cowabungatmnt.com', randomUserData.password, credentials.numberOfUsers)
        vScrum.submitBtn.click()
        vScrum.errorMessage.should('have.text', 'The email field must be a valid email')
    })

    it('Register/email address missing provider', () => {
        vScrum.register('cowabunga@', randomUserData.password, credentials.numberOfUsers)
        vScrum.submitBtn.click()
        vScrum.errorMessage.should('have.text', 'The email field must be a valid email')
    })

    it('Register/email address without dot', () => {
        vScrum.register('cowabunga@gmailcom', randomUserData.password, credentials.numberOfUsers)
        vScrum.submitBtn.click()
        vScrum.errorMessage.should('have.text', 'The email field must be a valid email')
    })
    
    it('Register/empty password field', () => {
        vScrum.register(randomUserData.email, 'a', credentials.numberOfUsers)
        vScrum.passwordInput.clear()
        submitBtn.click()
        vScrum.errorMessage.should('have.text', 'The password field is required')
    })
    
    it('Register/one character password', () => {
        vScrum.register(randomUserData.email, 'a', credentials.numberOfUsers)
        vScrum.submitBtn.click()
        vScrum.errorMessage.should('have.text', 'The password field must be at least 5 characters')
    })

    it.only('Register/number of users 1,5', () => {
        vScrum.register(randomUserData.email, randomUserData.password, '1,5')
        vScrum.submitBtn.click()
        vScrum.errorMessage.should('have.text', 'The number of users field must be an integer')
    })
    
    it('Register/number of users 11', () => {
        vScrum.register(randomUserData.email, randomUserData.password, '11')
        vScrum.submitBtn.click()
    })
    
    it('Register/email already taken', () => {
        vScrum.register('cowabunga@gmail.com', randomUserData.password, credentials.numberOfUsers)
        vScrum.submitBtn.click()
    })
})
