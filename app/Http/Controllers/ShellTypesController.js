'use strict'

const ShellType = use('App/Model/ShellType')
const Validator = use('Validator')

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
    const validation = yield Validator.validate(data, ShellType.rules)

    if (validation.fails()) {
      response.json(validation.messages())
      return
    }

    yield ShellType.create(data)

    response.ok("success")
  }

  * update(request, response) {
    const id = request.params('id')
    const data = request.only('name')
    const validation = yield Validator.validate(data, ShellType.rules)

    if (validation.fails()) {
      response.json(validation.messages())
      return
    }

    const shellType = yield ShellType.find(id.id)
    shellType.fill(data)
    yield shellType.save()

    response.ok("success")
  }

  * destroy(request, response) {
    const id = request.params('id')
    const shellType = yield ShellType.find(id.id)
    yield shellType.delete()

    response.redirect('/admin/shellTypes')
  }
}

module.exports = ShellTypesController
