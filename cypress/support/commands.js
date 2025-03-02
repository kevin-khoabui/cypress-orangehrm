// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-xpath'; //import cypress-xpath to use xpath in our test cases
import LoginPage from './pageObjects/loginpage'; //import LoginPage object to get the locators

// Create loginFunction which we can reuse in our test cases. 
// This will take some arguments like username and password
Cypress.Commands.add('loginFunction',(username,password) =>{
    cy.get(LoginPage.usernameInput).type(username)
    cy.get(LoginPage.passwordInput).type(password)
    cy.get(LoginPage.loginButton).click()
})