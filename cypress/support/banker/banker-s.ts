import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";

Given(/^I am on the bank app$/, () => {
	cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
});

When(/^I click on the bank login button$/, () => {
    cy.fixture('selectors').then(sel=>{
        cy.clickElement(sel.mangerLogin)
    })
});

When(/^I click on add customer button$/, () => {
    cy.fixture('selectors').then(sel=>{
        cy.clickElement(sel.addCustomeBtn)
    })
});

When(/^I type in the first name$/, () => {
	cy.fixture('selectors').then(sel=>{
        cy.typeAtext(sel.fNameField,sel.fName)
    })
});

When(/^I type in the last name$/, () => {
	cy.fixture('selectors').then(sel=>{
        cy.typeAtext(sel.lNameField,sel.lName)
    })
});

When(/^I type in the post code$/, () => {
	cy.fixture('selectors').then(sel=>{
        cy.typeAtext(sel.pCodeField,sel.postCd)
    })
});

Then(/^I click on create customer button and see alert$/, () => {
	cy.fixture('selectors').then(sel=>{
        cy.clickElement(sel.CreateBtn)
    })
    cy.on('window:alert', message => {     
        // expect(['Customer added successfully with customer id :6', 'Account created successfully with account Number :1016'])
        //     .to.contains(message)
        //expect(message).to.equal('Customer added successfully with customer id :6')
       // expect(message).to.include('Customer added successfully')
        expect(message).to.contains('Customer added successfully')
    })
});




