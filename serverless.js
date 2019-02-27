const serverless = require('serverless-http')
const server = require('./server')

// module.exports = serverless(server)

module.exports = (req, res) => {
  const { query } = parse(req.url, true)
  const { name = 'World' } = query
  res.end(`Hello ${name}!`)
}
