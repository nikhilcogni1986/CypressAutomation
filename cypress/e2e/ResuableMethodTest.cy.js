///<reference types ="cypress"/>

describe('Add Product to the cart', ()=>{

    it("Add product to the cart", ()=>{

        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=common/home");
        cy.get("span.hidden-xs.hidden-sm.hidden-md").contains("My Account").click({force:true});
        
        cy.get("ul.dropdown-menu.dropdown-menu-right").find("li").contains("Login").click();
        cy.url().should('contain','route=account/login');
        cy.get('div.well h2').contains('New Customer').should('be.visible');
        
        cy.get("#input-email").type("nikhilrao@test.com");
        cy.get("#input-password").type("Password1234");
        cy.get("input[value='Login']").click();

        cy.get("ul.nav.navbar-nav li a").contains("Phones & PDAs").click();
        cy.get("#content h2").should('be.visible');

        //Add product to the cart
        cy.addProductToCart("iPhone");
        let productName = "iPhone";
        cy.get("div.alert.alert-success").then((popmsg)=>{
            cy.log(popmsg.text());
            expect(popmsg.text()).to.include("Success: You have added");
        })

        //Click on checkout
        cy.get("#cart button span").click();

        //verify the product name
        cy.get("ul.dropdown-menu.pull-right li tbody tr td:nth-child(2) a").then((productName)=>{

            expect(productName.text()).to.be.equal("iPhone");
        })
        //click on view cart
        cy.get("ul.dropdown-menu.pull-right li").contains("View Cart").click();

        //validate the checkout url
        cy.url().should('include','?route=checkout/cart');
        cy.get("div.pull-right").contains("Checkout").click();
    });
});       