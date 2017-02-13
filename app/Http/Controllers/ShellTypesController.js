'use strict'

const ShellType = use('App/Model/ShellType')

class ShellTypesController {

  * index(request, response) {
    const shellTypes = yield ShellType.all()

    yield response.sendView('admin/shellTypes/index', {
      shellTypes: shellTypes.toJSON()
    })
  }

  * get(request, response) {
    const id = request.params('id')
    const shellType = yield ShellType.find(id.id)

    response.send(shellType.toJSON())
  }

  * store(request, response) {
    const data = request.only('name')

    yield ShellType.create(data)

    response.redirect('/admin/shellTypes')
  }

  * update(request, response) {
    const id = request.params('id')
    const data = request.only('name')

    const shellType = yield ShellType.find(id.id)
    shellType.name = data.name
    yield shellType.save()

    response.redirect('/admin/shellTypes')
  }

  * destroy(request, response) {
    const id = request.params('id')
    const shellType = yield ShellType.find(id.id)
    yield shellType.delete()

    response.redirect('/admin/shellTypes')
  }
}

module.exports = ShellTypesController
