'use strict'

const Equipment = use('App/Model/Equipment')
const File = use('App/Model/File')
const Validator = use('Validator')


class EquipmentController {

  * index(request, response) {
    const equipment = yield Equipment.all()
    const files = yield File.all()

    yield response.sendView('admin/equipment/index', {
      equipment: equipment.toJSON(),
      files: files.toJSON()
    })
  }

  * get(request, response) {
    const id = request.params('id')
    const equip = yield Equipment.find(id.id)

    response.send(equip.toJSON())
  }

  * store(request, response) {
    const data = request.except('_csrf', '_method')
    const validation = yield Validator.validate(data, Equipment.rules)

    if (validation.fails()) {
      response.json(validation.messages())
      return
    }

    yield Equipment.create(data)

    response.ok("success")
  }

  * update(request, response) {
    const id = request.params('id')
    const data = request.except('_csrf', '_method')
    const validation = yield Validator.validate(data, Equipment.rules)

    if (validation.fails()) {
      response.json(validation.messages())
      return
    }

    const equip = yield Equipment.find(id.id)
    equip.fill(data)
    yield equip.save()

    response.ok("success")
  }

  * destroy(request, response) {
    const id = request.params('id')
    const equip = yield Equipment.find(id.id)
    yield equip.delete()

    response.redirect('/admin/equipment')
  }
}

module.exports = EquipmentController
