// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import "cypress-slow-down/commands"

// Força um pequeno atraso entre cada comando Cypress
Cypress.on('command:start', (command) => {
  return new Promise((resolve) => {
    setTimeout(resolve, 600) // 600ms de atraso entre cada comando
  })
})



// Alternatively you can use CommonJS syntax:
// require('./commands')