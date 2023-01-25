/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./employees/employees-json.js":
/*!*************************************!*\
  !*** ./employees/employees-json.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DATA": () => (/* binding */ DATA)
/* harmony export */ });
const DATA = {

    employees: [
      {
       id: 1,
       name: "Peter",
       surname: "Peterson",
       department: "IT"
      },
      {
        id: 2,
        name: "Simon",
        surname: "Sayer",
        department: "Sales"
       },
       {
        id: 3,
        name: "Hugo",
        surname: "Port",
        department: "Finance"
       },
       {
        id: 4,
        name: "Hugo",
        surname: "Jusic",
        department: "ABC"
       }
    ]

   }
   

/***/ }),

/***/ "./employees/service.js":
/*!******************************!*\
  !*** ./employees/service.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addEmployee": () => (/* binding */ addEmployee),
/* harmony export */   "findById": () => (/* binding */ findById),
/* harmony export */   "getEmployees": () => (/* binding */ getEmployees),
/* harmony export */   "removeEmployee": () => (/* binding */ removeEmployee),
/* harmony export */   "searchEmployees": () => (/* binding */ searchEmployees),
/* harmony export */   "setEmployeeManager": () => (/* binding */ setEmployeeManager)
/* harmony export */ });
/* harmony import */ var _employees_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employees-json */ "./employees/employees-json.js");

/* var count = 2;
while (count < 10) {
    console.log(count%2);
    count++;
} */

/*var arr = ["a", "b", "c", "d"];
function printArr (arr) {
    if (arr.length > 0) {
        let x = 0;
        do {console.log(arr[x]);
            x++;
        }
        while (x < arr.length);
    } else {
        console.log("Empty array");
    }
}
printArr(arr);
*/



function getEmployees() { 
    return _employees_json__WEBPACK_IMPORTED_MODULE_0__.DATA.employees 
};

//LESSON 2:

//3
function findByName(name, surname) {
    var result = [];
    for (var employee of _employees_json__WEBPACK_IMPORTED_MODULE_0__.DATA.employees) {
        if ((!name || employee.name === name) && (!surname || employee.surname === surname)) {
            result.push(employee);
        }
    }
    return result;
}

console.log(findByName("Hugo", ""));

//4
function addEmployee(name, surname) {
    try {
        if (!name || !surname || name == "" || surname == "") throw new Error("Name or Surname not set!"); 
    }
    catch (e) {
        console.log(e);
        return;
    }
    let id = 0;
    for (let employee of _employees_json__WEBPACK_IMPORTED_MODULE_0__.DATA.employees) {
        if (employee.id > id) {
            id = employee.id;
        }
    }
    id++;
    _employees_json__WEBPACK_IMPORTED_MODULE_0__.DATA.employees.push({"id": id, "name": name, "surname": surname, "department": null});
    return id;
}

addEmployee("Sepp", "Brunner");
console.log(_employees_json__WEBPACK_IMPORTED_MODULE_0__.DATA.employees);

//5
function removeEmployee(id) {
    try {
        if (!id || id == "") throw Error("ID not set!"); 
    }
    catch (e) {
        console.log(e);
        return;
    }
    let index = 0;
    for (let employee of _employees_json__WEBPACK_IMPORTED_MODULE_0__.DATA.employees) {
        if (employee.id === id) {
          break;
        }
        index ++;
    }
    _employees_json__WEBPACK_IMPORTED_MODULE_0__.DATA.employees.splice(index, 1);
}

//6
function showEmployee(employee) {
    let keys = Object.keys(employee);
    for (let key of keys) {
        console.log(key, employee[key]);
    }
}

//showEmployee(DATA.employees[0]);

//7
/*
function showEmployees() {
    for (let employee of DATA.employees) {
        showEmployee(employee);
    }
}

//showEmployees();
*/


//LESSON 3:

//1 & 2:
const employeeMap = {};
function findById(id) {
    if (employeeMap[id]) {
        console.log(employeeMap[id]);
        return employeeMap[id];
    }
    for (let employee of _employees_json__WEBPACK_IMPORTED_MODULE_0__.DATA.employees) {
        if (employee.id == id) {
            employeeMap[employee.id] = employee;
            console.log(employee);
            return employee;
        }
    }
   // console.log("Sorry, employee " + id + " not found.");
   throw Error("Sorry, employee with id = " + id + " not found!");
}

//3
function addPhone(id, phone) {
    //did for .. of again for training, because it is new to me. I only knew for .. in
    for (let employee of _employees_json__WEBPACK_IMPORTED_MODULE_0__.DATA.employees) {
        if (employee.id == id) {
            if (employee.hasOwnProperty("phones")) {
                employee.phones.push(phone);
            } else {
                employee["phones"] = [phone];
            }
        }
    }
}

