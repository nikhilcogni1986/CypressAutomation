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

    it("Handle JS Alert popups", ()=>{

        cy.visit("https://webdriveruniversity.com/Popup-Alerts/index.html");
        cy.get('#button1 p').click();
        cy.on('window:alert',(alertText)=>{
            expect(alertText).to.equal("I am an alert box!");
        }); 
    });

    it("Handle JS Modal popups", ()=>{

        cy.visit("https://webdriveruniversity.com/Popup-Alerts/index.html");
        cy.get('#button2 p').click();
        cy.get('.modal-footer > .btn').click();
    });

    it("Handle JS Confirm Alert popups", ()=>{

        cy.visit("https://webdriveruniversity.com/Popup-Alerts/index.html");
        cy.get('#button4 p').click();
        cy.on('window:alert',(alertText)=>{
            expect(alertText).to.equal("I am an alert box!");
        }); 
    });

    it.only("Handle AJAX popups", ()=>{

        cy.on('uncaught:exception', (err, runnable) => {
            return false
          })

        cy.visit("https://webdriveruniversity.com/Popup-Alerts/index.html");
        cy.get('#button3 p').click();
        cy.get("#loader").should('be.visible')
        cy.get("#button1").click(); 
    });
});    