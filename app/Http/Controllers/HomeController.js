'use strict'

const Nation = use('App/Model/Nation')
const Vehicle = use('App/Model/Vehicle')
const Body = use('App/Model/Body')
const Gun = use('App/Model/Gun')
const Turret = use('App/Model/Turret')
const Engine = use('App/Model/Engine')
const Radio = use('App/Model/Radio')
const Suspension = use('App/Model/Suspension')

class HomeController {
  * index(request, response) {
    const nations = yield Nation.all()
    const vehicles = yield Vehicle.all()

    yield response.sendView('home/index', {
      nations: nations.toJSON(),
      vehicles: vehicles.toJSON()
    })
  }

  * nations(request, response) {
    const id = request.params('id').id
    const nation = yield Nation.find(id)
    const vehicles = yield Vehicle.all()
    const vehiclesJson = vehicles.toJSON()
    let data = []

    for (let i = 0; i < vehiclesJson.length; i++) {
      const vehicle = vehiclesJson[i]
      const listTanks = yield Body.query().where({
        'nation_id': id, 'vehicle_id': vehicle.id
      }).fetch()
      data.push({'vehicle': vehicle.name, 'tanks': listTanks.toJSON()})
    }

    yield response.sendView('home/nations', {
      nation: nation.toJSON(),
      data: data
    })
  }

  * vehicles(request, response) {
    const id = request.params('id').id
    const vehicle = yield Vehicle.find(id)
    const nations = yield Nation.all()
    const nationsJson = nations.toJSON()
    let data = []

    for(let i = 0; i < nationsJson.length; i++) {
      const nation = nationsJson[i]
      const listTanks = yield Body.query().where({
        'nation_id': nation.id, 'vehicle_id': id
      }).fetch()
      data.push({'nation': nation.name, 'tanks': listTanks.toJSON()})
    }

    yield response.sendView('home/vehicles', {
      vehicle: vehicle.toJSON(),
      data: data
    })
  }

  * guns(request, response) {
    const guns = yield Gun.all()

    yield response.sendView('home/guns', {
      guns: guns.toJSON()
    })
  }

  * turrets(request, response) {
    const turrets = yield Turret.all()

    yield response.sendView('home/turrets', {
      turrets: turrets.toJSON()
    })
  }

  * engines(request, response) {
    const engines = yield Engine.all()

    yield response.sendView('home/engines', {
      engines: engines.toJSON()
    })
  }

  * radios(request, response) {
    const radios = yield Radio.all()

    yield response.sendView('home/radios', {
      radios: radios.toJSON()
    })
  }

  * suspensions(request, response) {
    const suspensions = yield Suspension.all()

    yield response.sendView('home/suspensions', {
      suspensions: suspensions.toJSON()
    })
  }
}

module.exports = HomeController
