var CopyWebpackPlugin = require('copy-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    path = require('path');



module.exports = {
  entry: {
    javascript: './src/portfolio/Bootstrap.tsx',
    html: './src/views/index.html'
  },
  output: {
    filename: 'app.js',
    path: __dirname + '/dist'
  },

  // https://github.com/kevlened/copy-webpack-plugin/issues/44
  devServer: {
    outputPath: __dirname + '/dist'
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },

  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader?configFileName=tsconfig.json' },
      {
        test: /\.css?$/,
        loader: ExtractTextPlugin.extract('style', 'raw')
      },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass?includePaths[]') },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      }
    ]
  },

  plugins: [
    new CopyWebpackPlugin([
      { 
        from: path.resolve( __dirname, 'src/assets' ),
        to: path.resolve( __dirname, 'dist/assets' ) 
      }
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
  },
};