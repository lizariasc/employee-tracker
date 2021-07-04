const mysql = require('mysql2');
const inquirer = require("inquirer");
const consoleTable = require("console.table");

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
        "Update employee role"
      ]
    })
    .then(function(answer) {
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
                songAndAlbumSearch();
                break;
            case "Update employee role":
                updateEmpRole();
                break;
        }
    });
}

function viewAllEmp(){
    Init();
}