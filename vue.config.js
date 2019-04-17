module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? '' : '/', // 资源路径
  // outputDir: '', // 生产环境构建文件目录
  // assetsDir: '', // 静态资源路径，相对于outputDir
  // target: 'http://10.0.0.162:8080',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://10.0.0.155:8080',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/util.scss";
        `
      }
    }
  },
  configureWebpack: {
    devtool: 'source-map'
  },
}
