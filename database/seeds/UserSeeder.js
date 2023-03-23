'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')
const User = use('App/Models/User')

class UserSeeder {
	async run () {
		const u1 = new User()
		u1.name = 'Admin'
		u1.password = 'root'
		u1.email = 'admin@mail.com'
		await u1.save()
	}
}

module.exports = UserSeeder
