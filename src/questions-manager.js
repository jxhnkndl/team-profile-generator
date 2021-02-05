// Prompts: Add new manager
const addManager = [
  {
    name: 'role',
    type: 'confirm',
    message: 'Welcome to the Team Profile Generator. Are you ready to begin?',
  },
  {
    name: 'name',
    type: 'input',
    message: 'Your Name:',
  },
  {
    name: 'id',
    type: 'input',
    message: 'Your Employee ID:',
  },
  {
    name: 'email',
    type: 'input',
    message: 'Your Email Address:',
  },
  {
    name: 'officeNumber',
    type: 'input',
    message: 'Your Office Number:',
  },
  {
    name: 'upNext',
    type: 'list',
    choices: ['Add Engineer', 'Add Intern', 'Complete Team'],
    message: 'What would you like to do for your team next?',
  },
];

module.exports = addManager;