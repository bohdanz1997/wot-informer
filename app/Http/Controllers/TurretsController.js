'use strict'

const Turret = use('App/Model/Turret')
const Nation = use('App/Model/Nation')
const Validator = use('Validator')

class TurretsController {

  * index(request, response) {
    const turrets = yield Turret
      .query().with('nation').fetch()
    const nations = yield Nation.all()

    yield response.sendView('admin/turrets/index', {
      turrets: turrets.toJSON(),
      nations: nations.toJSON()
    })
  }

  * get(request, response) {
    const id = request.params('id')
    const turret = yield Turret.find(id.id)

    response.send(turret.toJSON())
  }

  * store(request, response) {
    const data = request.except('_csrf', '_method')
    const validation = yield Validator.validate(data, Turret.rules)

    if (validation.fails()) {
      response.json(validation.messages())
      return
    }

    yield Turret.create(data)

    response.ok("success")
  }

  * update(request, response) {
    const id = request.params('id')
    const data = request.except('_csrf', '_method')
    const validation = yield Validator.validate(data, Turret.rules)

    if (validation.fails()) {
      response.json(validation.messages())
      return
    }

    const turret = yield Turret.find(id.id)
    turret.fill(data)
    yield turret.save()

    response.ok("success")
  }

  * destroy(request, response) {
    const id = request.params('id')
    const turret = yield Turret.find(id.id)
    yield turret.delete()

    response.redirect('/admin/turrets')
  }
}

module.exports = TurretsController
