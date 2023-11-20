import { defineConfig } from 'cypress'
import vitePreprocessor from 'cypress-vite'

export default defineConfig({
  viewportWidth: 1280,
  viewportHeight: 768,

  retries: {
    runMode: 2,
    openMode: 0,
  },

  e2e: {
    baseUrl: 'http://localhost:4567',
    chromeWebSecurity: false,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    setupNodeEvents(on) {
      on('file:preprocessor', vitePreprocessor())
    },
  },

  video: false,
})
