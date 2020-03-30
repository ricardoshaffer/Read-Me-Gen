const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
//const util = require("util");
//const axios = require("axios");
const api = require("./utils/gh-req");
const generateMarkdown = require("./utils/generateMarkdown");


const questions = [
    {
      type: "input",
      name: "githubName",
      message: "What is your GitHub username?"
    },
    {
      type: "input",
      name: "project",
      message: "what's the name of your project?"
    }, 
    {
      type: "input",
      name: "installation",
      message: "how do you install your project?"
    },
    {
      type: "input",
      name: "food",
      message: "What is your favorite food?"
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username"
    },
    {
      type: "input",
      name: "linkedin",
      message: "Enter your LinkedIn URL."
    }
];
    function writeToFile(fileName, data){
        return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    }

function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log("searching...");
        
        api
            .client(inquirerResponses.githubName)
            .then(({ body }) => {
            console.log(data);
            writeToFile("README.md", generateMarkdown({...inquirerResponses, ...body}));
        })
    })   
} 
init ();
    
    
