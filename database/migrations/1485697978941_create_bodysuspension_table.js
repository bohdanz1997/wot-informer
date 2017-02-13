'use strict'

const Schema = use('Schema')

class BodySuspensionsTableSchema extends Schema {

  up () {
    this.create('body_suspension', (table) => {
      table.increments()

      table.boolean('is_default')
      table.integer('body_id')
        .unsigned()
        .references('id')
        .inTable('bodies')
      table.integer('suspension_id')
        .unsigned()
        .references('id')
        .inTable('suspensions')

      table.timestamps()
    })
  }

  down () {
    this.drop('body_suspension')
  }

}

module.exports = BodySuspensionsTableSchema
