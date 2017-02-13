'use strict'

const Schema = use('Schema')

class BodyEquipmentsTableSchema extends Schema {

  up () {
    this.create('body_equipment', (table) => {
      table.increments()

      table.integer('body_id')
        .unsigned()
        .references('id')
        .inTable('bodies')
      table.integer('equipment_id')
        .unsigned()
        .references('id')
        .inTable('equipment')

      table.timestamps()
    })
  }

  down () {
    this.drop('body_equipment')
  }

}

module.exports = BodyEquipmentsTableSchema
