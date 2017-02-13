'use strict'

const Schema = use('Schema')

class NationsTableSchema extends Schema {

  up () {
    this.create('nations', (table) => {
      table.increments()
      table.string('name')
      table.string('icon')
      table.timestamps()
    })
  }

  down () {
    this.drop('nations')
  }

}

module.exports = NationsTableSchema
