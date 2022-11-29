// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDown = require("./utils/generateMarkdown.js");


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
        message: 'Enter your Project name, use standard file naming practices: '
    },

    // enter description
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project: '
    },

    // select a license from a list
    {
        type: 'list',
        name: 'license',
        message: 'Select a license for your project:',
        choices: ['Apache', 'Boost', 'BSD 2', 'BSD 3', 'IBM', 'ISC', 'MIT', 'Mozilla', 'Perl', 'None'],
    },

    // installation instructions
    {
        type: 'input',
        name: 'installation',
        message: 'Enter information on how to install dependancies: ',
    },

    // usage information
    {
        type: 'input',
        name: 'usage',
        message: 'Enter any information the user may need to know about the use this application: '
    },

    // Contributing guidelines
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter any information the user may need to know about contributing to this repository: '
    },

    // test instructions
    {
        type: 'input',
        name: 'test',
        message: 'What are instructions for testing this application?: ',
    }

];




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.log(err)
            : console.log("created");
    });
}

// TODO: Create a function to initialize app
function init() {
    console.log(`
    Hello, and welcome to the README Generator

    To create your Professional README, 
    please read all of the prompts,
    follow all of the instructions,
    and answer all questions with your thorough professional responses.
    If you do not enter any text, the section will still generate.
    All sections and inputs can be edited after creation
                     or
    If you would like to exit and start over hit "ctrl & c"

    Thank You

    `)

    inquirer
       
        .prompt(questions)
        .then((data) => {
            const dataObject = generateMarkDown(data);

            // file name, then Data to be added to file
            writeToFile(data.projectName + "README.md", dataObject);
        });
}

// Function call to initialize app
init();
