const {
  defineConfig
} = require('@vue/cli-service')
module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: true,
  configureWebpack: {
    // 所写的所有的东西和webpack的配置一样
    devServer: {
      open: true,
      port: 8888,
      // 指定域名到本机
      host: 'localhost'
    }
  }
})
