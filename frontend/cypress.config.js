const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // Set your frontend URL here
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
  },
}); // cypress.config.js
