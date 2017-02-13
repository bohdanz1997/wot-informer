'use strict'

const Schema = use('Schema')

class ConsumablesTableSchema extends Schema {

  up () {
    this.create('consumables', (table) => {
      table.increments()

      table.string('name')
      table.integer('price')
      table.string('icon')
      table.text('description')

      table.timestamps()
    })
  }

  down () {
    this.drop('consumables')
  }

}

module.exports = ConsumablesTableSchema
