'use strict'

const Lucid = use('Lucid')

class Gun extends Lucid {

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
