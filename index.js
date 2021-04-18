const Manager = require('./lib/manager');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const teamMembers = [];
const inquirer = require('inquirer');
const fs = require('fs');

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
];

// Engineer question
const engiQuestion = [
  {
    type: 'input',
    name: 'github',
    message: "GitHub Profile: "
  },
  {
    type: 'confirm',
    name: 'addAnotherEmployee',
    message: 'Would you like to add another team member?'
  }
];

// Intern question
const internQuestion = [
  {
    type: 'input',
    name: 'school',
    message: "School: "
  },
  {
    type: 'confirm',
    name: 'addAnotherEmployee',
    message: 'Would you like to add another team member?'
  }
];

function employeeQuestions() {
  console.log('Add a team member or two!')
  inquirer.prompt(baseQuestions)
    .then(answers => {
      console.log(`${answers.addAnotherEmployee}`);
      const employeeName = `${answers.employeeName}`;
      const employeeRole = `${answers.employeeRole}`;
      const employeeId = `${answers.EmployeeId}`;
      const employeeEmail = `${answers.employeeEmail}`;
      employeeQuestions();
      if (answers.employeeRole === 'Engineer') {
        inquirer.prompt(engiQuestion).then((engineerInfo) => {
          const engineer = new Engineer(
            answers.employeeName,
            answers.employeeId,
            answers.employeeRole,
            answers.github
          );
          console.log(engineerInfo);
        }
        );
      } else if (answers.employeeRole === 'Intern') {
        inquirer.prompt(internQuestion).then((internInfo) => {
          console.log(internInfo);
          answers.employeeName,
            answers.employeeId,
            answers.employeeRole,
            answers.school
        })
      };
      if (answers.addAnotherEmployee === true) {
        employeeQuestions();
      }
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
  })
};