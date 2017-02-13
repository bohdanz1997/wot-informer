'use strict'

const Schema = use('Schema')

class CrewTableSchema extends Schema {

  up () {
    this.create('crews', (table) => {
      table.increments()

      table.string('name')
      table.text('description')
      table.string('icon')

      table.timestamps()
    })
  }

  down () {
    this.drop('crews')
  }

}

module.exports = CrewTableSchema
