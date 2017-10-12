const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    main: './src/js/main.js', 
    page2: './src/js/page2.js'
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].[hash].js'
  },
  devtool: 'sourcemap',
  plugins: [
    new HtmlWebpackPlugin({
      chunks: ['common', 'page2'],
      filename: 'page2.html',
      template: './src/page2.html'
    }),
    new HtmlWebpackPlugin({
      chunks: ['common', 'main'],
      filename: 'index.html',
      template: './src/index.html'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "common",
      // (the commons chunk name)
    
      // (the filename of the commons chunk)
    
      // minChunks: 3,
      // (Modules must be shared between 3 entries)
    
      // chunks: ["pageA", "pageB"],
      // (Only use these entries)
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            "presets": [
              ["env", {
                "targets": {
                  "browsers": ["Chrome >= 61", "IE >= 11"]
                }
              }]
            ]
          }
        }
      }
    ]
  }
};