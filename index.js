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
                addDepartment()
                break;
            case "Add a Role":
                addRole()
                break;
            case "Add an Employee":
                addEmployee()
                break;
            case "Update an Employee role":
                updateEmployee()
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
    init();
};

async function viewAllRoles(){
    await prompt
    const [data] = await Queriers.allRoles()
    console.table(data);
    init();
}

async function viewAllEmployees(){
    await prompt
    const [data] = await Queriers.allEmployees()
    console.table(data);
    init();
}

async function addDepartment() {
    const { newDepartmentName } = await prompt([
        {
            type: 'input',
            name: 'newDepartmentName',
            message: 'Enter the name of the new department:'
        }
    ]);
    await Queriers.newDepartment(newDepartmentName);
    console.log(`New department '${newDepartmentName}' added successfully.`);
    init();
}

async function addRole() {
    const [deps] = await Queriers.allDepartments()

 

    const depsData = await deps.map((item)=>{
        const {id, name} = item;

        const newItem = {
            name,
            value: id
        }

        return newItem
    })
   console.log(depsData)
    const { newRole } = await prompt([
        {
            name: 'roleName',
            message: 'Enter the name of the new role:'
        },
        {
            type: "list",
            name: 'deptId',
            message: 'Enter the department of the new role:',
            choices: depsData
        },
        {
            name: 'newSal',
            message: "Enter the Salary of the new role:"
        }
    ])
}

async function addEmployee() {
    const { newEmployee } = await prompt({
        //THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
    })
}

async function updateEmployee() {
    const { updateEmployee } = await prompt({
        //THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
    })
}


init();

           
       
