HEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
SELECT role.title AS title, role.id AS role_id ,role.department_id AS role_dept ,role.salary AS salary
FROM role
LEFT JOIN department
ON role.department_id = department.id
ORDER BY department.name;
