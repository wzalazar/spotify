const path = require('path')

/* eslint-disable no-nested-ternary */
const { PHASE_PRODUCTION_SERVER } =
  process.env.NODE_ENV === 'development'
    ? {}
    : !process.env.NOW_REGION
      ? require('next/constants')
      : require('next-server/constants')

const nextConfig = {
  webpack: config => {
    config.resolve.alias = {
      Components: path.resolve(__dirname, 'Components'),
    }

    return config
  },
}

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    // Config used to run in production.
    return {}
  }

  const withPlugins = require('next-compose-plugins')
  const withImages = require('next-images')
  const withFonts = require('next-fonts')
  const withSass = require('@zeit/next-sass')
  const withCSS = require('@zeit/next-css')

  return withPlugins(
    [
      [
        withSass,
        {
          cssModules: true,
          cssLoaderOptions: {
            importLoaders: 1,
            localIdentName: '[local]',
          },
        },
      ],

      [
        withCSS,
        {
          cssModules: true,
          cssLoaderOptions: {
            importLoaders: 1,
            localIdentName: '[local]',
          },
        },
      ],

      [
        withImages,
        {
          inlineImageLimit: 0,
        },
      ],
      withFonts,
    ],
    nextConfig
  )(phase, { defaultConfig })
}
