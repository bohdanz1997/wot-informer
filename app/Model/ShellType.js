'use strict'

const Lucid = use('Lucid')

class ShellType extends Lucid {

  ammo() {
    return this.hasMany('App/Model/Ammo')
  }
}

module.exports = ShellType
