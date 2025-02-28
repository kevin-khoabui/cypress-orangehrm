const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {   // Configuration for the End-to-End (E2E) tests
    baseUrl: "https://opensource-demo.orangehrmlive.com/",
    // This sets the base URL so test case just do cy.visit("/") instead of cy.visit("https://opensource-demo.orangehrmlive.com/")

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    specPattern:"cypress/e2e/**/*.cy.js",
    env:{
      validUsername: "Admin",
      validPassword: "admin123",
      invalidUsername: "Admin123",
      invalidPassword: "admin234"
    },

    defaultCommandTimeout: 10000, // Increase timeout to 10 seconds

    // This sets the path for the test cases 
  },
});
