const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions))
  );
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 1400,
  viewportHeight: 1660,
  defaultCommandTimeout: 10000,
  taskTimeout: 10000,
  pageLoadTimeout: 80000,

  env: {
    url: "https://www.demoblaze.com/index.html",
  },
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/integration/BDD/*.feature",
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 1,
  },
});
