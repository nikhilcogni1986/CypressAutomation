///<reference types ="cypress"/>

describe("Accordion Demo", ()=>{

    it("Handle Accordion elements", ()=>
    {
        cy.visit("https://webdriveruniversity.com/Accordion/index.html");
        cy.get("#manual-testing-accordion").click();
        cy.get("#manual-testing-description p").then((accordionText)=>
        {
           expect(accordionText.text()).contains("automation testing");
        })
    }); 
});