const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const basePath = __dirname;

module.exports = {
  context: path.join(basePath, "src"),
  resolve: {
    extensions: ['.js', '.tsx', '.ts','.jsx'],
  },
  entry: {
    app: ['./index.tsx','./index.scss'],
  },
  output:{
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: "/",
  },
  module:{
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|jpg)$/,
        type: 'asset/resource',
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: './index.html',
      scriptLoading: 'blocking',
      hash: true
    }),
  ]
}

