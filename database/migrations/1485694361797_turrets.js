'use strict'

const Schema = use('Schema')

class TurretsTableSchema extends Schema {

  up() {
    this.create('turrets', (table) => {
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

      table.string('armor')
      table.integer('turret_traverse')
      table.integer('view_range')

      table.timestamps()
    })
  }

  down() {
    this.drop('turrets')
  }

}

module.exports = TurretsTableSchema
