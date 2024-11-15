const path = require('path');

module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    clean: true,
    publicPath: '/build/'
  },
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env'], 
              ['@babel/preset-react']
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    static: [
      {
        directory: path.join(__dirname, './'),
        publicPath: '/'
      },
      {
        directory: path.join(__dirname, './client/assets'),
        publicPath: '/assets/'
      },
    ],
    proxy: {
      '/user': 'http://localhost:3000',
      '/appointment': 'http://localhost:3000'
    }
  }
};