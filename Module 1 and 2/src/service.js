
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

//LESSON 2:

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
function addEmployee(name, surname) {
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

addEmployee("Sepp", "Brunner");
console.log(DATA.employees);

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

//3
function addPhone(id, phone) {
    //did for .. of again for training, because it is new to me. I only knew for .. in
    for (let employee of DATA.employees) {
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
    for (let employee of DATA.employees) {
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
    for (let employee of DATA.employees) {
        employeeOptions.push( {text: employee.name + " " + employee.surname, value: employee.id} );
    }
    return employeeOptions;
}

function setEmployeeManager(employeeId, managerId) {
    for (let employee of DATA.employees) {
        if (employee.id == employeeId) {
            employee. managerRef = managerId;
        }
    }
}

function searchEmployees(name, surname, managerRef) {
    let results = [];
    for (let employee of DATA.employees) {
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
