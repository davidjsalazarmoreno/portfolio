var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
  //  'webpack-dev-server/client?http://0.0.0.0:8000', // WebpackDevServer host and port
  //  'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    path.resolve( __dirname, 'src/portfolio/Bootstrap.tsx' )
  ],
  // node: {
  //   fs: "empty"
  // },
  output: {
    filename: 'app.js',
    path: path.resolve( __dirname, 'docs/' )
  },

  // https://github.com/kevlened/copy-webpack-plugin/issues/44
  devServer: {
    outputPath: path.resolve( __dirname, 'docs/' )
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },

  module: {
    rules: [
      { 
        test: /\.tsx?$/, 
        use: [ 
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              plugins: ['react-hot-loader/babel'],
            },
          },
          'ts-loader' 
        ]
      },
      {
        test: /\.css?$/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'raw-loader' })
      },
      { 
        test: /\.scss$/, 
        // https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/265q
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.html$/,
        use: 'file-loader?name=[name].[ext]',
      }
    ]
  },

  plugins: [
    new CopyWebpackPlugin([
      { 
        from: path.resolve( __dirname, 'src/assets' ),
        to: path.resolve( __dirname, 'docs/assets' ) 
      },
      { 
        from: path.resolve( __dirname, 'src/views/index.html' ),
        to: path.resolve( __dirname, 'docs/index.html' ) 
      },
      { 
        from: path.resolve( __dirname, 'humans.txt' ),
        to: path.resolve( __dirname, 'docs/humans.txt' ) 
      },
    ]),
    new ExtractTextPlugin( 'styles.css' )
  ],

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    'react': 'React',
    'react-dom': 'ReactDOM'
  }
};