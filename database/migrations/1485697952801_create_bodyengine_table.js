'use strict'

const Schema = use('Schema')

class BodyEnginesTableSchema extends Schema {

  up () {
    this.create('body_engine', (table) => {
      table.increments()

      table.boolean('is_default')
      table.integer('body_id')
        .unsigned()
        .references('id')
        .inTable('bodies')
      table.integer('engine_id')
        .unsigned()
        .references('id')
        .inTable('engines')

      table.timestamps()
    })
  }

  down () {
    this.drop('body_engine')
  }

}

module.exports = BodyEnginesTableSchema
