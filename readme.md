# Duncan Employee Tracker

This is a command-line application that interfaces with a PostgreSQL database using the Inquirer package for tracking employee data. The application allows users to manage a company's departments, roles, and employees efficiently.

## Table of Contents
1. Installation
2. Usage
3. Features
4. Technologies
5. Walkthrough Video Link
6. License
7. Questions

## Installation

1. Clone the repository:
2. Copy code: git clone <https://github.com/duncanfd24/Duncan-Employee-Tracker>
cd <https://github.com/duncanfd24/Duncan-Employee-Tracker>
3. Install dependencies:
4. Copy code
5. npm install
6. Set up PostgreSQL database:
7. Ensure PostgreSQL is installed and running on your machine.
8. Create a database named company_db.
9. Execute the SQL schema file provided in the repository to create the necessary tables.
Configure environment variables:

Create a .env file in the root directory and add your database credentials.
makefile
Copy code
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=company_db

## Usage

1. Start the application:
2. node index.js
3. Choose an option from the menu:

View all departments
View all roles
View all employees
Add a department
Add a role
Add an employee
Update an employee role

Detailed Functionality:

View all departments:
Displays a formatted table with department names and their IDs.

View all roles:
Shows job titles, role IDs, the departments they belong to, and their salaries.

View all employees:
Presents a table with employee data, including IDs, first names, last names, job titles, departments, salaries, and managers.

Add a department:
Prompts for the department name and adds it to the database.

Add a role:
Prompts for the role name, salary, and department, then adds the role to the database.

Add an employee:
Prompts for the employee’s first name, last name, role, and manager, and adds the employee to the database.

Update an employee role:
Prompts to select an employee and their new role, then updates the information in the database.

## Features

User-friendly command-line interface
Dynamic interaction with a PostgreSQL database
Easy management of departments, roles, and employees

## Technologies
Node.js
PostgreSQL
Inquirer

## Walkthrough Video Link
https://app.screencastify.com/v2/manage/videos/PBPuvnk2jwzAGmWvUkRU

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Questions
If you have any questions about the project, feel free to contact:

Fred Duncan - duncanfd40@gmail.com
GitHub: [https://github.com/duncanfd24]