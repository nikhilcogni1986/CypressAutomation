///<reference types ="cypress"/>

describe('Login to Application', ()=>{

    it("Login with valid credentials", ()=>{

        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=common/home");
        cy.get("span.hidden-xs.hidden-sm.hidden-md").contains("My Account").click({force:true});
        
        cy.get("ul.dropdown-menu.dropdown-menu-right").find("li").contains("Login").click();
        cy.url().should('contain','route=account/login');
        cy.get('div.well h2').contains('New Customer').should('be.visible');
        
        cy.get("#input-email").type("nikhilrao@test.com");
        cy.get("#input-password").type("Password1234");
        cy.get("input[value='Login']").click();

        cy.get("a.list-group-item").contains("Logout").click();
        cy.url().should('contain','route=account/logout');
        cy.get("#content h1").then((logoutHeader)=>{
            let logout_txt = logoutHeader.text();
            expect(logout_txt).to.contain('Account Logout');
        });
    });
})