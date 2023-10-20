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
        return this.db.promise().query("SELECT * From employees")
    }
};

module.exports = new Queriers(db);