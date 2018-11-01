const path = require('path'),
      PUBLIC_PATH       = path.join(__dirname, 'public'),
      CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: ['./src/index.ts'],
    camera: ['./src/camera.ts']
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
  resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json']
  },
  module: {
      rules: [{
          // Include ts, tsx, js, and jsx files.
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          loader: ['awesome-typescript-loader'],
      }],
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /node_modules/,
  //       loader: "eslint-loader"
  //     },
  //   ],
  // },
  optimization: { minimize: false }
};