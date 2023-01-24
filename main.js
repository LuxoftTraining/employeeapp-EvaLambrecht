import { 
    runUI,
    addEmployeeUI,
    openTab,
    searchEmployeeUI,
    removeEmployeeUI
} from './employees/ui';

window.addEmployeeUI = addEmployeeUI;
window.openTab = openTab;
window.searchEmployeeUI = searchEmployeeUI;
window.removeEmployeeUI = removeEmployeeUI;

runUI();
