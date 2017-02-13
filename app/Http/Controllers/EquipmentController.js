'use strict'

const Equipment = use('App/Model/Equipment')
const File = use('App/Model/File')

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

    yield Equipment.create(data)

    response.redirect('/admin/equipment')
  }

  * update(request, response) {
    const id = request.params('id')
    const data = request.except('_csrf', '_method')
    const equip = yield Equipment.find(id.id)
    equip.fill(data)
    yield equip.save()

    response.redirect('/admin/equipment')
  }

  * destroy(request, response) {
    const id = request.params('id')
    const equip = yield Equipment.find(id.id)
    yield equip.delete()

    response.redirect('/admin/equipment')
  }
}

module.exports = EquipmentController
