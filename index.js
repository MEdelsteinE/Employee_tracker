const {prompt} = require('inquirer');
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'employee_tracker_db'
    },
    console.log(`Connected to the employee_tracker_db database.`)
  );

function start()  {
    prompt([
        {
            type: "list",
            name: "options",
            message: "Choose from the options below",
            choices: ["Get All Employees", "b", "c"]
        }
]).then(answer => {
    
    switch (answer.options) {
        case "Get All Employees":
            getEmps()
            break;
        
        default:
            break;
    }
})
}   
 start();

 function getEmps() {
    console.log("it worked");
 }