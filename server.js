const { Graphite } = require('@graphite/server')
const { Artist, Image, Album, Track } = require('./server/models')

/* eslint-disable consistent-return */
const server = async() => {
  try {
    const graphite = await Graphite({ models: [Artist, Image, Album, Track], port: 4000 })

    const stop = () => graphite.stop()

    return {
      stop,
    }
  } catch (e) {
    console.error(e.stack) /* eslint-disable-line no-console */
    process.exit(1)
  }
}

module.exports = { server }
