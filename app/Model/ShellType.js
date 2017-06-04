'use strict'

const Lucid = use('Lucid')

class ShellType extends Lucid {

  static get rules() {
    return {
      name: 'required'
    }
  }

  ammo() {
    return this.hasMany('App/Model/Ammo')
  }
}

module.exports = ShellType
