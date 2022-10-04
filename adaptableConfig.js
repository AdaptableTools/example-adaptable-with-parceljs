// for simplicity's sake, set Adaptable & the AG Grid modules on the global scope
import Adaptable from '@adaptabletools/adaptable/agGrid';
window.Adaptable = Adaptable;

import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { SideBarModule } from '@ag-grid-enterprise/side-bar';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import { FiltersToolPanelModule } from '@ag-grid-enterprise/filter-tool-panel';
import { StatusBarModule } from '@ag-grid-enterprise/status-bar';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { RangeSelectionModule } from '@ag-grid-enterprise/range-selection';
import { RichSelectModule } from '@ag-grid-enterprise/rich-select';
import { ExcelExportModule } from '@ag-grid-enterprise/excel-export';
import { GridChartsModule } from '@ag-grid-enterprise/charts';
import { SparklinesModule } from '@ag-grid-enterprise/sparklines';
import { RowGroupingModule } from '@ag-grid-enterprise/row-grouping';
import { ClipboardModule } from '@ag-grid-enterprise/clipboard';
window.agGridModules = [
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
