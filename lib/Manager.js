const Employee = require("./Employee");


class Manager extends Employee {
    constructor(name, id, email, officeNumber, title) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.title = "Manager";
    }
    getRole() {
        return this.title;
    }
    getofficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;