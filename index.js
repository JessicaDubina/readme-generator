// TODO: Include packages needed for this application
let inquirer = require('inquirer');
let fs = require('fs');

// TODO: Create an array of questions for user input
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
    {
        type: "editor",
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
        options: ["MIT", "Apache-2.0", "GPL-3.0","BSD-2-Clause","BSD-3-Clause","BSD-4-Clause", "UNLICENCED"],
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
