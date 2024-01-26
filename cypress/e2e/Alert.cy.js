///<reference types ="cypress"/>

describe("Alert Popups", ()=>{

    it("Handle Alert popups", ()=>{

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#name").type("Rakesh");
        cy.get('#alertbtn').click();
        cy.on('window:alert',(alertText)=>{
            expect(alertText).to.equal("Hello Rakesh, share this practice page and share your knowledge");
        }); 
    });

    it("Handle Confirm Alert popups", ()=>{

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
        cy.get("#name").type("Rakesh");
        cy.get('#confirmbtn').click();
        cy.on('window:confirm',(alertText)=>{
            expect(alertText).to.equal("Hello Rakesh, Are you sure you want to confirm?");
        }); 
    });
});    