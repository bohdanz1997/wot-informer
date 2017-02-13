'use strict'

const Crew = use('App/Model/Crew')

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

    yield Crew.create(data)

    response.redirect('/admin/crews')
  }

  * update(request, response) {
    const id = request.params('id')
    const data = request.only('name', 'description')

    const crew = yield Crew.find(id.id)
    crew.fill(data)
    yield crew.save()

    response.redirect('/admin/crews')
  }

  * destroy(request, response) {
    const id = request.params('id')
    const crew = yield Crew.find(id.id)
    yield crew.delete()

    response.redirect('/admin/crews')
  }
}

module.exports = CrewsController
