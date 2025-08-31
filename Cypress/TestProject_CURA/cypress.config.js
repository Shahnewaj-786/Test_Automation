const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter', // for report generate collect from mocha awsome report
  watchForFileChanges: false, //use watch for file change to turn of auto run on cypress
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on); // for report generate collect from mocha awsome report
      config.specPattern=[
        'cypress/e2e/login.cy.js', // will follow page serial which will given here
        'cypress/e2e/makeAppoinment.cy.js',
      ]
      return config; //for run multiple pages at a time
    },
  },
});
