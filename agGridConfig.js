export * from '@ag-grid-community/core';
export * from '@ag-grid-community/client-side-row-model';
export * from '@ag-grid-enterprise/side-bar';
export * from '@ag-grid-enterprise/column-tool-panel';
export * from '@ag-grid-enterprise/filter-tool-panel';
export * from '@ag-grid-enterprise/status-bar';
export * from '@ag-grid-enterprise/menu';
export * from '@ag-grid-enterprise/range-selection';
export * from '@ag-grid-enterprise/rich-select';
export * from '@ag-grid-enterprise/excel-export';
export * from '@ag-grid-enterprise/charts-enterprise';
export * from '@ag-grid-enterprise/sparklines';
export * from '@ag-grid-enterprise/row-grouping';
export * from '@ag-grid-enterprise/clipboard';

import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { SideBarModule } from '@ag-grid-enterprise/side-bar';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import { FiltersToolPanelModule } from '@ag-grid-enterprise/filter-tool-panel';
import { StatusBarModule } from '@ag-grid-enterprise/status-bar';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { RangeSelectionModule } from '@ag-grid-enterprise/range-selection';
import { RichSelectModule } from '@ag-grid-enterprise/rich-select';
import { ExcelExportModule } from '@ag-grid-enterprise/excel-export';
import { GridChartsModule } from '@ag-grid-enterprise/charts-enterprise';
import { SparklinesModule } from '@ag-grid-enterprise/sparklines';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';
import { ClipboardModule } from '@ag-grid-enterprise/clipboard';

import { ModuleRegistry } from '@ag-grid-community/core';

ModuleRegistry.registerModules([
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
]);
