const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title?"
    },
    {
        type: "input",
        name: "description",
        message:  "What is the description?"
    },
    {
        type: "input",
        name: "installation",
        message:  "What is the installation process?"
    },
    {
        type: "input",
        name: "github_username",
        message:  "What is your Github username?"
    },
    {
        type: "input",
        name: "email",
        message:  "What is your email?"
    }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const template = generateMarkdown(answers)
    
        fs.writeFile("./README.md", template, () => {
            console.log("Successfully written README file!")
        })
    })
}

// function call to initialize program
init();
