DROP DATABASE IF EXISTS department_db;
CREATE DATABASE department_db;

USE department_db;
SELECT DATABASE ();
CREATE TABLE department(
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(30) NOT NULL -- will hold department name
);
CREATE TABLE role(
    id INT NOT NULL PRIMARY KEY,
    title VARCHAR(30) NOT NULL, -- will hold role title
    salary DECIMAL NOT NULL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
    ON DELETE SET NULL 
);
CREATE TABLE employee(
    id INT NOT NULL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES role(id)
    ON DELETE SET NULL
    -- manager_id 
);