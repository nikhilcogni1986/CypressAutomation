///<reference types="cypress"/>

describe('Launch the browser',()=>{
    it('Open the Sample Web App', ()=>{
        cy.visit("https://naveenautomationlabs.com/opencart/index.php?route=common/home");
        
        cy.title().then((expectedTitle)=>{
             cy.log(expectedTitle)   
        })
        
        cy.get("span.hidden-xs.hidden-sm.hidden-md").contains("My Account").click({force:true});
        cy.get("ul.dropdown-menu.dropdown-menu-right").find("li").should('have.length',2);
        
        cy.get("ul.dropdown-menu.dropdown-menu-right").find("li").contains("Login").click();
        cy.url().should('contain','route=account/login');
        cy.get('div.well h2').contains('New Customer').should('be.visible');
        cy.get('div.well h2').contains('Returning Customer').should('be.visible');
    })
})
