'use strict'

const Consumable = use('App/Model/Consumable')
const File = use('App/Model/File')
const Validator = use('Validator')


class ConsumablesController {

  * index(request, response) {
    const consumables = yield Consumable.all()
    const files = yield File.all()

    yield response.sendView('admin/consumables/index', {
      consumables: consumables.toJSON(),
      files: files.toJSON()
    })
  }

  * get(request, response) {
    const id = request.params('id')
    const consumable = yield Consumable.find(id.id)

    response.send(consumable.toJSON())
  }

  * store(request, response) {
    const data = request.except('_csrf', '_method')
    const validation = yield Validator.validate(data, Consumable.rules)

    if (validation.fails()) {
      response.json(validation.messages())
      return
    }

    yield Consumable.create(data)

    response.ok("success")
  }

  * update(request, response) {
    const id = request.params('id')
    const data = request.except('_csrf', '_method')
    const validation = yield Validator.validate(data, Consumable.rules)

    if (validation.fails()) {
      response.json(validation.messages())
      return
    }

    const consumable = yield Consumable.find(id.id)
    consumable.fill(data)
    yield consumable.save()

    response.ok("success")
  }

  * destroy(request, response) {
    const id = request.params('id')
    const consumable = yield Consumable.find(id.id)
    yield consumable.delete()

    response.redirect('/admin/consumables')
  }
}

module.exports = ConsumablesController
