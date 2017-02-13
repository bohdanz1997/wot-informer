'use strict'

const Validator = use('Validator')
const User = use('App/Model/User')

class UsersController {
  * login(request, response) {
    const userData = request.only('email', 'password')

    const validation = yield Validator.validate(userData, User.loginRules)

    if (validation.fails()) {
      yield request
        .withOnly('email', 'password')
        .andWith({ errors: validation.messages() })
        .flash()

      response.redirect('back')
      return
    }

    const user = yield User.findBy('email', userData.email)

    try {
      yield request.auth.login(user)
      response.redirect('/admin')
    }
    catch (e) {
      yield request.with({ error: e.message }).flash()
      response.redirect('back')
    }
  }

  * register(request, response) {
    const userData = request.only('username', 'email', 'password')

    const validation = yield Validator.validate(userData, User.registerRules)

    if (validation.fails()) {
      yield request
        .withOnly('username', 'email', 'password')
        .andWith({ errors: validation.messages() })
        .flash()

      response.redirect('back')
      return
    }

    yield User.create(userData)
    response.redirect('/admin')
  }

  * logout(request, response) {
    yield request.auth.logout()
    response.redirect('/')
  }
}

module.exports = UsersController
