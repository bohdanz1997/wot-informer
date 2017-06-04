'use strict'

const Engine = use('App/Model/Engine')
const Nation = use('App/Model/Nation')
const Validator = use('Validator')

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
    const validation = yield Validator.validate(data, Engine.rules)

    if (validation.fails()) {
      response.json(validation.messages())
      return
    }

    yield Engine.create(data)

    response.ok("success")
  }

  * update(request, response) {
    const id = request.params('id')
    const data = request.except('_csrf', '_method')
    const validation = yield Validator.validate(data, Engine.rules)

    if (validation.fails()) {
      response.json(validation.messages())
      return
    }

    const engine = yield Engine.find(id.id)
    engine.fill(data)
    yield engine.save()

    response.ok("success")
  }

  * destroy(request, response) {
    const id = request.params('id')
    const engine = yield Engine.find(id.id)
    yield engine.delete()

    response.redirect('/admin/engines')
  }
}

module.exports = EnginesController
