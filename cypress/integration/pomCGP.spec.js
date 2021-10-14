/// <reference types="Cypress"/>
const faker = require ("faker")
import { loginPage } from "../page_objects/loginPage"
import { createGallery } from "../page_objects/createGalleryPage"
import { navigation } from "../page_objects/navigation"

describe("createGallery", () => {
    let myEmail = "tmnt@tmnt.com"
    let myPassword = "test12345"
    let myTitle = faker.name.title();
    let myDescription = "Cowabunga"
    let imageURL = "https://static.wikia.nocookie.net/tmnt/images/3/34/Cowabunga.jpg"
    
    beforeEach('log into the app', () => {
        cy.loginViaBackend(Cypress.env('validEmailAddress'), Cypress.env('validPassword'));
        cy.visit('/create')
    })
    it("Create Gallery / all emty fields", () => {
        createGallery.createGalleryButton.click();
        createGallery.submitBtn.click();
    })
    it("Create Gallery / invalid image format", () => {
        createGallery.createGalleryButton.click();
        createGallery.create(myTitle, myDescription, "img.org");
    })
    it("Create Gallery / one character title", () => {
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/galleries'
        ).as('errorMessage')
        createGallery.createGalleryButton.click();
        createGallery.create("d", myDescription, imageURL);
        cy.wait('@errorMessage').then((interception) => {
            expect(interception.response.body.errors.title[0]).eq('The title must be at least 2 characters.')
        })
    })
    it("Create Gallery / unnsuported image format(Gif)", () => {
        createGallery.createGalleryButton.click();
        createGallery.create(myTitle, myDescription, "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif");
    })
    it.only("Create Gallery / valid credentials", () => {
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/galleries'
        ).as('createGaleriju')
        createGallery.createGalleryButton.click();
        cy.CreateGViaBackend(Cypress.env('validTitle'), Cypress.env('validDescription'), Cypress.env("validImageUrl"));
        cy.wait('@createGaleriju').then((interception) => {
            expect(interception.response.statusCode).eq(201)
            expect(interception.response.body.title).eq(Cypress.env("validTitle"))
            expect(interception.response.body.description).eq(Cypress.env("validDescription"))
        })
    })
    it("Buttons_pagination", () => {
        cy.visit('');
        navigation.paginationDiv.children().should('have.length',10)
        navigation.loadMoreBtn.should('be.visible');
        navigation.loadMoreBtn.click();
        navigation.paginationDiv.children().should('have.length',20)
    })
})
