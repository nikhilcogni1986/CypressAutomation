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

        cy.get("ul.nav.navbar-nav li a").contains("MP3 Players").click();
        cy.get("ul.nav.navbar-nav li a").contains("Show All MP3 Players").click();
        cy.get("#content h2").should('be.visible');

        let productName = "iPod Classic";

        //Add product to the cart
        cy.addProductToCart(productName);

        //Click on checkout
        cy.get("#cart button span").click();

        //verify the product name
        cy.get("ul.dropdown-menu.pull-right li tbody tr td:nth-child(2) a").then((productInCart)=>{
            expect(productInCart.text()).to.be.equal(productName);
        })

        //click on view cart
        cy.get("ul.dropdown-menu.pull-right li").contains("View Cart").click();

        //validate the checkout url
        cy.url().should('include','?route=checkout/cart');
        cy.get("div.pull-right").contains("Checkout").click();
        
        cy.get(':nth-child(1) > label > input').should('be.checked');
        cy.get("input[value='new']").check();
       
        //Fill the Billing details
        cy.get("#input-payment-firstname").type("Rakesh");
        cy.get("#input-payment-lastname").type("Hegade");
        cy.get("#input-payment-address-1").type("65 Motor Street");
        cy.get("#input-payment-city").type("Bangalore");
        cy.get("#input-payment-postcode").type("560016");
        cy.get("#input-payment-country").select("India");
        cy.get("#input-payment-zone").select("Karnataka");
        cy.get("#button-payment-address").click();

        //Click on Continue to Shipping details
        cy.get("#button-shipping-address").click();

        //Add comments and proceed to payment details
        cy.get("textarea[name='comment']").type("Comments");
        cy.get("#button-shipping-method").click();

        //Click on Agree to terms and conditions and confirm the order
        cy.get("input[name='agree']").check();
        cy.get('#button-payment-method').click();
        cy.get("#button-confirm").click();

        //Validate order success message
        cy.get("div[id='content'] h1").should('be.visible');
    });
});       