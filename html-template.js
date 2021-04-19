const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const fs = require('fs');
const Employee = require('./lib/employee');
const html = [];

    html.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );
    html.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );
    html.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

const managerMarkup = (Manager) => {
    console.log(Manager);
    return `<div class="card">
<div class="card-header">
    <h2 class="card-title">${ Manager.employeeName }</h2>
    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item"> ID #: ${ Manager.employeeId }</li>
        <li class="list-group-item"> Email: <a href="mailto:${ Manager.employeeEmail }">${ Manager.employeeEmail }</a></li>
        <li class="list-group-item"> Office Number: ${ Manager.office }</li>
    </ul>
</div>
</div>
`}

const internMarkup = (Intern) => {
    console.log(Intern);
    return `<div class="card">
<div class="card-header">
    <h2 class="card-title">${ Intern.employeeName }</h2>
    <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item"> ID #: ${ Intern.employeeId }</li>
        <li class="list-group-item"> Email: <a href="mailto:${ Intern.employeeEmail }">${ Intern.employeeEmail }</a></li>
        <li class="list-group-item"> School: ${ Intern.school }</li>
    </ul>
</div>
</div>
`}

const engineerMarkup = (Engineer) => {`<div class="card">
<div class="card-header">
    <h2 class="card-title">${ employeeName }</h2>
    <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Engineer</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item"> ID #: ${ employeeId }</li>
        <li class="list-group-item"> Email: <a href="mailto:${ employeeEmail }">${ employeeEmail }</a></li>
        <li class="list-group-item"><span class="iconify" data-icon="logos-github-octocat" data-inline="false" data-width="20px" data-height="20px"></span> GitHub: <a href="https://github.com/${github}" target="_blank" rel="noopener noreferrer">${ github }</a></li>
    </ul>
</div>
</div>
`}

function render (teamMembers) {
    console.log(teamMembers);
    fs.writeFile("./src/manager.html", managerMarkup(Manager), (err) => {
        if (err)
            console.log(err);
        else {
            console.log('Manager file written successfully');
        }
    })
//     fs.writeFile('profiles.html', engineerMarkup, (err) => {
//         if (err)
//             console.log(err);
//         else {
//             console.log('Intern file written successfully');
//         }
//     })
    fs.writeFile('./src/intern.html', internMarkup(Intern), (err) => {
        if (err)
            console.log(err);
        else {
            console.log('Intern file written successfully');
        }
    })
}

module.exports = render;