addPhone(1, 32490953);
addPhone(1, 59340598);

//4
function setDateOfBirth(id, date) {
    for (let employee of _employees_json__WEBPACK_IMPORTED_MODULE_0__.DATA.employees) {
        if (employee.id == id) {
            employee.dateOfBirth = date;
        }
    }
}

setDateOfBirth(1, new Date('May 20, 2003'));

//5
function getAge(id) {
    const employee = findById(id);
    if (employee.dateOfBirth) {
        let ageAsDateFromEpoch =  new Date(Date.now() - employee.dateOfBirth.getTime());
        let age = Math.abs(ageAsDateFromEpoch.getUTCFullYear() - 1970);
        return age;
    }
    throw Error("Sorry, birthday for employee = " + id + " not set!");
}

//console.log(getAge(1));
//console.log(getAge(2));

//6
function formatDate(date) {
    let day = date.getDate() < 10 ? "0"+date.getDate() : date.getDate();
    let month = date.getMonth()+1 < 10? "0"+(date.getMonth()+1) : date.getMonth()+1;
    let year = date.getFullYear();
    return day + "." + month + "." + year;
}

console.log(formatDate(new Date(Date.now())));

//7
function getEmployeeInfo(id) {
    let employee = null;
    //Again, train for .. of 
    for (let empl of _employees_json__WEBPACK_IMPORTED_MODULE_0__.DATA.employees) {
        if (empl.id == id) {
            employee = empl;
        }
    }
    let employeeStr = "";
    if (employee) {
        let birthday = employee.dateOfBirth ? formatDate(new Date(employee.dateOfBirth)) : "-";
        let phones = employee.phones ? employee.phones : "-";
        employeeStr = "Name: "+employee.name+", Surname: "+employee.surname+", Birthday: "+birthday;
        employeeStr += ", Age: "+getAge(employee.id)+", Phone numbers: "+phones;
    }
    return employeeStr;
}

console.log(getEmployeeInfo(1));

//8
function testEmployee() {
    addPhone(2, 305968498);
    addPhone(2, 385895037);
    setDateOfBirth(2, new Date(1999,1,18));
    console.log(getEmployeeInfo(2));
   }
   
   testEmployee();

//9
function getEmployeeJSON(id) {
    let employee = null;
    for (let empl of _employees_json__WEBPACK_IMPORTED_MODULE_0__.DATA.employees) {
        if (empl.id == id) {
            employee = empl;
        }
    }
    let employeeJson = {};
    if (employee) {
        employeeJson = JSON.stringify(employee);
    }
    return employeeJson;
}

console.log(getEmployeeJSON(1));

//2.2
function fillSelect(select, values, selectedValue) {
    const emptyOption = document.createElement("option");
    select.appendChild(emptyOption);
    for (let value of values) {
        const newOption = document.createElement("option");
        newOption.text = value.text;
        newOption.value = value.value;
        if (newOption.value == selectedValue)  {
            newOption.selected = true;
        }
        select.appendChild(newOption);
    }      
}

/*
fillSelect(document.getElementById("managerSelect"), [
    { text: "John Johnson", value: 133 },
    { text: "Peter Peterson", value: 134 }], 134);
*/

function getEmployeesOptions() {
    let employeeOptions = [];
    for (let employee of _employees_json__WEBPACK_IMPORTED_MODULE_0__.DATA.employees) {
        employeeOptions.push( {text: employee.name + " " + employee.surname, value: employee.id} );
    }
    return employeeOptions;
}

function setEmployeeManager(employeeId, managerId) {
    for (let employee of _employees_json__WEBPACK_IMPORTED_MODULE_0__.DATA.employees) {
        if (employee.id == employeeId) {
            employee. managerRef = managerId;
        }
    }
}

function searchEmployees(name, surname, managerRef) {
    let results = [];
    for (let employee of _employees_json__WEBPACK_IMPORTED_MODULE_0__.DATA.employees) {
        if ((!name || employee.name == name) && (!surname || employee.surname == surname) && (!managerRef || employee.managerRef == managerRef)) {
            results.push(employee);
        }
    }
    return results;
}

function assignSendOnEnter(paneId, buttonId) {
    let allInput = document.querySelectorAll("#"+paneId+" input");
    for (let input of allInput) {
        input.addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                document.querySelector("#"+paneId+" button").click();
            }
        });
    }
}


/***/ }),

/***/ "./employees/ui.js":
/*!*************************!*\
  !*** ./employees/ui.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addEmployeeUI": () => (/* binding */ addEmployeeUI),
