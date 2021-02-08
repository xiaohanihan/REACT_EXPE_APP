/**
 * 设置反向代理的文件
 */
const {
  createProxyMiddleware
} = require('http-proxy-middleware');

module.exports = function (app) {
  app.use('/api', createProxyMiddleware({
    target: 'http://localhost:4000',
    changeOrigin: true,
    pathRewrite: {
      '/api': ''
    }
  }));

  // app.use('/', createProxyMiddleware({
  //   target: 'http://localhost:4000',
  //   changeOrigin: true,
  //   // pathRewrite: {
  //   //   '/api': ''
  //   // }
  // }));

};