const Adaptable = window.Adaptable;
const agGridModules = window.agGridModules;
const agGridTheme = window.agGridTheme;

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
  { field: 'OrderId', cellDataType: 'number' },
  { field: 'CompanyName', cellDataType: 'text' },
  { field: 'ContactName', cellDataType: 'text' },
  { field: 'Employee', cellDataType: 'text' },
  {
    field: 'InvoicedCost',
    editable: true,
    cellDataType: 'number',
    valueFormatter: 'x.toLocaleString()',
  },
  {
    field: 'OrderDate',
    cellDataType: 'date',
    editable: true,
    cellEditorParams: {
      useFormatter: true,
    },
    valueParser: dateParserAgGrid,
    valueFormatter: shortDateFormatterAgGrid,
  },
];

const adaptableOptions = {
  primaryKey: 'OrderId',
  userName: 'Demo User',
  adaptableId: 'Simple Adaptable Demo',
  // licenseKey: 'TODO ADD YOUR LICENSE KEY HERE',
  licenseKey: '',

  initialState: {
    Layout: {
      CurrentLayout: 'Sorted Layout',
      Layouts: [
        {
          Columns: ['OrderId', 'CompanyName', 'ContactName', 'Employee', 'InvoicedCost'],
          Name: 'Default App Layout',
        },
      ],
    },
  },
};

const gridOptions = {
  theme: agGridTheme,
  columnDefs,
  rowData: null,
};
Adaptable.init(adaptableOptions, { modules: agGridModules, gridOptions }).then((api) => {
  // we simulate server loading - on AdaptableReady event
  api.eventApi.on('AdaptableReady', ({ adaptableApi }) => {
    // we load the json orders
    // import("./orders.json")
    new Promise((resolve) => {
      setTimeout(() => resolve({ default: window.orders }), 1000);
    })
      .then((data) => data.default)
      .then((data) => {
        console.log(data);
        // add an extra timeout
        setTimeout(() => {
          // and then set the correct row data
          adaptableApi.gridApi.addGridData(data);
        }, 500);
      });
  });
});
