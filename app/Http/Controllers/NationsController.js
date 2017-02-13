'use strict'

const Nation = use('App/Model/Nation')
const File = use('App/Model/File')

class NationsController {

  * index(request, response) {
    const nations = yield Nation.all()
    const files = yield File.all()

    yield response.sendView('admin/nations/index', {
      nations: nations.toJSON(),
      files: files.toJSON()
    })
  }
  
  * get(request, response) {
    const id = request.params('id')
    const nation = yield Nation.find(id.id)

    response.send(nation.toJSON())
  }

  * store(request, response) {
    const data = request.only('name', 'icon')

    yield Nation.create(data)

    response.redirect('/admin/nations')
  }

  * update(request, response) {
    const id = request.params('id')
    const data = request.only('name', 'icon')

    const nation = yield Nation.find(id.id)
    nation.fill(data)
    yield nation.save()

    response.redirect('/admin/nations')
  }

  * destroy(request, response) {
    const id = request.params('id')
    const nation = yield Nation.find(id.id)
    yield nation.delete()

    response.redirect('/admin/nations')
  }
}

module.exports = NationsController
