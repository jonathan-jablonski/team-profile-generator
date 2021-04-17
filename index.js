const inquirer = require('inquirer');
const fs = require('fs');
const questions = [{
        type: 'input',
        name: 'employeeName',
        message: "What's their first and last name?"
    },
    {
        type: 'input',
        name: 'employeeId',
        message: "What's their employee ID?"
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: "What's their email address?"
    },
    {
        type: 'list',
        name: 'employeeRole',
        message: 'Are they a manager, engineer, or intern?',
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
        const employeeName = `${answers.employeeName}`;
        const employeeRole = `${answers.employeeRole}`;
        const employeeId = `${answers.EmployeeId}`;
        const employeeEmail = `${answers.employeeEmail}`;
        console.log(employeeName, employeeEmail, employeeId, employeeRole)
        if (answers.addAnotherEmployee) {
          employeeQuestions();
        } else {
          console.log('All Done');
        }
    });
}
function managerQuestions() {
    console.log("Build your team!");
    inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "Team Manager:",
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
        message: "Team Manager ID Number:",
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
        message: "Team Manager Email Address:",
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
      const employeeInfo = new Employee(response);
      employeeQuestions();
    });
  }
managerQuestions();