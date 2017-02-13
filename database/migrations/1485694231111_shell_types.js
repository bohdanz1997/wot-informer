'use strict'

const Schema = use('Schema')

class ShellTypesTableSchema extends Schema {

  up () {
    this.create('shell_types', (table) => {
      table.increments()
      table.string('name')
      table.string('icon')
      table.timestamps()
    })
  }

  down () {
    this.drop('shell_types')
  }

}

module.exports = ShellTypesTableSchema
