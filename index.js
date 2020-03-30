const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
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
        name: "define",
        message: "what's your project about?"
      },
    {
      type: "input",
      name: "installation",
      message: "how do you install your project?"
    },
    {
      type: "input",
      name: "usage",
      message: "What's the general useage guidelines?"
    },
    {
      type: "list",
      name: "license",
      message: "What type of license would you like to select for your project?",
      choices: ["Apache", "GNU", "MIT", "None"]
    },
    {
      type: "input",
      name: "tests",
      message: "What command is used to run any tests?"  
    }
];
    function writeToFile(mdName, data){
        return fs.writeFileSync(path.join(process.cwd(), mdName), data);
    }

function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        
        api
            .ghUser(inquirerResponses.githubName)
            .then(({ data }) => {

            writeToFile("README.md", generateMarkdown({...inquirerResponses, ...data }));
        })
    })   
} 
init ();
    
    
