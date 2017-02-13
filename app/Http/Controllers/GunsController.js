'use strict'

const Gun = use('App/Model/Gun')
const Nation = use('App/Model/Nation')

class GunsController {

  * index(request, response) {
    const guns = yield Gun
      .query().with('nation').fetch()

    const nations = yield Nation.all()

    yield response.sendView('admin/guns/index', {
      guns: guns.toJSON(),
      nations: nations.toJSON()
    })
  }

  * get(request, response) {
    const id = request.params('id')
    const gun = yield Gun.query()
      .where('id', id.id).fetch()

    response.send(gun.toJSON()[0])
  }

  * store(request, response) {
    const data = request.except('_csrf', '_method')
    const gun = yield Gun.create(data)
    yield gun.save()

    response.redirect('/admin/guns')
  }

  * update(request, response) {
    const id = request.params('id')
    const data = request.except('_csrf', '_method')
    const gun = yield Gun.find(id.id)
    gun.fill(data)
    yield gun.save()

    response.redirect('/admin/guns')
  }

  * destroy(request, response) {
    const id = request.params('id')
    const gun = yield Gun.find(id.id)
    yield gun.delete()

    response.redirect('/admin/guns')
  }
}

module.exports = GunsController
