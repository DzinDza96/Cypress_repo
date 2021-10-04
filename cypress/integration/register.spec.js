describe("visit site", () => {
    it("visit site", () => {
        cy.visit("")
    })
    it("get register",() => {
        cy.get('a[href="/register"]').click();
    })
    // it("first name",() => {
    //     cy.get('input[id=first-name]').type("SHredder");
    //     cy.get('input[id=last-name]').type("splinteric");
    //     cy.get('input[id=email]').clear().type("tmnt3@tmnt.com");
    //     cy.get('input[id=password]').type("test12345");
    //     cy.get('input[id=password-confirmation]').type("test12345");
    //     cy.get('input[type="checkbox"]').check();
    // })
    it("register",() => {
        cy.get('input[id=first-name]').clear().type("sreder");
       
        cy.get('input[id=email]').clear().clear().type("tmnt3@tmnt.com");
        cy.get('input[id=password]').clear().type("test12345");
        cy.get('input[id=password-confirmation]').clear().type("test12345");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    })
  
    it("register",() => {
        cy.get('input[id=first-name]').clear().type("sreder");
        cy.get('input[id=last-name]').type("splinteric");
        cy.get('input[id=email]').clear().clear().type("tmnt3@tmnt.com");
        cy.get('input[id=password]').clear().type("test12345");
        cy.get('input[id=password-confirmation]').clear().type("test12345");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    })

    it("register",() => {
        cy.get('input[id=first-name]').clear().type("sreder");
        cy.get('input[id=last-name]').type("splinteric");
        cy.get('input[id=email]').clear().clear().type("");
        cy.get('input[id=password]').clear().type("test12345");
        cy.get('input[id=password-confirmation]').clear().type("test12345");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    })

    it("register",() => {
        cy.get('input[id=first-name]').clear().type("sreder");
        cy.get('input[id=last-name]').type("splinteric");
        cy.get('input[id=email]').clear().clear().type("tmnt3tmnt.com");
        cy.get('input[id=password]').clear().type("test12345");
        cy.get('input[id=password-confirmation]').clear().type("test12345");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    })

    it("register",() => {
        cy.get('input[id=first-name]').clear().type("sreder");
        cy.get('input[id=last-name]').type("splinteric");
        cy.get('input[id=email]').clear().clear().type("tmnt3@tmnt.com");
        cy.get('input[id=password]').clear().type("test12345");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    })

    it("register",() => {
        cy.get('input[id=first-name]').clear().type("sreder");
        cy.get('input[id=last-name]').type("splinteric");
        cy.get('input[id=email]').clear().clear().type("tmnt3@tmnt.com");
        cy.get('input[id=password-confirmation]').clear().type("test12345");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    })


})
