// Import Employee parent class
const Employee = require("./Employee");

// Engineer subclass
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  // Override parent method
  getRole() {
    return 'Engineer';
  }
}

module.exports = Engineer;