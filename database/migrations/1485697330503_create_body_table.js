'use strict'

const Schema = use('Schema')

class BodiesTableSchema extends Schema {

  up () {
    this.create('bodies', (table) => {
      table.increments()

      table.string('name')
      table.string('image')
      table.string('icon')
      table.integer('level')
      table.integer('price')
      table.string('speed')
      table.integer('health')
      table.text('description')
      table.string('armor')
      
      table.integer('nation_id')
        .unsigned()
        .references('id')
        .inTable('nations')
      table.integer('vehicle_id')
        .unsigned()
        .references('id')
        .inTable('vehicles')

      table.timestamps()
    })
  }

  down () {
    this.drop('bodies')
  }

}

module.exports = BodiesTableSchema
