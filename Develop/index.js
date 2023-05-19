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
        message: "Please provide a relative path to the image you want, using ![alt text](.png)",
        name: "screenshot"
    },
    {
        type: "input",
        message: "What are the key features of the application?",
        name: "features"
    },
    {
        type: "input",
        message: "Please provide a valid email address.",
        name: "email"
    },
    {
        type: "input",
        message: "List all collaborators (links to their GitHub Profile)",
        name: "contributors",
        default: ""
    },
    {
        type: "input",
        message: "Were there any third-party assets or tutorials used that require attribution?",
        name: "thirdparty",
        default: ""
    },
    {
        type: "input",
        message: "Provide walkthrough of required tests if applicable",
        name: "test",
        default: ""
    },
    {
        type: "input",
        message: "Add your GitHub so users can ask questions",
        name: "github"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), filelName), data);
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