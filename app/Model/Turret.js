'use strict'

const Lucid = use('Lucid')

class Turret extends Lucid {

  static get rules() {
    return {
      name: 'required',
      level: 'required',
      nation_id: 'required',
      weight: 'required',
      price: 'required',
      armor: 'required',
      turret_traverse: 'required',
      view_range: 'required'
    }
  }

  nation() {
    return this.belongsTo('App/Model/Nation')
  }

  bodies() {
    return this.belongsToMany('App/Model/Body')
  }
}

module.exports = Turret
