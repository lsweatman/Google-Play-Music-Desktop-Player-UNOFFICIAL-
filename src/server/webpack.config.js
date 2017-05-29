/**
 * Created by lukes on 1/21/2017.
 */
const webpack = require('webpack');
const path = require('path');
const BUILD_DIR = path.resolve(__dirname, './build/server/static/js');

module.exports = {
  entry: {
    js: './src/server/app-client.js',
    vendor: ['react'],
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].bundle.js',
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader'],
    }],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true,
    }),
  ],
};
