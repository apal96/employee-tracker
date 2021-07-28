const inquirer = require('inquirer');
//Options to view all departments, view al roles, view all employees, add a department, add a role, add an employee, and update an employee role

function promptUser(query){
    inquirer.prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'viewOrAdd',
            choices: ['View Departments', 'View Roles','View Employees','Add Department','Add Role','Add Employee','Update Employee Role','Exit']

        }
    ]).then((userResponse) => {
        console.log(userResponse);
        handleUserOptions(query, userResponse); 
    })
};
function handleUserOptions(query, response){
    if(response.viewOrAdd ==="View Departments"){
        console.log("view dept");
        const sql  = `SELECT department.name AS department, role.department_id FROM role LEFT JOIN department ON role.department_id = department.id ORDER BY department.name;`;
        query.query(sql, (err, rows) => {
            if (err) {
              error: err.message;
              return;
            }
           else{
             console.log(rows)
             promptUser();
            };
          });
        

    }
    else if(response.viewOrAdd ==="View Roles"){
        console.log("view Roles");
        const sql  = `SELECT role.title AS title, role.id AS role_id ,role.department_id AS role_dept ,role.salary AS salary FROM role LEFT JOIN department ON role.department_id = department.id ORDER BY department.name;`;
        query.query(sql, (err, rows) => {
            if (err) {
              error: err.message;
              return;
            }
           else{
             console.log(rows)
             promptUser();
            };
          });
       
    }
    else if(response.viewOrAdd ==="View Employees"){
        console.log("view Employees");
        const sql  = `SELECT employee.id AS employee_id, employee.first_name AS first_name ,employee.last_name AS last_name, role.id AS role_id FROM employee LEFT JOIN role ON employee.role_id = role.id ORDER BY employee.last_name;`;
        query.query(sql, (err, rows) => {
            if (err) {
              error: err.message;
              return;
            }
           else{
             console.log(rows)
             promptUser();
            };
          });
  
    }
    else if(response.viewOrAdd ==="Add Department"){
        console.log("Add Department");
        promptUser();
    }
    else if(response.viewOrAdd ==="Add Role"){
        console.log("Add Role");
        promptUser();
    }
    else if(response.viewOrAdd ==="Add Employee"){
        console.log("Add Role");
        promptUser();
    }
    else if(response.viewOrAdd ==="Update Employee Role"){
        console.log("Update Employee Role");
        promptUser();
    }
     else{
        console.log("Goodbye");
    }
};

// promptUser();

module.exports = {promptUser};


