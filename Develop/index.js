// TODO: Include packages needed for this application
const inquirer = inquire('inquirer');
const fs = require('fs');
const generateMarkdown = require('.utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of this project?",
        name: "title"
    },
    {
        type: "input",
        message: "Why did you build this project?",
        name: "why"
    },
    {
        type: "input",
        message: "What problem does it solve?",
        name: "problem"
    },
    {
        type: "input",
        message: "What did you learn?",
        name: "learn"
    },
    {
        type: "input",
        message: "How can a user install this application?",
        name: "install"
    },
    {
        type: "input",
        message: "Add a screenshot using ![alt text](.png)", //place screenshot info in here
        name: "screenshot"
    },
    {
        type: "input",
        message: "What are the key features of the application?",
        name: "features"
    },
    {
        type: "input",
        message: "List all collaborators and links to their GitHub Profile",
        name: "contributors"
    },
    {
        type: "input",
        message: "Were there any third-party assets or tutorials used that require attribution?",
        name: "thirdparty"
    },
    {
        type: "input",
        message: "How can a user test the application?",
        name: "test"
    },
    {
        type: "input",
        message: "Add your GitHub so users can ask questions",
        name: "github"
    },
    {
        type: "input",
        message: "How can other developers contribute?",
        name: "contribute"
    },
].then((data)) => (
    console.log(data);
    fs.writeFile('README.md', generateMarkdown(data)),
    error =>{
    if (error) {
            console.log('Please input all the data')
        }
        console.log('Your README was generated')
    }
);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();