const Employee = require('./employee');

class Engineer extends Employee {
    constructor(id, name, email, github) {
        super (id, name, email);
        this.github = github;
    }
    getRole() {
        return 'Employee';
    }
    
    getGithub() {
        return github;
    }
    
}
module.exports = Engineer;