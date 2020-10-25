const Employee = require("./Employee");


class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.title = "Engineer";
        this.github = github;
    }
    getGithub() {
        return this.getGithub;
    }
    getRole() {
        return this.title;
    }
}

module.exports = Engineer;