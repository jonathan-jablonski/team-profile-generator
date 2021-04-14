const inquirer = require('inquirer');
const fs = require('fs');
        // const employeeName = `${answers.employeeName}`;
        // const employeeRole = `${answers.employeeRole}`;
        // const employeeId = `${answers.EmployeeId}`;
        // const employeeEmail = `${answers.employeeEmail}`;
        // })
const questions = [{
        type: 'input',
        name: 'employeeName',
        message: "What's your first and last name?"
    },
    {
        type: 'input',
        name: 'employeeId',
        message: "What's your employee ID?"
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: "What's your email address?"
    },
    {
        type: 'list',
        name: 'employeeRole',
        message: 'Are you a manager, engineer, or intern?',
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type: 'confirm',
        name: 'addAnotherEmployee',
        message: 'Would you like to add another team member?'
    }
];

function employeeQuestions() {
    console.log('Add a team member or two!')
    inquirer.prompt(questions)
        .then(answers => {
            console.log(`${answers.addAnotherEmployee}`);
    });
function managerQuestions() {
    console.log("Build your team!");
    inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the team manager's name?",
        validate: answer => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        }
      },
      {
        type: "input",
        name: "managerId",
        message: "What is the team manager's id?",
        validate: answer => {
          const pass = answer.match(
            /^[1-9]\d*$/
          );
          if (pass) {
            return true;
          }
          return "Please enter a positive number greater than zero.";
        }
      },
      {
        type: "input",
        name: "managerEmail",
        message: "What is the team manager's email?",
        validate: answer => {
          const pass = answer.match(
            /\S+@\S+\.\S+/
          );
          if (pass) {
            return true;
          }
          return "Please enter a valid email address.";
        }
      }
    ]).then(answers => {
      employeeQuestions()
      
    });
  }
};

managerQuestions();

module.exports();