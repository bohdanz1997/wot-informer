'use strict'

const Body = use('App/Model/Body')
const Nation = use('App/Model/Nation')
const Vehicle = use('App/Model/Vehicle')
const Gun = use('App/Model/Gun')
const Turret = use('App/Model/Turret')
const Engine = use('App/Model/Engine')
const Radio = use('App/Model/Radio')
const Suspension = use('App/Model/Suspension')
const Crew = use('App/Model/Crew')
const File = use('App/Model/File')
const Validator = use('Validator')

class BodiesController {

  * index(request, response) {
    const bodies = yield Body
      .query().with('nation', 'vehicle').fetch()

    const vehicles = yield Vehicle.all()
    const nations = yield Nation.all()
    const files = yield File.all()
    const crews = yield Crew.all()
    const guns = yield Gun.query().with('nation').fetch()
    const turrets = yield Turret.query().with('nation').fetch()
    const engines = yield Engine.query().with('nation').fetch()
    const radios = yield Radio.query().with('nation').fetch()
    const suspensions = yield Suspension.query().with('nation').fetch()

    yield response.sendView('admin/bodies/index', {
      bodies: bodies.toJSON(),
      nations: nations.toJSON(),
      vehicles: vehicles.toJSON(),
      guns: guns.toJSON(),
      turrets: turrets.toJSON(),
      engines: engines.toJSON(),
      radios: radios.toJSON(),
      suspensions: suspensions.toJSON(),
      crews: crews.toJSON(),
      files: files.toJSON()
    })
  }

  * get(request, response) {
    const id = request.params('id').id
    const body = yield Body.query()
      .where('id', id)
      .with('guns', 'turrets', 'engines', 'radios', 'suspensions', 'crews')
      .fetch()

    response.send(body.toJSON()[0])
  }

  * store(request, response) {
    const data_for_save = request.except(
      'guns', 'turrets', 'engines', 'radios', 'suspensions', 'crews')
    const data_for_validation = request.all()
    const validation = yield Validator.validate(data_for_validation, Body.rules)

    if (validation.fails()) {
      response.json(validation.messages())
      return
    }

    const body = yield Body.create(data_for_save)

    yield body.guns().attach(getIdsFromData(data_for_validation['guns']))
    yield body.turrets().attach(getIdsFromData(data_for_validation['turrets']))
    yield body.engines().attach(getIdsFromData(data_for_validation['engines']))
    yield body.radios().attach(getIdsFromData(data_for_validation['radios']))
    yield body.suspensions().attach(getIdsFromData(data_for_validation['suspensions']))
    yield body.crews().attach(getIdsFromData(data_for_validation['crews']))

    response.ok("success")
  }

  * update(request, response) {
    const id = request.params('id')
    const data_for_save = request.except(
      'guns', 'turrets', 'engines', 'radios', 'suspensions', 'crews')
    const data_for_validation = request.all()
    const validation = yield Validator.validate(data_for_validation, Body.rules)

    if (validation.fails()) {
      response.json(validation.messages())
      return
    }

    const body = yield Body.find(id.id)
    body.fill(data_for_save)
    yield body.save()

    yield body.guns().attach(getIdsFromData(data_for_validation['guns']))
    yield body.turrets().attach(getIdsFromData(data_for_validation['turrets']))
    yield body.engines().attach(getIdsFromData(data_for_validation['engines']))
    yield body.radios().attach(getIdsFromData(data_for_validation['radios']))
    yield body.suspensions().attach(getIdsFromData(data_for_validation['suspensions']))
    yield body.crews().attach(getIdsFromData(data_for_validation['crews']))

    response.ok("success")
  }

  * destroy(request, response) {
    const id = request.params('id')
    const body = yield Body.find(id.id)
    const guns = yield body.guns()
    const turrets = yield body.turrets()
    const engines = yield body.engines()
    const radios = yield body.radios()
    const suspensions = yield body.suspensions()
    const crews = yield body.crews()

    yield body.guns().detach(getIdsFromData(guns))
    yield body.turrets().detach(getIdsFromData(turrets))
    yield body.engines().detach(getIdsFromData(engines))
    yield body.radios().detach(getIdsFromData(radios))
    yield body.suspensions().detach(getIdsFromData(suspensions))
    yield body.crews().detach(getIdsFromData(crews))
    yield body.delete()

    response.redirect('/admin/bodies')
  }
}

function getIdsFromData(data) {
  var ids = []
  for (var i = 0; i < data.length; i++) {
    if (data[i].id === undefined) {
      ids.push(data[i])
    } else {
      ids.push(data[i].id)
    }
  }
  return ids
}

module.exports = BodiesController
