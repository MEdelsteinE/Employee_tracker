const { prompt } = require('inquirer');
const mysql = require('mysql2');
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'employee_tracker_db'
    },
    console.log(`Connected to the employee_tracker_db database.`)
  );

function init()  {
    prompt([
        {
            type: "list",
            name: "choices",
            message: "Please select an option",
            choices: [
                "View all Departments",
                "View all Roles",
                "View all Employees",
                "Add a Department",
                "Add a Role",
                "Add an Employee",
                "Update an Employee role",
                "Exit"
            ]
        },
    ]).then(answer => {
        switch (answer.choices) {
            case "View all Departments":
                break;
            case "View all Roles":
                break;
            case "View all Employees":
                break;
            case "Add a Department":
                break;
            case "Add a Role":
                break;
            case "Add an Employee":
                break;
            case "Update an Employee role":
                break;
            case "Exit":
                break;
            default:
                showAnswer();
                break;
        }
    }).catch(error => {
        console.error("Error occurred: ", error);
    });
};

function showAnswer() {
    console.log("it worked");
};

init();    
           
       
