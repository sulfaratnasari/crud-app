# EMPLOYEE CRUD APP - Sulfa Ratna Sari

This app is to manage employees data:
- Create new employee
- Update employee data
- View all employee data
- View employee detail
- Delete employee data

# Installation

- node.js
- npm
- npm i -g @adonisjs/cli
- mysql

## Setup

- npm install
- create db connection to localhost:3306, username:root, database name: adonis, using mysql
- or edit the .env file to match your database settings.


### Migrations

Run the following command to run startup migrations.
- adonis migration:run
- adonis seed

### Run

- adonis serve --dev
- Open http://localhost:3333 then click login or http://localhost:3333/login on browser
- login with email: admin@mail.com, password:root
- visit API documentation here: http://localhost:3333/docs/
