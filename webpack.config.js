let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: './src/app/app.js',
    output: {
       path: path.resolve(__dirname, 'lib'),
        filename: '[name].js',
    },
    optimization: {
    splitChunks: {
      chunks: 'all',
      name:"vendor"
    }},

    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        },
        { test: /\.html$/, loader: "html" },
        { test: /\.css$/, loader: "style!css" }
      ]
    },
 module: {
  rules: [{
    test: /\.html$/,  
    use: [ {
      loader: 'html-loader'
    }],
  },{
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      }]
},

    devtool: "#inline-source-map",
    devServer : {
    contentBase: './lib',
    stats: 'minimal',
    host: '0.0.0.0'
  },
      plugins: [ 
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/app/index.html',
      filename: 'index.html'
    })
  ]
}