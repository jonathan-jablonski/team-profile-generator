const Manager = require('./lib/manager');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const teamMembers = [];
const inquirer = require('inquirer');
const fs = require('fs');
const Intern = require('./lib/intern');

// Employee questions
const baseQuestions = [
  {
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

// Engineer question
const engiQuestion = [
  {
    type: 'input',
    name: 'github',
    message: "GitHub Profile: "
  }
];

// Intern question
const internQuestion = [
  {
    type: 'input',
    name: 'school',
    message: "School:"
  }
];

function employeeQuestions() {
  console.log('Add a team member!')
  inquirer.prompt(baseQuestions)
    .then(answers => {
      console.log(`${answers.addAnotherEmployee}`);
      const employeeName = `${answers.employeeName}`;
      const employeeRole = `${answers.employeeRole}`;
      const employeeId = `${answers.EmployeeId}`;
      const employeeEmail = `${answers.employeeEmail}`;
      const addAnotherEmployee = `${answers.addAnotherEmployee}`;
      if (answers.employeeRole === 'Engineer') {
        inquirer.prompt(engiQuestion).then((engineerInfo) => {
          const engineer = new Engineer(
            answers.employeeName,
            answers.employeeId,
            answers.employeeRole,
            answers.github
          );
          teamMembers.push(engineer);
          if (answers.addAnotherEmployee) {
            employeeQuestions();
          }
        }
        );
      } else if (answers.employeeRole === 'Intern') {
        inquirer.prompt(internQuestion).then((internInfo) => {
          console.log(internInfo);
          const intern = new Intern( 
            answers.employeeName,
            answers.employeeId,
            answers.employeeRole,
            answers.school
          );
          teamMembers.push(intern);
          if (answers.addAnotherEmployee) {
            employeeQuestions();
          }
        })
      };
    });
}
managerQuestions();
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
    },
    {
      type: "input",
      name: "office",
      message: "Office Number:",
      validate: answer => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      }
    },
    {
      type: 'confirm',
      name: 'addAnotherEmployee',
      message: 'Would you like to add another team member?'
    }


  ]).then(answers => {
    const employeeInfo = new Employee(answers)
    if (answers.addAnotherEmployee === true) {
      employeeQuestions();
    }
  })
};