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
        const employeeId = addEmployee(name, surname);
        const managerId = document.getElementById("managerSelect").value;
        setEmployeeManager(employeeId, managerId);
        showEmployees(DATA.employees);
        document.getElementById("nameInput").value = "";
        document.getElementById("surnameInput").value = "";
    } else {
        document.getElementById(PLACEHOLDER).innerHTML = errorMsg;
    }
}

function removeEmployeeUI(id) {
    removeEmployee(id);
    showEmployees(DATA.employees);
}
   
function searchEmployeeUI() {
    const name = document.getElementById("nameSearch").value;
    const surname = document.getElementById("surnameSearch").value;
    const managerRef = document.getElementById("managerSearch").value;
    const employees  = searchEmployees(name, surname, managerRef);
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
