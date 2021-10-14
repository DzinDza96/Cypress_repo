/// <reference types="Cypress"/>

import { createGallery } from "../page_objects/createGalleryPage";
import { navigation } from "../page_objects/navigation";

describe("deleteGallery", () => {    
    let myTitle = "dilitovana galerija";
    let myDescription = "Cowabunga"
    let imageURL = "https://static.wikia.nocookie.net/tmnt/images/3/34/Cowabunga.jpg"

    beforeEach('log into the app and create gallery', () => {
        cy.loginViaBackend(Cypress.env('validEmailAddress'), Cypress.env('validPassword'));
        cy.visit('/create')
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/galleries'
        ).as('errorMessage')
        createGallery.create(myTitle, myDescription, imageURL);
        cy.wait('@errorMessage').its(response.body.id)//?
    })    
    it('deleteG', () => {
        navigation.firstGalleryDiv.click();
        cy.deleteGviabackend()
    })
    
})
