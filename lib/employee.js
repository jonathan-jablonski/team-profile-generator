//Base employee class

class Employee {
    constructor(name, id, email) {
        this.name = nameEl;
        this.id = id;
        this.email = email;
    }
    getName() {
        return nameEl;
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