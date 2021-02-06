// Prompts: Add new intern
const addIntern = [
  {
    name: 'name',
    type: 'input',
    message: "Intern's Name:",
  },
  {
    name: 'id',
    type: 'input',
    message: "Intern's Employee ID:",
  },
  {
    name: 'email',
    type: 'input',
    message: "Intern's Email Address:",
    validate: function (value) {
      const re = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
      const isEmail = re.test(value);
    
      if (isEmail) return isEmail;
      else return 'Please use a valid email address.'
    }
  },
  {
    name: 'school',
    type: 'input',
    message: "Intern's College or University:",
  },
  {
    name: 'upNext',
    type: 'list',
    choices: ['Add Engineer', 'Add Intern', 'Complete Team'],
    message: 'What would you like to do for your team next?',
  },
];

module.exports = addIntern;