/* harmony export */   "openTab": () => (/* binding */ openTab),
/* harmony export */   "removeEmployeeUI": () => (/* binding */ removeEmployeeUI),
/* harmony export */   "runUI": () => (/* binding */ runUI),
/* harmony export */   "searchEmployeeUI": () => (/* binding */ searchEmployeeUI)
/* harmony export */ });
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service */ "./employees/service.js");


const PLACEHOLDER = "employeesPlaceholder";

function runUI() {
    assignSendOnEnter("searchPane","searchEmployeesButton");
    assignSendOnEnter("addPane", "addEmployeeButton");
    document.getElementById("searchButton").click();
    showEmployees(DATA.employees);
    fillSelect(document.getElementById("managerSelect"), getEmployeesOptions());
    fillSelect(document.getElementById("managerSearch"), getEmployeesOptions());
 }
 
function clearEmployeesPlaceholder() {
    let emplPlaceholderElem = document.getElementById(PLACEHOLDER);
    emplPlaceholderElem.innerHTML = "";
}

function showEmployees(employees) {
    clearEmployeesPlaceholder();
    let emplUl = document.createElement("ul");
    for (let employee of employees) {
        var newLi = document.createElement("li");
        // let managerHtml = "";
        newLi.innerHTML = employee.name + " " + employee.surname + " ";
        if (employee.managerRef) {
            // let manager = findById(employee.managerRef);
            // managerHtml = "<b>Manager:</b> " + manager.name +" "+manager.surname;
            let managerSpan = document.createElement("span");
            let managerSelect = document.createElement("select");
            fillSelect(managerSelect, getEmployeesOptions(), employee.managerRef);
            managerSelect.addEventListener('change', () => employee.managerRef = managerSelect.value);
            managerSpan.innerHTML = ", <b>Manager:</b> ";
            newLi.appendChild(managerSpan);
            newLi.appendChild(managerSelect);
        }
        // newLi.innerHTML = employee.name + " " + employee.surname + ", " + managerHtml + " " ;
        const removeButton = document.createElement("button");
        removeButton.innerHTML = "Remove";
        removeButton.addEventListener('click', () => removeEmployeeUI(employee.id));
        newLi.appendChild(removeButton);
        emplUl.appendChild(newLi);
    }
    document.getElementById(PLACEHOLDER).appendChild(emplUl);
}

function addEmployeeUI() {
    const name = document.getElementById("nameInput").value;
    const surname = document.getElementById("surnameInput").value;
    let errorMsg = "";
    if (!name || name == "") {
        errorMsg = "Please enter a name!";
        document.getElementById("nameInput").style.backgroundColor = 'pink';
    }
    if (!surname || surname == "") {
        errorMsg += " Please enter a surename!";
        document.getElementById("surnameInput").style.backgroundColor = 'pink';
    } 
    if (errorMsg == "") {
        document.getElementById(PLACEHOLDER).innerHTML = ""; //reset
        const employeeId = (0,_service__WEBPACK_IMPORTED_MODULE_0__.addEmployee)(name, surname);
        const managerId = document.getElementById("managerSelect").value;
        (0,_service__WEBPACK_IMPORTED_MODULE_0__.setEmployeeManager)(employeeId, managerId);
        showEmployees(DATA.employees);
        document.getElementById("nameInput").value = "";
        document.getElementById("surnameInput").value = "";
    } else {
        document.getElementById(PLACEHOLDER).innerHTML = errorMsg;
    }
}

function removeEmployeeUI(id) {
    (0,_service__WEBPACK_IMPORTED_MODULE_0__.removeEmployee)(id);
    showEmployees(DATA.employees);
}
   
function searchEmployeeUI() {
    const name = document.getElementById("nameSearch").value;
    const surname = document.getElementById("surnameSearch").value;
    const managerRef = document.getElementById("managerSearch").value;
    const employees  = (0,_service__WEBPACK_IMPORTED_MODULE_0__.searchEmployees)(name, surname, managerRef);
    showEmployees(employees);
}

/**
 * Activates the selected tab
 * @param evt event invoking activation
 * @param id tab identifier
 */
function openTab(evt, id) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(id).style.display = "block";
    evt.currentTarget.className += " active";
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _employees_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employees/ui */ "./employees/ui.js");


window.addEmployeeUI = _employees_ui__WEBPACK_IMPORTED_MODULE_0__.addEmployeeUI;
window.openTab = _employees_ui__WEBPACK_IMPORTED_MODULE_0__.openTab;
window.searchEmployeeUI = _employees_ui__WEBPACK_IMPORTED_MODULE_0__.searchEmployeeUI;
window.removeEmployeeUI = _employees_ui__WEBPACK_IMPORTED_MODULE_0__.removeEmployeeUI;

(0,_employees_ui__WEBPACK_IMPORTED_MODULE_0__.runUI)();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map