import { 
    runUI,
    addEmployeeUI,
    openTab,
    searchEmployeeUI,
    removeEmployeeUI
} from './employees/ui';

import './css/style.css';

window.addEmployeeUI = addEmployeeUI;
window.openTab = openTab;
window.searchEmployeeUI = searchEmployeeUI;
window.removeEmployeeUI = removeEmployeeUI;

runUI();
