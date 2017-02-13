'use strict'

const Ammo = use('App/Model/Ammo')
const ShellType = use('App/Model/ShellType')

class AmmosController {

  * index(request, response) {
    const ammos = yield Ammo
      .query().with('shellType').fetch()
    const shellTypes = yield ShellType.all()

    yield response.sendView('admin/ammos/index', {
      ammos: ammos.toJSON(),
      shellTypes: shellTypes.toJSON()
    })
  }

  * get(request, response) {
    const id = request.params('id')
    const ammo = yield Ammo.find(id.id)

    response.send(ammo.toJSON())
  }

  * store(request, response) {
    const data = request.except('_csrf', '_method')

    yield Ammo.create(data)

    response.redirect('/admin/ammos')
  }

  * update(request, response) {
    const id = request.params('id')
    const data = request.except('_csrf', '_method')

    const ammo = yield Ammo.find(id.id)
    ammo.fill(data)
    yield ammo.save()

    response.redirect('/admin/ammos')
  }

  * destroy(request, response) {
    const id = request.params('id')
    const ammo = yield Ammo.find(id.id)
    yield ammo.delete()

    response.redirect('/admin/ammos')
  }
}

module.exports = AmmosController
