const path = require('path')
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry:  './src/index.js',
    output: {
        path:       path.join(__dirname, 'dist'),
        filename:   "bundle.js"
    },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
             loader: 'babel-loader', options: { presets: ['@babel/react'] } 
          },
          {
            test: /\.css$/,
            use: ["style-loader", "css-loader"]
          }
        ]
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: "./src/index.html"
        })
      ]
}