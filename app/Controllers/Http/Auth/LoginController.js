'use strict'

const User = use('App/Models/User')
const Token = use('App/Models/Token')

class LoginController {

	index({ view }) {
		return view.render('auth.login')
	}

	async check({ request, auth, session, response }) {

		const { email, password } = request.all()
		try {
				await auth.attempt(email, password)
				return response.route('employee.index')
		
		}
		catch (e) {
			return response.json({ message: 'Error! ' + e })
		}

	}

	async logout({ auth, response }) {
		await auth.logout()
		return response.route('login.index')
	}

	// api
	async login({ request, auth, session, response }) {
		const { email, password } = request.all()
		try {
			return auth
				.authenticator('jwt')
				.withRefreshToken()
				.attempt(email, password)
		}
		catch (e) {
			return response.json({ message: 'Error! ' + e })
		}
	}

}

module.exports = LoginController