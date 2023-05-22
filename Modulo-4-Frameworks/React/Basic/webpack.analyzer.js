const {merge} = require('webpack-merge');
const production = require('./webpack.prod.js');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

module.exports = merge(production, {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
});