describe('login test', () => {
    it('visit gallery page', () => {
        cy.visit("")
    })
    it ('click login button', ()=> {
        cy.get('a[href="/login"]').click();
    })
    it("login with valid data", () => {
        cy.get('input[id="email"]').type("tmnt@tmnt.com");
        cy.get('input[id="password"]').type("test12345");
        cy.get('button[type="submit"]').click();
    })
    it("logout test",() => {
        cy.wait(2000);
        cy.get('a[role="button "]').click();
    })
})