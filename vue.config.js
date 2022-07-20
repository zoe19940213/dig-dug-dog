const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ?
    '/dig-dug-dog/' : '/',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import '~@/assets/styles/variables.scss';`
      }
    }
  }
})