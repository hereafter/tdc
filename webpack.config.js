// eslint-disable-next-line no-undef
module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    libraryTarget: 'umd',
    filename: 'index.js',
    // eslint-disable-next-line no-undef
    path: __dirname  + '/dist',
  },
};