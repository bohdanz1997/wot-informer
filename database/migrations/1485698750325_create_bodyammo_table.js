'use strict'

const Schema = use('Schema')

class BodyAmmosTableSchema extends Schema {

  up () {
    this.create('body_ammo', (table) => {
      table.increments()

      table.boolean('is_default')
      table.integer('body_id')
        .unsigned()
        .references('id')
        .inTable('bodies')
      table.integer('ammo_id')
        .unsigned()
        .references('id')
        .inTable('ammos')

      table.timestamps()
    })
  }

  down () {
    this.drop('body_ammo')
  }

}

module.exports = BodyAmmosTableSchema
