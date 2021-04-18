const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const fs = require('fs');


const managerMarkup = `<div class="card">
<div class="card-header">
    <h2 class="card-title">${ employeeName }</h2>
    <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${ employeeRole }}</h3>
</div>
<div class="card-body">
    <ul class="list-group">
        <li class="list-group-item"> ID #: ${ employeeId }</li>
        <li class="list-group-item"> Email: <a href="mailto:${ employeeEmail }">${ employeeEmail }</a></li>
        <li class="list-group-item"> Office Number: ${ office }</li>
    </ul>
</div>
</div>
`

const internMarkup = `<div class="card">
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
`

const engineerMarkup = `<div class="card">
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
`

function managerHTML () {
    fs.writeFile('profiles.html', managerMarkup, (err) => {
        if (err)
            console.log(err);
        else {
            console.log('File written successfully');
        }
    })
}