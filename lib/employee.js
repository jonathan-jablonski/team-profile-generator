//Base employee class

const { name } = require("ci-info");

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return name;
    }
    getID() {
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