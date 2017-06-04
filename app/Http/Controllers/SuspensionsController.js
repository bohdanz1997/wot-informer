'use strict'

const Suspension = use('App/Model/Suspension')
const Nation = use('App/Model/Nation')
const Validator = use('Validator')

class SuspensionsController {

  * index(request, response) {
    const suspensions = yield Suspension
      .query().with('nation').fetch()
    const nations = yield Nation.all()

    yield response.sendView('admin/suspensions/index', {
      suspensions: suspensions.toJSON(),
      nations: nations.toJSON()
    })
  }

  * get(request, response) {
    const id = request.params('id')
    const suspension = yield Suspension.find(id.id)

    response.send(suspension.toJSON())
  }

  * store(request, response) {
    const data = request.except('_csrf', '_method')
    const validation = yield Validator.validate(data, Suspension.rules)

    if (validation.fails()) {
      response.json(validation.messages())
      return
    }

    yield Suspension.create(data)

    response.ok("success")
  }

  * update(request, response) {
    const id = request.params('id')
    const data = request.except('_csrf', '_method')
    const validation = yield Validator.validate(data, Suspension.rules)

    if (validation.fails()) {
      response.json(validation.messages())
      return
    }

    const suspension = yield Suspension.find(id.id)
    suspension.fill(data)
    yield suspension.save()

    response.ok("success")
  }

  * destroy(request, response) {
    const id = request.params('id')
    const suspension = yield Suspension.find(id.id)
    yield suspension.delete()

    response.redirect('/admin/suspensions')
  }
}

module.exports = SuspensionsController
