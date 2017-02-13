'use strict'

const Lucid = use('Lucid')

class Body extends Lucid {

  vehicle() {
    return this.belongsTo('App/Model/Vehicle')
  }

  nation() {
    return this.belongsTo('App/Model/Nation')
  }

  guns() {
    return this.belongsToMany('App/Model/Gun')
  }

  turrets() {
    return this.belongsToMany('App/Model/Turret')
  }

  engines() {
    return this.belongsToMany('App/Model/Engine')
  }

  radios() {
    return this.belongsToMany('App/Model/Radio')
  }

  suspensions() {
    return this.belongsToMany('App/Model/Suspension')
  }

  consumables() {
    return this.belongsToMany('App/Model/Consumable')
  }

  equipment() {
    return this.belongsToMany('App/Model/Equipment')
  }

  crews() {
    return this.belongsToMany('App/Model/Crew')
  }

  ammos() {
    return this.belongsToMany('App/Model/Ammo')
  }
}

module.exports = Body
