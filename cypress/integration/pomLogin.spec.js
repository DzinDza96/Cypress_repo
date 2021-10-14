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

    it.only('login with valid credentials',() => {
        cy.intercept(
            "POST",
            "https://gallery-api.vivifyideas.com/api/auth/login",
        ).as("validLogin");

        loginPage.login(correctEmail, correctPassword);
        cy.wait('@validLogin').then((interception) => {
            cy.log(JSON.stringify(interception.response))
            expect(interception.response.statusCode).eq(200)
        })
        
        loginPage.logoutButton.should('be.visible')

    })

    it('Logout',() => {
        cy.intercept(
            "POST",
            "https://gallery-api.vivifyideas.com/api/auth/login",
        ).as("logout");

        loginPage.login(correctEmail, correctPassword);
        loginPage.logoutButton.should('be.visible')
        loginPage.logoutButton.click();
        loginPage.logoutButton.should('not.exist')

        cy.wait('@logout').then((interception) => {

            expect(interception.response.body.message).eq('Successfully logged out')
            expect(interception.response.statusCode).eq(200)
        })
    })
    
    it('login with invalid data', () => {
        loginPage.login(userData.randomEmail, userData.randomPassword);
        loginPage.errorMesage.should('be.visible')
        loginPage.errorMesage.should('have.css', 'background-color', 'rgb(248, 215, 218)')
        loginPage.errorMesage.should('have.text', 'Bad Credentials')
    })

})
