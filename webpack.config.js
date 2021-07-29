const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './lib/index.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'donut-chart.js',
    library: 'DonutChart',
    libraryTarget: 'umd',
    libraryExport: 'default',
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  corejs: { version: 3, proposals: true },
                  useBuiltIns: 'usage',
                  shippedProposals: true,
                  targets: {
                    browsers: ['>= 1%, not dead'],
                  },
                },
              ],
            ],
          },
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(scss|sass|css)$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(ico|png|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(ttf|otf|svg)$/i,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.json', '.css', '.scss', 'sass'],
  },
};
