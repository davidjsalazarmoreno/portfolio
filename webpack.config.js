var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
  entry: [
    path.resolve( __dirname, 'src/portfolio/Bootstrap.tsx' )
  ],
  output: {
    filename: 'app.js',
    path: path.resolve( __dirname, 'docs/' )
  },

  devServer: {
    // hot: true, 
    inline: true, 
    contentBase:  path.resolve( __dirname, 'docs/' ),
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
          'ts-loader' 
        ]
      },
      {
        test: /\.css?$/,
        use: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'raw-loader' })
      },
      { 
        test: /\.scss$/, 
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