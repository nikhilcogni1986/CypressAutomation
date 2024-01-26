///<reference types ="cypress"/>

describe("Handle Child Tabs", ()=>{

    it("Open Child Tab in same window", ()=>{

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("a#opentab").invoke('removeAttr','target').click();
        
        cy.origin('https://www.qaclickacademy.com', () => 
        {
            cy.url().then(($url) => 
            {
                if($url.includes("qaclickacademy.com")) 
                {
                    cy.log("Yes")
                } 
                else
                {
                    cy.log("No")
                }
            })
            cy.get("#navbarSupportedContent li a[href*='about']").should('be.visible');
        })
    });
});    