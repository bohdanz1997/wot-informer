'use strict'

const Lucid = use('Lucid')

class Vehicle extends Lucid {

  static get rules() {
    return {
      name: 'required'
    }
  }

  bodies() {
    return this.hasMany('App/Model/Body')
  }
}

module.exports = Vehicle
