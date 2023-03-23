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
