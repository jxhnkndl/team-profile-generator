// Import Employee class
const Employee = require('../lib/Employee');

// Test Employee class
describe('Employee', () => {
  
  // Test object instantiation
  describe('Employee object instantiation', () => {
    it('Creates an object with name, id, and email properties when passed valid arguments', () => {
      const newEmployee = new Employee('John Smith', 1, 'johnsmith@gmail.com');

      expect(new Employee()).toBeInstanceOf(Employee);
      expect(newEmployee.name).toEqual('John Smith');
      expect(newEmployee.id).toEqual(1);
      expect(newEmployee.email).toEqual('johnsmith@gmail.com');
    });
  });

  // Test getName() method
  describe('getName', () => {
    it("Should return the object's name property", () => {
      const newEmployee = new Employee('John Smith', 1, 'johnsmith@gmail.com');

      expect(newEmployee.getName()).toEqual('John Smith');
    });
  });

  // Test getId() method
  describe('getId', () => {
    it("Should return the object's id property", () => {
      const newEmployee = new Employee('John Smith', 1, 'johnsmith@gmail.com');

      expect(newEmployee.getId()).toEqual(1);
    });
  });

  // Test getEmail() method
  describe('getEmail', () => {
    it("Should return the object's email property", () => {
      const newEmployee = new Employee('John Smith', 1, 'johnsmith@gmail.com');

      expect(newEmployee.getEmail()).toEqual('johnsmith@gmail.com');
    });
  });

  // Test getRole() method
  describe('getRole', () => {
    it("Should return the string 'Employee'", () => {
      const newEmployee = new Employee('John Smith', 1, 'johnsmith@gmail.com');

      expect(newEmployee.getRole()).toEqual('Employee');
    });
  });
});
