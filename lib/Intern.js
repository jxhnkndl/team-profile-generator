// Import Employee parent class
const Employee = require("./Employee");

// Intern subclass
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getSchool() {
    return this.school;
  }

  // Override parent method
  getRole() {
    return 'Intern';
  }
}

module.exports = Intern;