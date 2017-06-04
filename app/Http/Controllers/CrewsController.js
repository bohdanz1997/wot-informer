'use strict'

const Crew = use('App/Model/Crew')
const Validator = use('Validator')


class CrewsController {

  * index(request, response) {
    const crews = yield Crew.all()

    yield response.sendView('admin/crews/index', {
      crews: crews.toJSON()
    })
  }

  * get(request, response) {
    const id = request.params('id')
    const crew = yield Crew.find(id.id)

    response.send(crew.toJSON())
  }

  * store(request, response) {
    const data = request.only('name', 'description')
    const validation = yield Validator.validate(data, Crew.rules)

    if (validation.fails()) {
      response.json(validation.messages())
      return
    }

    yield Crew.create(data)

    response.ok("success")
  }

  * update(request, response) {
    const id = request.params('id')
    const data = request.only('name', 'description')
    const validation = yield Validator.validate(data, Crew.rules)

    if (validation.fails()) {
      response.json(validation.messages())
      return
    }

    const crew = yield Crew.find(id.id)
    crew.fill(data)
    yield crew.save()

    response.ok("success")
  }

  * destroy(request, response) {
    const id = request.params('id')
    const crew = yield Crew.find(id.id)
    yield crew.delete()

    response.redirect('/admin/crews')
  }
}

module.exports = CrewsController
