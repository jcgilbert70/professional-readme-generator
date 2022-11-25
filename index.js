// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [

    // enter user name
    {
        type: 'input',
        name: 'username',
        message: 'Enter your Github Username: '
    },

    // enter email
    {
        type: 'input',
        name: 'email',
        message: 'Enter your Email address: '
    },

    // enter project name
    {
        type: 'input',
        name: 'projectName',
        message: 'Enter your Project name: '
    },

    // enter description
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project: '
    },

    // select a liscense from a list
    {
        type: 'list',
        name: 'liscense',
        message: 'Select a liscense for your project:',
        choices: ['Apache', 'Academic', 'GNU', 'ISC', 'MIT'],
    }

];

// installation instructions

// usage information

// contribution guidelines

// test instructions




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err)
        : console.log("created");
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const dataObject = generateMarkDown(data);

            // file name, then Data to be added to file
            writeToFile("newREADME.md", dataObject);
        });
}

// Function call to initialize app
init();
