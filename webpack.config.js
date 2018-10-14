const path = require('path'),
      PUBLIC_PATH       = path.join(__dirname, 'public'),
      CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: ['./src/index.js'],
    camera: ['./src/camera.js']
  },
  // entry: './src/index.js',
  output: {
    path: PUBLIC_PATH,
    filename: '[name].js'
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
        loader: "eslint-loader"
      },
    ],
  },
  optimization: { minimize: false }
};