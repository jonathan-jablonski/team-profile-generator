const inquirer = require('inquirer');
const fs = require('fs');

const questions = [{
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
    }
];

function employeeQuestions() {
    inquirer.prompt(questions).then(answers => {
        const employeeRole = `${answers.employeeRole}`;
        })
};
employeeQuestions();