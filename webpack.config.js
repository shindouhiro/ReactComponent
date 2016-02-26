module.exports = {
  entry: './component.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
            loaders: [
            { test: /\.css$/,  loader: 'style!css!sass'},
            { test: /\.js$/, exclude: /node_module/, loader: 'react-hot!babel' },
            { test:/\.(png|woff|svg|ttf|eot|woff2)$/,loader:'url-loader'}
              ]
          }           
}
