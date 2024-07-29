const inquirer= require('inquirer');
const pool= require('./connection');
const CTable= require('console.table')



function initialPrompt() {
    inquirer.prompt([
      {
        name: "action",
        type: "list",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "View all roles",
          "View all employees",
          "Add a new department",
          "Add a new role",
          "Add a new employee",
          "Update employee roles",
          "Exit"
        ]
      }])
      .then(function (answer) {
        switch (answer.action) {
          case "View all departments":
            viewDepartments();
            break;
          case "View all roles":
            viewRoles();
            break;
          case "View all employees":
            viewEmployees();
            break;
          case "Add a new department":
            addDepartment();
            break;
          case "Add a new role":
            addRole();
            break;
          case "Add a new employee":
            addEmployee();
            break;
          case "Update employee roles":
            updateEmployee();
            break;
          case "exit":
            pool.end();
            break;
        }
      });
  };


  function viewDepartments (){
    pool.query('SELECT * FROM department',(err,res)=>{
        if (err) throw err
        console.table(res.rows)
        initialPrompt()
    })
  }

  function viewRoles (){
    pool.query('SELECT * FROM role',(err,res)=>{
        if (err) throw err
        console.table(res.rows)
        initialPrompt()
    })
  }

  function viewEmployees (){
    pool.query('SELECT * FROM employee',(err,res)=>{
        if (err) throw err
        console.table(res.rows)
        initialPrompt()
    })
  }
  function addDepartment() {
    inquirer.prompt([
        {
            name: 'name',
            type: 'input',
            message: 'Enter the name of the new department:'
        }
    ])
    .then(function (answer) {
        pool.query('INSERT INTO department (name) VALUES ($1)', [answer.name], (err, res) => {
            if (err) throw err;
            console.log('Department added successfully.');
            initialPrompt();
        });
    });
}

function addRole() {
    inquirer.prompt([
        {
            name: 'title',
            type: 'input',
            message: 'Enter the title of the new role:'
        },
        {
            name: 'salary',
            type: 'input',
            message: 'Enter the salary for the new role:'
        },
        {
            name: 'department_id',
            type: 'input',
            message: 'Enter the department ID for the new role:'
        }
    ])
    .then(function (answer) {
        pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [answer.title, answer.salary, answer.department_id], (err, res) => {
            if (err) throw err;
            console.log('Role added successfully.');
            initialPrompt();
        });
    });
}

function addEmployee() {
    inquirer.prompt([
        {
            name: 'first_name',
            type: 'input',
            message: 'Enter the first name of the new employee:'
        },
        {
            name: 'last_name',
            type: 'input',
            message: 'Enter the last name of the new employee:'
        },
        {
            name: 'role_id',
            type: 'input',
            message: 'Enter the role ID for the new employee:'
        },
        {
            name: 'manager_id',
            type: 'input',
            message: 'Enter the manager ID for the new employee (leave blank if none):',
            default: null
        }
    ])
    .then(function (answer) {
        const manager_id = answer.manager_id ? answer.manager_id : null;
        pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [answer.first_name, answer.last_name, answer.role_id, manager_id], (err, res) => {
            if (err) throw err;
            console.log('Employee added successfully.');
            initialPrompt();
        });
    });
}

function updateEmployee() {
    inquirer.prompt([
        {
            name: 'employee_id',
            type: 'input',
            message: 'Enter the ID of the employee you want to update:'
        },
        {
            name: 'role_id',
            type: 'input',
            message: 'Enter the new role ID for the employee:'
        }
    ])
    .then(function (answer) {
        pool.query('UPDATE employee SET role_id = $1 WHERE id = $2', [answer.role_id, answer.employee_id], (err, res) => {
            if (err) throw err;
            console.log('Employee role updated successfully.');
            initialPrompt();
        });
    });
}










  initialPrompt();