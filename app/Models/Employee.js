'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** 
*  @swagger
*  definitions:
*    Employee:
*      type: object
*      properties:
*        name:
*          type: string
*        email:
*          type: string
*        role:
*          type: string
*        directorate:
*          type: string
*        address:
*          type: string
*      required:
*        - name
*/
class Employee extends Model {
}

module.exports = Employee
