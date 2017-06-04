'use strict'

const Lucid = use('Lucid')

class Body extends Lucid {

  static get rules() {
    return {
      name: 'required',
      level: 'required',
      price: 'required',
      speed: 'required',
      health: 'required',
      armor: 'required',
      description: 'required',
      nation_id: 'required',
      vehicle_id: 'required',
      guns: 'required',
      turrets: 'required',
      engines: 'required',
      radios: 'required',
      suspensions: 'required',
      crews: 'required'
    }
  }

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
