// Import class constructors
const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

// Test Employee class
describe("Engineer", () => {
  
  // Test object instantiation
  describe("Engineer object instantiation", () => {
    it("Creates an object with name, id, email, and github properties", () => {
      const engineer = new Engineer("John Smith", 1, "johnsmith@gmail.com", "johncodes");

      expect(engineer).toBeInstanceOf(Engineer);
      expect(engineer.name).toEqual("John Smith");
      expect(engineer.id).toEqual(1);
      expect(engineer.email).toEqual("johnsmith@gmail.com");
      expect(engineer.github).toEqual("johncodes");
    });
  });

  // Test getName() method
  describe("getName", () => {
    it("Should return the object's name property", () => {
      const engineer = new Engineer("John Smith", 1, "johnsmith@gmail.com", "johncodes");

      expect(engineer.getName()).toEqual("John Smith");
    });
  });

  // Test getId() method
  describe("getId", () => {
    it("Should return the object's id property", () => {
      const engineer = new Engineer("John Smith", 1, "johnsmith@gmail.com", "johncodes");

      expect(engineer.getId()).toEqual(1);
    });
  });

  // Test getEmail() method
  describe("getEmail", () => {
    it("Should return the object's email property", () => {
      const engineer = new Engineer("John Smith", 1, "johnsmith@gmail.com", "johncodes");

      expect(engineer.getEmail()).toEqual("johnsmith@gmail.com");
    });
  });

  // Test getGithub() method
  describe("getGithub", () => {
    it("Should return the object's github property", () => {
      const engineer = new Engineer("John Smith", 1, "johnsmith@gmail.com", "johncodes");

      expect(engineer.getGithub()).toEqual("johncodes");
    });
  });

  // Test getRole() method
  describe("getRole", () => {
    it("Should return the string 'Engineer", () => {
      const engineer = new Engineer("John Smith", 1, "johnsmith@gmail.com", "johncodes");

      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});