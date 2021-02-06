# Team Profile Generator

![html](https://img.shields.io/github/languages/top/jxhnkndl/team-profile-generator?style=plastic)
![commit](https://img.shields.io/github/last-commit/jxhnkndl/team-profile-generator?style=plastic)
![license](https://img.shields.io/static/v1?label=license&message=MIT&color=orange&style=plastic)


## Table of Contents
* [Description](#description)
* [Technologies](#technologies)
* [Installation](#installation)
* [Usage](#usage)
* [Application Demo](#application-demo)
* [Tests](#tests)
* [License](#license)
* [Contact](#contact)


## Description
The Team Profile Generator uses a series of command line prompts to collect basic contact details about the members of a software development team. Once the team has been created, the application outputs a clean, Bootstrap styled HTML document containing cards for each of the team's individual profiles.


## Technologies
**Core Technologies:**  
Node.js, JavaScript, Inquirer.js, HTML, Bootstrap 4  

**Supplmentary Packages:**  
Outdent, js-beautify


## Installation
This application requires Node.js and npm to run. To check whether Node.js and npm are installed locally, run:
```
node -v
```
```
npm -v
```
If Node and npm are already installed, the commands above should return version numbers. Visit [Node.js](http://www.nodejs.org/) and [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) for full installation details and documentation.  

The Team Profile Generator also requires the installation of several third-party modules including Inquirer.js, js-beautify, Outdent, and Jest. To install the project and its npm dependencies, navigate to the project's root directory and run:
```
npm install
```
Once all third-party packages have been successfully installed, the application is ready to use. For more details, reference the application's `package.json` file.


## Usage
To launch the application from the command line, navigate to the project's root directory and run:

```
node index.js
```


The application begins by collecting information for the team manager's profile (required) before presenting the user with the option to add an engineer, add a profile for an intern, or exit the program:

![Preview-1](assets/screenshots/team-profile-generator-01.png)

While the application requires the creation of only a single manager profile, any number of engineer and intern profiles in any blend can be added to the team.  

Once the user has finished adding team member profiles, selecting the "Complete Team" option from the navigation menu will initiate final stages of building the development team's profile:

![Preview-2](assets/screenshots/team-profile-generator-02.png)

The application will format the response data, generate pre-styled HTML card components for each profile, insert the entire deck of profile cards into a HTML document wrapper, and write the new document as `/dist/team-profiles.html` (the `/dist` folder is contained within the application's root directory).

![Preview-3](assets/screenshots/team-profile-generator-03.png)

## Application Demo
The following video documents the user journey from application launch through the generation of a pre-styled HTML document containing profile cards for each team member added. Use this video to supplement the documentation above: 

[![Application Preview](assets/readme-generator-demo.gif)](https://drive.google.com/file/d/1etho5UZRIpRxv737bAu4iUli7TLAbhLT/view)


## Tests
The Team Profile Generator uses the Jest testing framework. Each of the four primary classes has its own test suite to ensure successful profile instantiation. To run all four suites:
```
npm run test
```


## License
Copyright (c) 2021 J.K. Royston  
Licensed under the [MIT License](https://opensource.org/licenses/MIT).


## Contact
J.K. Royston  
<jkroyston@gmail.com>  
[GitHub](https://www.github.com/jxhnkndl)