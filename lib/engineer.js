const Employee = require('./employee');

class Engineer extends Employee {
    constructor(employeeId, employeeName, employeeEmail, github) {
        super(employeeId, employeeName, employeeEmail)
        this.github = github;
    }
    getRole() {
        return 'Engineer';
    }
    
    getGithub() {
        return this.github;
    }
    
}
module.exports = Engineer;