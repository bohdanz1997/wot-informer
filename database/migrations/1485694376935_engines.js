'use strict'

const Schema = use('Schema')

class EnginesTableSchema extends Schema {

  up () {
    this.create('engines', (table) => {
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

      table.integer('power')
      table.integer('chance_of_fire')

      table.timestamps()
    })
  }

  down () {
    this.drop('engines')
  }

}

module.exports = EnginesTableSchema
