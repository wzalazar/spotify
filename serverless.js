const serverless = require('serverless-http')
const server = require('./server')

module.exports = serverless(server)
