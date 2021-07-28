-- including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
SELECT employee.id AS employee_id, employee.first_name AS first_name ,employee.last_name AS last_name, role.id AS role_id
FROM employee
LEFT JOIN role
ON employee.role_id = role.id
ORDER BY employee.last_name;
