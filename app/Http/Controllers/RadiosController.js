'use strict'

const Radio = use('App/Model/Radio')
const Nation = use('App/Model/Nation')

class RadiosController {

  * index(request, response) {
    const radios = yield Radio
      .query().with('nation').fetch()
    const nations = yield Nation.all()

    yield response.sendView('admin/radios/index', {
      radios: radios.toJSON(),
      nations: nations.toJSON()
    })
  }

  * get(request, response) {
    const id = request.params('id')
    const radio = yield Radio.find(id.id)

    response.send(radio.toJSON())
  }

  * store(request, response) {
    const data = request.except('_csrf', '_method')

    yield Radio.create(data)

    response.redirect('/admin/radios')
  }

  * update(request, response) {
    const id = request.params('id')
    const data = request.except('_csrf', '_method')
    const radio = yield Radio.find(id.id)
    radio.fill(data)
    yield radio.save()

    response.redirect('/admin/radios')
  }

  * destroy(request, response) {
    const id = request.params('id')
    const radio = yield Radio.find(id.id)
    yield radio.delete()

    response.redirect('/admin/radios')
  }
}

module.exports = RadiosController
