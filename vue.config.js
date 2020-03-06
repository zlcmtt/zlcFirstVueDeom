module.exports = {
  publicPath: '/demozlc/',
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: '192.168.20.41:80',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
};
