/// <reference types="Cypress" />

const Locators = require("../fixtures/Locators.json")
const faker = require('faker')

describe('Improved register', () => {
    let userData = {
        randomName: faker.name.findName(),
        randomLastName: faker.name.lastName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password(),
    }
    let myFirstName = "Splinter"
    let myLastName = "NinjMaus"
    let myEmail = "tmnt@ninja.com"
    let myPassword = "test12345"

    beforeEach('visit link', () => {
        cy.visit('/register');
        cy.url().should('contains','https://gallery-app')
    })
    it('register user with valid credentials', () => {
        cy.get(Locators.registerPage.firstNameInput).type(userData.randomName);
        cy.get(Locators.registerPage.lastNameInput).type(userData.randomLastName);
        cy.get(Locators.loginPage.emailInput).type(userData.randomEmail);
        cy.get(Locators.loginPage.passwordInput).type(userData.randomPassword);
        cy.get(Locators.registerPage.confirmPasswordInput).type(userData.randomPassword);
        cy.get(Locators.registerPage.checkBox).check();
        cy.get(Locators.loginPage.submitButton).click();
        cy.get(Locators.header.logoutButton).should('be.visible');
    })

})