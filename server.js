// import next from 'next'
// import { Graphite } from '@graphite/server'

// import { Artist, Image, Album, Track } from './server/models'

const next = require('next')
const { Graphite } = require('@graphite/server')
const { Artist, Image, Album, Track } = require('./server/models')

/* eslint-disable consistent-return */
const server = async() => {
  const dev = process.env.NODE_ENV !== 'production'
  const app = next({ dev })
  const handle = app.getRequestHandler()

  try {
    await app.prepare()
    const graphite = await Graphite({ models: [Artist, Image, Album, Track], port: 3000 })
    const { app: graphQLServer } = graphite

    graphQLServer.get('/', async(req, res) => {
      const actualPage = '/index'
      app.render(req, res, actualPage)
    })

    graphQLServer.get('/about', async(req, res) => {
      const actualPage = '/about'
      app.render(req, res, actualPage)
    })

    graphQLServer.get('/commands', async(req, res) => {
      const actualPage = '/commands'
      app.render(req, res, actualPage)
    })

    graphQLServer.get('*', (req, res) => {
      return handle(req, res)
    })

    const stop = () => {
      graphite.stop
      if (dev) app.hotReloader.webpackDevMiddleware.close
    }

    return {
      stop,
    }
  } catch (e) {
    console.error(e.stack) /* eslint-disable-line no-console */
    process.exit(1)
  }
}

module.exports = { server }
