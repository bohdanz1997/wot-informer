'use strict'

const Lucid = use('Lucid')

class Ammo extends Lucid {

  shellType() {
    return this.belongsTo('App/Model/ShellType')
  }

  guns() {
    return this.belongsToMany('App/Model/Gun')
  }

  bodies() {
    return this.belongsToMany('App/Model/Body')
  }
}

module.exports = Ammo
