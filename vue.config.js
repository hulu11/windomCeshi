const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 基本路径
  publicPath: '/',
  // 输出文件目录
  outputDir: 'dist',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: 'static',
  // webpack-dev-server 相关配置
  devServer: {
    port: 8080,
    // proxy: "", // 设置代理
  },
})
