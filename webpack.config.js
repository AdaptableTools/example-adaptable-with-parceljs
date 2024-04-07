const path = require('path');

const defaults = {
  resolve: {
    extensions: ['*', '.mjs', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
    ],
  },
};

module.exports = [
  {
    ...defaults,
    entry: './agGridConfig.js',
    output: {
      path: path.resolve(__dirname, 'minified'),
      filename: 'agGridBundle.umd.js',
      library: ['agGrid'],
      libraryTarget: 'umd',
    },
  },
  {
    ...defaults,
    entry: './adaptableConfig.js',
    output: {
      path: path.resolve(__dirname, 'minified'),
      filename: 'adaptableBundle.js',
      libraryTarget: 'umd',
    },

    externals: [
      {
        '@ag-grid-community/core': 'agGrid',
      },
    ],
  },
];
