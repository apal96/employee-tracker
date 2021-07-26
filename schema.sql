DROP DATABASE IF EXISTS department_db;
CREATE department_db;

USE department_db;
CREATE TABLE departments(
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(30) -- will hold department name
);
