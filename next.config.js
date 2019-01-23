const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === 'development'
    ? {}
    : !process.env.NOW_REGION
    ? require('next/constants')
    : require('next-server/constants')

const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withFonts = require('next-fonts')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')

const nextConfig = {}

module.exports = (phase, {defaultConfig}) => {
  return withPlugins([
    withFonts,
    [
      withSass,
      {
        cssModules: true,
        cssLoaderOptions: {
          importLoaders: 1,
          localIdentName: '[local]'
        }
      }
    ],

    [
      withImages,
      {
        inlineImageLimit: 0
      }
    ],
  ], nextConfig)(phase, { defaultConfig })
}
