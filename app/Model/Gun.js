'use strict'

const Lucid = use('Lucid')

class Gun extends Lucid {

  static get rules() {
    return {
      name: 'required',
      level: 'required',
      nation_id: 'required',
      weight: 'required',
      price: 'required',
      damage: 'required',
      penetration: 'required',
      accuracy: 'required',
      aim_time: 'required'
    }
  }

  nation() {
    return this.belongsTo('App/Model/Nation')
  }

  ammos() {
    return this.belongsToMany('App/Model/Ammo')
  }

  bodies() {
    return this.belongsToMany('App/Model/Body')
  }
}

module.exports = Gun
