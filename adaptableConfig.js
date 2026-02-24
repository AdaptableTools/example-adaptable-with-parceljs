// for simplicity's sake, set Adaptable & the AG Grid modules on the global scope
import { Adaptable } from '@adaptabletools/adaptable';
window.Adaptable = Adaptable;

import { AllEnterpriseModule, themeMaterial } from 'ag-grid-enterprise';
window.agGridModules = [AllEnterpriseModule];
window.agGridTheme = themeMaterial;
