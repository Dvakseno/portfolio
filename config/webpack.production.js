const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const base = require('./webpack.base');

module.exports = merge(base, {
  mode: 'production',
  output: {
    publicPath: `${process.env.STATIC_PATH}static`,
  },
  plugins: [new CleanWebpackPlugin()],
});
