// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('addProductToCart', (productName) => 
{
    cy.get("div.product-thumb div.caption h4 a").each(($el,index,$list) =>{
        let productName = $el.text();
        cy.log(productName);
        if(productName === "iPhone")
        {
            cy.get("div.product-thumb div.button-group span").eq(index).click({force:true});
            return;
        }
    })
})
    
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })