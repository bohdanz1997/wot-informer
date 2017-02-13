'use strict'

const Consumable = use('App/Model/Consumable')
const File = use('App/Model/File')

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

    yield Consumable.create(data)

    response.redirect('/admin/consumables')
  }

  * update(request, response) {
    const id = request.params('id')
    const data = request.except('_csrf', '_method')
    const consumable = yield Consumable.find(id.id)
    consumable.fill(data)
    yield consumable.save()

    response.redirect('/admin/consumables')
  }

  * destroy(request, response) {
    const id = request.params('id')
    const consumable = yield Consumable.find(id.id)
    yield consumable.delete()

    response.redirect('/admin/consumables')
  }
}

module.exports = ConsumablesController
