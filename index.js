//importing fs package
const fs = require('fs');
const inquirer = require('enquirer');




inquirer
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
  ])
  .then((response) =>{
    let title = `# ${response.Title}`;
    let description = `## Descrition \n ${response.Description}`;
    let usage = `${response.Usage}\n ![${response.Screenshot}] \n ${response.Deployed}`;
    const table = `## Table of content\n - [Usage](#usage)\n- [Features](#features)` 
    let doc = `${title}\n${description}\n${table}\n${usage}`
    fs.writeFile('./assets/README.md', doc,(err) =>
    err ? console.log(err) : console.log('Success!')
    );

  }
    
  );

