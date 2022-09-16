// ag-grid css
import "@ag-grid-community/core/dist/styles/ag-grid.css";
import "@ag-grid-community/core/dist/styles/ag-theme-balham.css";
import "@ag-grid-community/core/dist/styles/ag-theme-balham-dark.css";

// ag-grid code
import { ColDef, Module } from "@ag-grid-community/core";

import { ClientSideRowModelModule } from "@ag-grid-community/client-side-row-model";
import { SideBarModule } from "@ag-grid-enterprise/side-bar";
import { ColumnsToolPanelModule } from "@ag-grid-enterprise/column-tool-panel";
import { FiltersToolPanelModule } from "@ag-grid-enterprise/filter-tool-panel";
import { StatusBarModule } from "@ag-grid-enterprise/status-bar";
import { MenuModule } from "@ag-grid-enterprise/menu";
import { RangeSelectionModule } from "@ag-grid-enterprise/range-selection";
import { RichSelectModule } from "@ag-grid-enterprise/rich-select";
import { ExcelExportModule } from "@ag-grid-enterprise/excel-export";
import { GridChartsModule } from "@ag-grid-enterprise/charts";
import { SparklinesModule } from "@ag-grid-enterprise/sparklines";
import { RowGroupingModule } from "@ag-grid-enterprise/row-grouping";
import { ClipboardModule } from "@ag-grid-enterprise/clipboard";

// adaptable css
import "@adaptabletools/adaptable/index.css";
import "@adaptabletools/adaptable/themes/dark.css";

// adaptable code
import Adaptable from "@adaptabletools/adaptable/agGrid";
import finance from "@adaptabletools/adaptable-plugin-finance";
import type { AdaptableOptions } from "@adaptabletools/adaptable/types";

import { dateParseragGrid, shortDateFormatteragGrid } from "./utils";

const RECOMMENDED_MODULES: Module[] = [
  ClientSideRowModelModule,
  SideBarModule,
  ColumnsToolPanelModule,
  FiltersToolPanelModule,
  StatusBarModule,
  MenuModule,
  RangeSelectionModule,
  RichSelectModule,
  ExcelExportModule,
  GridChartsModule,
  SparklinesModule,
  RowGroupingModule,
  ClipboardModule,
];

const columnDefs: ColDef[] = [
  { field: "OrderId", type: "abColDefNumber" },
  { field: "CompanyName", type: "abColDefString" },
  { field: "ContactName", type: "abColDefString" },
  { field: "Employee", type: "abColDefString" },
  {
    field: "InvoicedCost",
    editable: true,
    type: "abColDefNumber",
    valueFormatter: "x.toLocaleString()",
  },
  {
    field: "OrderDate",
    type: "abColDefDate",
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

const adaptableOptions: AdaptableOptions = {
  primaryKey: "OrderId",
  userName: "Demo User",
  adaptableId: "Simple Demo",
  licenseKey: "TODO ADD HERE YOUR LICENSE KEY",

  // call the plugins functions and pass them to the plugins array in the AdaptableOptions object
  plugins: [finance()],

  gridOptions: {
    sideBar: true,
    enableRangeSelection: true,
    columnDefs,
    rowData: null,
  },

  predefinedConfig: {
    Theme: {
      Revision: 3,
      CurrentTheme: "light",
    },
    Layout: {
      Revision: Date.now(),
    },
  },
  notificationsOptions: {
    showProgressBar: true,
  },
};
Adaptable.init(adaptableOptions, { agGridModules: RECOMMENDED_MODULES }).then(
  (api) => {
    // we simulate server loading - on AdaptableReady event
    api.eventApi.on("AdaptableReady", () => {
      console.log("Adaptable Ready!");
      // we load the json orders
      import("./orders.json")
        .then((data) => data.default)
        .then((data) => {
          // add an extra timeout
          setTimeout(() => {
            // and then set the correct row data
            adaptableOptions.gridOptions!.api!.setRowData(data);
          }, 500);
        });
    });
  }
);
