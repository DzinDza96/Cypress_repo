/// <reference types="Cypress" />
const faker = require('faker')

const Locators = require("../fixtures/Locators.json")

describe('Improved login', () => {
    let userData = {
        randomName: faker.name.findName(),
        randomEmail: faker.internet.email(),
        randomPassword: faker.internet.password(),
    }
    let correctEmail = 'tmnt@tmnt.com'
    let correctPassword = 'test12345'
    beforeEach("visit link", () => {
        cy.visit('');
        cy.url().should('contains','https://gallery-app')
    })
    it('login with valid credentials',() => {
        cy.get(Locators.header.loginButton).click();
        cy.get(Locators.loginPage.emailInput).type(correctEmail);
        cy.get(Locators.loginPage.passwordInput).type(correctPassword);
        cy.get(Locators.loginPage.submitButton).click();
        cy.get(Locators.header.logoutButton).should('be.visible');  
    })
    it('Logout',()=>{
        cy.get(Locators.header.loginButton).click();
        cy.get(Locators.loginPage.emailInput).type(correctEmail);
        cy.get(Locators.loginPage.passwordInput).type(correctPassword);
        cy.get(Locators.loginPage.submitButton).click();
        cy.get(Locators.header.logoutButton).should('be.visible');
        cy.get(Locators.header.logoutButton).click();
        cy.get(Locators.header.logoutButton).should('not.exist');
    })
    it('login with invalid data', () => {
        cy.get(Locators.header.loginButton).click();
        cy.get(Locators.loginPage.emailInput).type(userData.randomEmail);
        cy.get(Locators.loginPage.passwordInput).type(userData.randomPassword);
        cy.get(Locators.loginPage.submitButton).click();

    })


})