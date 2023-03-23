'use strict'

const Employee = use('App/Models/Employee')

class EmployeeController {

  async index({ request, response, view }) {
    const employees = await Employee.all()

    return view.render('employee.index', { employees: employees.rows })
  }

  create({ request, response, view }) {
	return view.render('employee.create')
  }
  
  async store({ request, response, view, session }) {
	const employee = new Employee()
  
	employee.name   = request.input('name')
	employee.role  = request.input('role')
	employee.address  = request.input('address')
	employee.directorate  = request.input('directorate')
	employee.email  = request.input('email')
	await employee.save()
  
	session.flash({ notification: 'Success!' })
	return response.route('employee.index')
  }

  async edit({ request, response, view, params }) {
	const id    = params.id
	const employee  = await Employee.find(id)
  
	return view.render('employee.edit', { employee: employee })
  }
  
  async update({ request, response, view, params, session }) {
	const id    = params.id
	const employee  = await Employee.find(id)
  
	employee.name   = request.input('name')
	employee.role  = request.input('role')
	employee.address  = request.input('address')
	employee.directorate  = request.input('directorate')
	employee.email  = request.input('email')
	await employee.save()
  
	session.flash({ notification: 'Updated!' })
	return response.route('employee.index')
  }

  async delete({ request, response, view, params, session}) {
	const id = params.id
	const employee = await Employee.find(id)
	await employee.delete()
  
	session.flash({ notification: 'Delete Successful!' })
	return response.route('employee.index')
  }

}

module.exports = EmployeeController