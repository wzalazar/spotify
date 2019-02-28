const { server } = require('./server')

server()
  .then(() => process.on('SIGINT', () => process.exit(0)))
  .catch(e => console.log(e)) /* eslint-disable-line no-console */
