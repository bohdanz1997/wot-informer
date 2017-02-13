'use strict'

const Schema = use('Schema')

class AmmoGunTableSchema extends Schema {

  up () {
    this.create('ammo_gun', (table) => {
      table.increments()

      table.integer('ammo_id')
        .unsigned()
        .references('id')
        .inTable('ammos')
      table.integer('gun_id')
        .unsigned()
        .references('id')
        .inTable('guns')

      table.timestamps()
    })
  }

  down () {
    this.drop('ammo_gun')
  }

}

module.exports = AmmoGunTableSchema
