const { defineConfig } = require("cypress");
const { configurePlugin } = require('cypress-mongodb')

module.exports = defineConfig({
  defaultCommandTimeout: 5000, 
  env: {    
    mongodb: {
      uri: 'mongodb+srv://bookApi:bookApi@book-api.cutod.mongodb.net/?retryWrites=true&w=majority&appName=book-api',
      database: 'test',
      collection: 'books'
    }
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      configurePlugin(on);
    },
    baseUrl:'http://localhost:5000',
    watchForFileChanges: false,
  },
});
