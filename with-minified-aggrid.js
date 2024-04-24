const dateParserAgGrid = (params) => {
  const stringToDate = (date, format, delimiter) => {
    const formatLowerCase = format.toLowerCase();
    const formatItems = formatLowerCase.split(delimiter);
    const dateItems = date.split(delimiter);
    const monthIndex = formatItems.indexOf('mm');
    const dayIndex = formatItems.indexOf('dd');
    const yearIndex = formatItems.indexOf('yyyy');
    let month = parseInt(dateItems[monthIndex], 10);
    month -= 1;
    const formatedDate = new Date(
      parseInt(dateItems[yearIndex], 10),
      month,
      parseInt(dateItems[dayIndex], 10)
    );
    return formatedDate;
  };

  try {
    if (params.newValue instanceof Date) {
      return params.newValue;
    }
    return stringToDate(params.newValue, 'dd/mm/yyyy', '/');
  } catch (ex) {
    console.error(`Error parsing the date value: ${params.newValue} and node : `, params.node);
    return null;
  }
};

const shortDateFormatterAgGrid = (params) => {
  const shortDateFormatter = new Intl.DateTimeFormat('en-GB');

  try {
    if (params.value) {
      return shortDateFormatter.format(params.value);
    }
  } catch (ex) {
    console.error(`Error formatting the date for value: ${params.value} and node : `, params.node);
  }
  return null;
};

const columnDefs = [
  { field: 'OrderId', type: 'abColDefNumber' },
  {
    field: 'CompanyName',

    type: 'abColDefString',
  },
  {
    field: 'ContactName',
    type: 'abColDefString',
  },
  {
    field: 'Employee',
    type: 'abColDefString',
  },
  {
    field: 'InvoicedCost',
    type: 'abColDefNumber',
    valueFormatter: 'x.toLocaleString()',
  },
  {
    field: 'OrderDate',
    type: 'abColDefDate',
    editable: true,
    cellEditorParams: {
      useFormatter: true,
    },
    valueParser: dateParserAgGrid,
    valueFormatter: shortDateFormatterAgGrid,
  },
];

const gridOptions = {
  columnDefs,
  columnTypes: {
    abColDefNumber: {},
    abColDefString: {},
    abColDefBoolean: {},
    abColDefDate: {},
    abColDefNumberArray: {},
    abColDefObject: {},
  },
  rowData: null,
  enableCharts: true,
  enableRangeSelection: true,
};

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function () {
  const gridDiv = document.querySelector('#grid');
  const api = agGrid.createGrid(gridDiv, gridOptions);
  setTimeout(() => {
    api.setGridOption('rowData', window.orders);
  }, 1000);
});
