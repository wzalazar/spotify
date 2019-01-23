const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withFonts = require('next-fonts')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const withSourceMaps = require('@zeit/next-source-maps')

module.exports = withPlugins([
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
    withCSS,
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
  withFonts,
  withSourceMaps,
])
