'use strict'

const Lucid = use('Lucid')

class Consumable extends Lucid {

  bodies() {
    return this.belongsToMany('App/Model/Body')
  }
}

module.exports = Consumable
