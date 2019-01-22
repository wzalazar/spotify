import { GraphQL } from '@graphite/server'

export const Image = GraphQL('Image')({
  height: ['Int'],
  width: ['Int'],
  url: ['String'],
})
