'use strict'

const Lucid = use('Lucid')

class Vehicle extends Lucid {

  bodies() {
    return this.hasMany('App/Model/Body')
  }
}

module.exports = Vehicle
