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
        if(response.viewOrAdd ==="View Departments"){
            console.log("view dept");
        }
        else if(response.viewOrAdd ==="View Roles"){
            console.log("view Roles");
        }
        else if(response.viewOrAdd ==="View Employees"){
            console.log("view Employees");
        }
        else if(response.viewOrAdd ==="Add Department"){
            console.log("Add Department");
        }
        else if(response.viewOrAdd ==="Add Role"){
            console.log("Add Role");
        }
        else if(response.viewOrAdd ==="Add Employee"){
            console.log("Add Role");
        }
        else if(response.viewOrAdd ==="Update Employee Role"){
            console.log("Add Employee Role");
        }
         else{
            console.log("Goodbye");
        }
        
        
    })
};
promptUser();



