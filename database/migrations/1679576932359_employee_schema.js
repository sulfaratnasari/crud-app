'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EmployeeSchema extends Schema {
  up () {
    this.create('employees', (table) => {
      table.increments()
	  table.string('name', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
	  table.string('address', 200)
	  table.string('role', 80)
	  table.string('directorate', 80)
      table.timestamps()
    })
  }

  down () {
    this.drop('employees')
  }
}

module.exports = EmployeeSchema
