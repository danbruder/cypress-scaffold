const { defineConfig } = require("cypress");

module.exports = defineConfig({
    port: 3333,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
