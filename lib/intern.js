const Employee = require('./employee');

class Intern extends Employee {
    constructor(employeeId, employeeName, employeeEmail, school) {
        super(employeeId, employeeName, employeeEmail);
        this.school = school;
    }

    getRole() {
        return 'Intern';
    }
    getSchool() {
        return this.school;
    }
}

module.exports = Intern;