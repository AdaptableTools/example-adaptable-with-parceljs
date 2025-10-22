const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const defaults = {
  mode: 'production',
  resolve: {
    extensions: ['.mjs', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.js$/,
        resolve: {
          fullySpecified: false,
        },
        include: [path.resolve(__dirname, 'node_modules/@adaptabletools')],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: false,
          },
        },
      }),
    ],
  },
  performance: {
    maxAssetSize: 1000000, // 1MB in bytes
    maxEntrypointSize: 1000000, // 1MB in bytes
    hints: 'warning', // 'error', 'warning', or false
  },
};

// Rest of your configuration remains the same
module.exports = [
  {
    ...defaults,
    entry: './agGridConfig.js',
    output: {
      path: path.resolve(__dirname, 'minified'),
      filename: 'agGridBundle.umd.js',
      library: {
        name: 'agGrid',
        type: 'umd',
      },
      globalObject: 'this',
      clean: false,
    },
    performance: {
      maxAssetSize: 3000000,
      maxEntrypointSize: 3000000,
      hints: 'warning',
    },
  },
  {
    ...defaults,
    entry: './adaptableConfig.js',
    output: {
      path: path.resolve(__dirname, 'minified'),
      filename: 'adaptableBundle.js',
      library: {
        type: 'umd',
      },
      globalObject: 'this',
      clean: false,
    },
    externals: {
      'ag-grid-enterprise': 'agGrid',
    },
    performance: {
      maxAssetSize: 5000000,
      maxEntrypointSize: 5000000,
      hints: 'warning',
    },
  },
];
