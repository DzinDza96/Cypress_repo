

describe('login test', () => {
    it('visit gallery page', () => {
        cy.visit("")
    })
    it ('click login button', ()=>{
        cy.get('a[href="/login"]').click();
    })
    


    it("login without email", () => {
        cy.get('input[id="email"]').clear();
        cy.get('input[id="password"]').clear().type("test12345");
        cy.get('button[type="submit"]').click();
    })
    it("login without password", () => {
        cy.get('input[id="email"]').clear().type("tmnt@tmnt.com");
        cy.get('input[id="password"]').clear();
        cy.get('button[type="submit"]').click();
    })
    it("email not containing @", () => {
        cy.get('input[id="email"]').clear().type("tmnttmnt.com");
        cy.get('input[id="password"]').clear().type("test12345");
        cy.get('button[type="submit"]').click();
    })
    it("one carracter password", () => {
        cy.get('input[id="email"]').clear().type("tmnt@tmnt.com");
        cy.get('input[id="password"]').clear().type("c");
        cy.get('button[type="submit"]').click();
    })
    it("email without dot", () => {
        cy.get('input[id="email"]').clear().type("tmnt@tmntcom");
        cy.get('input[id="password"]').clear().type("test12345");
        cy.get('button[type="submit"]').click();
    })
    it("non existing user", () => {
        cy.get('input[id="email"]').clear().type("test987654321@test.com");
        cy.get('input[id="password"]').clear().type("test12345");
        cy.get('button[type="submit"]').click();
    })








    it("login with valid data", () => {
        cy.get('input[id="email"]').clear().type("tmnt@tmnt.com");
        cy.get('input[id="password"]').clear().type("test12345");
        cy.get('button[type="submit"]').click();
    })
    it("logout test",() => {
        cy.wait(2000);
        cy.get('a[role="button "]').click();
    })
})