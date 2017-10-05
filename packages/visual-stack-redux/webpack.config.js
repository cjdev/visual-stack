/* eslint-disable */
var webpack = require('webpack');
var env = process.env.NODE_ENV;

var config = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      { test: /\.css$/,
        use: 'ignore-loader',
      }
    ]
  },
  output: {
    library: "VisualStackRedux",
    libraryTarget: "umd"
  },
  externals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
      'redux': 'Redux',
      'redux-actions': 'ReduxActions',
      '@cjdev/visual-stack': 'VisualStack'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(env)
    })
  ]
};

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
    })
  );
}

module.exports = config;
