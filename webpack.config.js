var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: { filename: 'dist/bundle.js' },
  plugins: [
    new webpack.ProvidePlugin({
      PIXI: 'pixi.js',
    })
  ]
};
