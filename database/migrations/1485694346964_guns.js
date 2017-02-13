'use strict'

const Schema = use('Schema')

class GunsTableSchema extends Schema {

  up () {
    this.create('guns', (table) => {
      table.increments()

      table.string('name')
      table.integer('level')
      table.string('icon')

      table.integer('nation_id')
        .unsigned()
        .references('id')
        .inTable('nations')
        
      table.integer('weight')
      table.integer('price')

      table.string('damage')
      table.string('penetration')
      table.float('accuracy')
      table.float('aim_time')

      table.timestamps()
    })
  }

  down () {
    this.drop('guns')
  }

}

module.exports = GunsTableSchema
