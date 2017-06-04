'use strict'

const User = use('App/Model/User')
const Body = use('App/Model/Body')

class AdminController {
  * index(request, response) {
    const bodies = yield Body.query().with('nation', 'vehicle').fetch()

    yield response.sendView('admin/index', {
      bodies: bodies.toJSON()
    })
  }
}

module.exports = AdminController
