'use strict'

const Body = use('App/Model/Body')
const Equipment = use('App/Model/Equipment')
const Consumable = use('App/Model/Consumable')

class TanksController {
  * show(request, response) {
    const id = request.params('id').id
    const equipment = yield Equipment.all()
    const consumables = yield Consumable.all()
    const body = yield Body.query().where('id', id)
      .with('guns.ammos', 'turrets', 'engines', 'radios', 'suspensions', 'crews')
      .fetch()

    yield response.sendView('tanks/show', {
      body: body.toJSON()[0],
      equipment: equipment.toJSON(),
      consumables: consumables.toJSON()
    })
  }
}

module.exports = TanksController
