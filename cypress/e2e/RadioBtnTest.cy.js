///<reference types ="cypress"/>

describe("Checkbox demo", ()=>{

    it("Click on checkbox", ()=>{

        cy.visit("http://www.webdriveruniversity.com/");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr','target').click();

        //select radio button
        cy.get("input[value='green']").check().should('be.checked');
        cy.get("input[value='blue']").check().should('be.checked');
    });

    it("Click on first checkbox", ()=>{

        cy.visit("http://www.webdriveruniversity.com/");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr','target').click();

        //select radio button
        cy.get("input[type='radio']").first().check().should('be.checked');
        cy.get("input[type='radio']").last().check().should('be.checked');
    });
});    