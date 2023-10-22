const db = require('./connection');

class Queriers{
    constructor(db){
        this.db = db
    }

    allDepartments(){
        return this.db.promise().query("SELECT * FROM department")
    }

    allRoles(){
        return this.db.promise().query("SELECT * FROM role")
    }

    allEmployees(){
        return this.db.promise().query("SELECT * FROM employees")
    }

    newDepartment(newDepartmentName){
        return this.db.promise().query("INSERT INTO department(name) VALUES (?) ", newDepartmentName)
    }
    // var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
   newRole(roleData){
    return this.db.promise().query("INSERT INTO role(title, department_id, salary) VALUES ?", roleData)
 }

 newEmployee(empData){
    return this.db.promise().query("INSERT INTO employees(first_name, last_name, role_id, manager_id) VALUES ?", empData)
 }
};

module.exports = new Queriers(db);