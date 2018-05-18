const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: [
      './app.js'
    ]
  },

  output: {
    path: path.resolve(__dirname, 'build' ),
    filename: 'bundle.js'
  },

  module: {
    rules: [{
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
        ]
      },
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        loader: 'elm-webpack-loader?verbose=true&warn=true',
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ],
    

    noParse: /\.elm$/,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html"
    })
  ]
}