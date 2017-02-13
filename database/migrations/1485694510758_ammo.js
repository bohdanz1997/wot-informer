'use strict'

const Schema = use('Schema')

class AmmoTableSchema extends Schema {

  up () {
    this.create('ammos', (table) => {
      table.increments()

      table.string('name')
      table.integer('price')
      table.integer('caliber')
      table.string('icon')
      table.integer('penetration')
      table.integer('damage')
      table.integer('shell_type_id')
        .unsigned()
        .references('id')
        .inTable('shell_types')

      table.timestamps()
    })
  }

  down () {
    this.drop('ammos')
  }

}

module.exports = AmmoTableSchema
