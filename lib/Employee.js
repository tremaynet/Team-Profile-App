class Employee {
    constructor(name, id, email, title) {
        this.name = name;
        this.id = id;
        this.email = email; 
        this.title = "Employee"; 
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.title;
    }
}

module.exports = Employee;