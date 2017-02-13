'use strict'

const Lucid = use('Lucid')

class Nation extends Lucid {

  bodies() {
    return this.hasMany('App/Model/Body')
  }

  guns() {
    return this.hasMany('App/Model/Gun')
  }

  turrets() {
    return this.hasMany('App/Model/Turret')
  }

  engines() {
    return this.hasMany('App/Model/Engine')
  }

  radios() {
    return this.hasMany('App/Model/Radio')
  }

  suspensions() {
    return this.hasMany('App/Model/Suspension')
  }
}

module.exports = Nation
