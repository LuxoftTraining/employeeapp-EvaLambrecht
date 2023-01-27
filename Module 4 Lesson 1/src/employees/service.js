

import DATA from './employees-json';

export function getEmployees() { 
    return DATA.employees 
};

//3
function findByName(name, surname) {
    var result = [];
    for (var employee of DATA.employees) {
        if ((!name || employee.name === name) && (!surname || employee.surname === surname)) {
            result.push(employee);
        }
    }
    return result;
}

console.log(findByName("Hugo", ""));

//4
export function addEmployee(name, surname) {
    try {
        if (!name || !surname || name == "" || surname == "") throw new Error("Name or Surname not set!"); 
    }
    catch (e) {
        console.log(e);
        return;
    }
    let id = 0;
    for (let employee of DATA.employees) {
        if (employee.id > id) {
            id = employee.id;
        }
    }
    id++;
    DATA.employees.push({"id": id, "name": name, "surname": surname, "department": null});
    return id;
}

//addEmployee("Sepp", "Brunner");
console.log(DATA.employees);

//5
export function removeEmployee(id) {
    try {
        if (!id || id == "") throw Error("ID not set!"); 
    }
    catch (e) {
        console.log(e);
        return;
    }
    let index = 0;
    for (let employee of DATA.employees) {
        if (employee.id === id) {
          break;
        }
        index ++;
    }
    DATA.employees.splice(index, 1);
}

//6
function showEmployee(employee) {
    let keys = Object.keys(employee);
    for (let key of keys) {
        console.log(key, employee[key]);
    }
}

//LESSON 3:

//1 & 2:
const employeeMap = {};
export function findById(id) {
    if (employeeMap[id]) {
        console.log(employeeMap[id]);
        return employeeMap[id];
    }
    for (let employee of DATA.employees) {
        if (employee.id == id) {
            employeeMap[employee.id] = employee;
            console.log(employee);
            return employee;
        }
    }
   // console.log("Sorry, employee " + id + " not found.");
   throw Error("Sorry, employee with id = " + id + " not found!");
}

//7
function getEmployeeInfo(id) {
    let employee = null;
    //Again, train for .. of 
    for (let empl of DATA.employees) {
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

//console.log(getEmployeeInfo(1));

//8
function testEmployee() {
    addPhone(2, 305968498);
    addPhone(2, 385895037);
    setDateOfBirth(2, new Date(1999,1,18));
    console.log(getEmployeeInfo(2));
}
   
//testEmployee();

//9
function getEmployeeJSON(id) {
    let employee = null;
    for (let empl of DATA.employees) {
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
export function fillSelect(select, values, selectedValue) {
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

export function getEmployeesOptions() {
    let employeeOptions = [];
    for (let employee of DATA.employees) {
        employeeOptions.push( {text: employee.name + " " + employee.surname, value: employee.id} );
    }
    return employeeOptions;
}

export function setEmployeeManager(employeeId, managerId) {
    for (let employee of DATA.employees) {
        if (employee.id == employeeId) {
            employee. managerRef = managerId;
        }
    }
}

export function searchEmployees(name, surname, managerRef) {
    let results = [];
    for (let employee of DATA.employees) {
        if ((!name || employee.name == name) && (!surname || employee.surname == surname) && (!managerRef || employee.managerRef == managerRef)) {
            results.push(employee);
        }
    }
    return results;
}

export function assignSendOnEnter(paneId, buttonId) {
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


//Module 4 Part 2:

//Calculate how many employees are working in some department:
function amountInDep(dep) {
    return DATA.employees.map(e=>e.department).filter(d=>d === dep).length;
}

//Total salary per department:
function sumSalaryInDep(dep) {
    return DATA.employees.filter(e=>e.department === dep).map(e=>e.salary).reduce((a,b)=>a+b);
}

//Average salary in a department:
function avgSalaryInDep(dep) {
    return sumSalaryInDep(dep)/amountInDep(dep);
}

console.log("avgSalaryInDep:", avgSalaryInDep("IT"));

//Maximum salary in a department:
function maxSalaryInDep(dep) {
    return DATA.employees.filter(e=>e.department === dep).map(e=>e.salary).reduce((a,b)=>a>b?a:b);
}

console.log("maxSalaryInDep:", maxSalaryInDep("IT"));

//Department with the highest average salary:
function depWithMaxSalary() {
    let uniqueDepartments = [...new Set(DATA.employees.map(e=>e.department))]; //get list with all unique departements ["IT", "ABC"]
    let salaries = [];
    uniqueDepartments.forEach((d)=>salaries.push({"dep": d, "avSal":avgSalaryInDep(d)}));
    return salaries.filter(d=>d.avSal === (salaries.map(d=>d.avSal).reduce((a,b)=>a>b?a:b)))[0].dep;
}

console.log("depWithMaxSalary:", depWithMaxSalary());

//List of all employees in a department
function depEmployees(dep) {
    return DATA.employees.filter(e=>e.department === dep).map(e=>e.name+" "+e.surname);
}

console.log("depEmployees:", depEmployees("IT"));

//List of all employees with a salary exceeding a specified amount
function employeesWithSalaryMoreThan(salary) {
    return DATA.employees.filter(e=>e.salary > salary).map(e=>e.name+" "+e.surname);
}

console.log("employeesWithSalaryMoreThan:", employeesWithSalaryMoreThan(1000));
