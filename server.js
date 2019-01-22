import next from 'next'
import { Graphite } from '@graphite/server'

import { Artist, Image, Album, Track } from './server/models'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const main = async () => {
  try {
    await app.prepare()
    const { app: graphQLServer } = await Graphite({ models: [Artist, Image, Album, Track] })

    graphQLServer.get('/', async (req, res) => {
      const actualPage = '/index'
      app.render(req, res, actualPage)
    })

    graphQLServer.get('/about', async (req, res) => {
      const actualPage = '/about'
      app.render(req, res, actualPage)
    })

    graphQLServer.get('/commands', async (req, res) => {
      const actualPage = '/commands'
      app.render(req, res, actualPage)
    })

    graphQLServer.get('*', (req, res) => {
      return handle(req, res)
    })
  } catch(e) {
    /* eslint-disable no-console */
    console.error(e.stack)
    /* eslint-enable no-console */
    process.exit(1)
  }
}

main()
