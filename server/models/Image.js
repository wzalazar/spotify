const { GraphQL } = require('@graphite/server')

const Image = GraphQL('Image')({
  height: ['Int'],
  width: ['Int'],
  url: ['String'],
})

module.exports = { Image }
