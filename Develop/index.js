// TODO: Include packages needed for this application
const fs = require("fs"); //file system package, node module
const inquirer = require("inquirer"); //software required for npm
const path = require("path"); //taking the question responses and putting them into the generator
const generateMarkdown = require("./utils/generateMarkdown.js"); 
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
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fielName), data);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating Professional README.md File...");
    writeToFile("./utils.README.md", generateMarkdown({ ...responses }));
});
}
// Function call to initialize app
init();