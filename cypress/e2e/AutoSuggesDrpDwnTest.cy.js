///<reference types="cypress"/>

describe("Auto Suggestive Dropdown", ()=>{

    it('Select a value from the drop down', ()=>{

        cy.visit("https://webdriveruniversity.com/");
        cy.get("#autocomplete-textfield").invoke('removeAttr','target').click();

        cy.get("h2[name='contactme']").should('be.visible');

        cy.get("#myInput").type("Ca");
        cy.get("div[id='myInputautocomplete-list'] div").each(($el, index, $list)=>
        {
            let text = $el.text();
            if(text.includes("Carrots"))
            {
                cy.wrap($el).click();
            }
            cy.log(text);
        });       
    });

    it('Select a value from the drop down options', ()=>{

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

        cy.get("#autocomplete").type("Ind");
        cy.get("li.ui-menu-item div").each(($el, index, $list)=>
        {
            let text = $el.text();
            if(text === "India")
            {
                cy.wrap($el).click();
            }
            cy.log(text);
        });       
        cy.get('#autocomplete').should('have.value',"India");
    });
})