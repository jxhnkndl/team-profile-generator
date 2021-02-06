// Prompts: Add new engineer
const addEngineer = [
  {
    name: 'name',
    type: 'input',
    message: "Engineer's Name:",
  },
  {
    name: 'id',
    type: 'input',
    message: "Engineer's Employee ID:",
  },
  {
    name: 'email',
    type: 'input',
    message: "Engineer's Email Address:",
    validate: function (value) {
      const re = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
      const isEmail = re.test(value);
    
      if (isEmail) return isEmail;
      else return 'Please use a valid email address.'
    }
  },
  {
    name: 'github',
    type: 'input',
    message: "Engineer's GitHub Username:",
  },
  {
    name: 'upNext',
    type: 'list',
    choices: ['Add Engineer', 'Add Intern', 'Complete Team'],
    message: 'What would you like to do for your team next?',
  },
];

module.exports = addEngineer;