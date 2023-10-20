const { prompt } = require('inquirer');
const Queriers = require('./db/queires');
require("console.table")

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
                viewAllDeps()
                break;
            case "View all Roles":
                viewAllRoles()
                break;
            case "View all Employees":
                viewAllEmployees()
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
                process.end()
                break;
        }
    }).catch(error => {
        console.error("Error occurred: ", error);
    });
};

async function viewAllDeps() {
    await prompt
    const [data] = await Queriers.allDepartments()
    console.table(data);
};

async function viewAllRoles(){
    await prompt
    const [data] = await Queriers.allRoles()
    console.table(data);
}

async function viewAllEmployees(){
    await prompt
    const [data] = await Queriers.allEmployees()
    console.table(data);
}


init();

           
       
