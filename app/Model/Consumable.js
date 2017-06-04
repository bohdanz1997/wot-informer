'use strict'

const Lucid = use('Lucid')

class Consumable extends Lucid {
  
  static get rules() {
    return {
      name: 'required',
      price: 'required'
    }
  }

  bodies() {
    return this.belongsToMany('App/Model/Body')
  }
}

module.exports = Consumable
