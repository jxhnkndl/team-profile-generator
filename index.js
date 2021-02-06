// Import packages
const fs = require('fs');
const inquirer = require('inquirer');
const outdent = require('outdent');
const beautify = require('js-beautify').html;

// Import classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Import question arrays
const addManager = require('./src/question-arrays/questions-manager');
const addEngineer = require('./src/question-arrays/questions-engineer');
const addIntern = require('./src/question-arrays/questions-intern');

// Import HTML templates
const addManagerCard = require('./src/html-templates/card-manager');
const addEngineerCard = require('./src/html-templates/card-engineer');
const addInternCard = require('./src/html-templates/card-intern');
const wrapProfileCards = require('./src/html-templates/card-wrapper');

// Team members
const team = [];

// Init application
ask(addManager);

// On application launch: 
// ================================================
// 1) Call ask() with the addManager question array
// 2) Answer prompts 
// 3) Choose whether to add engineer, intern, or exit
// 3A) If engineer: Call ask() with addEngineer 
//     question array
// 3B) If intern, call ask() with addIntern question 
//     array
// 4) Cycle back to 2 and continue
// ================================================
// 5) If exit, stop cycling through question arrays

function ask(questionArr) {
  inquirer
    .prompt(questionArr)
    .then((member) => {
      team.push(member);

      if (member.upNext === 'Add Engineer') {
        ask(addEngineer);
      } else if (member.upNext === 'Add Intern') {
        ask(addIntern);
      } else {
        createProfiles(team);
      }
    })
    .catch((err) => console.log(err));
}

// Instantiate objects
function createProfiles(team) {
  // Iterate through each team member profile
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

  // Generate HTML from the newly instantiated profiles
  generateHtml(profiles);
}

// Generate HTML
function generateHtml(profiles) {
  let profileCards = '';

  // Create HTML profile cards based on memeber role
  profiles.forEach((profile) => {
    if (profile instanceof Manager) {
      const card = addManagerCard(profile);
      profileCards += card;
    } else if (profile instanceof Engineer) {
      const card = addEngineerCard(profile);
      profileCards += card;
    } else if (profile instanceof Intern) {
      const card = addInternCard(profile);
      profileCards += card;
    }
  });

  // Wrap profile cards in HTML/Bootstrap boilerplate
  const rawHtml = wrapProfileCards(profileCards);

  // Clean up and properly format the raw html
  const cleanHtml = beautify(rawHtml, { indent_size: 2 });

  // Write final HTML document
  writeHtml(cleanHtml);
};

// Write and return final HTML document
function writeHtml(cleanHtml) {
  fs.writeFile('./dist/team-profiles.html', cleanHtml, (err) => {
    if (err) throw err;
    console.log('HTML document successfully created in the /dist folder.');
  });
};
