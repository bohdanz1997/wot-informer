'use strict'

const Schema = use('Schema')

class RadiosTableSchema extends Schema {

  up () {
    this.create('radios', (table) => {
      table.increments()

      table.string('name')
      table.integer('level')
      table.string('icon')
      table.integer('nation_id')
        .unsigned()
        .references('id')
        .inTable('nations')
      table.integer('weight')
      table.integer('price')

      table.integer('signal_range')

      table.timestamps()
    })
  }

  down () {
    this.drop('radios')
  }

}

module.exports = RadiosTableSchema
