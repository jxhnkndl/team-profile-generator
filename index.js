// Import packages
const fs = require('fs');
const inquirer = require('inquirer');

// Import classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Team members
const team = [];

// Questions: Create manager
const questions = [
  [
    {
      name: 'name',
      type: 'input',
      message: 'What is your name?',
    },
    {
      name: 'upNext',
      type: 'list',
      choices: ['Add Engineer', 'Add Intern', 'Complete Team'],
      message: 'What would you like to do next?',
    },
  ],
  [
    {
      name: 'name',
      type: 'input',
      message: "Engineer's Name",
    },
    {
      name: 'upNext',
      type: 'list',
      choices: ['Add Engineer', 'Add Intern', 'Complete Team'],
      message: 'What would you like to do next?',
    },
  ],
  [
    {
      name: 'name',
      type: 'input',
      message: "Intern's Name",
    },
    {
      name: 'upNext',
      type: 'list',
      choices: ['Add Engineer', 'Add Intern', 'Complete Team'],
      message: 'What would you like to do next?',
    },
  ],
];

// Test questions (0 = Manager, 1 = Engineer, 2 = Intern)
function ask(questionArr) {
  // Start application by creating manager
  inquirer
    .prompt(questionArr)
    .then((member) => {
      // Push newly created team member object to team array
      team.push(member);

      // Determine whether to create a new team member or exit app
      if (member.upNext === 'Add Engineer') {
        ask(questions[1]);
      } else if (member.upNext === 'Add Intern') {
        ask(questions[2]);
      } else {
        console.log('Process complete.');
        console.log(team);
      }
    })
    .catch((err) => console.log(err));
}

// Init app
ask(questions[0]);
