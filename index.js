import { server } from './server'

server()
  .then(server => process.on('SIGINT', () => server.stop()))
  .catch(e => console.log(e))
