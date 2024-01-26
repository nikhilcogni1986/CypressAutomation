///<reference types ="cypress"/>

describe("Mouse Hover demo", ()=>{

    it("Mouse hover", ()=>{
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("div.mouse-hover-content").invoke('show');
        cy.get("div.mouse-hover-content a").should('have.length',2);
        cy.get("div.mouse-hover-content a[href*='top']").click();      
    });

    it("Mouse hover", ()=>{
        cy.visit("https://webdriveruniversity.com/Actions/index.html");
        cy.get("#div-hover .dropdown.hover").invoke('show');
        cy.get("#div-hover div.dropdown.hover a").then((hoverText)=>{
            expect(hoverText.text()).to.be.equal("Link 1");
        });
        cy.get("#div-hover div.dropdown.hover a").invoke('show');
        cy.get("#div-hover div.dropdown.hover a").click({force:true});
    });
});