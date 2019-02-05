const path = require('path')
module.exports = {

  entry: './development/demo/root.js',
  output: {
    path: path.resolve(__dirname),
    filename: 'bundle.js',
    publicPath: '/'
  },
  mode: 'production',
  performance: {
    hints: false
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules',
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }/* ,
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader'
      } */
    ]
  },
  devServer: {
    contentBase: './development/demo/',
    historyApiFallback: true
  }
}
