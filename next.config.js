const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')
const withFonts = require('next-fonts')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants')

const env = process.env.NODE_ENV

const nextConfig = {
  target: env === 'production' ? 'serverless' : 'server',
}

module.exports = withPlugins([
  [
    withSass,
    {
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]',
      },
    }, [PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD],
  ],
  [
    withCSS,
    {
      cssModules: true,
      cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]',
      },
    }, [PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD],
  ],
  [
    withImages,
    {
      inlineImageLimit: 0,
    }, [PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD],
  ],
  [
    withFonts,
    {},
    [PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD],
  ],
], nextConfig)
