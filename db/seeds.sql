\c work_db

INSERT INTO department(name)
VALUES ('Sales'),('Engineering'),('HR');

INSERT INTO role(title, salary, department_id)
VALUES ('Sales Rep', 50000, 1), ('Engineering Manager', 200000, 2), ('HR Manager', 100000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Maria', 'Smith', 1, NULL), ('Tim', 'John', 2, 1), ('Bob', 'Harden', 3, 1);
