const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withFonts = require('next-fonts')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')

module.exports = withPlugins([
  withFonts,
  withSass,
  withCSS,
  withImages
])
