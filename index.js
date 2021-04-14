const inquirer = require('inquirer');
const fs = require('fs');

function employeeQuestions() {
    inquirer
        .prompt({
            type: 'input',
            name: 'employeeId',
            message: "What's your employee ID?",
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: "What's your email address?",
        }
        )
        .then(() => {
            });
        });
}