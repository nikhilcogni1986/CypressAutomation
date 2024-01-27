///<reference types ="cypress"/>

const { dropRight } = require("cypress/types/lodash");

describe("Drag and Drag Demo", ()=>{

    it("Drag and Drop the element", ()=>
    {
        cy.visit("https://practice-automation.com/slider/");
        cy.get("#slideMe").drag('.target',{
            target:{position:dropRight},
            force:true
        })
    }); 
});