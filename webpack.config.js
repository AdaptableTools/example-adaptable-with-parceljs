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
        '@ag-grid-community/client-side-row-model': 'agGrid',
        '@ag-grid-enterprise/side-bar': 'agGrid',
        '@ag-grid-enterprise/column-tool-panel': 'agGrid',
        '@ag-grid-enterprise/filter-tool-panel': 'agGrid',
        '@ag-grid-enterprise/status-bar': 'agGrid',
        '@ag-grid-enterprise/menu': 'agGrid',
        '@ag-grid-enterprise/range-selection': 'agGrid',
        '@ag-grid-enterprise/rich-select': 'agGrid',
        '@ag-grid-enterprise/excel-export': 'agGrid',
        '@ag-grid-enterprise/charts-enterprise': 'agGrid',
        '@ag-grid-enterprise/sparklines': 'agGrid',
        '@ag-grid-enterprise/row-grouping': 'agGrid',
        '@ag-grid-enterprise/clipboard': 'agGrid',
      },
    ],
  },
];
