import { AllEnterpriseModules, ColDef } from "@ag-grid-enterprise/all-modules";

import Adaptable from "@adaptabletools/adaptable/agGrid";
import "@adaptabletools/adaptable/index.css";
import "@adaptabletools/adaptable/themes/dark.css";

import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-balham.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-balham-dark.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-alpine.css";
import "@ag-grid-community/all-modules/dist/styles/ag-theme-alpine-dark.css";

import finance from "@adaptabletools/adaptable-plugin-finance";

import { AdaptableOptions } from "@adaptabletools/adaptable/types";
import {dateParseragGrid, shortDateFormatteragGrid} from "./utils";

const columnDefs = [
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
  }
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
  modules: AllEnterpriseModules,
  predefinedConfig: {
    Theme: {
      Revision: 3,
      CurrentTheme: "light",
    },
    Layout:{
      Revision:Date.now()
    }
  },
  notificationsOptions:{
    showProgressBar: true,
  }
};
Adaptable.init(adaptableOptions).then((api) => {
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
});


