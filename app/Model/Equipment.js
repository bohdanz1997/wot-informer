'use strict'

const Lucid = use('Lucid')

class Equipment extends Lucid {
  
  bodies() {
    return this.belongsToMany('App/Model/Body')
  }
}

module.exports = Equipment
