const { GraphQL } = require('@graphite/server')

export const Image = GraphQL('Image')({
  height: ['Int'],
  width: ['Int'],
  url: ['String'],
})
