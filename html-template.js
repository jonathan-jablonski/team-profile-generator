const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const fs = require('fs');


const managerMarkup = (Manager) => {
    // console.log(Manager)
    // console.log(Manager[0].employeeName)
    return `<div class="card">
<div class="card-header">
    <h2 class="card-title">${ Manager[0].employeeName }</h2>
    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${ Manager[0].employeeRole }}</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item"> ID #: ${ Manager[0].employeeInfo.managerId }</li>
        <li class="list-group-item"> Email: <a href="mailto:${ Manager[0].employeeEmail }">${ Manager[0].employeeEmail }</a></li>
        <li class="list-group-item"> Office Number: ${ Manager[0].office }</li>
    </ul>
</div>
</div>
`}

const internMarkup = (Intern) => {`<div class="card">
<div class="card-header">
    <h2 class="card-title">${ employeeName }</h2>
    <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>{{ role }}</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item"> ID #: ${ employeeId }</li>
        <li class="list-group-item"> Email: <a href="mailto:${ employeeEmail }">${ employeeEmail }</a></li>
        <li class="list-group-item"> School: ${ school }</li>
    </ul>
</div>
</div>
`}

const engineerMarkup = (Engineer) => {`<div class="card">
<div class="card-header">
    <h2 class="card-title">${ employeeName }</h2>
    <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>{{ role }}</h3>
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
    fs.writeFile('profiles.html', managerMarkup(teamMembers), (err) => {
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
//     fs.writeFile('profiles.html', internMarkup, (err) => {
//         if (err)
//             console.log(err);
//         else {
//             console.log('Intern file written successfully');
//         }
//     })
// }
}
module.exports = render;