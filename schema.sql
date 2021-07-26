DROP DATABASE IF EXISTS department_db;
CREATE DATABASE department_db;

USE department_db;
SELECT DATABASE ();
CREATE TABLE department(
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(30) NOT NULL -- will hold department name
);
CREATE TABLE employeeRole(
    id INT NOT NULL PRIMARY KEY,
    title VARCHAR(30) NOT NULL, -- will hold role title
    salary DECIMAL NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL 

);