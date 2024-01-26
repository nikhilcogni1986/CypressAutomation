///<reference types ="cypress"/>

describe("Handling buttons", ()=>{

    it("Handle Visible and Invsible buttons", ()=>{

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        //verify textbox is displayed
        cy.get("#displayed-text").should('be.visible');

        //click on Hide button
        cy.get("#hide-textbox").click();
        cy.get("#displayed-text").should('not.be.visible');
    });
});    