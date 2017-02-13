'use strict'

const Schema = use('Schema')

class BodyRadiosTableSchema extends Schema {

  up () {
    this.create('body_radio', (table) => {
      table.increments()

      table.boolean('is_default')
      table.integer('body_id')
        .unsigned()
        .references('id')
        .inTable('bodies')
      table.integer('radio_id')
        .unsigned()
        .references('id')
        .inTable('radios')

      table.timestamps()
    })
  }

  down () {
    this.drop('body_radio')
  }

}

module.exports = BodyRadiosTableSchema
