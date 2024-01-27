const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout:6000,
    specPattern: 'cypress/e2e/*.js',
    // retries:{
    //   runMode:1,
    //   openMode:1
    // },
  },
});
