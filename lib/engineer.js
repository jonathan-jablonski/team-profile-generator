const Employee = require('./employee');

class Engineer extends Employee {
    constructor(id, nameEl, email, github) {
        super (id, nameEl, email);
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