// TODO: Include packages needed for this application
let inquirer = require('inquirer');
let fs = require('fs');

//TODO: Make a text outline to populate with the answers
const generateReadme = ({title, description, installation, usage, license, contributing, tests, username, email}) => 
    `# ${title}
    
## Description
${description}

## Table of Contents
[Installation](#installation)\n
[Usage](#usage)\n
[License](#license)\n
[Contributing](#contributing)\n
[Tests](#tests)\n
[Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## Licence
This project is covered under the ${license} license

## Contributing
${contributing}

## Tests
${tests}

## Questions
Github: ${username}\n
For additional information, please contact me at ${email}`;

// const questions = [];
inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "Please give a brief description of the project",
    },
    {
        type: "confirm",
        name: "instCheck",
        message: "Are there any installation instructions?",
    },
    // {
    //     type: "editor",
    //     name: "installation",
    //     message: "Please enter the installation instructions.",
    // },
    {
        type: "input",
        name: "usage",
        message: "Please provide any relevant usage information.",
    },
    {
        type: "list",
        name: "license",
        message: "Choose a license.",
        choices: ["MIT", "Apache-2.0", "GPL-3.0","BSD-2-Clause","BSD-3-Clause","BSD-4-Clause", "UNLICENCED"],
    },
    {
        type: "input",
        name: "contributing",
        message: "What are the contribution guidelines?",
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide any test instructions.",
    },
    {
        type: "input",
        name: "username",
        message: "What is your Github username?",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address",
    },
])
.then((answers) => {
    console.log(answers);
    const readmePage = generateReadme(answers);
    console.log(readmePage);

    // fs.writeFile('README.md', readmePage, (err) => {

    fs.writeFile(`${answers.title}.md`, readmePage, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Generated new README.md");
        }
    }) 
})
.catch((error) => {
    console.log("Something went wrong. Please try again.");
    console.log(error);
})

// TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
