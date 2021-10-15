/// <reference types="Cypress"/>
import { navigation } from "../page_objects/navigation"

describe("deleteGallery", () => {
    it('test create gallery via BE', () => {
        cy.loginViaBackend("cowabunga@tmnt.com", "test12345");
        cy.visit('/create');
        navigation.logoutBtn.should('be.visible');
        cy.createGalleryViaBackend("nindza", "kornjaca", "http://img.jpg").then((responseObject) => {
            let id = responseObject.body.id;
            console.log(id)
            cy.writeFile('galleryId.json', id.toString());
        })
    })

    it('test delete gallery via BE', () => {
        cy.loginViaBackend("cowabunga@tmnt.com", "test12345");
        cy.readFile('./galleryId.json').then((file) => {
            let galleryId = file;
            cy.deleteGalleryViaBackend(galleryId);
        })
    })
})
