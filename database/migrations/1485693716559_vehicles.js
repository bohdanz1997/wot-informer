'use strict'

const Schema = use('Schema')

class VehiclesTableSchema extends Schema {

  up () {
    this.create('vehicles', (table) => {
      table.increments()
      table.string('name')
      table.string('icon')
      table.timestamps()
    })
  }

  down () {
    this.drop('vehicles')
  }

}

module.exports = VehiclesTableSchema
