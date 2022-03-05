const { merge } = require('webpack-merge');

const base = require('./webpack.base');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    host: 'localhost',
    port: 9000,
    hot: true,
    open: true,
    compress: true,
  },
});
