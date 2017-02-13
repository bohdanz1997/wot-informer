'use strict'

const Schema = use('Schema')

class EquipmentTableSchema extends Schema {

  up () {
    this.create('equipment', (table) => {
      table.increments()

      table.string('name')
      table.integer('price')
      table.integer('weight')
      table.string('icon')
      table.text('description')

      table.timestamps()
    })
  }

  down () {
    this.drop('equipment')
  }

}

module.exports = EquipmentTableSchema
