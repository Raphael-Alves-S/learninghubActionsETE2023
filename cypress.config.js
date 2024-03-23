const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://serverest.dev',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },    
  },
  "reporter": "cypress-multi-reporters",
  "reporterOptions": {
    "reporterEnabled": "mochawesome",
    "mochawesomeReporterOptions": {
      "reportDir": "test/cypress/reports/mocha",
      "quiet": true,
      "overwrite": false,
      "html": false,
      "json": true
    }
  }
});
