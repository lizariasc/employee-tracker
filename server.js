const mysql = require('mysql2');
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const promisemysql = require("promise-mysql");


// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      port: 3002,
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: 'Arias.14',
      database: 'employees'
    },
    console.log('Connected to the employees database.')
  );

// Create Connection
connection.connect(function(err) {
    if (err) throw err;
    Init();
});

// Delete a employee
db.query(`DELETE FROM employee WHERE id = ?`, 1, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

function Init() {
    inquirer
    .prompt({
      name: "action",
      type: "list",
      message: "What would you like to do?",
      choices: [
        "View all employees",
        "View all employees by department",
        "View all employees by role",
        "Add employee",
        "Add department",
        "Add role",
        "Update employee role",
        "Update employee manager",
        "Delete employee",
        "Delete role",
        "Delete department",
        "View department budgets"
      ]
    })
    .then(function(answer) {


       // Switch case depending on user option
        switch (answer.action) {
            case "View all employees":
                viewAllEmp();
                break;

            case "View all employees by department":
                viewAllEmpByDept();
                break;

            case "View all employees by role":
                viewAllEmpByRole();
                break;

            case "Add employee":
                addEmp();
                break;

            case "Add department":
                addDept();
                break;
            case "Add role":
                addRole();
                break;
            case "Update employee role":
                updateEmpRole();
                break;
            case "Update employee manager":
                updateEmpMngr();
                break;
            case "View all employees by manager":
                viewAllEmpByMngr();
                break;
            case "Delete employee":
                deleteEmp();
                break;
            case "View department budgets":
                viewDeptBudget();
                break;
            case "Delete role":
                deleteRole();
                break;
            case "Delete department":
                deleteDept();
                break;
        }
    });
}

// View all employees 
function viewAllEmp(){

    // Query to view all employees
    let query = "SELECT e.id, e.first_name, e.last_name, role.title, department.name AS department, role.salary, concat(m.first_name, ' ' ,  m.last_name) AS manager FROM employee e LEFT JOIN employee m ON e.manager_id = m.id INNER JOIN role ON e.role_id = role.id INNER JOIN department ON role.department_id = department.id ORDER BY ID ASC";

    // Query from connection
    connection.query(query, function(err, res) {
        if(err) return err;
        console.log("\n");

        // Display query results using console.table
        console.table(res);

        //Back to start
        Init();
    });
}
