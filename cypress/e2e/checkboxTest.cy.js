///<reference types ="cypress"/>

describe("Checkbox demo", ()=>{

    it("Click on checkbox", ()=>{

        cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html");

        cy.get("input[value='option-3']").should('be.checked');
        cy.get("input[value='option-1']").should('not.be.checked');
        cy.get("input[value='option-2']").should('not.be.checked');
        cy.get("input[value='option-4']").should('not.be.checked');

        //select checkbox
        cy.get("input[value='option-1']").check().should('be.checked');
        cy.get("input[value='option-3']").uncheck().should('not.be.checked');
    });

    it("Click on multiple checkboxes", ()=>{

        cy.visit("https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html");

        cy.get("input[value='option-3']").should('be.checked');
        cy.get("input[value='option-1']").should('not.be.checked');
        cy.get("input[value='option-2']").should('not.be.checked');
        cy.get("input[value='option-4']").should('not.be.checked');

        //select checkbox
        cy.get("input[type='checkbox']").check(['option-1','option-2','option-3']);
    });
});