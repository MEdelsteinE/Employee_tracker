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
            name: 'new employee',
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
    ]);
    await Queriers.newRole(roleName, deptId, newSal)
    init();
}

async function addEmployee() {
    const [roles] = await Queriers.allRoles();
    const rolesData = roles.map((item) => {
        const { id, title } = item;
        const newItem = {
            name: title,
            value: id
        }
        return newItem;
    });
        const [manager] = await Queriers.allEmployees();
        const managerData = manager.map((person) => {
            const {first_name, last_name, id} = person;
            const newPerson= {
                name: `${first_name} ${last_name}`,
                value: id
            }
            return newPerson
        });

    const data = await prompt([
        {
            name: 'firstName',
            message: 'Enter the employees first name:'
        },
        {
            name: 'lastName',
            message: 'Enter the employees last name:'
        },
        {
            type: 'list',
            name: 'roleId',
            message: 'Select the employees role:',
            choices: rolesData
        },
        {
            type: 'list',
            name: 'managerId',
            message: 'Are they a manager?:',
            choices: managerData
        }
    ]);

    const arrData =  Object.values(data)
    
    
    // data.map((employee) => {
    //       const objValues =
    //       return objValues
    //      });
         console.log(arrData);

    await Queriers.newEmployee(arrData);
    init();
}

async function updateEmployee() {
    const [employees] = await Queriers.allEmployees();
    const employeesData = employees.map((item) => {
        const { id, first_name, last_name } = item;
        const newItem = {
            name: `${first_name} ${last_name}`,
            value: id
        }
        return newItem;
    });

    const [roles] = await Queriers.allRoles();
    const rolesData = roles.map((item) => {
        const { id, title } = item;
        const newItem = {
            name: title,
            value: id
        }
        return newItem;
    });

    const { employeeId, roleId } = await prompt([
        {
            type: 'list',
            name: 'employeeId',
            message: 'Select the employee to update:',
            choices: employeesData
        },
        {
            type: 'list',
            name: 'roleId',
            message: 'Select the new role for the employee:',
            choices: rolesData
        }
    ]);

    await Queriers.updateEmployeeRole(employeeId, roleId);
    console.log(`Employee's role updated successfully.`);
    init();
}


init();

           
       
