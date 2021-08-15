//require('dotenv').config

module.exports = {
    serverRuntimeConfig: {
      // Will only be available on the server side
        SECRET: process.env.SECRET,
      
    },
    publicRuntimeConfig: {
        processEnv: process.env,
        },
  }
