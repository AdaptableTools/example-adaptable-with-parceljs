const path = require('path');

module.exports = [
  {
    entry: './agGridConfig.js',
    output: {
      path: path.resolve(__dirname, 'minified'),
      filename: 'agGridBundle.umd.js',
      library: ['agGrid'],
      libraryTarget: 'umd',
    },
  },
  {
    entry: './adaptableConfig.js',
    output: {
      path: path.resolve(__dirname, 'minified'),
      filename: 'adaptableBundle.js',
    },
    externals: [
      {
        '@ag-grid-community/core': 'agGrid',
      },
    ],
  },
];
