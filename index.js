import { server } from './server'

server()
  .then(() => process.on('SIGINT', () => process.exit(0))
  .catch(e => console.log(e))
