export default class CreateGallery {
    get createGalleryButton() {
        return cy.get('a[href="/create"]')
    }

    get titleInput() {
        return cy.get('input[id="title"]')
    }

    get descriptionInput() {
        return cy.get('input[id="description"]')
    }

    get imageURLInput() {
        return cy.get('input[type="url"]')
    }

    get submitBtn() {
        return cy.get('button').contains("Submit")
    }

    create(title,description,imageURL) {
        this.titleInput.type(title);
        this.descriptionInput.type(description);
        this.imageURLInput.type(imageURL);
        this.submitBtn.click();
    }
}

export const createGallery = new CreateGallery();