const {merge} = require('webpack-merge');
const production = require('./webpack.production.js');
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer');

module.exports = merge(production, {
  plugins: [
    new BundleAnalyzerPlugin()
  ]
});