'use strict'

const Lucid = use('Lucid')

class Engine extends Lucid {

    static get rules() {
      return {
        name: 'required',
        level: 'required',
        nation_id: 'required',
        weight: 'required',
        price: 'required',
        power: 'required',
        chance_of_fire: 'required'
      }
    }

  nation() {
    return this.belongsTo('App/Model/Nation')
  }

  bodies() {
    return this.belongsToMany('App/Model/Body')
  }
}

module.exports = Engine
