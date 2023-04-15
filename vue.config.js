const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  configureWebpack: {
    output: {
      libraryTarget: 'system',
    }
  },
  transpileDependencies: true,
  publicPath: '/mc-news-ui/dist',
  filenameHashing: false
})
