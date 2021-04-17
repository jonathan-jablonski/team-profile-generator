const Employee = require('./employee');

class Intern extends Employee {
    constructor(id, name, email, school) {
        super(id, name, email);
        this.school = school;
    }

    getRole() {
        return 'Intern';
    }
    getSchool() {
        return school;
    }
}

module.exports = Intern;