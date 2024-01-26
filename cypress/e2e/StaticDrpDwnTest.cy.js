///<reference types="cypress"/>

describe("Static Dropdown", ()=>{

    it('Select a value from the drop down', ()=>{

        cy.visit("https://webdriveruniversity.com/");
        cy.get("#dropdown-checkboxes-radiobuttons").invoke('removeAttr','target').click();

        cy.get("select#dropdowm-menu-1").select("java").should('have.value',"java");
        cy.get("select#dropdowm-menu-2").select("eclipse").should('have.value','eclipse');

        cy.get('#fruit-selects').select("apple").should('have.value','apple');
    });
})