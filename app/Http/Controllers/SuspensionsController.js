'use strict'

const Suspension = use('App/Model/Suspension')
const Nation = use('App/Model/Nation')

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

    yield Suspension.create(data)

    response.redirect('/admin/suspensions')
  }

  * update(request, response) {
    const id = request.params('id')
    const data = request.except('_csrf', '_method')
    const suspension = yield Suspension.find(id.id)
    suspension.fill(data)
    yield suspension.save()

    response.redirect('/admin/suspensions')
  }

  * destroy(request, response) {
    const id = request.params('id')
    const suspension = yield Suspension.find(id.id)
    yield suspension.delete()

    response.redirect('/admin/suspensions')
  }
}

module.exports = SuspensionsController
