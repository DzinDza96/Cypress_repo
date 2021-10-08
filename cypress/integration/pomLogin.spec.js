/// <reference types="Cypress" />
const faker = require('faker')

import {loginPage} from './../page_objects/loginPage';

describe('POM login', () => {
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
        loginPage.login(correctEmail, correctPassword);
        loginPage.logoutButton.should('be.visible')

    })
    it('Logout',() => {
        loginPage.login(correctEmail, correctPassword);
        loginPage.logoutButton.should('be.visible')
        loginPage.logoutButton.click();
        loginPage.logoutButton.should('not.exist')
    })
    it('login with invalid data', () => {
        loginPage.login(userData.randomEmail, userData.randomPassword);
    })


})