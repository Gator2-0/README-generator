//importing fs package
const fs = require('fs');
const enquirer = require('enquirer');
const fileLocation = './assets/README.md'



enquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your repo?',
      name: 'Title',
    },
    {
      type: 'input',
      message: 'Description- This project has for goal to:',
      name: 'Description',
    },
    {
      type: 'input',
      message: 'How to install this app?',
      name: 'Installation',
    },
    {
      type: 'input',
      message: 'How to use this app?',
      name: 'Usage',
    },
    {
      type: 'input',
      message: 'the screenshot location is:',
      name: 'Screenshot',
    },
    {
      type: 'input',
      message: 'the deployed app location is:',
      name: 'Deployed',
    },
    {
      type: 'input',
      message: 'Who contributed to this project',
      name: 'Credit',
    },
    {
      type: 'input',
      message: 'How to test this app?',
      name: 'Test',
    },
    {
      type: 'select',
      message: 'Which license did you use?',
      choices: ['MIT','GPLv2','Apache','Other'],
      name: 'Icon'
    },
    {
      type: 'input',
      message: 'What license did you choose?',
      name: 'License',
    },
    {
      type: 'input',
      message: 'What is your github username?',
      name: 'Question',
    },
  ])
  .then((response) =>{
    console.log(response.Icon);
    let icon ;
    switch(response.Icon){
      case 'MIT':
        icon = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
      case 'GLv2':
        icon = "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
        break;
      case 'Apache':
        icon =  "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
    }

    let title = `# ${response.Title}\n${icon}`;
    let description = `## Descrition \n ${response.Description}`;
    let usage = `## Usage\n${response.Usage}\n ![${response.Screenshot}] \n ${response.Deployed}`;
    let installation = `## Installation\n${response.installation}`;
    let license = `## License\n${response.license}`;
    
    let credit = `## Credit\n${response.Credit}`;
    let test = `## Test\n${response.Test}`
    let question = `## Questions\nFor question or enquiries lease contact me at ${response.Question}`
    const table = `## Table of content\n- [Installation](#installation)\n- [Usage](#usage)\n- [License](#license)\n- [Contributing](#contributing)\n- [Features](#features)\n- [Test](#test)\n- [Question](#question)`;

    let doc = `${title}\n${description}\n${table}\n${installation}\n${usage}\n${credit}\n${license}\n${test}`
    fs.writeFile(`${fileLocation}`, doc,(err) =>
    err ? console.log(err) : console.log('Success!')
    );

  }
    
  );

