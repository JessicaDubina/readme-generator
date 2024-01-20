//adding packages needed
let inquirer = require('inquirer');
let fs = require('fs');

//readme.me outline to populate with answers
const generateReadme = ({title, description, installation, usage, license, contributing, tests, username, email}) => 
    `# ${title}
    
### Description
${description}

### Table of Contents
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

## License
This project is covered under the ${license} license

## Contributing
${contributing}

## Tests
${tests}

## Questions
Github: ${username}\n
For additional information, please contact me at ${email}`;

//questions for the user
const init = () => {
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
            type: "input",
            name: "installation",
            message: "Please enter the installation instructions.",
        },
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
        //populate the readme outline with the given answers
        const readmePage = generateReadme(answers);

        //write readme file and give message to confirm success, or if there was an error
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
}

//initialize the app
init ();

