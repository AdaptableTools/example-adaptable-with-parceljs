import { Module, ColDef, GridOptions, AllEnterpriseModule, themeQuartz } from 'ag-grid-enterprise';
import orders from './orders.json';

import '@adaptabletools/adaptable/index.css';
import '@adaptabletools/adaptable/themes/dark.css';

import { Adaptable, AdaptableOptions, AgGridConfig } from '@adaptabletools/adaptable';

import { dateParseragGrid, shortDateFormatteragGrid } from './utils';

const columnDefs: ColDef[] = [
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
    valueParser: dateParseragGrid,
    valueFormatter: shortDateFormatteragGrid,
  },
].map((c: ColDef) => {
  c.floatingFilter = true;
  c.filter = true;
  return c;
});

const gridOptions: GridOptions = {
  theme: themeQuartz,
  sideBar: true,
  cellSelection: true,
  columnDefs,
  rowData: null,
};

const adaptableOptions: AdaptableOptions = {
  primaryKey: 'OrderId',
  userName: 'Demo User',
  adaptableId: 'Simple Demo',
  licenseKey: 'TODO ADD HERE YOUR LICENSE KEY',

  initialState: {
    Theme: {
      Revision: 3,
      CurrentTheme: 'light',
    },
    Layout: {
      Revision: Date.now(),
      Layouts: [
        {
          Name: 'Default Layout',
          TableColumns: [
            'OrderId',
            'CompanyName',
            'ContactName',
            'Employee',
            'InvoicedCost',
            'OrderDate',
          ],
        },
      ],
    },
  },
  notificationsOptions: {
    showProgressBar: true,
  },
};

const agGridModules: Module[] = [AllEnterpriseModule];

const agGridConfig: AgGridConfig = {
  modules: agGridModules,
  gridOptions,
};

Adaptable.init(adaptableOptions, agGridConfig).then((api) => {
  api.eventApi.on('AdaptableReady', ({ adaptableApi }) => {
    console.log('Adaptable Ready!');
    setTimeout(() => {
      adaptableApi.gridApi.addGridData(orders);
    }, 500);
  });
});
