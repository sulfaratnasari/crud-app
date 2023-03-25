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
Route.get('/logout', 'Auth/LoginController.logout').as('logout')

//API

/**
* @swagger
* /auth/login:
*   post:
*     tags:
*       - Auth
*     summary: Get bearer token
*     parameters:
*       - name: body
*         description: Employee email and password
*         in: body
*         required: true
*         schema:
*           type: object
*           required:
*            - email
*           properties:
*             email:
*               type: string
*             password:
*               type: string
*     responses:
*       200:
*         description: Success
*         example:
*           type: bearer
*           token: eyxxxxxxx
*           refreshToken: dfxxxxx
*/
Route.post('/auth/login', 'Auth/LoginController.login')
Route.group(() => {

	/**
  * @swagger
  * /api/employee/view/{id}:
  *  get:
  *     tags:
  *       - Employee
  *     security:
  *        - bearerAuth: []
  *     summary: Get employee detail
  *     parameters:
  *       - name: id
  *         description: Employee ID
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Success
  *         example:
  *           name: employee_name
  *           email: employee@mail.com
  *           role: Product Manager
  *           directorate: Technology
  *           address: Jakarta
  */
	Route.get('/employee/view/:id', 'EmployeeController.detailApi').middleware(['auth:jwt'])

	/**
  * @swagger
  * /api/employee/delete/{id}:
  *  delete:
  *     tags:
  *       - Employee
  *     security:
  *        - bearerAuth: []
  *     summary: Delete employee
  *     parameters:
  *       - name: id
  *         description: Employee ID
  *         in: path
  *         required: true
  *         type: integer
  *     responses:
  *       200:
  *         description: Success
  *         example: 
  *           message: Success
  */
	Route.delete('/employee/delete/:id', 'EmployeeController.deleteApi').middleware(['auth:jwt'])

	/**
* @swagger
* /api/employee/update/{id}:
*  put:
*     tags:
*       - Employee
*     security:
*        - bearerAuth: []
*     summary: Update employee data
*     parameters:
*       - name: id
*         description: Employee ID
*         in: path
*         required: true
*         type: integer
*       - name: body
*         description: Employee data
*         in: body
*         required: true
*         schema: 
*           $ref: '#/definitions/Employee'
*     responses:
*       200:
*         description: Success
*         example:
*           message: Success
*/
	Route.put('/employee/update/:id', 'EmployeeController.updateApi').middleware(['auth:jwt'])

	/**
* @swagger
* /api/employee/store:
*  post:
*     tags:
*       - Employee
*     security:
*        - bearerAuth: []
*     summary: Add new employee
*     parameters:
*       - name: body
*         description: Employee data
*         in: body
*         required: true
*         schema: 
*           $ref: '#/definitions/Employee'
*     responses:
*       200:
*         description: Success
*         example:
*           message: Success
*/
	Route.post('/employee/store', 'EmployeeController.storeApi').middleware(['auth:jwt'])

	/**
  * @swagger
  * /api/employee/list:
  *  get:
  *     tags:
  *       - Employee
  *     security:
  *        - bearerAuth: []
  *     summary: Get employee list
  *     responses:
  *       200:
  *         description: Success
  * 		content:
  *           application/json:
  *           	schema:
  *               $ref: '#/definitions/Employee'
  */
	Route.get('/employee/list', 'EmployeeController.indexApi').middleware(['auth:jwt'])
}).prefix('/api')
