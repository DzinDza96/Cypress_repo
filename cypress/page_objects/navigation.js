export default class Navigation {
    get myGalleriesBtn () {
        return cy.get('a[href="/my-galleries"]')
    }
    get createGalleryBtn () {
        return cy.get('a[href="/create"]')
    }
    get logoutBtn () {
        return cy.get('a[role="button "]')
    }
    get searchInput () {
        return cy.get('input[type="text"]')
    }
    get filterBtn () {
        return cy.get('button[type="button"]')
    }
    get paginationDiv () {
        return cy.get('div[class="grid"]')
    }
    get loadMoreBtn () {
        return cy.get('button[class="btn btn-custom"]')
    }
    get firstGalleryDiv () {
        return cy.get('a[class="box-title"]').eq(0)
    }
}

export const navigation = new Navigation();
