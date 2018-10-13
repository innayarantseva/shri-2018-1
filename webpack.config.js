const PUBLIC_PATH       = require('path').join(__dirname, 'public'),
      CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: PUBLIC_PATH,
    filename: 'main.js'
  },
  devServer: {
    contentBase: PUBLIC_PATH,
    compress: true,
    port: 9000
  },
  plugins: [
    new CopyWebpackPlugin([
      {from:'./src/assets',to:'assets'}
    ])
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {}
      },
    ],
  },
  optimization: { minimize: false }
};