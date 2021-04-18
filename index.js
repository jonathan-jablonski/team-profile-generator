const Manager = require("./lib/manager");
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const teamMembers = [];
const inquirer = require("inquirer");
const fs = require("fs");
const html = require('./html-template');
const render = require('./html-template');


// Employee questions
const baseQuestions = [
  {
    type: "input",
    name: "employeeName",
    message: "What's their first and last name?",
  },
  {
    type: "input",
    name: "employeeId",
    message: "What's their employee ID?",
  },
  {
    type: "input",
    name: "employeeEmail",
    message: "What's their email address?",
  },
  {
    type: "list",
    name: "employeeRole",
    message: "Are they a manager, engineer, or intern?",
    choices: ["Manager", "Engineer", "Intern"],
  },
];

// Engineer question
const engiQuestion = [
  {
    type: "input",
    name: "github",
    message: "GitHub Profile: ",
  },
  {
    type: "confirm",
    name: "addAnotherEmployee",
    message: "Would you like to add another team member?",
  },
];

// Intern question
const internQuestion = [
  {
    type: "input",
    name: "school",
    message: "School:",
  },
  {
    type: "confirm",
    name: "addAnotherEmployee",
    message: "Would you like to add another team member?",
  },
];

function employeeQuestions() {
  console.log("Add a team member!");
  inquirer.prompt(baseQuestions).then((answers) => {
    console.log(answers);
    const employeeName = `${answers.employeeName}`;
    const employeeRole = `${answers.employeeRole}`;
    const employeeId = `${answers.EmployeeId}`;
    const employeeEmail = `${answers.employeeEmail}`;
    let employeeInfo = {
      name: employeeName,
      id: employeeId,
      email: employeeEmail,
      role: employeeRole,
    };
    if (answers.employeeRole === "Engineer") {
      inquirer.prompt(engiQuestion).then((engineerInfo) => {
        console.log(engineerInfo);
        employeeInfo.school = engineerInfo.github;
        const engineer = new Engineer(
          employeeInfo.employeeName,
          employeeInfo.employeeId,
          employeeInfo.employeeRole,
          employeeInfo.github
        );
        if (engineerInfo.addAnotherEmployee) {
          teamMembers.push(employeeInfo);
          employeeQuestions();
        } else {
          fs.writeFileSync("profiles.html", render(engineer), "utf-8");

        }
      });
    } else if (answers.employeeRole === "Intern") {
      inquirer.prompt(internQuestion).then((internInfo) => {
        console.log(internInfo);
        employeeInfo.school = internInfo.school;
        const intern = new Intern(
          employeeInfo.employeeName,
          employeeInfo.employeeId,
          employeeInfo.employeeRole,
          internInfo.school
        );
        if (internInfo.addAnotherEmployee) {
          teamMembers.push(intern);
          employeeQuestions();
        } else {
          fs.writeFileSync("profiles.html", render(intern), "utf-8");

        }
      });
    } else {
      console.log('Manager');
      if (employeeInfo.addAnotherEmployee) {
        teamMembers.push(employeeInfo);
        employeeQuestions();
      }
    }
  });
}
function managerQuestions() {
  console.log("Build your team!");
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "Team Manager:",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        },
      },
      {
        type: "input",
        name: "managerId",
        message: "Team Manager ID Number:",
        validate: (answer) => {
          const pass = answer.match(/^[1-9]\d*$/);
          if (pass) {
            return true;
          }
          return "Please enter a positive number greater than zero.";
        },
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Team Manager Email Address:",
        validate: (answer) => {
          const pass = answer.match(/\S+@\S+\.\S+/);
          if (pass) {
            return true;
          }
          return "Please enter a valid email address.";
        },
      },
      {
        type: "input",
        name: "office",
        message: "Office Number:",
        validate: (answer) => {
          if (answer !== "") {
            return true;
          }
          return "Please enter at least one character.";
        },
      },
      {
        type: "confirm",
        name: "addAnotherEmployee",
        message: "Would you like to add another team member?",
      },
    ])
    .then((answers) => {
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.office);
      teamMembers.push(manager);
      if (answers.addAnotherEmployee) {
        console.log(manager)
        employeeQuestions();
      }
      fs.writeFileSync("profiles.html", render(manager), "utf-8");
    });
}

managerQuestions();