'use strict'

const Schema = use('Schema')

class FilesTableSchema extends Schema {

  up () {
    this.create('files', (table) => {
      table.increments()
      table.string('path')
      table.string('name')
      table.timestamps()
    })
  }

  down () {
    this.drop('files')
  }

}

module.exports = FilesTableSchema
