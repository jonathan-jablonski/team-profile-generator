const Employee = require('./employee');

class Manager extends Employee {
    constructor(id, name, email, office) {
        super(id, name, email);
        this.office = office
    }

    getRole() {
        return 'Manager';
    }
    getOffice() {
        return office;
    }
}

module.exports = Manager;