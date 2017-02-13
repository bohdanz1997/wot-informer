'use strict'

const Engine = use('App/Model/Engine')
const Nation = use('App/Model/Nation')

class EnginesController {

  * index(request, response) {
    const engines = yield Engine
      .query().with('nation').fetch()
    const nations = yield Nation.all()

    yield response.sendView('admin/engines/index', {
      engines: engines.toJSON(),
      nations: nations.toJSON()
    })
  }

  * get(request, response) {
    const id = request.params('id')
    const engine = yield Engine.find(id.id)

    response.send(engine.toJSON())
  }

  * store(request, response) {
    const data = request.except('_csrf', '_method')

    yield Engine.create(data)

    response.redirect('/admin/engines')
  }

  * update(request, response) {
    const id = request.params('id')
    const data = request.except('_csrf', '_method')
    const engine = yield Engine.find(id.id)
    engine.fill(data)
    yield engine.save()

    response.redirect('/admin/engines')
  }

  * destroy(request, response) {
    const id = request.params('id')
    const engine = yield Engine.find(id.id)
    yield engine.delete()

    response.redirect('/admin/engines')
  }
}

module.exports = EnginesController
