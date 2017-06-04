'use strict'

const Vehicle = use('App/Model/Vehicle')
const File = use('App/Model/File')
const Validator = use('Validator')

class VehiclesController {

  * index(request, response) {
    const vehicles = yield Vehicle.all()
    const files = yield File.all()

    yield response.sendView('admin/vehicles/index', {
      vehicles: vehicles.toJSON(),
      files: files.toJSON()
    })
  }

  * get(request, response) {
    const id = request.params('id')
    const vehicle = yield Vehicle.find(id.id)

    response.send(vehicle.toJSON())
  }

  * store(request, response) {
    const data = request.only('name', 'icon')
    const validation = yield Validator.validate(data, Vehicle.rules)

    if (validation.fails()) {
      response.json(validation.messages())
      return
    }

    yield Vehicle.create(data)

    response.ok("success")
  }

  * update(request, response) {
    const id = request.params('id')
    const data = request.only('name', 'icon')
    const validation = yield Validator.validate(data, Vehicle.rules)

    if (validation.fails()) {
      response.json(validation.messages())
      return
    }

    const vehicle = yield Vehicle.find(id.id)
    vehicle.fill(data)
    yield vehicle.save()

    response.ok("success")
  }

  * destroy(request, response) {
    const id = request.params('id')
    const vehicle = yield Vehicle.find(id.id)
    yield vehicle.delete()

    response.redirect('/admin/vehicles')
  }
}

module.exports = VehiclesController
