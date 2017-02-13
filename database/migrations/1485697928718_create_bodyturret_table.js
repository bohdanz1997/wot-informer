'use strict'

const Schema = use('Schema')

class BodyTurretsTableSchema extends Schema {

  up () {
    this.create('body_turret', (table) => {
      table.increments()

      table.boolean('is_default')
      table.integer('body_id')
        .unsigned()
        .references('id')
        .inTable('bodies')
      table.integer('turret_id')
        .unsigned()
        .references('id')
        .inTable('turrets')

      table.timestamps()
    })
  }

  down () {
    this.drop('body_turret')
  }

}

module.exports = BodyTurretsTableSchema
