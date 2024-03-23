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
      "reportDir": "reports",
      "quiet": true,
      "overwrite": true,
      "html": true,
      "json": true
    }
  }
});
