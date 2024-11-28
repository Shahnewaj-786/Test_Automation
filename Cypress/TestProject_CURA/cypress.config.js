const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false, //use watch for file change to turn of auto run on cypress
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
