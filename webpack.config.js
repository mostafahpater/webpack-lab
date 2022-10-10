const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  "mode":'development' , 
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin(
    {
        template:"./template.html",
        inject:'body'
    }
  ),  new HtmlWebpackPlugin({
    filename: 'example.html',
    template: 'src/example.html',
    inject:"body"
  })],
  devServer: {     
    compress: true,
    port: 9000,
  },
};