const Employee = require('./employee');

class Manager extends Employee {
    constructor(employeeId, employeeName, employeeEmail, office) {
        super(employeeId, employeeName, employeeEmail);
        this.office = office;
    }

    getRole() {
        return 'Manager';
    }
    getOffice() {
        return this.office;
    }
}

module.exports = Manager;