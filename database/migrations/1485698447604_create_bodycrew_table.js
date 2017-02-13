'use strict'

const Schema = use('Schema')

class BodyCrewsTableSchema extends Schema {

  up () {
    this.create('body_crew', (table) => {
      table.increments()

      table.integer('body_id')
        .unsigned()
        .references('id')
        .inTable('bodies')
      table.integer('crew_id')
        .unsigned()
        .references('id')
        .inTable('crews')

      table.timestamps()
    })
  }

  down () {
    this.drop('body_crew')
  }

}

module.exports = BodyCrewsTableSchema
