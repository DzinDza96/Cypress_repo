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
    
    beforeEach(() => {
        cy.visit('/login');
        loginPage.login(myEmail, myPassword);
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
        createGallery.createGalleryButton.click();
        createGallery.create("d", myDescription, imageURL);
    })
    it("Create Gallery / unnsuported image format(Gif)", () => {
        createGallery.createGalleryButton.click();
        createGallery.create(myTitle, myDescription, "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5eeea355389655.59822ff824b72.gif");
    })
    it("Create Gallery / valid credentials", () => {
        createGallery.createGalleryButton.click();
        createGallery.create(myTitle, myDescription, imageURL);
        cy.get('a.box-title').contains(myTitle).should('be.visible');
    })
    it("Buttons_pagination", () => {
        navigation.myGalleriesBtn.should('be.visible');
        navigation.createGalleryBtn.should('be.visible');
        navigation.logoutBtn.should('be.visible');
        navigation.searchInput.should('be.visible');
        navigation.filterBtn.should('be.visible');
        navigation.paginationDiv.children().should('have.length',10)
        navigation.loadMoreBtn.should('be.visible');
        navigation.loadMoreBtn.click();
        navigation.paginationDiv.children().should('have.length',20)

    })

})