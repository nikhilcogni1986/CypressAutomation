///<reference types="cypress"/>

describe("Demo on fixtures", ()=>{

    before(()=>
    {
        cy.fixture('example').then((data)=>{
            globalThis.userData = data;
        })
    })

    it("Fill the contact us form", ()=>{

        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get("input[name='first_name']").type("Rakesh");
        cy.get("input[name='last_name']").type("Srivatsav");
        cy.get("input[name='email']").type("Rakesh.srivatsav@test.com");    
        cy.get("textarea[name='message']").type("COMMENT");    
        cy.get("input[value='SUBMIT']").click();
        cy.get('h1').should('be.visible');
    });

    it("Fill the contact us form", ()=>{

        cy.visit("https://webdriveruniversity.com/Contact-Us/contactus.html");
        cy.get("input[name='first_name']").type(globalThis.userData.firstname);
        cy.get("input[name='last_name']").type(globalThis.userData.lastname);
        cy.get("input[name='email']").type(globalThis.userData.email);    
        cy.get("textarea[name='message']").type(globalThis.userData.comments);    
        cy.get("input[value='SUBMIT']").click();
        cy.get('h1').should('be.visible');
    });

})