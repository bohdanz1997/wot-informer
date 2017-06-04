'use strict'

const Lucid = use('Lucid')

class Equipment extends Lucid {

  static get rules() {
    return {
      name: 'required',
      price: 'required',
      weight: 'required'
    }
  }

  bodies() {
    return this.belongsToMany('App/Model/Body')
  }
}

module.exports = Equipment
