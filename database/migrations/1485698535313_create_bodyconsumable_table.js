'use strict'

const Schema = use('Schema')

class BodyConsumablesTableSchema extends Schema {

  up () {
    this.create('body_consumable', (table) => {
      table.increments()

      table.integer('body_id')
        .unsigned()
        .references('id')
        .inTable('bodies')
      table.integer('consumable_id')
        .unsigned()
        .references('id')
        .inTable('consumables')

      table.timestamps()
    })
  }

  down () {
    this.drop('body_consumable')
  }

}

module.exports = BodyConsumablesTableSchema
