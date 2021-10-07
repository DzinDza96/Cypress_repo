describe("visit site", () => {
    it("visit site", () => {
        cy.visit("")
    })
    it("get register",() => {
        cy.get('a[href="/register"]').click();
    })
    
    it("register not containing first name",() => {
        cy.get('input[id=last-name]').clear().type("splinteric");
        cy.get('input[id=email]').clear().type("tmnt3@tmnt.com");
        cy.get('input[id=password]').clear().type("test12345");
        cy.get('input[id=password-confirmation]').clear().type("test12345");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    })
            
    it("firt name with special characters",() => {
        cy.get('input[id=first-name]').clear().type("~_>");
        cy.get('input[id=last-name]').clear().type("splinteric");
        cy.get('input[id=email]').clear().type("tmnt5@tmnt.com");
        cy.get('input[id=password]').clear().type("test12345");
        cy.get('input[id=password-confirmation]').clear().type("test12345");
        cy.get('input[type="checkbox"]').check();
    })
  
    it("register not containing last name",() => {
        cy.get('input[id=first-name]').clear().type("sreder");
        cy.get('input[id=last-name]').clear();
        cy.get('input[id=email]').clear().type("tmnt3@tmnt.com");
        cy.get('input[id=password]').clear().type("test12345");
        cy.get('input[id=password-confirmation]').clear().type("test12345");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    })

    it("last name with special characters",() => {
        cy.get('input[id=first-name]').clear().type("SHredder");
        cy.get('input[id=last-name]').clear().type("$+%");
        cy.get('input[id=email]').clear().type("tmnt5@tmnt.com");
        cy.get('input[id=password]').clear().type("test12345");
        cy.get('input[id=password-confirmation]').clear().type("test12345");
        cy.get('input[type="checkbox"]').check();
    })

    it("empty email input field ",() => {
        cy.get('input[id=first-name]').clear().type("sreder");
        cy.get('input[id=last-name]').clear().type("splinteric");
        cy.get('input[id=email]').clear();
        cy.get('input[id=password]').clear().type("test12345");
        cy.get('input[id=password-confirmation]').clear().type("test12345");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    })

    it("email without @",() => {
        cy.get('input[id=first-name]').clear().type("sreder");
        cy.get('input[id=last-name]').clear().type("splinteric");
        cy.get('input[id=email]').clear().type("tmnt3tmnt.com");
        cy.get('input[id=password]').clear().type("test12345");
        cy.get('input[id=password-confirmation]').clear().type("test12345");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    })

    it("email without dot",() => {
        cy.get('input[id=first-name]').clear().type("sreder");
        cy.get('input[id=last-name]').clear().type("splinteric");
        cy.get('input[id=email]').clear().type("tmnt3@tmntcom");
        cy.get('input[id=password]').clear().type("test12345");
        cy.get('input[type="checkbox"]').check();
        cy.get('button[type="submit"]').click();
    })

    it("one carracter after @",() => {
        cy.get('input[id=first-name]').clear().type("SHredder");
        cy.get('input[id=last-name]').clear().type("splinteric");
        cy.get('input[id=email]').clear().type("tmnt3@g");
        cy.get('input[id=password]').clear().type("test12345");
        cy.get('input[id=password-confirmation]').clear().type("test12345");
        cy.get('input[type="checkbox"]').check();
    })
            
    it("no content before @",() => {
        cy.get('input[id=first-name]').clear().type("SHredder");
        cy.get('input[id=last-name]').clear().type("splinteric");
        cy.get('input[id=email]').clear().type("@tmnt.com");
        cy.get('input[id=password]').clear().type("test12345");
        cy.get('input[id=password-confirmation]').clear().type("test12345");
        cy.get('input[type="checkbox"]').check();
    })
            
    it("email input field containing only @gmail",() => {
        cy.get('input[id=first-name]').clear().type("SHredder");
        cy.get('input[id=last-name]').clear().type("splinteric");
        cy.get('input[id=email]').clear().type("@gmail");
        cy.get('input[id=password]').clear().type("test12345");
        cy.get('input[id=password-confirmation]').clear().type("test12345");
        cy.get('input[type="checkbox"]').check();
    })

    it("email with special characters",() => {
        cy.get('input[id=first-name]').clear().type("SHredder");
        cy.get('input[id=last-name]').clear().type("splinteric");
        cy.get('input[id=email]').clear().type("@!%@^.com");
        cy.get('input[id=password]').clear().type("test12345");
        cy.get('input[id=password-confirmation]').clear().type("test12345");
        cy.get('input[type="checkbox"]').check();
    })
            
    it("spaces before and after email",() => {
        cy.get('input[id=first-name]').clear().type("SHredder");
        cy.get('input[id=last-name]').clear().type("splinteric");
        cy.get('input[id=email]').clear().type("     tmnt5@tmnt.com     ");
        cy.get('input[id=password]').clear().type("test12345");
        cy.get('input[id=password-confirmation]').clear().type("test12345");
        cy.get('input[type="checkbox"]').check();
    })

    it("empty password fields",() => {
        cy.get('input[id=first-name]').clear().type("SHredder");
        cy.get('input[id=last-name]').clear().type("splinteric");
        cy.get('input[id=email]').clear().type("tmnt3@tmnt.com");
        cy.get('input[id=password]').clear();
        cy.get('input[id=password-confirmation]').clear();
        cy.get('input[type="checkbox"]').check();
    })
    
    it("one carracter password",() => {
        cy.get('input[id=first-name]').clear().type("SHredder");
        cy.get('input[id=last-name]').clear().type("splinteric");
        cy.get('input[id=email]').clear().type("tmnt3@tmnt.com");
        cy.get('input[id=password]').clear().type("s");
        cy.get('input[id=password-confirmation]').clear().type("s");
        cy.get('input[type="checkbox"]').check();
    })
        
    it("password containing only letters",() => {
        cy.get('input[id=first-name]').clear().type("SHredder");
        cy.get('input[id=last-name]').clear().type("splinteric");
        cy.get('input[id=email]').clear().type("tmnt4@tmnt.com");
        cy.get('input[id=password]').clear().type("testttttttttt");
        cy.get('input[id=password-confirmation]').clear().type("testttttttttt");
        cy.get('input[type="checkbox"]').check();
    })
            
    it("password containing only numbers",() => {
        cy.get('input[id=first-name]').clear().type("SHredder");
        cy.get('input[id=last-name]').clear().type("splinteric");
        cy.get('input[id=email]').clear().type("tmnt5@tmnt.com");
        cy.get('input[id=password]').clear().type("123456789");
        cy.get('input[id=password-confirmation]').clear().type("123456789");
        cy.get('input[type="checkbox"]').check();
    })
        
    it("spaces before and after password",() => {
        cy.get('input[id=first-name]').clear().type("SHredder");
        cy.get('input[id=last-name]').clear().type("splinteric");
        cy.get('input[id=email]').clear().type("     tmnt5@tmnt.com     ");
        cy.get('input[id=password]').clear().type("test12345");
        cy.get('input[id=password-confirmation]').clear().type("     test12345     ");
        cy.get('input[type="checkbox"]').check();
    })

    it("password with only special characters",() => {
        cy.get('input[id=first-name]').clear().type("SHredder");
        cy.get('input[id=last-name]').clear().type("splinteric");
        cy.get('input[id=email]').clear().type("tmnt5@tmnt.com");
        cy.get('input[id=password]').clear().type("!@#$%^&*");
        cy.get('input[id=password-confirmation]').clear().type("!@#$%^&*");
        cy.get('input[type="checkbox"]').check();
    })
        
    it("confirm password without data",() => {
        cy.get('input[id=first-name]').clear().type("SHredder");
        cy.get('input[id=last-name]').clear().type("splinteric");
        cy.get('input[id=email]').clear().type("tmnt5@tmnt.com");
        cy.get('input[id=password]').clear().type("test12345");
        cy.get('input[id=password-confirmation]').clear();
        cy.get('input[type="checkbox"]').check();
    })
            
    it("confirm password with diffirent password",() => {
        cy.get('input[id=first-name]').clear().type("SHredder");
        cy.get('input[id=last-name]').clear().type("splinteric");
        cy.get('input[id=email]').clear().type("tmnt5@tmnt.com");
        cy.get('input[id=password]').clear().type("test12345");
        cy.get('input[id=password-confirmation]').clear().type("12345test");
        cy.get('input[type="checkbox"]').check();
    })
            
    it("all valid data entered",() => {
        cy.get('input[id=first-name]').clear().type("SHredder");
        cy.get('input[id=last-name]').clear().type("splinteric");
        cy.get('input[id=email]').clear().type("tmnt6@tmnt.com");
        cy.get('input[id=password]').clear().type("test12345");
        cy.get('input[id=password-confirmation]').clear().type("test12345");
        cy.get('input[type="checkbox"]').check();
    })

})
