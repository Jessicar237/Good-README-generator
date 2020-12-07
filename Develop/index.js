
import {generateMarkdown} from "generateMarkdown.js";
import {writeToFile} from "fs";
import pkg from 'inquirer';

const {promt} = pkg;

// array of questions for user
const questions = [
    {
        type: "input",
        message: " What is the name of the project",
        name: "Title"
        
    },
    {
        type: "input",
        message: " What is your github user name?",
        name: "User"
        
    },
    {
        type: "input",
        message: " What is your email address? ",
        name: "email"
    },
    {
        type: "input",
        message: "Give a description of your project? ",
        name: "description"
        
    },
    {
        type: "input",
        message: " what licence does your project have?",
        name:"license"
    },
    {
        type: "input",
        message: " what command should be run to install dependecies ?",
        name: "install"
    },
    {
        type: "input",
        message: " How do you test your project? ",
        name: "test"
       
    },


];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName.data, err => {
        if (err) {
            return console.log(err);
        }
    });
}

// function to initialize program
promptUser()
  .then((answers) => writeToFile('index.js', generate(answers)))
  .then(() => console.log('Successfully wrote to index.js'))
  .catch((err) => console.error(err));


// function call to initialize program
init();

