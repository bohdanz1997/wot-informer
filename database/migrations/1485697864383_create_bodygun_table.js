'use strict'

const Schema = use('Schema')

class BodyGunsTableSchema extends Schema {

  up () {
    this.create('body_gun', (table) => {
      table.increments()

      table.boolean('is_default')
      table.integer('body_id')
        .unsigned()
        .references('id')
        .inTable('bodies')
        table.integer('gun_id')
          .unsigned()
          .references('id')
          .inTable('guns')

      table.timestamps()
    })
  }

  down () {
    this.drop('body_gun')
  }

}

module.exports = BodyGunsTableSchema
