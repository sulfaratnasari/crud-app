'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.get('/employee/list', 'EmployeeController.index').as('employee.index')
Route.get('/employee/create', 'EmployeeController.create').as('employee.create')
Route.post('/employee/store', 'EmployeeController.store').as('employee.store')
Route.get('/employee/edit/:id', 'EmployeeController.edit').as('employee.edit')
Route.post('/employee/update/:id', 'EmployeeController.update').as('employee.update')
Route.get('/employee/delete/:id', 'EmployeeController.delete').as('employee.delete')
Route.get('/employee/view/:id', 'EmployeeController.detail').as('employee.detail')
Route.get('login', 'Auth/LoginController.index').as('login.index')
Route.post('login', 'Auth/LoginController.check').as('login.check')
Route.get('logout', 'Auth/LoginController.logout').as('logout')
