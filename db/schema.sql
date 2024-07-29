DROP DATABASE IF EXISTS work_db;
CREATE DATABASE work_db;

\c work_db

CREATE TABLE department(
    id SERIAL PRIMARY KEY,
    name VARCHAR (25) UNIQUE NOT NULL
);


CREATE TABLE role(
    id SERIAL PRIMARY KEY,
    title VARCHAR (25) UNIQUE NOT NULL,
    salary DECIMAL,
    department_id INTEGER NOT NULL,
    FOREIGN KEY(department_id) REFERENCES department(id)
);

CREATE TABLE employee(
    id SERIAL PRIMARY KEY,
    first_name VARCHAR (25) UNIQUE NOT NULL,
    last_name VARCHAR (25) UNIQUE NOT NULL,
    role_id INTEGER,
    manager_id INTEGER,
    FOREIGN KEY(role_id) REFERENCES role(id),
    FOREIGN KEY(manager_id) REFERENCES employee(id)
);