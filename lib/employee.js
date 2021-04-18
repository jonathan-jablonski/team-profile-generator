//Base employee class

const { name } = require("ci-info");

class Employee {
    constructor(employeeName, employeeId, employeeEmail) {
        this.employeeName = name;
        this.employeeId = id;
        this.employeeEmail = email;
    }
    getName() {
        return name;
    }
    getId() {
        return id;
    }
    getEmail() {
        return email;
    }
    getRole() {
        return 'Employee';
    }
}
module.exports = Employee;