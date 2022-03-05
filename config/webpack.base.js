const path = require('path');
const dotenv = require('dotenv');

const HtmlWebpackPlugin = require('html-webpack-plugin');

dotenv.config();

const getPath = (...p) => path.resolve(process.cwd(), ...p);
const STATIC_PATH = process.env.STATIC_PATH || '/';

const HtmlWebpackPluginWithConfig = new HtmlWebpackPlugin({
  template: getPath('config', 'html-template.ejs'),
  filename: 'index.html',
  inject: 'body',
  minify: false,
  templateParameters: {
    publicPath: STATIC_PATH,
  },
});

module.exports = {
  entry: getPath('src', 'index.tsx'),
  output: {
    filename: 'main.js',
    publicPath: STATIC_PATH,
    path: getPath('static'),
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.(m?js|jsx|tsx|ts)$/,
        include: getPath('src'),
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
    ],
  },

  plugins: [HtmlWebpackPluginWithConfig],
};
