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

// Prompts: Add new manager
const newManager = [
  {
    name: 'role',
    type: 'list',
    choices: [{ value: 'manager', name: 'Start' }],
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

// Prompts: Add new engineer
const newEngineer = [
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

// Prompts: Add new intern
const newIntern = [
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

// Control flow of inquirer prompts
const ask = (questionArr) => {
  inquirer
    .prompt(questionArr)
    .then((member) => {
      // Push newly created team member to team array
      team.push(member);

      // If upNext is engineer or intern, create a new team member
      // Otherwise, call createProfiles to instantiate objects for each member
      if (member.upNext === 'Add Engineer') {
        ask(newEngineer);
      } else if (member.upNext === 'Add Intern') {
        ask(newIntern);
      } else {
        createProfiles(team);
      }
    })
    .catch((err) => console.log(err));
};

// Instantiate class objects
const createProfiles = (team) => {
  const profiles = team.map((member) => {
    const { name, id, email } = member;

    // If profile has officeNumber property, instantiate Manager object
    if (member.hasOwnProperty('officeNumber')) {
      const { officeNumber } = member;
      return new Manager(name, id, email, officeNumber);
    }

    // If profile has github property, instantiate Engineer object
    if (member.hasOwnProperty('github')) {
      const { github } = member;
      return new Engineer(name, id, email, github);
    }

    // If profile has school property, instantiate Intern object
    if (member.hasOwnProperty('school')) {
      const { school } = member;
      return new Intern(name, id, email, school);
    }
  });

  console.log(profiles);
};

// Init app
ask(newManager);
