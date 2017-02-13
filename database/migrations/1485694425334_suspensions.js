'use strict'

const Schema = use('Schema')

class SuspensionsTableSchema extends Schema {

  up () {
    this.create('suspensions', (table) => {
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

      table.float('load_limit')
      table.integer('traverse_speed')

      table.timestamps()
    })
  }

  down () {
    this.drop('suspensions')
  }

}

module.exports = SuspensionsTableSchema
