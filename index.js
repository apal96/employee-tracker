const inquirer = require('inquirer');
//Options to view all departments, view al roles, view all employees, add a department, add a role, add an employee, and update an employee role

function promptUser(){
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'viewOrAdd',
            choices: ['View Departments', 'View Roles','View Employees','Add Department','Add Role','Add Employee','Update Employee Role','Exit']

        }
    ]).then((response) => {
        console.log(response);
    })
};
promptUser();



