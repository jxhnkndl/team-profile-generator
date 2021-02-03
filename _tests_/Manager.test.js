// Import class constructors
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

// Test Employee class
describe("Manager", () => {
  
  // Test object instantiation
  describe("Manager object instantiation", () => {
    it("Creates an object with name, id, email, and officeNumber properties", () => {
      const manager = new Manager("John Smith", 1, "johnsmith@gmail.com", 50);

      expect(manager).toBeInstanceOf(Manager);
      expect(manager.name).toEqual("John Smith");
      expect(manager.id).toEqual(1);
      expect(manager.email).toEqual("johnsmith@gmail.com");
      expect(manager.officeNumber).toEqual(50);
    });
  });

  // Test getName() method
  describe("getName", () => {
    it("Should return the object's name property", () => {
      const manager = new Manager("John Smith", 1, "johnsmith@gmail.com", 50);

      expect(manager.getName()).toEqual("John Smith");
    });
  });

  // Test getId() method
  describe("getId", () => {
    it("Should return the object's id property", () => {
      const manager = new Manager("John Smith", 1, "johnsmith@gmail.com", 50);

      expect(manager.getId()).toEqual(1);
    });
  });

  // Test getEmail() method
  describe("getEmail", () => {
    it("Should return the object's email property", () => {
      const manager = new Manager("John Smith", 1, "johnsmith@gmail.com", 50);

      expect(manager.getEmail()).toEqual("johnsmith@gmail.com");
    });
  });

  // Test getRole() method
  describe("getRole", () => {
    it("Should return the string 'Manager'", () => {
      const manager = new Manager("John Smith", 1, "johnsmith@gmail.com", 50);

      expect(manager.getRole()).toEqual("Manager");
    });
  });
});