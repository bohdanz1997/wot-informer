'use strict'

const File = use('App/Model/File')
const Helpers = use('Helpers')
const fs = require('fs')

class FilesController {

  * index(request, response) {
    const files = yield File.all()

    yield response.sendView('admin/files/index', {
      files: files.toJSON()
    })
  }

  * create(request, response) {
    yield response.sendView('admin/files/create')
  }

  * store(request, response) {
    const file = request.file('file')

    if (!file) {
      response.redirect('/admin/files')
      return
    }
    const fileName = `${new Date().getTime()}.${file.extension()}`;

    yield file.move(Helpers.publicPath('assets/img/'), file.file.name)
     if (!file.moved()) {
       response.badRequest(file.errors())
       return
     }

    yield File.create({
      name: file.file.name,
      path: fileName
    })

    response.ok("file uploaded successfully")
  }

  * destroy(request, response) {
    const id = request.params('id')
    const file = yield File.find(id.id)


    fs.unlinkSync(Helpers.publicPath('assets/img/') + file.name);

    yield file.delete()

    response.redirect('/admin/files')
  }

}

module.exports = FilesController
