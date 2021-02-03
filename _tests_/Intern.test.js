// Import class constructors
const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

// Test Employee class
describe("Intern", () => {
  
  // Test object instantiation
  describe("Intern object instantiation", () => {
    it("Creates an object with name, id, email, and school properties", () => {
      const intern = new Intern("John Smith", 1, "johnsmith@gmail.com", "University of Richmond");

      expect(intern).toBeInstanceOf(Intern);
      expect(intern.name).toEqual("John Smith");
      expect(intern.id).toEqual(1);
      expect(intern.email).toEqual("johnsmith@gmail.com");
      expect(intern.school).toEqual("University of Richmond");
    });
  });

  // Test getName() method
  describe("getName", () => {
    it("Should return the object's name property", () => {
      const intern = new Intern("John Smith", 1, "johnsmith@gmail.com", "University of Richmond");

      expect(intern.getName()).toEqual("John Smith");
    });
  });

  // Test getId() method
  describe("getId", () => {
    it("Should return the object's id property", () => {
      const intern = new Intern("John Smith", 1, "johnsmith@gmail.com", "University of Richmond");

      expect(intern.getId()).toEqual(1);
    });
  });

  // Test getEmail() method
  describe("getEmail", () => {
    it("Should return the object's email property", () => {
      const intern = new Intern("John Smith", 1, "johnsmith@gmail.com", "University of Richmond");

      expect(intern.getEmail()).toEqual("johnsmith@gmail.com");
    });
  });

  // Test getGithub() method
  describe("getSchool", () => {
    it("Should return the object's school property", () => {
      const intern = new Intern("John Smith", 1, "johnsmith@gmail.com", "University of Richmond");

      expect(intern.getSchool()).toEqual("University of Richmond");
    });
  });

  // Test getRole() method
  describe("getRole", () => {
    it("Should return the string 'Intern", () => {
      const intern = new Intern("John Smith", 1, "johnsmith@gmail.com", "University of Richmond");

      expect(intern.getRole()).toEqual("Intern");
    });
  });
});