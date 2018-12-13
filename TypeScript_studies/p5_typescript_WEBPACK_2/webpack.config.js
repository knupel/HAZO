const path = require('path');

module.exports = {
  	  entry: {
    test: './src/test.ts',
    shapes: './src/shapes.ts',
    morph: './src/morph.ts',
  },

  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
};
