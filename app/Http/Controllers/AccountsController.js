'use strict'

class AccountsController {
  * register(request, response) {
    yield response.sendView('accounts/register')
  }

  * login(request, response) {
    yield response.sendView('accounts/login')
  }
}

module.exports = AccountsController
