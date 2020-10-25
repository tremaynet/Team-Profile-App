const Employee = require("./Employee");


class Manager extends Employee {
    constructor(name, id, email, officeNumber, title) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.title = title;
    }
    getRole() {
        return this.title;
    }
    getOfficenumber() {
        return this.officeNumber;
    }
}

modeule.exports = Manager;