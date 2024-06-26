// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

const handleClick = function () {
  const employeefirstName = prompt("Enter employee first name:");
  const employeelastName = prompt("Enter employee last name:");
  const employeeSalary = prompt("Enter employee salary:");

  const tableBody = document.getElementById("employee-table");

  const row = tableBody.insertRow();
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);

  cell1.textContent = employeefirstName;
  cell2.textContent = employeelastName;
  cell3.textContent = employeeSalary;
};

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  const Employees = [];
  let addMoreEmployees = true;

  while (addMoreEmployees) {
    const firstName = prompt("Enter employee first name:");
    const lastName = prompt("Enter employee last name:");
    let salary = prompt("Enter employee salary:");
    salary = isNaN(parseInt(salary)) ? 0 : parseInt(salary);

    Employees.push({
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    });

    const continueAdding = confirm("Do you want to add another employee?");
    if (!continueAdding) {
      addMoreEmployees = false;
    }
  }
  return Employees;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  const totalSalary = employeesArray.reduce((acc, emp) => acc + emp.salary, 0);
  const averageSalary = totalSalary / employeesArray.length;
  console.log(`Average Salary: $${averageSalary.toFixed(2)}`);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log(
    `Random Employee: ${randomEmployee.firstName} ${randomEmployee.lastName}`
  );
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
